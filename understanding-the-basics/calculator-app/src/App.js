import './App.css';
import Screen from './components/Screen';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('');

  const handleClick = (value) => {
    switch(value){
      case '=':
        try{
          setScreen(eval(screen));
        } catch {
          setScreen('error');
        }
        break;
      case 'C':
        setScreen('');
        break;
      case '+/-':
        setScreen(parseFloat(screen) * -1);
        break;
      case '%':
        setScreen(parseFloat(screen) / 100);
        break;
      case 'x':
        setScreen(screen + '*');
        break;
      case '÷':
        setScreen(screen + '/');
        break;
      case '−':
        setScreen(screen + '-');
        break;
      case '+':
        setScreen(screen + '+');
        break;
      case '.':
        if(screen.includes('.')){
          break;
        }
        setScreen(screen + '.');
        break;
      default:
        setScreen(screen + value);
        break;
      }
  }

  return (
    <div className="App">
      <header className="App-header">
      Calculator
      <div className='container'>
        <Screen screen = {screen}/>
        <Buttons handleClick = {handleClick}/>
      </div>
      </header>
    </div>
  );
}

export default App;
