import React from 'react'
import { categories } from '../utils/constant'

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