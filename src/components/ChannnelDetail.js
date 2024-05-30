import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
// import { fetchFromAPI } from "../utils/fetchFromAPI";
import "./ChannelDetail.css";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCBVjMGOIkavEAhyqpxJ73Dw&part=snippet%2Cid&order=date&maxResults=50';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b74c646f33mshf8c9cdd63e88b3dp1b7907jsne0b2fc9a5249',
// 		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
// 	}
// };


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      
        const channelResponse = await fetchFromAPI(`/search?channelId`);
        console.log ("aaaa",channelResponse)
        // const channelData = await channelResponse.json();
        // console.log("Channel data:", channelData); 

        const videosResponse = await fetchFromAPI(`/api/videos?channelId=${id}`);
        console.log("ww",videosResponse)
        // const videosData = await videosResponse.json();
        // console.log("Videos data:", videosData); 

        setChannelDetail(channelResponse);
        setVideos(videosResponse);
      
        
      
    };

    fetchResults();
  }, [id]);

  


  return (
    <div className="channel-detail-container">
      <div className="gradient-background" />
      <div className="channel-card-wrapper">
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <div className="videos-wrapper">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
