import * as ApiUtil from '../util/session_api_util';
import * as UserActions from './user_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const signup = user => dispatch => {
  return ApiUtil.signup(user)
    .then( () => {
      ApiUtil.login(user);
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const login = user => dispatch => {
  return ApiUtil.login(user)
    .then( userPromise => {
      dispatch(receiveCurrentUser(userPromise));
      UserActions.refreshCurrentUser();
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    } );
};

export const logout = () => dispatch => {
  return ApiUtil.logout()
    .then(() => {
      dispatch(receiveCurrentUser(null));
    }, errors => {
      dispatch(receiveErrors(errors.responseJSON));
    });
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
    errors: []
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    currentUser: null,
    errors: errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
