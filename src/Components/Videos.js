import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'
import './Videos.css'

function Videos({ videos }) {

  if (!videos) {
    return <Loader />;
  }

  console.log(videos);

  return (

    <div className='videos'>

      {videos.map((curElement, idx) => (
        <div key={idx}>

          {curElement.snippet.channelId && <ChannelCard channelDetail={curElement} />}
          <h2> {curElement.snippet.title} </h2>
          {curElement.id.videoId && <VideoCard video={curElement} />}
           
          {/* <img className='img' src={curElement.snippet.thumbnails.high.url} alt={curElement.snippet.channelTitle}  /> */}

        </div>
      ))
      }

    </div>
  )
}

export default Videos;

