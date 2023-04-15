import React from 'react'
import Card from './Card'

export default function WatchList({ toWatchList, clearToWatch, addNewToWatch, markAsWatched, onToWatchList}) {
   const toWatchListElements = toWatchList.map(item => <Card key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList}/>)



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
