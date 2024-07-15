import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';

import './Landing.css';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='landing__content'>
        <Title isMain={true} />
        <div className='landing__buttons'>
          <Link className='game-button' to='/player-creation'>
            Start
          </Link>
          <Link className='game-button' to='/tutorial'>
            Tutorial
          </Link>
          <Link className='game-button' to='/credits'>
            Credits
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
