import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="d-none d-md-block col-1 position-fixed p-2 border" style={{height: "100vh"}}>
      <nav className="nav flex-column align-items-center">
        <Link to='/' className='nav-link'>Overview</Link>
        <Link to='/players' className='nav-link'>Players</Link>
        <Link to='/inventory' className='nav-link'>Inventory</Link>
        <Link to='/turtles' className='nav-link'>Turtles</Link>
        <Link to='/doors' className='nav-link'>Doors</Link>
      </nav>
    </div>
  )
}

export default Nav