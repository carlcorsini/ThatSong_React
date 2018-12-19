import API_BASE_URL from '../env'

export default function createUser(id, attributes) {
  return fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(attributes),
  }).then(response => response.json())
}
