import React from 'react';

import './ProgressBar.css';

const ProgressBar = ({ value, icon }) => {
  // Menentukan warna bar nya sesuai value:
  // value < 25: danger, 25 <= value < 50 warning, 50 <= value <= 100 success
  const valueNumber = Number(value);
  let progressColor = '';
  let progressClass = '';
  if (valueNumber <= 25) {
    progressColor = 'bg-danger';
    progressClass = 'danger';
  } else if (valueNumber < 50) {
    progressColor = 'bg-warning';
  } else if (valueNumber <= 100 || valueNumber > 100) {
    progressColor = 'bg-success';
  }

  return (
    <div className='progress-full'>
      <div className='icon'>{icon}</div>
      <div className={`progress ${progressClass}`}>
        <div
          className={`progress-bar ${progressColor}`}
          role='progressbar'
          style={{ width: value + '%' }}
          aria-valuenow={value}
          aria-valuemin='0'
          aria-valuemax='100'
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
