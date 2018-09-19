import env from '../env'

export default function unfollow(follower_id, followee_id) {
  return fetch(`${env.default}/friends`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ follower_id, followee_id })
  }).then(response => response.json())
}
