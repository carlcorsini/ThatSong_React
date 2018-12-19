import API_BASE_URL from '../env'
const token = localStorage.getItem('token')

export default async function getUser(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
    const body = await response.json()
    if (response.status !== 200) throw new Error(body.message)
    return body
  } catch (error) {
    if (error.message.startsWith('UserService.ERROR_')) throw error
    throw new Error('UserService.ERROR_UNEXPECTED')
  }
}
