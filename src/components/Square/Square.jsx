import StyledSquare from './Square.style';

const Square = (props) => {
  const { className, onClickEvent } = props;

  return <button className={className} onClick={onClickEvent}></button>;
};
