import React from 'react'
import Card from './Card'

export default function Watched({ watchedList, clearWatched, markAsWatched, addNewToWatch, onToWatchList}) {
    const watchedListElements = watchedList.map(item => <Card key={item.id} item={item} markAsWatched={markAsWatched} addNewToWatch={addNewToWatch} onToWatchList={onToWatchList}/>)
    //add remove button
  return (
    <div>
        <h1>You watched a lot of stuff....</h1>
        <button className='btn btn-clear-watched' onClick={clearWatched}>Clear List</button>
        <section className='results-section'>
          {(watchedListElements.length !== 0) && <ul className='results-list'>{watchedListElements}</ul>}
        </section>
      
    </div>
  )
}
