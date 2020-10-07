import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import HeaderBar from './components/HeaderBar';
import Home from './components/home';
import Users from './components/UserList';

function App() {
  return (
    <div className="App container-fluid">
      <HeaderBar />
      <Route exact path="/" component={Users} />
      <Route exact path="/about" component={Home} />
    </div>
  );
}

export default App;
