import React from 'react'
import notFound from './assets/imgNotFound.jpg'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card({ item, addNewToWatch, markAsWatched, onToWatchList }) {

  function handleAddToWatchList() {
    addNewToWatch(item)
  }

  function handleMarkAsWatched() {
    markAsWatched(item)
  }

  const type = item.type

  



  return (
    <div>
      <div className='poster'>
        {item.poster_path ? (

          <Link to={`/details/${item.id}`}>
            <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={`${item.title} poster`}
          />
          
          </Link>
         
        ) : <img className='img-not-found' src={notFound} alt='poster not available'/>}
      </div>
      <div className='info'>
        <h3>{item.title}
          {item.release_date ? ` (${item.release_date.slice(0, 4)})` : null}
        </h3>
        <p>{type}</p>          
      </div>
      <div>
          
        <button className='btn markAsWatched-btn' onClick={handleMarkAsWatched}>mark as watched</button>
        <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>+ Watchlist</button>
          
          
      </div>
      
    </div>
  )
}
