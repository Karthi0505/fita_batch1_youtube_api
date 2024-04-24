import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";

const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b74c646f33mshf8c9cdd63e88b3dp1b7907jsne0b2fc9a5249',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}

const SearchTerm = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(url,options)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <div style={{ padding: "16px", minHeight: "95vh" }}>
      <h4 style={{ fontWeight: 900, color: "white", marginBottom: "24px", marginLeft: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </h4>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "100px" }} />
        {<Videos videos={videos} />}
      </div>
    </div>
  );
};



export default SearchTerm
