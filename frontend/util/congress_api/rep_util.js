import * as Env from '../env.js';

export const fetchAllSenators = () => {
  return fetchAllReps('senate');
};

export const fetchSenatorsByState = (stateAbbrev) => {
  return fetchRepByGeography('senate', stateAbbrev);
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

  return $.ajax({
      url: `https://api.propublica.org/congress/v1/members/${chamber}/${stateAbbrev}${district}/current.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
    }).then(res => res.results);
};
