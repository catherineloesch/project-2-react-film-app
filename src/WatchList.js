import React from 'react'
import FilmCard from './FilmCard'
import TvCard from './TvCard'

export default function WatchList({ toWatchList, clearToWatch, addNewToWatch, removeFromWatchList, markAsWatched, onToWatchList, onWatchedList, unMarkAsWatched}) {
   const toWatchListElements = toWatchList.map(item => {
    if (item.media_type === 'movie') {
      return <FilmCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>
    } else {
      return <TvCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>
    }
    
    })
 
  // Clear/delete only marked items -> remove all watched items??
  // edit items


  return (
    <div>
    <h1>Watchlist</h1>
      <h2>so many episodes so little time...</h2>
      <button className='btn btn-clear-to-watch' onClick={clearToWatch}>Clear List</button>
      <section className='results-section'>
        {(toWatchListElements.length !== 0) && <ul className='results-list'>{toWatchListElements}</ul>}
      </section>
    </div>
  )
}
