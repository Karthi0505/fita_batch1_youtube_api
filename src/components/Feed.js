import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';
import './Feed.css';

const url = `https://youtube-v31.p.rapidapi.com/search?Videos=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ddae034662msh147bdde8dcb11f3p167d20jsn4a309a58ffb1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
}

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        console.log("aa", response)
        return response.json()
      })
      .then((data) => {
        console.log("bb", data)
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
