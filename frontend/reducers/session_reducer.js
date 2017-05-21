import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign(
        {},
        nullUser,
        { currentUser: action.currentUser }
      );
      return nextState;
    case RECEIVE_ERRORS:
      nextState = Object.assign(
        {},
        nullUser,
        { errors: action.errors }
      );
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
