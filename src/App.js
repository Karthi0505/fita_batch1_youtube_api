  
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from './components/Feed.js'
import VideoDetail from './components/VideoDetail.js'
import ChannnelDetail from './components/ChannnelDetail.js'
import SearchTerm from './components/SearchTerm.js'
import SearchBar from './components/SearchBar.js'
import SideBar from './components/SideBar.js'

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
            
          </nav>
        
        <SearchBar />
        </header>
        
        <SideBar />


        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/Video" element={<VideoDetail />}></Route>
          <Route path="/Channel" element={<ChannnelDetail />}></Route>
          <Route path="/search" element={<SearchTerm />}></Route>
          
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
