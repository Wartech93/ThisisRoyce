import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import background from "/public/background.jpg";
import Footer from './components/Footer'


import './App.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div id="background" style={{
      backgroundImage: `url(${background})`
    }} className="min-vh-100">
      <Nav />
      <main className="mx-3" />
      <Outlet />
      <Footer />
    </div>

  );
}

export default App;
