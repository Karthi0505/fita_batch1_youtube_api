
import React from 'react';
import Loader from './Loader';
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

          <ReactPlayer url={`https://www.youtube.com/watch?v=${curElement.id.videoId}`}
          className="react-player"
          width="100%"
          height="100%"
          controls />

 
          </div>
        ))
        }

  
    </div>
    </>
  )
}

export default Videos;


