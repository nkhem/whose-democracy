import * as Env from '../env.js';

export const fetchAllSenators = () => {
  return fetchAllReps('senate');
};

export const fetchSenatorsByState = (stateAbbrev) => {
  return fetchRepByGeography('senate', stateAbbrev);
};

export const fetchIndividualRepData = (officialMemberId) => {
  return $.ajax({
      url: `https://api.propublica.org/congress/v1/members/${officialMemberId}.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    });
};

export const fetchIndividualRepRecentPressReleases = (officialMemberId) => {
  return $.ajax({
      url: `https://api.propublica.org/congress/v1/members/${officialMemberId}/statements/115.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    });
};

export const fetchIndividualRepRecentBills = (officialMemberId) => {
  return $.ajax({
      url: `https://api.propublica.org/congress/v1/members/${officialMemberId}/bills/introduced.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    });
};

export const fetchIndividualRepVotePositions = (officialMemberId) => {
  return $.ajax({
      url: `https://api.propublica.org/congress/v1/members/${officialMemberId}/votes.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    });
};

export const fetchHouseRepByAddress = (searchCriteria) => {
  return $.ajax({
      method: 'GET',
      url: '/api/smarty_streets',
      data: {
        streetAddress: searchCriteria.streetAddress,
        cityName: searchCriteria.cityName,
        stateAbbrev: searchCriteria.stateAbbrev}
    }).then( res => {
      const district = res.congressional_district;
      const stateAbbrev = searchCriteria.stateAbbrev;
      return fetchRepByGeography('house', stateAbbrev, district);
    });
};

export const fetchHouseRepByStateAndDistrict = (stateAbbrev, district) => {
  return fetchRepByGeography('house', stateAbbrev, district);
};

export const fetchAllReps = (chamber) => {
  return $.ajax({
      url: `https://api.propublica.org/congress/v1/115/${chamber}/members.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    }).then(res => res.results[0].members);
};

export const fetchRepByGeography = (chamber, stateAbbrev, district) => {
  district = district ? `/${district}` : '';
  let url = `https://api.propublica.org/congress/v1/members/${chamber}/${stateAbbrev}${district}/current.json`
  return $.ajax({
      url: url,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    });
};
