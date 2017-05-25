import {
  RECEIVE_ALL_SENATORS } from '../actions/congress_api/rep_actions';

const CongressReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_SENATORS:
      nextState = Object.assign(
        {},
        { senators: action.senators }
      );
      return nextState;
    default:
      return state;
  }
};

export default CongressReducer;
