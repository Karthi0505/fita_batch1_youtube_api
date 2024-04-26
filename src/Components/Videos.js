import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className={`videos-container ${direction || "row"}`}>
      {videos.map((item, idx) => (
        <div key={idx} className="video-wrapper">
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}

export default Videos;
