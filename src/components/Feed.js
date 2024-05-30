import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';
import './Feed.css';
import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';
import './Feed.css';
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=50`)
      .then((data) => {
        console.log("aa", data)
        setVideos(data.items)
      })
  }, [selectedCategory])

  return (
    <div className="feed-container">

      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className="videos-container">

        <Videos videos={videos} selectedCategory={selectedCategory} />

      </div>

    </div>
  );
};

export default Feed
