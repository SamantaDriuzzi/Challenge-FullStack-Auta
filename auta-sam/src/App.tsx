import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { Landing } from './views/Landing';
import Navbar from './components/navbar/Navbar';
import { GlobalStyle } from './styled-components/global-styles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
       
      </Routes>
    </Router>
  );
}

export default App;
