  
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Feed from './Components/Feed.js'
import VideoDetail from './Components/VideoDetail.js'
import ChannnelDetail from './Components/ChannnelDetail.js'
import SearchTerm from './Components/SearchTerm.js'
import About from './Components/About.js';
import SearchBar from './Components/SearchBar.js';
import SideBar from './Components/SideBar.js';

function App() {
  return (
    <div>
      <BrowserRouter >
        {/* <h2> Links </h2> */}
        <header className='header d-flex'>
          <nav className=' header-links'>
            <Link to="/" >Feed Page</Link>
            <Link to="/Video" >VideoDetail Page</Link>
            <Link to="/Channel"  >ChannnelDetail Page</Link>
            <Link to="/search" >SearchTerm Page</Link>
            <Link to="/About" >About Page</Link>
          </nav>
        
        <SearchBar />
        
        </header>
        <SideBar />


        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/Video" element={<VideoDetail />}></Route>
          <Route path="/Channel" element={<ChannnelDetail />}></Route>
          <Route path="/search" element={<SearchTerm />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
