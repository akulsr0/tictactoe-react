import React, { useState } from 'react';
import './App.css';

function App() {
  const [crossChance, setCrossChance] = useState(true);

  const [a00, setA00] = useState('');
  const [a01, setA01] = useState('');
  const [a02, setA02] = useState('');

  const [a10, setA10] = useState('');
  const [a11, setA11] = useState('');
  const [a12, setA12] = useState('');

  const [a20, setA20] = useState('');
  const [a21, setA21] = useState('');
  const [a22, setA22] = useState('');

  const resetGame = () => {
    setA00('');
    setA01('');
    setA02('');
    setA10('');
    setA11('');
    setA12('');
    setA20('');
    setA21('');
    setA22('');
    document.getElementById('a00').innerHTML = '';
    document.getElementById('a01').innerHTML = '';
    document.getElementById('a02').innerHTML = '';
    document.getElementById('a10').innerHTML = '';
    document.getElementById('a11').innerHTML = '';
    document.getElementById('a12').innerHTML = '';
    document.getElementById('a20').innerHTML = '';
    document.getElementById('a21').innerHTML = '';
    document.getElementById('a22').innerHTML = '';
  };

  // Horizontal Wins
  if (a00 === a01 && a01 === a02 && a00 !== '') {
    resetGame();
    window.alert(a00 + ' wins.');
  }

  if (a10 === a11 && a11 === a12 && a10 !== '') {
    resetGame();
    window.alert(a10 + ' wins.');
  }

  if (a20 === a21 && a21 === a22 && a20 !== '') {
    resetGame();
    window.alert(a20 + ' wins.');
  }

  // Vertical Wins

  if (a00 === a10 && a10 === a20 && a20 !== '') {
    resetGame();
    window.alert(a20 + ' wins.');
  }

  if (a01 === a11 && a11 === a21 && a21 !== '') {
    resetGame();
    window.alert(a21 + ' wins.');
  }

  if (a02 === a12 && a12 === a22 && a22 !== '') {
    resetGame();
    window.alert(a22 + ' wins.');
  }

  // Diagonal Wins

  if (a00 === a11 && a11 === a22 && a22 !== '') {
    resetGame();
    window.alert(a22 + ' wins.');
  }

  if (a02 === a11 && a11 === a20 && a20 !== '') {
    resetGame();
    window.alert(a20 + ' wins.');
  }

  return (
    <div className='App'>
      <h1>TicTacToe</h1>
      <div className='box'>
        <div className='row1'>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a00').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a00').innerHTML = 'X';
                  setA00('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a00').innerHTML = 'O';
                  setA00('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a00'>{}</h1>
          </div>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a01').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a01').innerHTML = 'X';
                  setA01('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a01').innerHTML = 'O';
                  setA01('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a01'>{}</h1>
          </div>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a02').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a02').innerHTML = 'X';
                  setA02('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a02').innerHTML = 'O';
                  setA02('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a02'>{}</h1>
          </div>
        </div>
        <div className='row2'>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a10').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a10').innerHTML = 'X';
                  setA10('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a10').innerHTML = 'O';
                  setA10('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a10'>{}</h1>
          </div>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a11').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a11').innerHTML = 'X';
                  setA11('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a11').innerHTML = 'O';
                  setA11('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a11'>{}</h1>
          </div>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a12').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a12').innerHTML = 'X';
                  setA12('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a12').innerHTML = 'O';
                  setA12('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a12'>{}</h1>
          </div>
        </div>
        <div className='row3'>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a20').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a20').innerHTML = 'X';
                  setA20('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a20').innerHTML = 'O';
                  setA20('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a20'>{}</h1>
          </div>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a21').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a21').innerHTML = 'X';
                  setA21('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a21').innerHTML = 'O';
                  setA21('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a21'>{}</h1>
          </div>
          <div
            className='val_box'
            onClick={() => {
              if (document.getElementById('a22').innerHTML === '') {
                if (crossChance) {
                  document.getElementById('a22').innerHTML = 'X';
                  setA22('X');
                  setCrossChance(false);
                } else {
                  document.getElementById('a22').innerHTML = 'O';
                  setA22('O');
                  setCrossChance(true);
                }
              }
            }}
          >
            <h1 id='a22'>{}</h1>
          </div>
        </div>
      </div>
      <button
        className='resetButton'
        onClick={resetGame}
        style={{ marginTop: 20 }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
