import React from 'react';
import { Link } from 'react-router-dom';

const NavbarContainer = () => {
  return (
    <div>
      <p>리액트&타스</p>
      <ul>
        <li>
          <Link to='/wordRelay' style={{ color: 'red' }}>
            끝말잇기
          </Link>
        </li>
        <li>
          <Link to='/multiplication' style={{ color: 'red' }}>
            구구단
          </Link>
        </li>
        <li>
          <Link to='/baseballgame' style={{ color: 'blue' }}>
            숫자야구게임
          </Link>
        </li>
        <li>
          <Link to='/rockpaperscissors' style={{ color: 'green' }}>
            가위바위보게임
          </Link>
        </li>
        <li>
          <Link to='/lotto' style={{ color: 'green' }}>
            로또생성기
          </Link>
        </li>
        <li>
          <Link to='/tictactoe' style={{ color: 'purple' }}>
            틱택토
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarContainer;
