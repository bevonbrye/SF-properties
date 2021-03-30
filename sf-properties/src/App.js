import React, {useState} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './gs';
import { SlideData } from './data/SlideData'
import Dropdown from './components/MobileMenu';
import Content from './components/Content';
import { InfoData, InfoDataTwo} from './components/InfoData';
import Listings from './components/Listings';
import Features from './components/Features';
import Footer from './components/Footer';



function App() {

  const [isOpen, setIsOpen] = useState(false); 

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slideData={SlideData}/>
      <Content {...InfoData}/>
      <Listings/>
      <Features/>
      <Content {...InfoDataTwo}/>
      <Footer/>

    </>
  );
}

export default App;
