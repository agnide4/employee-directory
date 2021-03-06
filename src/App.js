import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import HeaderBar from './components/HeaderBar';
import Home from './components/home';
import Users from './components/UserList';

function App() {
  return (
   
        <div className="App container-fluid">
            <Route exact path="/" component={HeaderBar} />
            <Route exact path="/" component={Users} />
            <Route exact path="/About" component={Home} />
        </div>
    
    
  );
}

// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>


export default App;
