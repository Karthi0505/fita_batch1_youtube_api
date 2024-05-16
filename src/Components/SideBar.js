import React from 'react';
import { categories } from '../utils/constant';
import './Sidebar.css';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

  return (
    <aside className='sidebar'>

      {categories.map((category) => (

        <button
          className="sidebar-btn"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <h3> {category.name} </h3>
        </button>

      ))}

      <p className="copyright">
        Copyright © 2024 React App
      </p>

    </aside>
  )
}

export default SideBar
