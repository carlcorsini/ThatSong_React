import deleteUser from '../../api/deleteUser'

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'

export const destroyUser = (id, attributes) => {
  return async (dispatch, getState) => {
    try {
      const user = await deleteUser(id, attributes)
      dispatch({ type: 'DELETE_USER_SUCCESS', user })

      return user
    } catch (error) {}
  }
}
