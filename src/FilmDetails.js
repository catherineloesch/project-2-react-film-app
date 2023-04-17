import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbKey } from './api'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import './Details.css'

export default function FilmDetails() {
  const {id} = useParams()

  const imgWidth = '400'
  const [item, setItem] = useState('')
  const trailer = (item.videos ? item.videos.results.find(vid => vid.name.toLowerCase().includes('trailer')) : false)
  const trailerKey = (trailer ? trailer.key : false)


  async function fetchFilm(){
      const res = await (await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&append_to_response=videos&language=en-US`)
      .catch(err => console.log("Error with GET request:", err)))
      .json()
      console.log(item)
      setItem(res)
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
          <li key='title'>Title: {item.title}</li>
          {item.release_date && <li key='rel-date'>Release Date: {convertDate(item.release_date)}</li>}
          {item.runtime && <li key='runtime'>Runtime: {item.runtime} mins</li>}
          {item.genres && <li key='genres'><ul>Genres: {item.genres.map((genre) => {
            return <li key={genre.name}>{genre.name}</li>})}
            </ul></li>}
          
          {item.overview && <li key='synopsis'>Synopsis: {item.overview}</li>}
          
          {item.tagline && <li key='tagline'>Tagline: {item.tagline}</li>}

         
          {item.revenue && <li key='rev'>Revenue: {item.revenue}USD</li>}
          {item.budget && <li key='budget'>Budget: {item.budget}USD</li>}

          {item.production_countries && <li key='prod-countries'><ul>Production Countries: {item.production_countries.map((country) => {
            return <li key={country.name}>{country.name}</li>})}
            </ul></li>}

          {item.production_companies && <li key='prod-companies'><ul>Production Companies: {item.production_companies.map((company) => {
            return <li key={company.name}>{company.name}</li>})}
            </ul></li>}


          {item.spoken_languages && <li key='spoken'><ul>Spoken Languages: {item.spoken_languages.map((lang) => {
            return <li key={lang.name}>{lang.name}</li>})}
            </ul></li>}
         
          {item.original_language && <li key='og-lang'>Original Language: {item.original_language}</li>}
          
        </ul>
        <button onClick={fetchFilm}>fetch</button>
        {trailerKey && <span>{trailer.key}</span>}
      </section>
    </div>
  )
}
