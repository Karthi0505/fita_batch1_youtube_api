import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "./ReactPlayer";
import Videos from "./Videos";
import Loader from "./Loader";

const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b74c646f33mshf8c9cdd63e88b3dp1b7907jsne0b2fc9a5249',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(url,options)
      .then((data) => setVideoDetail(data.items[0]))

    fetch(url,options)
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div style={{ minHeight: "95vh" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <div style={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <h2 style={{ color: "#fff", fontWeight: "bold", padding: "8px" }}>
              {title}
            </h2>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#fff", padding: "8px" }}>
              <Link to={`/channel/${channelId}`} style={{ textDecoration: "none", color: "#fff" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ fontSize: "16px" }}>{channelTitle}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16" style={{ color: "gray", marginLeft: "5px" }}>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm6.97-.97a.53.53 0 0 0-.75.75l2.25 2.25a.5.5 0 0 0 .71 0l5-5a.5.5 0 1 0-.7-.7l-4.47 4.47-1.48-1.48a.5.5 0 0 0-.71 0z"/>
                  </svg>
                </div>
              </Link>
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <span style={{ opacity: 0.7 }}>{parseInt(viewCount).toLocaleString()} views</span>
                <span style={{ opacity: 0.7 }}>{parseInt(likeCount).toLocaleString()} likes</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "8px", justifyContent: "center", alignItems: "center" }}>
          <Videos videos={videos} direction="column" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
