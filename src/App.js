  
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from './components/Feed.js'
import VideoDetail from './components/VideoDetail.js'
import ChannnelDetail from './components/ChannnelDetail.js'
import SearchTerm from './components/SearchTerm.js'
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      
        
        <BrowserRouter>

        <nav className=' header-links'>
            <Link to="/" >Feed Page</Link>
            <Link to="/Video" >VideoDetail Page</Link>
            <Link to="/Channel"  >ChannnelDetail Page</Link>
            <Link to="/search" >SearchTerm Page</Link>
            <Link to="/about"> About</Link>
          </nav>
        

        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/Video" element={<VideoDetail />}></Route>
          <Route path="/Channel" element={<ChannnelDetail />}></Route>
          <Route path="/search" element={<SearchTerm />}></Route>
          <Route path="/about" element={<About />}></Route>
          
        </Routes>

        </BrowserRouter>
      
    </div>
  );
}

export default App;
