import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return <h1>Home</h1>;
};

export default Home;
