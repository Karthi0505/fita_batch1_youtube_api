import './App.css';
import SearchBar from './Components/SearchBar';
import SideBar from './SideBar';

function App() {
  return (
    <div className="App">
      <h1> welcome purnima, Dhanushiya, priyanka </h1>
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
      <SideBar />
    </div>
  );
}

export default App;
