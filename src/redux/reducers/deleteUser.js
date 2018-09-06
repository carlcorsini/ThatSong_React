import { DELETE_USER_SUCCESS } from '../actions/deleteUser';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_USER_SUCCESS:
      return { ...state, payload };
    default:
      return state;
  }
};
