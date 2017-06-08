import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      nextState = Object.assign(
        {},
        state,
        {fName: action.currentUser.f_name},
        {lName: action.currentUser.l_name},
        {email: action.currentUser.email},
        {repFollowings: action.currentUser.rep_followings}
      );
      return nextState;

    default:
      return state;

  }
};

export default UserReducer;
