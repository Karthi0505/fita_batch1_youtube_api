  
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from './Feed.js'
import VideoDetail from './VideoDetail.js'
import ChannnelDetail from './ChannnelDetail.js'
import SearchTerm from './SearchTerm.js'

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
        <Navbar/>
        <BrowserRouter>

        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/Video" element={<VideoDetail />}></Route>
          <Route path="/Channel" element={<ChannnelDetail />}></Route>
          <Route path="/search" element={<SearchTerm />}></Route>
        </Routes>

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
