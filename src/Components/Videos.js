import React from 'react'
import Loader from './Loader'
import './Videos.css'
import ReactPlayer from 'react-player'

function Videos({ videos }) {

  if (!videos) {
    return <Loader />;
  }

  console.log(videos);

  return (

    <div className='videos'>

      {
        videos.map((curElement,idx) => (



          <div key={idx}>

          <ReactPlayer url={`https://www.youtube.com/watch?v=${curElement.id.videoId}`} 
          className="react-player"
          width="100%"
          height="100%"
          controls
           />

          
        </div>

          // <div>
          //   {curElement.snippet.channelId && <ChannelCard channelDetail={curElement} />}
          //   <h2> {curElement.snippet.title} </h2>
          //   {curElement.id.videoId && <VideoCard video={curElement} />} 
            
          //   <img className='img' src={curElement.snippet.thumbnails.high.url}  alt={curElement.snippet.channelTitle} />

          // </div>

        ))
      }

    </div>
  )
}

export default Videos;