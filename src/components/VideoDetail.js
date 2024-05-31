import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const url = 'https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=7ghhRHRP6t4';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b74c646f33mshf8c9cdd63e88b3dp1b7907jsne0b2fc9a5249',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};



const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Custom fetch function renamed to avoid conflict with global fetch
    const fetchData = async (url, options) => {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      console.log(data.items)
      return data;
    };

    fetchData(url, options)
      .then((data) => setVideoDetail(data.items[0]));

    fetchData(url, options)
      .then((data) => setVideos(data.items));
      
  }, [id]);

  if (!videoDetail?.snippet) return <div>Loading...</div>;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount,commentCount } } = videoDetail;

  return (
    <div style={{ minHeight: "95vh" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${videoDetail.id}`} className="react-player" controls />
          <h5 style={{ fontWeight: "bold", margin: "10px 0" }}>{title}</h5>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#000" }}>
            <Link to={`/channel/${channelId}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{channelTitle}</span>
                <span style={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}>&#10003;</span>
              </div>
            </Link>
            <div style={{ display: "flex", gap: "20px", opacity: 0.7 }}>
              <span>{parseInt(viewCount).toLocaleString()} views</span>
              <span>{parseInt(likeCount).toLocaleString()} likes</span>
              <span>{parseInt(commentCount).toLocaleString()} No.of.Comments </span>
            </div>
          </div>
        </div>
        <div>
          {/* Videos component rendering */}
          {videos && videos.map((video) => (
            <div key={video.id.videoId}>
              {/* <h5>{video.snippet.title}</h5> */}
              {/* Render other details for each related video */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
