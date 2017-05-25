import * as Env from '../env.js';

export const fetchAllMembers = (congressNum, chamber) => {
  return $.ajax({
      url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
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
