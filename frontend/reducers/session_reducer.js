import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUserId: null,
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
        { currentUserId: action.currentUser.id }
      );
      return nextState;
    case RECEIVE_ERRORS:
      nextState = Object.assign(
        {},
        nullUser,
        { errors: action.errors }
      );
      return nextState;
    case CLEAR_ERRORS:
      nextState = Object.assign(
        {},
        state,
        { errors: [] }
      );
      return nextState;
    default:
      return state;
  }

};

export default SessionReducer;
