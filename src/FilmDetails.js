import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbKey } from './api'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import './Details.css'

export default function FilmDetails() {
  const {id} = useParams()

  const imgWidth = '500'
  const [item, setItem] = useState('')

  function fetchFilm(){
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&language=en-US`)
      .then(resp => resp.json())
      .then(res => {
         setItem(res)
      })
      console.log('found a film:')
      console.log(item)
  }

  function convertDate(american) {
    const euro = american.split('-')
    return `${euro[2]}/${euro[1]}/${euro[0]}`


  }

  return (
    <div className='details-container'>
     
      <section className='details-poster'>
      {item.poster_path ? (
        <img
        className='details-poster-img'
        src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
        alt={`${item.title} poster`}
        />) : 
        <img
         className='poster-not-available'
         src={notAvailable}
         alt={`${item.title} poster not available`}
         style={{width: `${imgWidth}px`}}
         />}
      </section>
      <section className='details-text'>
        <ul>
          <li>Title: {item.title}</li>
          {item.release_date && <li>Release Date: {convertDate(item.release_date)}</li>}
          {item.runtime && <li>Runtime: {item.runtime} mins</li>}
          {item.genres && <li><ul>Genres: {item.genres.map((genre) => {
            return <li>{genre.name}</li>})}
            </ul></li>}
          
          {item.overview && <li>Synopsis: {item.overview}</li>}
          
          {item.tagline && <li>Tagline: {item.tagline}</li>}

         
          {item.revenue && <li>Revenue: {item.revenue}USD</li>}
          {item.budget && <li>Budget: {item.budget}USD</li>}

          {item.production_countries && <li><ul>Production Countries: {item.production_countries.map((country) => {
            return <li>{country.name}</li>})}
            </ul></li>}

          {item.production_companies && <li><ul>Production Companies: {item.production_companies.map((company) => {
            return <li>{company.name}</li>})}
            </ul></li>}


          {item.spoken_languages && <li><ul>Spoken Languages: {item.spoken_languages.map((lang) => {
            return <li>{lang.name}</li>})}
            </ul></li>}
         
          {item.original_language && <li>Original Language: {item.original_language}</li>}
          
        </ul>
        <button onClick={fetchFilm}>fetch</button>
      </section>
    </div>
  )
}
