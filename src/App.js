import './App.css';

function App() {
  const styleObj = {
    color: 'yellow',
    backgroundColor: 'black',
  };

  return (
    <div className='App'>
      <div style={styleObj} className='multiplication-container'>
        <p>6 곱하기 3은?</p>
        <input type='number'></input>
        <button style={styleObj} type='submit'>
          확인
        </button>
      </div>
    </div>
  );
}

export default App;
