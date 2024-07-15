import React, { Fragment, useState } from 'react';
import Title from '../ui/Title';
import AvatarCarousel from './AvatarCarousel';
import CreationForm from './CreationForm';

import './PlayerCreation.css';

const PlayerCreation = () => {
  const [playerAvatar, setPlayerAvatar] = useState('man_black');
  return (
    <Fragment>
      <Title />
      <div className='creation'>
        <AvatarCarousel setPlayerAvatar={setPlayerAvatar} />
        <CreationForm playerAvatar={playerAvatar} />
      </div>
    </Fragment>
  );
};

export default PlayerCreation;
