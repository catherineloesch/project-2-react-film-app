import React from 'react'
import notFound from './assets/imgNotFound.jpg'
import './Card.css'

export default function Card({ item, addNewToWatch, markAsWatched, onToWatchList }) {

  function handleAddToWatchList() {
    addNewToWatch(item)
  }

  function handleMarkAsWatched() {
    markAsWatched(item)
  }
  



  return (
    <div>
      <div className='poster'>
        {item.poster_path ? (<img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt={`${item.title} poster`}
        />) : <img className='img-not-found' src={notFound}/>}
      </div>
      <div className='info'>
        <h3>{item.title}
          {item.release_date ? ` (${item.release_date.slice(0, 4)})` : null}
        </h3>          
      </div>
      <div>
          
        <button className='btn markAsWatched-btn' onClick={handleMarkAsWatched}>mark as watched</button>
        <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>+ Watchlist</button>
          
          
      </div>
      
    </div>
  )
}
