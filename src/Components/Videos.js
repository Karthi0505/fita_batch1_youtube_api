
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

<<<<<<< HEAD
          <ReactPlayer url={`https://www.youtube.com/watch?v=${curElement.id.videoId}`}
          className="react-player"
          width="100%"
          height="100%"
          controls />
=======
            <ReactPlayer url={`https://www.youtube.com/watch?v=${curElement.id.videoId}`}
              className="react-player"
              controls
            />
>>>>>>> dfcb7be5a7040266504f3069c77a63e7d3c6d8c6


          </div>
        ))
        }

  
    </div>
    </>
  )
}

export default Videos;


