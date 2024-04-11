import React from 'react'
import Link from 'react-dom'


const Navbar = () => {
  return (
    <div>
        <Link to='/'>Feed Page</Link>
        <Link to='/Video'>VideoDetail Page</Link>
        <Link to='/Channal'>ChannnelDetail Page</Link>
        <Link to='/Search'>SearchTerm Page</Link>
    </div>
  )
}

export default Navbar
