export const followRep = officialMemberId => {
  console.log('inside util, followRep. officialMemberId', officialMemberId);
  return $.ajax({
    method: 'POST',
    url: '/api/users_rep',
    data: { officialMemberId }
  });
};
