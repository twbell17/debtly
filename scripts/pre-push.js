/* eslint-disable no-console */
const BufferList = require('bl')
const chalk = require('chalk')
const childProcess = require('child_process')
const util = require("util");
const exec = util.promisify(childProcess.exec);
const path = require('path')
const StreamConcat = require('stream-concat')

function checkForClientChange(stdout) {
  expr = /client/
  return expr.test(stdout)
}

async function executeTests() {
  let clientChanged = false

  const { stdout: branch } = await exec('git branch | grep "*" | cut -d " " -f2');
  const { stdout } = await exec(`git diff master...${branch.trim()} --name-only`)
  clientChanged = checkForClientChange(stdout)

  if (!clientChanged) {
    console.log(chalk.green(`\nNo client files modified, skipping unit tests.\n`))
    return
  }

  const startTime = process.hrtime()
  const passed = await runTestsForModules()
  const [duration] = process.hrtime(startTime)
  const failureResults = passed ? '' : `Client tests failed.`
  console.log(chalk.green(`\nCompleted all unit tests in ${duration}s. ${chalk.red(failureResults)}\n`))

  if (!passed)
    process.exit(1)
}

async function runTestsForModules() {
  try {
    const passResults = await spawnTestScriptForClient()
    return passResults
  } catch (err) {
    console.error(err)
  }
}

async function spawnTestScriptForClient() {
  return new Promise((resolve, reject) => {
    const cwd = path.resolve(__dirname, '..')
    const child = childProcess.spawn('npm', ['run', 'test'], { cwd })

    console.log(chalk.yellow('\nRunning', chalk.yellowBright.bold('client'), 'unit tests...'))

    const outputBuffer = new BufferList()
    const streams = module === 'client' ? [child.stderr] : [child.stdout, child.stderr]
    new StreamConcat(streams).on('data', chunk => outputBuffer.append(chunk))

    child.on('error', reject)
    child.on('exit', code => {
      const passed = code === 0
      if (!passed)
        outputBuffer.pipe(process.stdout)

      resolve(passed)
    })
  })
}

void executeTests()
