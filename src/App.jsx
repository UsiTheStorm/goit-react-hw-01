import React from 'react';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';

import './App.css';
import userData from './data/userData.json';

// console.log(userData);

function App() {
  return (
    <div>
      <h2>User profile</h2>
      <Profile user={userData} />
      <h2>Friends list</h2>
      <FriendList />
    </div>
  );
}

export default App;
