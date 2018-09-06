import env from '../env'

export default async function getUser(id) {
  try {
    const response = await fetch(`${env.default}/users/id/${id}`, {})
    const body = await response.json()
    if (response.status !== 200) throw new Error(body.message)
    return body
  } catch (error) {
    if (error.message.startsWith('UserService.ERROR_')) throw error
    throw new Error('UserService.ERROR_UNEXPECTED')
  }
}
