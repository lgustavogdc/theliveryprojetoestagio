import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PromocaoAmigo from './components/PromocaoAmigo/PromocaoAmigo';
import PromocaoCupom from './components/PromocaoCupom/PromocaoCupom';
import PromocaoCashback from './components/PromocaoCashback/PromocaoCashback';
import Footer from './components/Footer/Footer';



function App() {

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Main />
      <PromocaoAmigo />
      <PromocaoCupom />
      <PromocaoCashback />
      <Footer />
    </div>
  );
}

export default App;