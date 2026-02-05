import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='de_div'>
        <nav className='navigation'>
            <Link className='tags' to="/">Home</Link>
            <Link className='tags' to="/about">About</Link>
            <Link className='tags' to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar