import React from 'react';
import { Link } from "react-router-dom";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <div style={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} style={{ width: '100%', height: 180 }} />
    </Link>
    <div style={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } style={{ textDecoration: "none", color: "#FFF" }}>
        <h3 style={{ fontWeight: "bold", color: "#FFF", margin: "8px 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </h3>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} style={{ textDecoration: "none", color: "gray" }}>
        <div style={{ display: "flex", alignItems: "center", margin: "0 8px" }}>
          <span style={{ color: "gray" }}>{snippet?.channelTitle || demoChannelTitle}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ color: "gray", marginLeft: "5px" }}>
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm6.97-.97a.53.53 0 0 0-.75.75l2.25 2.25a.5.5 0 0 0 .71 0l5-5a.5.5 0 1 0-.7-.7l-4.47 4.47-1.48-1.48a.5.5 0 0 0-.71 0z"/>
          </svg>
        </div>
      </Link>
    </div>
  </div>
);

export default VideoCard;
