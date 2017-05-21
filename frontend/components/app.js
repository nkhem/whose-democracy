import React from 'react';
import Footer from './footer';

const App = ({ children }) => {
  return (
    <div className='app'>
      { children }
      <Footer />
    </div>
  );
};

export default App;
