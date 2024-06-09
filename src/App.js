import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Review from './components/Review';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
    <Navbar/>
    <Hero/>
    <Service/>
    <Review/>
    <Contact/>
    <Footer/>
    </div>
   
  )
}

export default App;
