/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Flex, Modal, StyledButton } from '../../components';
import { TicTacToeGameResult } from './GameResult';
import { Cell } from './Cell';
import { createEmptyArray } from '../../utils';

export const Tictactoe = () => {
  //  Modal related
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Game related
  const [turn, setTurn] = useState('⚪️');
  const [cells, setCells] = useState(createEmptyArray(9).fill(''));
  const [winner, setWinner] = useState();
  const [gameCount, setGameCount] = useState(0);

  const decideWinner = (squares) => {
    // void
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      // combos : object array with numbers
      // combo : 2-dimensional array

      combos[combo].forEach((pattern) => {
        // pattern : array with numbers
        if (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') {
          // do nothing
        } else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    // void
    // num : number
    if (cells[num] !== '') {
      return;
    }

    let squares = [...cells];
    // Empty array * 9

    turn === '⚪️' ? ((squares[num] = '⚪️'), setTurn('⚫️')) : ((squares[num] = '⚫️'), setTurn('⚪️'));

    decideWinner(squares);
    setCells(squares);
    setGameCount(gameCount + 1);
  };

  const handleRestart = () => {
    // void
    setWinner(null);
    setCells(createEmptyArray(9).fill(''));
    setGameCount(0);
  };

  return (
    <>
      <StyledButton onClickButton={openModal} content={'틱택토 게임'} />
      <Modal open={modalOpen} close={closeModal} header='TicTacToe Game'>
        <Flex flexDirection='column' alignItems='center' justifyContent='center'>
          <table>
            <thead>
              <tr>
                <th>Turn : {turn}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Cell num={0} winner={winner} cells={cells} handleClick={handleClick} />
                <Cell num={1} winner={winner} cells={cells} handleClick={handleClick} />
                <Cell num={2} winner={winner} cells={cells} handleClick={handleClick} />
              </tr>
              <tr>
                <Cell num={3} winner={winner} cells={cells} handleClick={handleClick} />
                <Cell num={4} winner={winner} cells={cells} handleClick={handleClick} />
                <Cell num={5} winner={winner} cells={cells} handleClick={handleClick} />
              </tr>
              <tr>
                <Cell num={6} winner={winner} cells={cells} handleClick={handleClick} />
                <Cell num={7} winner={winner} cells={cells} handleClick={handleClick} />
                <Cell num={8} winner={winner} cells={cells} handleClick={handleClick} />
              </tr>
            </tbody>
          </table>
          {winner ? (
            <TicTacToeGameResult printWinner={() => handleRestart()} content={`${winner} 돌이 승리했습니다.`} />
          ) : gameCount === 9 ? (
            <TicTacToeGameResult printWinner={() => handleRestart()} content={`승리자가 없습니다.`} />
          ) : null}
        </Flex>
      </Modal>
    </>
  );
};
