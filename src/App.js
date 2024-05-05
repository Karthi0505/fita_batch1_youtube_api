  
import './App.css';
import {BrowserRouter, Routes, Route,  Link} from 'react-router-dom'
import Feed from './Components/Feed.js'
import VideoDetail from './Components/VideoDetail.js'
import ChannnelDetail from './Components/ChannnelDetail.js'
import SearchTerm from './Components/SearchTerm.js'
import About from './Components/About.js';
import SearchResult from './Components/SearchResult.js';
import SideBar from './Components/SideBar.js';
// import SearchFeed from './Components/SearchFeed.js';
import SearchForm from './Components/SearchForm.js';
import { useState } from 'react';



function App() {
  const [video, setVideo] = useState("");
  const [results, setResults] = useState("");
  
  return (
    <div>
      <BrowserRouter >
        
        <header className='header d-flex'>
          <nav className=' header-links'>
          <img src='youtube icon.jpeg' alt='' />

            <Link to="/" >Feed Page</Link>
            <Link to="/Video" >VideoDetail Page</Link>
            <Link to="/Channel"  >ChannnelDetail Page</Link>
            <Link to="/search" >SearchTerm Page</Link>
            <Link to="/About" >About Page</Link>
            
           <SearchForm className="search-form" video={video} setVideo={setVideo} setResults={setResults} />

          </nav>
        
        <Searchbar />
        </header>
        <SideBar />


        <main>
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/Video" element={<VideoDetail />}></Route>
          <Route path="/Channel" element={<ChannnelDetail />}></Route>
          <Route path="/search" element={<SearchTerm />}></Route>
          <Route path="/About" element={<About />}></Route>
          
        </Routes>
        {/* <SearchFeed  /> */}

        </main>

       
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
