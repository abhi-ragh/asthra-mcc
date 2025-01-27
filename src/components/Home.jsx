import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Techno Cultural Fest!</h1>
      <video autoPlay muted loop>
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;