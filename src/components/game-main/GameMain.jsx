import React, { Fragment, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProgressBars from './ProgressBars';
import GamePlace from './GamePlace';
import Title from '../ui/Title';
import Time from './Time';
import RandomNews from './RandomNews';
import Weather from './Weather';
import GameAvatar from './GameAvatar';

import './GameMain.css';

const GameMain = () => {
  // Ambil playerInfo dari URL pake useParams() hook
  const { playerInfo } = useParams();

  // Bikin player info disederhanain dari format dataDarUrl: <playerName>-<prodi>
  // pake split, dia bakal ngesplit stringnya jadi array, dipisahin menurut tanda '-'
  const simplifiedPlayerInfo = playerInfo.split('&');
  const playerName = simplifiedPlayerInfo[0];
  const playerProdi = simplifiedPlayerInfo[1];
  const playerCity = simplifiedPlayerInfo[2];
  const playerAvatar = simplifiedPlayerInfo[3];

  // State untuk progress
  const [makanProgress, setMakanProgress] = useState({
    icon: <i className='fas fa-utensils'></i>,
    value: 50,
  });
  const [tidurProgress, setTidurProgress] = useState({
    icon: <i className='fas fa-bed'></i>,
    value: 50,
  });
  const [mainProgress, setMainProgress] = useState({
    icon: <i className='fas fa-gamepad'></i>,
    value: 50,
  });
  const [belajarProgress, setBelajarProgress] = useState({
    icon: <i className='fas fa-book-open'></i>,
    value: 0,
  });

  // State untuk place
  const [gamePlace, setGamePlace] = useState('home');

  // State untuk game over
  // gameIsOver akan ganti jadi true kalau bar hungrynya habis, alias modar, lalu ke page game-over
  // gameIsFinished akan ganti jadi true kalau 7 days lewat, alias menang, lalu ke game-review
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameIsFinished, setGameIsFinished] = useState(false);

  // State untuk time
  // Sementara pindah ke Time component dlu
  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
  });

  // State untuk kampusTutup
  const [kampusTutup, setKampusTutup] = useState(false);

  // Adakan sesi check value bar makan setiap state makan berubah pake useEffect.
  // Kalau 0, set game is over ke true
  useEffect(() => {
    if (makanProgress.value === 0) setGameIsOver(true);
    else if (makanProgress.value <= 10)
      alert('Jangan lupa makan ya beb, nanti modar loh...');
  }, [makanProgress]);

  // Adakan sesi check value bar tidur setiap state makan berubah pake useEffect.
  useEffect(() => {
    if (tidurProgress.value <= 10) alert('Tidur woii jangan begadang mulu..');
  }, [tidurProgress]);

  // Adakan sesi check value bar main setiap state makan berubah pake useEffect.
  useEffect(() => {
    if (mainProgress.value <= 10)
      alert('Refreshing dulu gih, mabar sama temen...');
  }, [mainProgress]);

  // Adakan sesi check gamePlace dan time, untuk pulangin player ke rumah kalau kampusnya tutup
  useEffect(() => {
    let jadwalKampus = time.hour <= 17 && time.hour >= 8;
    if (gamePlace === 'kampus' && !jadwalKampus) {
      setGamePlace('home');
      alert('Kamu harus pulang karena kampusnya udah tutup');
      setKampusTutup(true);
    } else if (!jadwalKampus) {
      setKampusTutup(true);
    } else {
      setKampusTutup(false);
    }
  }, [gamePlace, time]);

  // Adakan sesi check untuk game win
  useEffect(() => {
    if (time.day > 7) {
      setGameIsFinished(true);
    }
  }, [time]);

  // Event handlers
  /**
   * ACTION RULES:
   * Makan --> Makan: +25, Tidur: -10, Main: -5, Belajar: -5
   * Tidur--> Makan: -20, Tidur: +50/+100, Main: -10, Belajar: -10
   * Main --> Makan: -10, Tidur: -10, Main: +25, Belajar: -10
   * Belajar --> Makan: -10, Tidur: -10, Main: -15, Belajar: +25
   */
  const onMakan = () => {
    setMakanProgress((prevState) => {
      return {
        // bawa icon nya pakai spread operator
        ...prevState,
        value: trimValue(prevState.value + 25),
      };
    });

    setTidurProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });

    setMainProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 5),
      };
    });

    setBelajarProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 5),
      };
    });
  };

  const onTidur = () => {
    setMakanProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 20),
      };
    });

    // Kalau siang, +50 aja
    setTidurProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value + 100),
      };
    });

    setMainProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });

    setBelajarProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });
  };

  const onMain = () => {
    setMakanProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });

    setTidurProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });

    setMainProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value + 25),
      };
    });

    setBelajarProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });
  };

  const onBelajar = () => {
    setMakanProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });

    setTidurProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 10),
      };
    });

    setMainProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value - 15),
      };
    });

    setBelajarProgress((prevState) => {
      return {
        ...prevState,
        value: trimValue(prevState.value + 25),
      };
    });
  };

  const onHome = () => {
    setGamePlace('home');
  };

  const onKampus = () => {
    setGamePlace('kampus');
  };

  const onCafe = () => {
    setGamePlace('cafe');
  };

  // Function pembantu
  const trimValue = (value) => {
    // Supaya value nya gak lebih dari 100 atau kurang dari 0
    let result;
    if (value > 100) {
      result = 100;
    } else if (value < 0) {
      result = 0;
    } else {
      result = value;
    }
    return result;
  };

  // Background sesuai jam
  let backgroundGame;
  if (time.hour >= 6 && time.hour <= 17) {
    backgroundGame = `bg-${gamePlace}`;
  } else {
    backgroundGame = `bg-${gamePlace}-night`;
  }

  // Ucapan salam sesuai waktu
  let greeting;
  if (time.hour >= 17 || time.hour < 5) {
    greeting = 'Good Evening';
  } else if (time.hour >= 11) {
    greeting = 'Good Afternoon';
  } else if (time.hour >= 5) {
    greeting = 'Good Morning';
  }
  return (
    <Fragment>
      {gameIsOver && <Navigate to='/game-over' />}
      {gameIsFinished && (
        <Navigate
          to={`/game-review/makan=${makanProgress.value}&tidur=${tidurProgress.value}&main=${mainProgress.value}&belajar=${belajarProgress.value}&name=${playerName}`}
        />
      )}
      <Title />
      <div className='game-main'>
        <ProgressBars
          makanProgress={makanProgress}
          tidurProgress={tidurProgress}
          mainProgress={mainProgress}
          belajarProgress={belajarProgress}
        />
        <div className={`game-center ${backgroundGame}`}>
          <div className='layout-left'>
            <div className='game__travel'>
              <h2>Go To:</h2>
              <button
                className='place-button'
                onClick={onKampus}
                disabled={kampusTutup}
              >
                Kampus
              </button>
              <button onClick={onCafe} className='place-button'>
                Cafe
              </button>
              <button onClick={onHome} className='place-button'>
                Home
              </button>
            </div>
            <div className='game__gadget'>
              <RandomNews day={time.day} />
            </div>
          </div>
          <div className='layout-center'>
            <div className='player-info'>
              <h1>
                {greeting}, {playerName}
              </h1>
              <p>Prodi: {playerProdi}</p>
            </div>
            <GameAvatar playerAvatar={playerAvatar} gamePlace={gamePlace} />
          </div>
          <div className='layout-right'>
            <GamePlace
              place={gamePlace}
              onMakan={onMakan}
              onTidur={onTidur}
              onMain={onMain}
              onBelajar={onBelajar}
              time={time}
              setTime={setTime}
            />
            <div className='game__time'>
              <Time time={time} setTime={setTime} />
              <Weather city={playerCity} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GameMain;
