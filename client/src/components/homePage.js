import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (<>
    <h3>Home</h3>
    <button ><Link to="/login"> Log In </Link > </button >
    <button><Link to="/signup">Sign Up</Link></button>
  </>
  )
}

export default Home