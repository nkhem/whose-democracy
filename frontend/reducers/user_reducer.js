import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const nullUser = {
  fName: '',
  lName: '',
  email: '',
  repFollowings: {}
};

const UserReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      let nextUser = action.currentUser ? {
          fName: action.currentUser.f_name,
          lName: action.currentUser.l_name,
          email: action.currentUser.email,
          repFollowings: action.currentUser.rep_followings
        } : nullUser;

      nextState = Object.assign(
        {},
        state,
        nextUser
      );
      return nextState;

    default:
      return state;

  }
};

export default UserReducer;
