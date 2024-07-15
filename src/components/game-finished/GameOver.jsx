import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';

import './GameOver.css';

const GameOver = () => {
  return (
    <Fragment>
      <Title />
      <div className='game-over'>
        <div className='game-over__info'>
          <h2>
            Game <span> Over!</span>
          </h2>
          <p>Lu kurang makan... Lu modar 💀👻</p>
        </div>
        <div className='game-over__buttons'>
          <Link className='game-button' to='/player-creation'>
            Mulai Ulang
          </Link>
          <Link className='game-button' to='/'>
            Menu Utama
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default GameOver;
