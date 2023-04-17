import React from 'react'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import { Link } from 'react-router-dom'

export default function TvCard({ item, addNewToWatch, markAsWatched, onToWatchList, removeFromWatchList, onWatchedList, unMarkAsWatched}) {
    function handleAddToWatchList() {
      onToWatchList(item)
    addNewToWatch(item)
    onToWatchList(item)
  }

  function handleRemoveFromToWatch() {
    removeFromWatchList(item)
  }

  function handleMarkAsWatched() {
    markAsWatched(item)
  }

  function handleUnmarkAsWatched() {
    unMarkAsWatched(item)
  }


  const imgWidth = '200'

  return (
    <li className='tv-card'>
      <div className='card-poster'>
        {item.poster_path ? (

          <Link to={`/tv/details/${item.id}`}>
            <img
            className='card-poster-img'
            src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
            alt={`${item.name} poster`}
          />
          
          </Link>
         
        ) : <Link to={`/tv/details/${item.id}`}><img className='poster-not-available' src={notAvailable} alt={`${item.name} poster not available`} style={{width: `${imgWidth}px`}}/></Link>}
      </div>
      <div className='card-info'>
        <span>{item.name}
          {item.first_air_date ? ` (${item.first_air_date.slice(0, 4)})` : null}
        </span>       
      </div>
      <div className= 'card-btns'>
        {onToWatchList(item) ? <button onClick={handleRemoveFromToWatch}>-</button> : <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>+</button>}
        {onWatchedList(item) ? <button onClick={handleUnmarkAsWatched}>Unmark</button> : <button className='btn markAsWatched-btn' onClick={handleMarkAsWatched}>mark as watched</button>}   
      </div>
      
    </li>
  )
}
