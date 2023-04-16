import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.css'



export default function NavBar() {
  return (

      <nav className='container'>
            <ul className='nav-links-list'>
                <li className='nav-links-list-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-links-list-item'>
                    <Link to='/watchlist' className='nav-link'>Watch List</Link>
                </li>
                <li className='nav-links-list-item'>
                    <Link to='/watched' className='nav-link'>Watched</Link>
                </li>
                <li className='nav-links-list-item'>
                    <Link to='/search' className='nav-link'>Search</Link>
                </li>
            </ul>
        </nav>
  
  )
}
