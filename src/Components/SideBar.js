import React from 'react'
import { categories } from '../utils/constant'
import "./Sidebar.css"

const SideBar = () => {
  return (
    <aside>
        <ul>
            {
                categories.map( (element) =>
                  <li>
                    <button>{element.name}</button>
                  </li> 
                )
            }
            
        </ul>
    </aside>
  )
}

export default SideBar