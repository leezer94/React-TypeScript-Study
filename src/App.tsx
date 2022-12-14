import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Tictactoe, Lotto, RpsGame, WordRelay, MultiplicationTable, BaseballGame } from './pages';
import { Navbar } from './components/';
import './App.css';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  height: 125vh;
  font-family: sans-serif;
  margin-top: 80px;
  padding: 30px;
}

p {
  font-size : 18px
  font-weight : 600
}

.header {
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
}

.header * {
  display: inline;
}

.header li {
  margin: 20px;
}

.header li a {
  color: black;
  text-decoration: none;
}
`;

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/multiplication' element={<MultiplicationTable />}></Route>
        <Route path='/wordRelay' element={<WordRelay />}></Route>
        <Route path='/baseballgame' element={<BaseballGame />}></Route>
        <Route path='/rockpaperscissors' element={<RpsGame />}></Route>
        <Route path='/lotto' element={<Lotto />}></Route>
        <Route path='/tictactoe' element={<Tictactoe />}></Route>
      </Routes>
    </div>
  );
};

export default App;
