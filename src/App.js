import './App.css';
import React from 'react';
import Banner from './Layout';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <Contact />
      <AboutUs />
      <Products />
    </div>
  );
}

export default App;
