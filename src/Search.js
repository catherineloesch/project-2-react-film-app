import React, { useState } from 'react'
import './Search.css'
import Card from './Card'
import { tmdbKey } from './api'

export default function Search({ addNewToWatch, markAsWatched, onToWatchList}) {
    const [queryFilm, setQueryFilm] = useState('')
    const [queryTv, setQueryTv] = useState('')
    const [resultsArr, setResultsArr] = useState('')
    
    function handleInputChangeFilm(e) {
        e.preventDefault()
        setQueryFilm(e.target.value)
    }
    function handleInputChangeTv(e) {
        e.preventDefault()
        setQueryTv(e.target.value)
    }

    function handleSearchSubmitFilm(e) {
        e.preventDefault()
        if (queryFilm) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&language=en-US&page=1&include_adult=false&query=${queryFilm}`)
            .then(resp => resp.json())
            .then(res => {
                setResultsArr(res.results)})
        }
        setQueryFilm('')

    }
    function handleSearchSubmitTv(e) {
        e.preventDefault()
        if (queryTv) {
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey}&language=en-US&page=1&include_adult=false&query=${queryTv}`)
            .then(resp => resp.json())
            .then(res => {
                setResultsArr(res.results)})
        }
        setQueryTv('')

    }

  return (
    <>
    <div className='search-form-container'>
        <form className='film-form'>
            <input 
                className='search-input-film'
                placeholder='Film Title'
                value={queryFilm}
                onChange={handleInputChangeFilm}
            >
            </input>
            <button
                type='submit'
                className='btn btn-search-submit-film'
                onClick={handleSearchSubmitFilm}
            >
            Search Films
            </button>
        </form>
        <form className='tv-form'>
            <input 
                className='search-input-tv'
                placeholder='Tv Show Title'
                value={queryTv}
                onChange={handleInputChangeTv}
            >
            </input>
            <button
                type='submit'
                className='btn btn-search-submit-tv'
                onClick={handleSearchSubmitTv}
            >
            Search Tv Shows
            </button>
        </form>
    </div>
    <section className='results-section'>
        {(resultsArr.length !== 0) && <ul className='results-list'>
            {resultsArr.map(item => <Card key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList}/>)}
            </ul>}
    </section>

    </>
  )
}
