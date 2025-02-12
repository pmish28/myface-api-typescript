import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Postlist from './Pages/Postlist/Postlist';
import UserDetails from './Pages/UserDetails';

export function App() {
  return ( 
  <Router>
    <div>
      <h1>This title is on every page!</h1>
      <nav>
        <Link to= "/posts">Posts</Link>
        <Link to= "/home">Home</Link>

      </nav>

      <Routes>
          <Route path="/posts"
            element={<Postlist/>}/>
          <Route path="/home"
            element={<UserDetails/>}/>
         
      </Routes>
      </div>
  </Router>
  );
  }

export default App
