import React from 'react';
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl } from '../utils/constant';
import './VideoCard.css'

const url = 'https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=7ghhRHRP6t4';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ddae034662msh147bdde8dcb11f3p167d20jsn4a309a58ffb1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <div className="video-card-container">
    <Link to={url} className="video-link">
      <img
        src={snippet.thumbnails.high.url || demoThumbnailUrl}
        alt={snippet.title}
        className="video-thumbnail"
      />
    </Link>
    <div className="video-content">
      <Link to={url} className="video-title-link">
        <h2 className="video-title">{snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h2>
      </Link>
      <Link
        to={{url} || demoChannelUrl}
        className="channel-link"
      >
        <p className="channel-title">
          {snippet.channelTitle || demoChannelTitle}
          <span className="check-icon">&#10003;</span>
        </p>
      </Link>
    </div>
  </div>
);

export default VideoCard;