import {
  RECEIVE_FOLLOWINGS } from '../actions/user_actions';

const UserReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_FOLLOWINGS:
      nextState = Object.assign(
        {},
        { followings: action.followings }
      );
      return nextState;
    default:
      return state;
  }
};

export default UserReducer;
