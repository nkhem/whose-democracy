import * as Env from '../env.js';

export const fetchAllSenators = () => {
  return fetchAllMembers('senate');
};

export const fetchAllMembers = (chamber) => {
  return $.ajax({
      url: `https://api.propublica.org/congress/v1/115/${chamber}/members.json`,
      headers: {
          'X-API-Key': Env.PROPUBLICA_KEY,
          'Content-Type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
      success: function(data){
        console.log(data);
      }
    });
};
