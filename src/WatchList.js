import React from 'react'
import FilmCard from './FilmCard'
import TvCard from './TvCard'

export default function WatchList({ toWatchList, clearToWatch, addNewToWatch, markAsWatched, onToWatchList}) {
   const toWatchListElements = toWatchList.map(item => {
    if (item.media_type === 'movie') {
      return <FilmCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} />
    } else {
      return <TvCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} />
    }
    
    })
  //add remove button
  //  Clear/delete only marked items
//edit items


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
