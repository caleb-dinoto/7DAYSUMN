import React from 'react';

import './GameAvatar.css';
import man_black_stand from '../../images/man-black-shirt.png';
import man_black_study from '../../images/man_black_study.png';
import man_black_phone from '../../images/man_black_phone.png';
import man_formal_stand from '../../images/man-formal.png';
import man_formal_study from '../../images/man-formal.png';
import man_formal_phone from '../../images/man_formal_phone.png';
import woman_yellow_stand from '../../images/woman-yellow.png';
import woman_yellow_study from '../../images/woman_yellow_study.png';
import woman_yellow_phone from '../../images/woman_yellow_phone.png';

const avatarImg = {
  man_formal: {
    cafe: man_formal_stand,
    kampus: man_formal_study,
    home: man_formal_phone,
  },
  man_black: {
    cafe: man_black_stand,
    kampus: man_black_study,
    home: man_black_phone,
  },
  woman_yellow: {
    cafe: woman_yellow_stand,
    kampus: woman_yellow_study,
    home: woman_yellow_phone,
  },
};

const GameAvatar = ({ playerAvatar, gamePlace }) => {
  // Atur logic supaya tampilin avatar beda2 setiap gamePlace
  let avatarDisplay;
  let customStyle = {};
  if (gamePlace === 'home') {
    avatarDisplay = avatarImg[playerAvatar].home;
    if (playerAvatar === 'man_black') {
      customStyle = { transform: 'scale(0.8)' };
    }
  }
  if (gamePlace === 'kampus') {
    avatarDisplay = avatarImg[playerAvatar].kampus;
    if (playerAvatar === 'man_black') {
      customStyle = { transform: 'scale(0.6)' };
    } else if (playerAvatar === 'woman_yellow') {
      customStyle = { transform: 'scale(0.8)' };
    }
  }
  if (gamePlace === 'cafe') {
    avatarDisplay = avatarImg[playerAvatar].cafe;
  }
  return (
    <div className='game__avatar'>
      <img src={avatarDisplay} alt={playerAvatar} style={customStyle} />
    </div>
  );
};

export default React.memo(GameAvatar);
