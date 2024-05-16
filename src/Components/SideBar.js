import React from 'react';
import { categories } from '../utils/constant';
import './Sidebar.css';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

  return (
<<<<<<< HEAD
    <div className='categories-container'>
=======
    <aside className='sidebar'>
>>>>>>> dfcb7be5a7040266504f3069c77a63e7d3c6d8c6

      {categories.map((category) => (

        <button
<<<<<<< HEAD
          className="category-btn"
=======
          className="sidebar-btn"
>>>>>>> dfcb7be5a7040266504f3069c77a63e7d3c6d8c6
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <h3> {category.name} </h3>
        </button>

      ))}

<<<<<<< HEAD
    </div>
=======
      <p className="copyright">
        Copyright © 2024 React App
      </p>

    </aside>
>>>>>>> dfcb7be5a7040266504f3069c77a63e7d3c6d8c6
  )
}

export default SideBar
