import React from 'react'
import FilmCard from './FilmCard'
import TvCard from './TvCard'

export default function Watched({ watchedList, clearWatched, addNewToWatch, removeFromWatchList, markAsWatched, onToWatchList, onWatchedList, unMarkAsWatched}) {  
    const WatchedElements = watchedList.map(item => {
      if (item.media_type === 'movie') {
        return <FilmCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>
      } else {
        return <TvCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>
      }
      
      })



  return (
    <div>
        <h1>You watched a lot of stuff....</h1>
        <button className='btn btn-clear-watched' onClick={clearWatched}>Clear List</button>
        <section className='results-section'>
          {(WatchedElements.length !== 0) && <ul className='results-list'>{WatchedElements}</ul>}
        </section>
      
    </div>
  )


}
