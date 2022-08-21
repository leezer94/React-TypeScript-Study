import { useState } from 'react';
import { Modal } from '../../components';
import { StyledButton } from '../../components';
import { createEmptyArray } from '../../utils/utils';
import './tictactoe.css';

export const Tictactoe = () => {
  //  Modal related
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Game related

  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(createEmptyArray(9).fill(''));
  const [winner, setWinner] = useState();

  const decideWinner = (squares) => {
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
      combos[combo].forEach((pattern) => {
        if (squares[pattern[0]] === '' || squares[pattern[1]] === '' || squares[pattern[2]] === '') {
          // do nothing
        } else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== '') {
      return;
    }

    let squares = [...cells];

    // eslint-disable-next-line no-unused-expressions
    turn === 'x' ? ((squares[num] = 'x'), setTurn('o')) : ((squares[num] = 'o'), setTurn('x'));

    decideWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(createEmptyArray(9).fill(''));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => !winner && handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <>
      <StyledButton onClickButton={openModal} content={'틱택토 게임'} />
      <Modal open={modalOpen} close={closeModal} header='TicTacToe Game'>
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th>Turn : {turn}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Cell num={0} />
                <Cell num={1} />
                <Cell num={2} />
              </tr>
              <tr>
                <Cell num={3} />
                <Cell num={4} />
                <Cell num={5} />
              </tr>
              <tr>
                <Cell num={6} />
                <Cell num={7} />
                <Cell num={8} />
              </tr>
            </tbody>
          </table>
          {winner && (
            <>
              <p>{winner} is the winner!</p>
              <button onClick={() => handleRestart()}>Play Again</button>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
