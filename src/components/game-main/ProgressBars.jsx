import React from 'react';
import ProgressBar from './ProgressBar';

import './ProgressBars.css';

const ProgressBars = ({
  makanProgress,
  tidurProgress,
  mainProgress,
  belajarProgress,
}) => {
  return (
    <div className='game__progress-bars'>
      <ProgressBar value={makanProgress.value} icon={makanProgress.icon} />
      <ProgressBar value={tidurProgress.value} icon={tidurProgress.icon} />
      <ProgressBar value={mainProgress.value} icon={mainProgress.icon} />
      <ProgressBar value={belajarProgress.value} icon={belajarProgress.icon} />
    </div>
  );
};

export default React.memo(ProgressBars);
