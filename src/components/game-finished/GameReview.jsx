import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from '../ui/Title';

import './GameReview.css';

const GameReview = () => {
  const { progresses } = useParams();

  // Construct progress value jadi object dari progresses di url params
  const progSplit = progresses.split('&'); // pisahin dari &. Ex: makan=10&tidur=10 -> ['makan=10', 'tidur=10']
  const nama = progSplit.pop().split('=')[1];

  const progress = {};
  for (const prog of progSplit) {
    const p = prog.split('='); // pisahin dari =. Ex: makan=10 -> ['makan', '10']
    const key = p[0]; // ex: makan
    const value = +p[1]; // unary operator + buat convert String ke number dengan simple
    progress[key] = value; // ex: makan: 30
  }

  // Track status info dari value progressnya
  const progressStatus = []; // ex: [2,3,4,5]
  if (progress.main <= 15) {
    progressStatus.push(0);
  } else if (progress.main <= 50) {
    progressStatus.push(1);
  } else if (progress.main <= 100) {
    progressStatus.push(2);
  }

  if (progress.belajar <= 15) {
    progressStatus.push(3);
  } else if (progress.belajar <= 50) {
    progressStatus.push(4);
  } else if (progress.belajar <= 100) {
    progressStatus.push(5);
  }

  if (progress.makan <= 15) {
    progressStatus.push(6);
  } else if (progress.makan <= 50) {
    progressStatus.push(7);
  } else if (progress.makan <= 100) {
    progressStatus.push(8);
  }

  if (progress.tidur <= 15) {
    progressStatus.push(9);
  } else if (progress.tidur <= 50) {
    progressStatus.push(10);
  } else if (progress.tidur <= 100) {
    progressStatus.push(11);
  }

  const statusInfo = {
    0: 'Kamu stress berat karena jarang main 😣',
    1: 'Kamu main dengan cukup dan balance dengan kehidupan',
    2: 'Kamu main mulu, mungkin kamu tertarik untuk masuk e-sport, atau kamu jomblo? 😋',
    3: 'Kamu males-malesan belajar, mungkin kamu salah jurusan',
    4: 'Kamu gak males belajar, tapi nilainya masih pas pasan nih, ayo lebih rajin',
    5: 'Kamu rajin banget belajarnya! Calon cumlaude nihh',
    6: 'Kamu hampir modar karena kelaperan 💀',
    7: 'Badan kamu makmur karena makan terus',
    8: 'Kamu sering mukbang, cocok nih buat nyaingin tanboy kun',
    9: 'Kamu kurang tidur',
    10: 'Kamu istirahat dengan cukup, bagus!',
    11: 'Kamu tidur terus, jangan sampe lupa tugas yaa',
  };

  return (
    <Fragment>
      <Title />
      <div className='game-review'>
        <div className='game-review__info'>
          <h2>
            <span>Selamat {nama}!</span> Kamu survive sampai hari ke-7 🎉
          </h2>
          <p>Berikut adalah review kehidupan avatar kamu: </p>
          <ul>
            {progressStatus.map((status) => (
              <li key={Math.random() * 5}>{statusInfo[status]}</li>
            ))}
          </ul>
        </div>
        <div className='game-review__buttons'>
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

export default GameReview;
