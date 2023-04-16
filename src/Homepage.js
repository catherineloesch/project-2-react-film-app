// import React, { useState } from 'react'
import { tmdbKey } from './api'
import './Homepage.css'

export default function Homepage() {
  
    // const [trendingFilmArr, setTrendingFilmArr] = useState('') 
    
    function handleTrendingFilms() {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${tmdbKey}`)
        .then(resp => resp.json())
        .then(res => {
            console.log(res.results)
            // setResultsArr(res.results)
        })
    
}
    function handleTrendingTv() {
            fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${tmdbKey}`)
            .then(resp => resp.json())
            .then(res => {
                console.log(res.results)
                // setResultsArr(res.results)
            })
        
    }



  return (
    <div>
        <img className='gif' id='gif-obi-wan' alt='welcome gif' src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzM1NzI0MjM2ZTQyNzYyMDcwMWNjNjM0ZmQzMDI3YzYxMjA2YjU5YiZjdD1n/3ornk57KwDXf81rjWM/giphy.gif'/>

        <h3>Trending: </h3>
        <button className='btn' onClick={handleTrendingFilms}>Get Trending Films</button>
        <button className='btn' onClick={handleTrendingTv}>Get Trending Tv</button>
        
    


      
    </div>
  )
}
