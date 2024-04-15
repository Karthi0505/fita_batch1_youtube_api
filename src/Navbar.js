import React from 'react'
import  { BrowserRouter, Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to='/'>Feed Page</Link>
        <Link to='/Video'>VideoDetail Page</Link>
        <Link to='/Channal'>ChannnelDetail Page</Link>
        <Link to='/Search'>SearchTerm Page</Link>
        </BrowserRouter>
    </div>
  )
}

export default Navbar
