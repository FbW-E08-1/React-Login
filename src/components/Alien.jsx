import React from 'react';
import { useNavigate } from 'react-router-dom';

const Alien = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Alien detected, Please try again</h2>
      <button onClick={() => navigate('/')}>Return</button>
    </div>
  );
};

export default Alien;
