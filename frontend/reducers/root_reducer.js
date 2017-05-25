import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CongressReducer from './congress_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  congress: CongressReducer
});

export default RootReducer;
