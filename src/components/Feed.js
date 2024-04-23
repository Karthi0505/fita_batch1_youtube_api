import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key':'ddae034662msh147bdde8dcb11f3p167d20jsn4a309a58ffb1' ,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
}

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {

    fetch(BASE_URL,options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    })
    .then((data) => setVideos(data.items))
    .catch((error) => console.error( 'Error fetching data: ' ,error));
    }, [selectedCategory]);

  return (
    <div className="feed-container">
      
       <h4 className="videos-title">
         {selectedCategory} <span className="highlight-color">videos</span>
       </h4>

        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <p className="copyright">
          Copyright © 2022 JSM Media
        </p>
    

      <div className="videos-container">
        <Videos videos={videos} />
      </div>

    </div>
  );
};

export default Feed;
