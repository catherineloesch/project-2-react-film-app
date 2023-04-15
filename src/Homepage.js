import React from 'react'

export default function Homepage({ apiKey }) {
    // const url= `https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>`
    
    function handleTrendingFilms() {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
        .then(resp => resp.json())
        .then(res => {
            console.log(res.results)
            // setResultsArr(res.results)
        })
    
}
    function handleTrendingTv() {
            fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
            .then(resp => resp.json())
            .then(res => {
                console.log(res.results)
                // setResultsArr(res.results)
            })
        
    }



  return (
    <div>
    <h1>This is HOME</h1>

    <h3>Trending: </h3>
    <button onClick={handleTrendingFilms}>Get Trending Films</button>
    <button onClick={handleTrendingTv}>Get Trending Tv</button>
    


      
    </div>
  )
}
