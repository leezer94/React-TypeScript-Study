import React from 'react';
import '../../assets/css/modal.css';
import { Button } from '../@commons/Button/Button';

export const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <Button className='close' onClickEvent={close} content='&times;'></Button>
          </header>
          <main>{props.children}</main>
          <footer>
            <Button className='close' onClickEvent={close} content={'close'} />
          </footer>
        </section>
      ) : null}
    </div>
  );
};
