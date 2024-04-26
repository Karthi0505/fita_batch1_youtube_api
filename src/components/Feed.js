import React, { useEffect, useState } from "react";
import Videos from './Videos.js';
import SideBar from './SideBar.js';
import './Feed.css';

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
    fetch(BASE_URL, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => setVideos(data.items))
        .catch(handleError);
}, [selectedCategory]);

const handleError = (error) => {
    console.error('Error fetching data:', error);
    // Handle the error here, e.g., display an error message to the user
};

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
        <Videos videos={videos} />
      </div>

    </div>
  );
};

export default Feed;
