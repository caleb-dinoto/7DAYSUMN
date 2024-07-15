import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Credits.css';
import KalebImage from '../../images/kaleb.png';
import ReubenImage from '../../images/reuben.png';
import LaelImage from '../../images/lael.png';

const Credits = () => {
  return (
    <Fragment>
      <div className='credits-title'>
        <h1>
          <span>Meet the Team: </span>
          <span>"ERRØR 404"</span>
        </h1>
      </div>
      <section className='credits'>
        <div className='credits-content'>
          <div className='credit-frame'>
            <img src={KalebImage} alt='gambar orang ganteng' />
            <p>
              Caleb Steve Dinoto <br /> (00000056896)
            </p>
          </div>
          <div className='credit-frame'>
            <img src={ReubenImage} alt='gambar orang ganteng kedua' />
            <p>
              Reuben Christoper Lengkong <br /> (00000056873)
            </p>
          </div>
          <div className='credit-frame'>
            <img src={LaelImage} alt='gambar orang ganteng ketiga' />
            <p>
              Gelya Ervine Lael Yulyanto
              <br /> (00000055997)
            </p>
          </div>
        </div>
        <p className='caption'>
          This game was created to fulfill the final examination of Intro To
          Internet Technology (IF231-B) lecture
        </p>
        <Link to='/' className='game-button'>
          Back to Landing
        </Link>
      </section>
    </Fragment>
  );
};

export default Credits;
