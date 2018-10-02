import jwt from 'jsonwebtoken'

import { isEmpty } from '../utils/LangUtils'
import getUser from '../api/getUser'

export default async function checkAuthentication() {
  try {
    const token = localStorage.getItem('token')

    if (isEmpty(token)) {
      localStorage.removeItem('token')
      return null
    }

    const { identity: user_id, exp } = jwt.verify(token, 'secret')

    if (exp * 1000 < Date.now()) {
      localStorage.removeItem('token')
      localStorage.removeItem('isLoggedIn')
      return null
    }

    const user = await getUser(user_id)

    return { user, token }
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    return null
  }
}
