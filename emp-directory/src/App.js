import userEvent from '@testing-library/user-event';
import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar';
import Users from './components/UserList';

function App() {
  return (
    <div className="App container-fluid">
      <HeaderBar />
      <Users />
    </div>
  );
}

export default App;
