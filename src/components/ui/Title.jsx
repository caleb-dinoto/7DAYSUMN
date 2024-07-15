import React from 'react';
import { Link } from 'react-router-dom';

import './Title.css';

const Title = ({ isMain }) => {
  // Kalau dia di landing, pake style title yang berbeda
  const classes = isMain ? 'title-landing' : 'title-top';
  return (
    <div className={classes}>
      <Link to='/'>
        <h1>
          <span className='seven-days'>7 Days</span>{' '}
          <span className='student'>Student</span>
        </h1>
      </Link>
    </div>
  );
};

export default React.memo(Title);
