import logo from './logo.svg';
import './styles/App.css';
import './styles/DeathCountdown.css';
import DeathCountdown from './components/DeathCountdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DeathCountdown />
      </header>
    </div>
  );
}

export default App;
