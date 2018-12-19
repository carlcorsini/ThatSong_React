import API_BASE_URL from '../env'

export default function createUser(attributes) {
  return fetch(`${API_BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(attributes),
  }).then(response => response.json())
}
