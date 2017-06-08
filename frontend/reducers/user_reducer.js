import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const initialState = {}; // user_info: {}

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      nextState = Object.assign(
        {},
        state,
        {f_name: action.currentUser.f_name},
        {l_name: action.currentUser.l_name},
        {email: action.currentUser.email},
        {rep_followings: action.currentUser.rep_followings}
      );
      return nextState;

    default:
      return state;

  }
};

export default UserReducer;
