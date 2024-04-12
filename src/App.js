import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1> welcome purnima </h1>
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React App
        </a>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
