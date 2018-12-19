import API_BASE_URL from '../env'
const token = localStorage.getItem('token')

export default function unfollow(follower_id, followee_id) {
  return fetch(`${API_BASE_URL }/friends`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    body: JSON.stringify({ follower_id, followee_id })
  }).then(response => response.json())
}
