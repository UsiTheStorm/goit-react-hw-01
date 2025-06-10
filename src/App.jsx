import React from 'react';

import './App.css';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import transactions from './data/transactions.json';

import userData from './data/userData.json';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="container">
      <h2>User profile</h2>
      <Profile user={userData} />
      <h2>Friends list</h2>
      <FriendList friends={friends} />
      <h2>Transaction Histiy</h2>
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
