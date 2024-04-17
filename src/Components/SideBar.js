import React from 'react'
import { categories } from '../utils/constant'; 
import { useState , useEffect } from 'react';
import Videos from './Videos';

const url = 'https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ddae034662msh147bdde8dcb11f3p167d20jsn4a309a58ffb1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const SideBar = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState();

  useEffect(() => {
    setVideos(null);

    fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10')
      .then((data) => {
        console.log(data);
        setVideos(data.items)
      }

      );
  }, [selectedCategory]);
  return (
    <div>
      {selectedCategory} <h3> videos </h3>

      {categories.map((category) => (
        <li>
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
        <h3> {category.name} </h3>
        </button>
        </li>
      ))}


      <Videos videos={videos} />

    </div>
  )
}

export default SideBar