import API_BASE_URL from '../env'
const token = localStorage.getItem('token')

export default function deleteSong(id) {
  return fetch(`${API_BASE_URL }/songs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }).then(response => {
    return response.json()
  })
}
