import env from '../env'
const token = localStorage.getItem('token')

export default function deleteSong(id) {
  return fetch(`${env.default}/songs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }).then(response => {
    return response.json()
  })
}
