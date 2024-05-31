import React from 'react';
import { categories } from '../utils/constant';
import './Sidebar.css';
const SideBar = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <div className='categories-container'>

      {categories.map((category) => (

        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <h3> {category.name} </h3>
        </button>

      ))}

    </div>
  )
}

export default SideBar
