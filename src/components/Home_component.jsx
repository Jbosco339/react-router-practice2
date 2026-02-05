import React from 'react'
import { Link } from 'react-router-dom'

function Home_component() {
  return (
    <div>
        <div id='first_homeDiv'>
            <h2>Welcome to Master Mind</h2>

            <div id='secon_div'>
            <h3 id='heading'>Now Let The Journey Begins</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, soluta?</p><br />
            <Link to='/about' id='newlink'>Goto Contact from here</Link>
        </div>
        </div>
        
    </div>
  )
}

export default Home_component