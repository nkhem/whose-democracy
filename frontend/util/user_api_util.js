export const fetchCurrentUser = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/user'
  });
};

export const refreshCurrentUser = () => {
  return $.ajax({
      method: 'GET',
      url: '/api/user'
  });
};
