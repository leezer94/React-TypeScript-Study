import React, { useEffect, useRef, useState } from 'react';
import { Form } from '../@commons/Form/Form';
import { Button } from '../@commons/Button/Button';
import { P } from '../@commons/P/P';

const RpsDisplayContainer = (props) => {
  const { currentMove, handleCurrentMove } = props;

  const form = useRef();

  const printCurrentMove = () => {
    if (currentMove === '가위') {
      return '✌️';
    } else if (currentMove === '바위') {
      return '✊🏻';
    } else if (currentMove === '보') {
      return '🖐🏿';
    }
  };

  const onClickHandButton = (e) => {
    handleCurrentMove({
      currentMove: e.target.textContent,
    });
  };

  const createRPCButtons = () => {
    const movementArray = ['가위', '바위', '보'];

    return movementArray.map((el, i) => {
      return <Button type='submit' key={i} title={el} onClickEvent={onClickHandButton} />;
    });
  };

  return (
    <Form ref={form} onSubmit={(e) => e.preventDefault()}>
      <P title={printCurrentMove()} />
      {createRPCButtons()}
      <P title={printCurrentMove()} style={{ fontSize: 80, margin: 10, padding: 0 }} />
    </Form>
  );
};

export default RpsDisplayContainer;
