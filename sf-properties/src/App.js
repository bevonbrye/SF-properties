import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './gs';
import { SlideData } from './data/SlideData'



function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <Hero slideData={SlideData}/>
    </>
  );
}

export default App;
