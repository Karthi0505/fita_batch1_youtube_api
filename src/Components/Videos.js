
import React from 'react';
import Loader from './Loader';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import './Videos.css';
import ReactPlayer from 'react-player';

function Videos({ videos, selectedCategory }) {

  if (!videos) {
    return <Loader />;
  }

  console.log(videos);

  return (
    <>

      <h3 className="videos-title">
        {selectedCategory} <span className="highlight-color">videos</span>
      </h3>
      
      <div className='videos-container'>

        {videos.map((curElement, idx) => (
          <div className="videos" key={idx}>

            {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${curElement.id.videoId}`}
              className="react-player"
              controls
            /> */}
            
            {curElement.id.videoId && <VideoCard video={curElement} /> }
            {curElement.id.channelId && <ChannelCard channelDetail={curElement} />}


          </div>
        ))
        }

  
    </div>
    </>
  )
}

export default Videos;


