import env from '../env'

export default function deleteSong(id) {
  return fetch(`${env.default}/songs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  })
}
