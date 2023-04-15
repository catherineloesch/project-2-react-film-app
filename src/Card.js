import React from 'react'

export default function Card({ film }) {
  return (
    <div>
      <div className='poster'>
        {film.poster_path ? (<img
          src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
          alt={`${film.title} poster`}
        />) : <div>no art available</div>}
      </div>
      <div className='info'>
        <h3>{film.title}
          {film.release_date ? ` (${film.release_date.slice(0, 4)})` : null}
        </h3>          
      </div>
      <div>
          <button className='btn add-btn'>+ Watchlist</button>
          <button>mark as watched</button>
          <div>*****</div>
      </div>
      
    </div>
  )
}
