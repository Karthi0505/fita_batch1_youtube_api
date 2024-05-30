import React from 'react';

import { Link } from 'react-router-dom';
import { demoVideoUrl, demoChannelUrl, demoThumbnailUrl } from '../utils/constant';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const videoId = id?.videoId;
  const thumbnailUrl = snippet?.thumbnails?.high?.url;
  const videoTitle = snippet?.title.slice(0, 60) || 'Default Video Title';
  const channelTitle = snippet?.channelTitle || 'Default Channel Title';

  return (
    <div className="video-card-container">

      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="video-link">

        <img src={thumbnailUrl || demoThumbnailUrl} alt={videoTitle} className="video-thumbnail" />
      </Link>


      <div className="video-content">

        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="video-title-link">

          <h2 className="video-title">{videoTitle}</h2>

        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl} className="channel-link">


          <p className="channel-title">
            {channelTitle} <span className="check-icon">&#10003;</span>
          </p>

        </Link>

      </div>

    </div>
  );
};

export default VideoCard;