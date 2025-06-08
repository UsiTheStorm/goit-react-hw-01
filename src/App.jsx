import React from 'react';

import Profile from './components/Profile/Profile';

import './App.css';
import userData from './userData.json';

console.log(userData);

function App() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default App;
