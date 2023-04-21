import React from 'react'
import FilmCard from './FilmCard'
import TvCard from './TvCard'
import NewFilmForm from './NewFilmForm.js'
import NewTvForm from './NewTvForm.js'
import { useState } from 'react';
import './List.css'

export default function WatchList({ setWatchedList, toWatchList, setToWatchList, clearToWatch, addNewToWatch, removeFromWatchList, markAsWatched, onToWatchList, onWatchedList, unMarkAsWatched, editItem, removeSelectedFromWatchList,  markSelectedAsWatched }) {
   
 


  const toWatchListElements = toWatchList.map(item => {
    if (item.media_type === 'movie') {
      return <FilmCard key={item.id} setWatchedList={setWatchedList} setToWatchList={setToWatchList} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem} toWatchList={toWatchList} />
    } else {
      return <TvCard key={item.id} setToWatchList={setToWatchList} setWatchedList={setWatchedList} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem} toWatchList={toWatchList} />
    }
    
  })

  const [showFilmForm, setShowFilmForm] = useState(false)

  const [showTvForm, setShowTvForm] = useState(false)

  function handleClearSelected () {
    const itemsToRemove = toWatchList.filter((item) => (item.selected === true))
    removeSelectedFromWatchList(itemsToRemove)
  }

  function handleMarkSelectedWatched() {
    const watchedItems = toWatchList.filter((item) => (item.selected === true))
    markSelectedAsWatched(watchedItems)
  }

  function handleNewFilm() {
    setShowFilmForm(true)
  }

  function handleNewTv() {
    setShowTvForm(true)
    console.log('showing tv form')
  }

  function closeFilmForm() {
    setShowFilmForm(false)
  }


  function closeTvForm() {
    setShowTvForm(false)
  }

  // Clear/delete only marked items -> remove all watched items??
  // edit items


  return (
    <div>
    <h1>Watchlist</h1>
      <div className='watchlist-btns'>
        <button className='btn btn-clear-to-watch' onClick={clearToWatch}>Clear List</button>
        <button className='btn btn-clear-selected' onClick={handleClearSelected}>Clear selected</button>
        <button className='btn btn-create-new-item' onClick={handleNewFilm}>Add new Film</button>
        <button className='btn btn-create-new-item' onClick={handleNewTv}>Add new Tv Show</button>
      </div>
      <section className='new-item-form-section'>
      {showFilmForm && <NewFilmForm closeFilmForm={closeFilmForm} addNewToWatch={addNewToWatch} />}
      {showTvForm && <NewTvForm closeTvForm={closeTvForm} addNewToWatch={addNewToWatch} />}

    </section>
      <section className='results-section'>
        {(toWatchListElements.length !== 0) && <ul className='results-list'>{toWatchListElements}</ul>}
      </section>

   
    </div>
  )
}
