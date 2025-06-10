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
    <>
      <div className="container">
        <h1>User profile</h1>
        <Profile user={userData} />
      </div>
      <div className="container">
        <h1>Friends list</h1>
        <FriendList friends={friends} />
      </div>
      <div className="container">
        <h1>Transaction Histiy</h1>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
}

export default App;
