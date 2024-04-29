import React from 'react';
import { Link } from 'react-router-dom';
import './ChannelCard.css'; 
import { demoProfilePicture } from '../utils/constant';


const url = 'https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCBVjMGOIkavEAhyqpxJ73Dw';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ddae034662msh147bdde8dcb11f3p167d20jsn4a309a58ffb1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const ChannelCard = ({ channelDetail }) => (
  <div className="channel-card-container">
    <Link to={url} className="channel-link">
      <div className="channel-content">
        <img
          src={channelDetail.snippet.thumbnails.high.url || demoProfilePicture}
          alt={channelDetail.snippet.title}
          className="channel-img"
        />
        <div className="channel-info">
          <h6 className="channel-title">
            {channelDetail.snippet.title}{' '}
            <span className="check-icon">&#10003;</span>
          </h6>
          {channelDetail?.statistics?.subscriberCount && (
            <p className="subscriber-count">
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </p>
          )}
        </div>
      </div>
    </Link>
  </div>
);

export default ChannelCard;
