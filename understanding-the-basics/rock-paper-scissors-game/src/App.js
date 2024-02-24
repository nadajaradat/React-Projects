import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [playerChoice, setPlayerChoice] = useState('rock');
  const [computerChoice, setComputerChoice] = useState('rock');
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [result, setResult] = useState('lets play!');

  const handleOptionsClick = (e) => {
    setPlayerChoice(e);
    let choice = Math.floor(Math.random() * 3);
    handleComputerChoice(choice);
  }
  const handleComputerChoice = (choice) => {
    switch (choice) {
      case 0:
        setComputerChoice('rock');
        break;
      case 1:
        setComputerChoice('paper');
        break;
      case 2:
        setComputerChoice('scissors');
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    handleResult();
  }, [playerChoice, computerChoice]);

  const handleResult = () => {
    if(playerChoice === computerChoice){
      setResult('It is a tie');
    }else if(playerChoice === 'rock' && computerChoice === 'scissors'){
      setResult('Player wins');
      setPlayerPoints(playerPoints+1);
    }else if(playerChoice === 'rock' && computerChoice === 'paper'){
      setResult('Computer wins');
      setComputerPoints(computerPoints+1);
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
      setResult('Player wins');
      setPlayerPoints(playerPoints+1);
    }else if(playerChoice === 'paper' && computerChoice === 'scissors'){
      setResult('Computer wins');
      setComputerPoints(computerPoints+1);
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
      setResult('Player wins');
      setPlayerPoints(playerPoints+1);
    }else if(playerChoice === 'scissors' && computerChoice === 'rock'){
      setResult('Computer wins');
      setComputerPoints(computerPoints+1);
    }else{
      setResult('Error');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <h1>Rock Paper Scissors</h1>
          <div className='game'>
            <div className='game-board'>
              <div className='game-board__points row'>
                <div className='game-board__player col'>
                  <p>Player Points: {playerPoints}</p>
                </div>
                <div className='game-board__player col'>
                  <p>Computer Points: {computerPoints}</p>
                </div>
              </div>

              <div className='game-board__players-choices row'>
                <div className='game-board__player-choice col'>
                  <img src={`../images/${playerChoice}.png`} className="user-hand" alt="user hand" />
                </div>
                <div className='game-board__player-choice col'>
                <img src={`../images/${computerChoice}.png`} className="computer-hand" alt="computer hand" />
                </div>
              </div>
              
              <div className='game-board__options'>
                <button className='btn' onClick={()=>handleOptionsClick('rock')}>Rock</button>
                <button className='btn' onClick={()=>handleOptionsClick('paper')}>Paper</button>
                <button className='btn' onClick={()=>handleOptionsClick('scissors')}>Scissors</button>
              </div>

              <div className='game-board__result'>
                <p>Result: {result}</p>
              </div>

              <div className='reset-game'>
                <button className='btn bg-danger' onClick={()=>{
                  window.location.reload();
                }}>Restart Game</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
