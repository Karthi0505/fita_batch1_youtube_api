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
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        console.log("aa", data)
        setVideos(data.items)
      })
  }, [selectedCategory])

 return (
    <div className="feed-container">

      <h3 className="videos-title">
        {selectedCategory} <span className="highlight-color">videos</span>
      </h3>

      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <p className="copyright">
        Copyright © 2024 React App
      </p>


      <div className="videos-container">
        <Videos videos={videos}/>
      </div>

    </div>
  );
};

export default Feed
