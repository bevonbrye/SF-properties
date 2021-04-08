import React, {useState} from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './gs';
import Dropdown from './components/MobileMenu';
import Footer from './components/Footer';
import { Switch, Route} from 'react-router-dom'
import Home from './pages';



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
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/' exact component={} />
        <Route path='/' exact component={} />
        <Route path='/' exact component={} /> */}
      </Switch>
      <Footer/>

    </>
  );
}

export default App;
