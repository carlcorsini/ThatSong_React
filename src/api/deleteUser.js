import API_BASE_URL from '../env'

export default function deleteUser(id) {
  return fetch(`${API_BASE_URL }/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}
