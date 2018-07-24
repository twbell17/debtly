import fs from 'fs'
import path from 'path'
import express from 'express'
import expressJwt from 'express-jwt'

const API_PATH = './routes/endpoints'

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1]
    } else if (req.query && req.query.token) {
      return req.query.token
    }
    return null
  }
}

const unsecuredRoutes = ['/api/auth/login']

class Routes {
  load(folderName, app) {
    fs.readdirSync(folderName).forEach((file) => {
      const fullName = path.join(folderName, file)
      const stat = fs.lstatSync(fullName)

      if (stat.isDirectory()) {
        // Recursively walk-through folders
        this.load(fullName, app)
      } else if (file.toLowerCase().indexOf('controller.js') !== -1) {
        // Grab path to JavaScript file and use it to construct the route
        const fileLocation = fullName.replace('./', '')
        let dirs = path.dirname(fileLocation).split(path.sep)
        const API_PATH_FOLDERS = API_PATH.replace('./', '').split('/')

        API_PATH_FOLDERS.map((f, i) => {
          if (dirs[0].toLowerCase() === f.toLowerCase()) {
            dirs.splice(0, 1)
          }
        })

        const router = express.Router()
        const baseRoute = '/api/' + dirs[0]

        if (process.env.NODE_ENV === 'dev') {
          router.use((req, res, next) => {
            if (req.headers['authorization'] || req.cookies[process.env.JWT_COOKIE_NAME]) {
              return expressJwt(jwtConfig).unless({ path: unsecuredRoutes })(req, res, next)
            }
            next()
          })
        } else {
          router.use(expressJwt(jwtConfig).unless({ path: unsecuredRoutes }))
        }

        const Controller = require('./' + fullName).default
        new Controller(router)
        app.use(baseRoute, router)
      }
    })
  }

  setup(app) {
    this.load(API_PATH, app)
  }
}

export default new Routes()
