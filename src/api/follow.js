import env from '../env'

export default function follow(follower_id, followee_id) {
  return fetch(`${env.default}/friends`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ follower_id, followee_id })
  }).then(response => response.json())
}
