import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Multiplication_table from './components/muliplication-table/muliplication-table';
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

class App extends React.Component {
  state = {
    currentPage: '점수확인하기',
  };

  handleComputerGameButton = () => {
    const { currentPage } = this.state;

    this.setState({
      ...this.state,
      currentPage: currentPage === '점수확인하기' ? '게임으로 돌아가기' : '점수확인하기',
    });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <>
        <GlobalStyle />
        <div className='App'>
          <Multiplication_table />
          <Button key={0} value={currentPage} onClickComputerGameButton={this.handleComputerGameButton} />
          <Word_relay currentPage={currentPage} />
        </div>
      </>
    );
  }
}

export default App;
