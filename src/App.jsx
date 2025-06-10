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
      <h1>User Profile</h1>
      <Profile user={userData} />

      <h1>Friends List</h1>
      <FriendList friends={friends} />

      <h1>Transaction History</h1>
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
