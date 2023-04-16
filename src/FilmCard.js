import React from 'react'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import { Link } from 'react-router-dom'

export default function FilmCard({ item, addNewToWatch, markAsWatched }) {
    function handleAddToWatchList() {
    addNewToWatch(item)
  }

  function handleMarkAsWatched() {
    markAsWatched(item)
  }

  const imgWidth = '200'
  return (
    <li className='film-card'>
      <div className='card-poster'>
        {item.poster_path ? (

          <Link to={`/film/details/${item.id}`}>
            <img
            className='card-poster-img'
            src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
            alt={`${item.title} poster`}
          />
          
          </Link>
         
        ) : <Link to={`/film/details/${item.id}`}><img className='poster-not-available' src={notAvailable} alt={`${item.title} poster not available`} style={{width: `${imgWidth}px`}}/></Link>}
      </div>
      <div className='card-info'>
        <span>{item.title}
          {item.release_date ? ` (${item.release_date.slice(0, 4)})` : null}
        </span>       
      </div>
      <div className= 'card-btns'>
        <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>+ Watchlist</button>
        <button className='btn markAsWatched-btn' onClick={handleMarkAsWatched}>mark as watched</button>
        
          
          
      </div>
      
    </li>
  )
}
