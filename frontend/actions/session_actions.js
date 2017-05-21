import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = user => dispatch => {
  return ApiUtil.signup(user)
    .then(userPromise => {
      dispatch(receiveCurrentUser(userPromise));
    }, errors => {
      console.log(errors);
    });
};

export const login = user => dispatch => {
  return ApiUtil.login(user)
    .then(userPromise => {
      dispatch(receiveCurrentUser(userPromise));
    }, errors => {
      console.log(errors);
    });
};

export const logout = () => dispatch => {
  return ApiUtil.logout()
    .then(() => {
      dispatch(receiveCurrentUser(null));
    }, errors => {
      console.log(errors);
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
