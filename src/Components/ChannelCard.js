import React from 'react';
import { Link } from 'react-router-dom';
import './ChannelCard.css'; 

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId;
  const channelTitle = channelDetail?.snippet?.title;
  const profilePicture = channelDetail?.snippet?.thumbnails?.high?.url;
  const subscriberCount = parseInt(channelDetail?.statistics?.subscriberCount);

  return (
    <div className="channel-card-container" style={{ marginTop }}>
      <Link to={`/channel/${channelId}`} className="card-link">
        <div className="card-content">
          <img
            src={profilePicture || '/default-profile-picture.jpg'} 
            alt={channelTitle}
            className="profile-picture"
          />
          <h3 className="channel-title">
            {channelTitle}
            <span className="check-icon">&#10003;</span>
          </h3>
          {subscriberCount && (
            <p className="subscriber-count">
              {subscriberCount.toLocaleString('en-US')} Subscribers
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
