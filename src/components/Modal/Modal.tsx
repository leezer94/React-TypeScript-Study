import React from 'react';
import { Button } from '../@commons/Button/Button';
import '../../assets/css/modal.css';

type props = {
  open: any;
  close: any;
  header: any;
  children: any;
};

export const Modal = (props: props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <Button className='close' onClickEvent={close} content='&times;' type={undefined}></Button>
          </header>
          <main>{props.children}</main>
          <footer>
            <Button className='close' onClickEvent={close} content={'close'} type={undefined} />
          </footer>
        </section>
      ) : null}
    </div>
  );
};
