import React, { Fragment, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import './CreationForm.css';

const CreationForm = ({ playerAvatar }) => {
  // State buat nentuin apakah semua form udah keisi
  const [formFilled, setFormFilled] = useState(false);

  // State buat nge kontrol formnya
  const [nameInput, setNameInput] = useState('');
  const [prodiInput, setProdiInput] = useState('');
  const [cityInput, setCityInput] = useState('');

  // State buat nentuin bahwa gamenya udh siap dimaenin
  const [readyToPlay, setReadyToPlay] = useState(false);

  // Side effect buat ngecheck apakah semua form sudah terisi
  useEffect(() => {
    if (nameInput !== '' && prodiInput !== '' && cityInput !== '') {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [nameInput, prodiInput, cityInput]);

  // Event handlers
  const nameChangeHandler = (event) => {
    setNameInput(event.target.value);
  };

  const prodiInputHandler = (event) => {
    setProdiInput(event.target.value);
  };

  const cityInputHandler = (event) => {
    setCityInput(event.target.value);
  };

  const createPlayer = (event) => {
    // Supaya gak ke refresh browswernya pas submit
    event.preventDefault();

    setReadyToPlay(true);
  };

  return (
    <Fragment>
      {/* Redirect to game main dengan nama dan prodi yang udh diisi, ditransfer lewat URL */}
      {readyToPlay && (
        <Navigate
          to={`/game-main/${nameInput}&${prodiInput}&${cityInput}&${playerAvatar}`}
        />
      )}
      <form onSubmit={createPlayer}>
        <input
          className='form-control form-control-lg'
          type='text'
          placeholder='Enter your name...'
          name='name'
          onChange={nameChangeHandler}
        />
        <select
          className='form-control form-control-lg'
          name='major'
          id='major'
          defaultValue={''}
          onChange={prodiInputHandler}
        >
          <option value='' disabled>
            Study Program
          </option>
          <option value='Computer Science'>Computer Science</option>
          <option value='Accounting and Business'>
            Accounting and Business
          </option>
          <option value='Culinary Arts'>Culinary Arts</option>
          <option value='Hospitality'>Hospitality</option>
        </select>
        <select
          className='form-control form-control-lg'
          name='city'
          id='city'
          defaultValue={''}
          onChange={cityInputHandler}
        >
          <option value='' disabled>
            Pilih Kota
          </option>
          <option value='Greenland'>Greenland</option>
          <option value='Moscow'>Moscow</option>
          <option value='Beijing'>Beijing</option>
          <option value='Jakarta'>Jakarta</option>
          <option value='Tangerang'>Tangerang</option>
          <option value='Bekasi'>Bekasi</option>
          <option value='Bogor'>Bogor</option>
          <option value='Bandung'>Bandung</option>
        </select>
        <button type='submit' className='game-button' disabled={!formFilled}>
          START
        </button>
      </form>
    </Fragment>
  );
};

export default CreationForm;
