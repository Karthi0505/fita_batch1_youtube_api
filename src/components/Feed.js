import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';
import './Feed.css';
import { fetchFromAPI } from "../utils/fetchFromAPI.js";

// let selectedCategory = "React Js"

// TEst start
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const categoryUrl = `search?part=snippet&q=${selectedCategory}`
// TEst end



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // Test start
  // useEffect( () => {
  //   const fetchingData = async () => {
  //     const result = await fetch("https://youtube-v31.p.rapidapi.com/search?part=snippet&q='ReactJS'")
  //     const data = await result.json()
  //     console.log('Selected category ', data)
  //   }
  //   fetchingData()   
  // }, [selectedCategory])
  // Test end


  
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

export default Feed;
