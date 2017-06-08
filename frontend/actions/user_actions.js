import * as UserApiUtil from '../util/user_api_util';
import * as SessionActions from '../actions/session_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const fetchCurrentUser = () => dispatch => {
  return UserApiUtil.fetchCurrentUser()
    .then(user => dispatch(receiveCurrentUser(user)));
};

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

export const refreshCurrentUser = () => dispatch => {
  return UserApiUtil.refreshCurrentUser()
  .then(currentUser => dispatch(SessionActions.receiveCurrentUser(currentUser)));
};
