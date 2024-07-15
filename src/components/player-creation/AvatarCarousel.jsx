import React, { useEffect } from 'react';

import './AvatarCarousel.css';
import AvatarOne from '../../images/man-black-shirt.png';
import AvatarTwo from '../../images/man-formal.png';
import AvatarThree from '../../images/woman-yellow.png';

const AvatarCarousel = ({ setPlayerAvatar }) => {
  // berhubung carousel avatarnya pake bootstrap, itu gak bakal re-render component AvatarCarousel
  // walaupun diubah ubah carouselnya
  // jadi mesti manual re-rendernya
  // Ini buat make sure avatar yang diambil itu yang terbaru
  useEffect(() => {
    // Ubah playerAvatar sesuai elemen avatar yang punya class 'active'
    const setActiveAvatar = () => {
      // ambil text di property altnya aja
      const activeAvatar = document.querySelector('.active').childNodes[0].alt;
      setPlayerAvatar(activeAvatar);
    };
    const interval = setInterval(setActiveAvatar, 500);

    // Clean up function, jadi interval diatas cuma di run sekali doang, gak terus"an
    return () => {
      clearInterval(interval);
    };
  }, [setPlayerAvatar]);

  return (
    <div id='avatarCarousel' className='carousel slide' data-interval='false'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={AvatarOne} alt='man_black' />
        </div>
        <div className='carousel-item'>
          <img src={AvatarTwo} alt='man_formal' />
        </div>
        <div className='carousel-item'>
          <img src={AvatarThree} alt='woman_yellow' />
        </div>
      </div>
      <a
        className='carousel-control-prev prev'
        href='#avatarCarousel'
        role='button'
        data-slide='prev'
      >
        <i className='fas fa-chevron-left'></i>
      </a>
      <a
        className='carousel-control-next next'
        href='#avatarCarousel'
        role='button'
        data-slide='next'
      >
        <i className='fas fa-chevron-right'></i>
      </a>
    </div>
  );
};

export default AvatarCarousel;
