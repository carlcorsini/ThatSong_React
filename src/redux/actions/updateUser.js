import updateUser from '../../api/updateUser'

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const updateProfile = (id, attributes) => {
  return async (dispatch, getState) => {
    try {
      const user = await updateUser(id, attributes)
      dispatch({ type: 'UPDATE_USER_SUCCESS', user })

      return user
    } catch (error) {}
  }
}
