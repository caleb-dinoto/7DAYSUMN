import React from 'react';

import './GamePlace.css';

const GamePlace = ({ place, onMakan, onTidur, onMain, onBelajar, setTime }) => {
  // Setiap tempat ada action yang berbeda beda dan actionnya nambah menit di game
  const placeActions = {
    home: [
      {
        action: 'Makan',
        event: () => {
          onMakan();
          setTime((prevState) => {
            return {
              ...prevState,
              minute: prevState.minute + 30,
            };
          });
        },
      },
      {
        action: 'Tidur',
        event: () => {
          onTidur();
          setTime((prevState) => {
            return {
              ...prevState,
              minute: prevState.minute + 420,
            };
          });
        },
      },
      {
        action: 'Belajar',
        event: () => {
          onBelajar();
          setTime((prevState) => {
            return {
              ...prevState,
              minute: prevState.minute + 120,
            };
          });
        },
      },
      {
        action: 'Main',
        event: () => {
          onMain();
          setTime((prevState) => {
            return {
              ...prevState,
              minute: prevState.minute + 120,
            };
          });
        },
      },
    ],
    kampus: [
      {
        action: 'Belajar',
        event: () => {
          onBelajar();
          setTime((prevState) => {
            return {
              ...prevState,
              minute: prevState.minute + 120,
            };
          });
        },
      },
    ],
    cafe: [
      {
        action: 'Makan',
        event: () => {
          onMakan();
          setTime((prevState) => {
            return {
              ...prevState,
              minute: prevState.minute + 30,
            };
          });
        },
      },
    ],
  };

  return (
    <div className='game__place'>
      <div className='game__place-action'>
        <h2 className='game__place-title'>@{place}</h2>
        <div className='actions'>
          {placeActions[place].map((place) => (
            <button
              key={Math.random() * 5}
              onClick={place.event}
              className='action-button'
            >
              {place.action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePlace;
