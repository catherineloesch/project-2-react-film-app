import React, { useState } from 'react'
import './Search.css'
import { tmdbKey } from './api'
import FilmCard from './FilmCard'
import TvCard from './TvCard'

export default function Search({ addNewToWatch, markAsWatched, onToWatchList}) {
    const [queryFilm, setQueryFilm] = useState('')
    const [queryTv, setQueryTv] = useState('')
    const [filmResultsArr, setFilmResultsArr] = useState('')
    const [tvResultsArr, setTvResultsArr] = useState('')
    
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
        setTvResultsArr([])
        setFilmResultsArr([])
        if (queryFilm) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&language=en-US&page=1&include_adult=false&query=${queryFilm}`)
            .then(resp => resp.json())
            .then(res => {
                setFilmResultsArr(res.results)})
        }
        setQueryFilm('')

    }
    function handleSearchSubmitTv(e) {
        e.preventDefault()
        setTvResultsArr([])
        setFilmResultsArr([])
        if (queryTv) {
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=${tmdbKey}&language=en-US&page=1&include_adult=false&query=${queryTv}`)
            .then(resp => resp.json())
            .then(res => {
                setTvResultsArr(res.results)})
        }
        setQueryTv('')
        

    }

  return (
    <div className='search-container'>
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
        {(filmResultsArr.length !== 0) && <ul className='film-results-list'>
            {filmResultsArr.map((item) => <FilmCard key={item.id} item={item} mediaType={'film'} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList}/>)}
            </ul>}
        {(tvResultsArr.length !== 0) && <ul className='tv-results-list'>
            {tvResultsArr.map(item => <TvCard key={item.id} item={item} mediaType={'tv'} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList}/>)}
            </ul>}
    </section>

    </div>
  )
}
