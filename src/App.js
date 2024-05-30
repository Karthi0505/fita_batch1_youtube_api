  
import './App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Feed from './components/Feed.js'
import VideoDetail from './components/VideoDetail.js'
// import ChannnelDetail from './components/ChannnelDetail.js'
import SearchBar from './components/SearchBar.js'
import ChannelDetail from './components/ChannnelDetail.js';
import SearchFeed from './components/SearchFeed.js';

function App() {
  return (
    <div>
      <BrowserRouter >
        {/* <h2> Links </h2> */}
        <header className='header d-flex'>
          <nav className=' header-links'>

            <Link to="/"  >Feed </Link>
            <Link to="/Video" >VideoDetail </Link>
            {/* <Link to="/channel/your_channel_id"> Channel Detail</Link> */}
            <Link to="/Channels/:id"  >ChannelDetail </Link>
            <Link to="/search" >SearchFeed </Link>
            
          </nav>
        
        <SearchBar />
        </header>
        
        


        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/Video" element={<VideoDetail />}></Route>
          <Route path="/channels/:id" element={<ChannelDetail />}></Route>
          <Route path="/search" element={<SearchFeed/>}></Route>
          
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
