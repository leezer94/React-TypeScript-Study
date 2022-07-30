import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Multiplication_table from './components/muliplication-table/muliplication-table';
import Word_relay from './components/word-relay/word-relay';
import './App.css';
import ComputherVsButton from './components/word-relay/computerVsButton';
import ComputerWordRelay from './components/word-relay/computer-word-relay';

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
    currentGame: 'vsComputer',
  };

  handleComputerGameButton = () => {
    const { currentGame } = this.state;

    this.setState({
      ...this.state,
      currentGame: currentGame === 'vsComputer' ? 'onYourOwn' : 'vsComputer',
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div className='App'>
          <Multiplication_table />
          <ComputherVsButton key={0} value={this.state.currentGame} onClickComputerGameButton={this.handleComputerGameButton} />
          {this.state.currentGame === 'onYourOwn' ? <ComputerWordRelay /> : <Word_relay />}
        </div>
      </>
    );
  }
}

export default App;
