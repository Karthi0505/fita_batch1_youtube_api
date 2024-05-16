import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div
    style={{
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '356px',
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: 'none', color: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          style={{ borderRadius: '50%', height: '180px', width: '180px', marginBottom: '8px', border: '1px solid #e3e3e3' }}
        />
        <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>
          {channelDetail?.snippet?.title}
        </h6>
        {channelDetail?.statistics?.subscriberCount && (
          <p style={{ fontSize: '15px', fontWeight: 500, color: 'gray', margin: '0' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </p>
        )}
      </div>
    </Link>
  </div>
);


export default ChannelCard;
