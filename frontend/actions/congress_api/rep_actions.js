import * as CongressApiRepUtil from '../../util/congress_api/rep_util';

export const RECEIVE_ALL_SENATORS = "RECEIVE_ALL_SENATORS";

export const fetchAllSenators = () => dispatch => {
  return CongressApiRepUtil.fetchAllSenators()
    .then(res => dispatch(receiveAllSenators(res)));
};

export const receiveAllSenators = senators => ({
  type: RECEIVE_ALL_SENATORS,
  senators: senators
});
