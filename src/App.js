import './App.css';
import { Route, Routes } from 'react-router-dom';

import Landing from './components/landing/Landing';
import PlayerCreation from './components/player-creation/PlayerCreation';
import GameMain from './components/game-main/GameMain';
import GameOver from './components/game-finished/GameOver';
import GameReview from './components/game-finished/GameReview';
import Credits from './components/credits/Credits';
import Tutorial from './components/tutorial/Tutorial';

function App() {
  return (
    <div className='App'>
      {/* Membuat route untuk page nya */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/player-creation' element={<PlayerCreation />} />
        <Route path='/game-main/:playerInfo' element={<GameMain />} />
        <Route path='/game-over' element={<GameOver />} />
        <Route path='/game-review/:progresses' element={<GameReview />} />
        <Route path='/credits' element={<Credits />} />
        <Route path='/tutorial' element={<Tutorial />} />
      </Routes>
    </div>
  );
}

export default App;
