import * as CongressApiMemberUtil from '../../util/congress_api/member_util';

export const RECEIVE_ALL_SENATORS = "RECEIVE_ALL_SENATORS";

export const fetchAllSenators = () => dispatch => {
  return CongressApiMemberUtil.fetchAllSenators()
    .then(res => dispatch(receiveAllSenators(res.results[0])));
};

export const receiveAllSenators = senators => ({
  type: RECEIVE_ALL_SENATORS,
  senators: senators
});
