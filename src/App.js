import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Multiplication_table from './components/multiplication-table/multiplication-table';
import Word_relay from './components/word-relay/word-relay';
import './App.css';
import Button from './components/word-relay/Button';

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

const App = () => {
  const [currentPage, setCurrentPage] = useState('점수확인하기');

  const handleComputerGameButton = () => {
    setCurrentPage(currentPage === '점수확인하기' ? '게임으로 돌아가기' : '점수확인하기');
  };

  return (
    <>
      <GlobalStyle />
      <div className='App'>
        {/* <Multiplication_table /> */}
        <Multiplication_table />
        <Button value={currentPage} onClickComputerGameButton={handleComputerGameButton} />
        <Word_relay currentPage={currentPage} />
      </div>
    </>
  );
};

export default App;
