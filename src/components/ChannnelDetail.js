import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Videos from "./Videos";
import ChannelCard from "./ChannelCard";

const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b74c646f33mshf8c9cdd63e88b3dp1b7907jsne0b2fc9a5249',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetch(url,options);

      setChannelDetail(data?.items[0]);

      const videosData = await fetch(url,options);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div style={{ minHeight: "95vh" }}>
      <div style={{
        height: '300px',
        background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
      }} />
      <div style={{ position: "relative", top: "-93px" }}>
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div style={{ padding: "16px", display: "flex" }}>
        <div style={{ marginRight: "100px" }}></div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
