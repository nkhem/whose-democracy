import React from 'react';
import SiteMap from './site_map';

const App = ({ children }) => {
  return (
    <div className='app'>
      { children }
      <SiteMap />
    </div>
  );
};

export default App;
