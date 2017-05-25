export const followRep = officialMemberId => (
  $.ajax({
    method: 'POST',
    url: '/api/rep',
    data: { officialMemberId }
  })
);
