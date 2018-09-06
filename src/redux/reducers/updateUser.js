import { UPDATE_USER_SUCCESS } from '../actions/updateUser';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_SUCCESS:
      return { ...state, payload };
    default:
      return state;
  }
};
