import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';

import './Tutorial.css';

const Tutorial = () => {
  return (
    <Fragment>
      <Title />
      <div className='tutorial-content'>
        <h2>How to Play?</h2>
        <ol className='tutorial-list'>
          <li>
            <p>
              Dalam game ini, kamu akan menjadi seorang mahasiswa/i yang harus
              menyelesaikan kegiatannya dalam 7 hari kedepan dimulai dari Sunday
              00.00
            </p>
          </li>
          <li>
            <p>
              Kamu bisa pilih avatar sesuai yang kamu mau, lalu isi nama, prodi,
              dan kota
            </p>
          </li>
          <li>
            <p>
              Kamu harus coba maintain progress barnya supaya bisa balance
              antara kehidupan dengan belajar
            </p>
          </li>
          <li>
            <p>Kalau bar makan kosong, kamu nanti bakal mati kelaparan</p>
          </li>
          <li>
            <p>
              Kamu juga bisa berpindah tempat untuk mendapat suasanya yang baru
            </p>
          </li>
          <li>
            <p>
              Kalau kamu bisa survive sampai hari ke 7, artinya kamu sudah
              memenangkan game ini! Selamat mencoba~
            </p>
          </li>
        </ol>
        <Link to='/' className='game-button'>
          Back to Landing
        </Link>
      </div>
    </Fragment>
  );
};

export default Tutorial;
