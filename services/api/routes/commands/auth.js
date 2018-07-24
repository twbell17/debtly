import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { login } from '../repositories/auth'
import { fetchUserByEmail } from '../repositories/user'

export async function authinticateLogin(email, password) {
  if (!email || !password) {
    throw new Error({ status: 400, msg: 'Must provide username or password' })
  }
  const user = await fetchUserByEmail(email)
  const userCreds = await login(user.userHandle)
  const credsMatch = await bcrypt.compare(password, userCreds.passhash)
  if (credsMatch) {
    const token = jwt.sign({
      'iss': 'debtlyllc',
      'sub': 'user-auth',
      'iat': Math.floor(Date.now() / 1000),
      'exp': Math.floor(Date.now() / 1000) + (60 * 240),
      firstName: user.firstName,
      lastName: user.lastName,
      middleName: user.middleName,
      suffix: user.suffix,
      userHandle: user.userHandle,
      username: user.username,
      email: user.email,
      joinedDate: user.joinedDate
    }, process.env.JWT_SECRET)
    return {
      token,
      user
    }
  } else {
    throw new Error('Email or Password not found')
  }
}

export async function authinticateLoginByJwt(token) {
  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err)
      throw new Error('JWT login problem')

    const currentTime = (new Date().getTime()) / 1000
    if (decoded.exp < currentTime) {
      return {}
    }

    return
  })
}
