export const Cell = ({ num, winner, cells, handleClick }) => {
  return (
    <td onClick={() => !winner && handleClick(num)} style={{ border: '1px solid grey', width: 100, height: 100, textAlign: 'center', fontSize: 40 }}>
      {cells[num]}
    </td>
  );
};
