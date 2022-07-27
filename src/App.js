import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Multiplication_table from './components/muliplication-table/muliplication-table';
import Word_relay from './components/word-relay';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }

  .App {
    width: 300px;
    height: 500px;
    margin: 0 auto;
    margin-top : 100px;

    border : 1px solid black;
    border-radius : 20px;
    background-color : white;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Multiplication_table />
        <Word_relay />
      </div>
    </>
  );
}

export default App;
