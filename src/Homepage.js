// import React, { useState } from 'react'

import FilmCard from './FilmCard.js'
import TvCard from './TvCard.js'
import './Homepage.css'
import { useEffect, useState } from 'react'
import { tmdbKey } from './api';

export default function Homepage({ addNewToWatch, markAsWatched, removeFromWatchList, onToWatchList, onWatchedList, unMarkAsWatched, editItem}) {
   
    const [trendingFilms, setTrendingFilms] = useState([])
    const [trendingTv, setTrendingTv] = useState([])

    useEffect(() => {
        fetchTrendingFilms()
        fetchTrendingTv()
    }, [])
    
  
    async function fetchTrendingFilms() {
       const res =  await (await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbKey}&append_to_response=videos`)
        .catch(err => console.log("Error with GET request:", err)))
        .json()
        console.log(res.results)
        const arr = res.results
        arr.forEach((item) => (item.selected = false))
        setTrendingFilms(arr) 
    }
  
    async function fetchTrendingTv() {
        const res = await (await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${tmdbKey}&append_to_response=videos`)
        .catch(err => console.log("Error with GET request:", err)))
        .json()
        console.log(res.results)
        const arr = res.results
        arr.forEach((item) => (item.selected = false))
        setTrendingTv(arr)
    }
  
  
  


  return (
    <div>
        <img className='gif' id='gif-obi-wan' alt='welcome gif' src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM1NzI0MjM2ZTQyNzYyMDcwMWNjNjM0ZmQzMDI3YzYxMjA2YjU5YiZjdD1n/3ornk57KwDXf81rjWM/giphy.gif'/>
        
        <div className='trending-title '>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/></svg>
            <span>Trending</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/></svg>
        </div>
      
        <div className='trending-items-container'>
            <div className='trending-films-container'>
                <span className='trending-film-title'>Films</span>
                <section className='results-section'>
                {(trendingFilms.length !== 0) && <ul className='trending-films-list'>
                    {trendingFilms.map(item => <FilmCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem}/>)}
                    </ul>}
                </section>
            </div>
            <div className='trending-tv-container'>
                <span className='trending-tv-title'>Tv Shows</span>
                <section className='results-section'>
                {(trendingTv.length !== 0) && <ul className='trending-tv-list'>
                    {trendingTv.map(item => <TvCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem}/>)}
                    </ul>}
                </section>
            </div>
        </div>
        
    


      
    </div>
  )
}
