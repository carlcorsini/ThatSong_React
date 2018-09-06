import decode from 'jwt-decode'

import { isEmpty } from '../utils/LangUtils'
import getUser from '../api/getUser'

export default async function checkAuthentication() {
  try {
    const token = localStorage.getItem('token')

    if (isEmpty(token)) {
      localStorage.removeItem('token')
      return null
    }

    const { identity: user_id, exp } = decode(token)

    if (exp * 1000 < Date.now()) {
      localStorage.removeItem('token')
      return null
    }

    const user = await getUser(user_id)
    console.log(user)
    return { user, token }
  } catch (error) {
    console.error(error) // eslint-disable-line no-console
    localStorage.removeItem('token')
    return null
  }
}