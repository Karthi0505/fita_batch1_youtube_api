
import {BrowserRouter, Routes, Route,  Link} from 'react-router-dom'
import Feed from './Components/Feed.js'
import VideoDetail from './Components/VideoDetail.js'
import ChannnelDetail from './Components/ChannnelDetail.js'
import SearchTerm from './Components/SearchTerm.js';

import SearchResult from './Components/SearchResult.js';
// import SearchFeed from './Components/SearchFeed.js';
import SearchForm from './Components/SearchForm.js';
import { useState } from 'react';
import './App.css';
import SearchFeed from './Components/SearchFeed.js'


function App() {
  const [video, setVideo] = useState("");
  const [results, setResults] = useState("");
  
  
  return (
    <div>
      <BrowserRouter >
        
        <header className='header d-flex'>
          <nav className=' header-links'>

          <img src='youtube.png' alt='' />
          
          {/* 
            <Link to="/" > Feed </Link>
            <Link to="/Video" > VideoDetail </Link>
            <Link to="/Channel"  > ChannnelDetail </Link>
            <Link to="/search" > SearchFeed </Link> */}

         
            
           <SearchForm className="search-form" video={video} setVideo={setVideo} setResults={setResults} />

          </nav>
        
        <SearchResult video={video} results={results} />
        </header>
        
        


        <main>
        <Routes>
        {!results &&<Route path="/" element={<Feed />}></Route>}
          <Route path="/Video" element={<VideoDetail />}></Route>

          <Route path="/channels/:id" element={<ChannelDetail />}></Route>
          <Route path="/search" element={<SearchFeed/>}></Route>


          
        </Routes>
        {/* <SearchFeed  /> */}

        </main>

       
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
