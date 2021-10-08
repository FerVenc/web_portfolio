import React from 'react';
import config from 'react-reveal/globals';

// Styles:
import './styles/normalize.css';
import './styles/main_styles.css';

// Components:
import { MenuScreen } from './components/Menu/MenuScreen';
import { Home } from './components/HomeScreen/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { HireMe } from './components/HireMe/HireMe';
import { ContactScreen } from './components/Contact/ContactScreen';
import { Footer } from './components/Footer/Footer';


function App() {

  return (

    <div className='wrapper'>

      <MenuScreen/>
      <Home/>
      <About/>
      <Skills/>
      <HireMe/>
      <ContactScreen/>
      <Footer/>

    </div>
    
  );
}

config({ ssrFadeout: true });
export default App;
