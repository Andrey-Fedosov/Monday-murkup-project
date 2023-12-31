import './App.css';
import styled from 'styled-components';

import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contact } from './layout/sections/contact/Contact';
import { HireMe } from './layout/sections/hireMe/HireMe';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contact />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
