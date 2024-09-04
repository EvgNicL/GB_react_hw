import logo from './logo.svg';
import './App.css';
import './components/Message/message.css';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <div className='pushkin'>
          <Message text='Унылая пора! Очей очарованье!'/> 
          <Message text='Приятна мне твоя прощальная краса —'/>    
        </div>  
      </header>
    </div>
  );
}

export default App;
