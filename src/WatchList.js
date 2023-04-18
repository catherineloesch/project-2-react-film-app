import React from 'react'
import FilmCard from './FilmCard'
import TvCard from './TvCard'

export default function WatchList({ toWatchList, clearToWatch, addNewToWatch, removeFromWatchList, markAsWatched, onToWatchList, onWatchedList, unMarkAsWatched, editItem, removeSelectedFromWatchList,  markSelectedAsWatched}) {
   
  
  const toWatchListElements = toWatchList.map(item => {
    if (item.media_type === 'movie') {
      return <FilmCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem} toWatchList={toWatchList}/>
    } else {
      return <TvCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem} toWatchList={toWatchList}/>
    }
    
  })

  function handleClearSelected () {
    const itemsToRemove = toWatchList.filter((item) => (item.selected === true))
    removeSelectedFromWatchList(itemsToRemove)
  }

  function handleMarkSelectedWatched() {
    const watchedItems = toWatchList.filter((item) => (item.selected === true))
    markSelectedAsWatched(watchedItems)
  }
 
  // Clear/delete only marked items -> remove all watched items??
  // edit items


  return (
    <div>
    <h1>Watchlist</h1>
      <h2>so many episodes so little time...</h2>
      <button className='btn btn-clear-to-watch' onClick={clearToWatch}>Clear List</button>
      <button className='btn btn-clear-selected' onClick={handleClearSelected}>Clear selected</button>
      <button className='btn btn-mark-as-watched-selected' onClick={handleMarkSelectedWatched}>mark as watched</button>


      <button className='btn btn-create-new-item'>Add new title</button>
      <button className='btn btn-unmark-as-watched-selected'>unmark as watched selected</button>
      <button className='btn btn-edit'>edit</button>

      
      <section className='results-section'>
        {(toWatchListElements.length !== 0) && <ul className='results-list'>{toWatchListElements}</ul>}
      </section>
    </div>
  )
}
