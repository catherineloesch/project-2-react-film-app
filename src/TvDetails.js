

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbKey } from './api'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import './Details.css'

export default function TvDetails() {
  const {id} = useParams()

  const imgWidth = '400'
  const [item, setItem] = useState('')

  async function fetchTvShow(){
      const res = await (await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbKey}&language=en-US`)
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
        alt={`${item.name} poster`}
        />) : 
        <img
         className='poster-not-available'
         src={notAvailable}
         alt={`${item.name} poster not available`}
         style={{width: `${imgWidth}px`}}
         />}
      </section>
      <section className='details-text'>
        <ul>
          <li key='title'>Title: {item.name}</li>

          {item.created_by && <li key='created-by'><ul>Created by: {item.created_by.map((person) => {
            return <li key={person.name}>{person.name}</li>})}
            </ul></li>}

          {item.type && <li key='type'>Show Type: {item.type}</li>}
          {item.tagline && <li key='tagline'>Tagline: {item.tagline}</li>}
          {item.status && <li key='status'>Status: {item.status}</li>}
          {item.genres && <li key='genres'><ul>Genres: {item.genres.map((genre) => {
            return <li key={genre.name}>{genre.name}</li>})}
            </ul></li>}

          {item.number_of_seasons && <li key='num-seasons'>Number of Seasons: {item.number_of_seasons}</li>}
          {item.number_of_episodes && <li key='num-episodes'>Number of Episodes: {item.number_of_episodes}</li>}
          {item.overview && <li key='synopsis'>Synopsis: {item.overview}</li>}

          {item.first_air_date && <li key='first-date'>First Air Date: {convertDate(item.first_air_date)}</li>}
          {item.last_air_date && <li key='last-date'>Last Air Date: {convertDate(item.last_air_date)}</li>}


          {item.origin_country && <li key='og-country'>Origin Country: {item.origin_country}</li>}

          {item.original_language && <li key='og-lang'>Original Language: {item.original_language}</li>}
          {item.spoken_languages && <li key='spoken-lang'><ul>Spoken Languages: {item.spoken_languages.map((lang) => {
            return <li key={`spoken-${lang.name}`}>{lang.name}</li>})}
            </ul></li>}
          {item.languages && <li key='lang'><ul>Languages: {item.languages.map((lang) => {
            return <li key={`lang-${lang.name}`}>{lang}</li>})}
            </ul></li>}


          
          {item.production_countries && <li key='prod-countries'><ul>Production Countries: {item.production_countries.map((country) => {
            return <li key={country.name}>{country.name}</li>})}
            </ul></li>}

          {item.production_companies && <li key='prod-companies'><ul>Production Companies: {item.production_companies.map((company) => {
            return <li key={company.name}>{company.name}</li>})}
            </ul></li>}
          {item.networks && <li key='networks'><ul>Networks: {item.networks.map((network) => {
            return <li key={network.name}>{network.name}</li>})}
            </ul></li>}


          {item.last_episode_to_air && <li key='last-episode'><ul>Last Episode to air:
            {item.last_episode_to_air.name && <li key='last-name'>Title: {item.last_episode_to_air.name}</li>}
            {item.last_episode_to_air.season_number && <li key='last-ep-season'>Season {item.last_episode_to_air.season_number}</li>}
            {item.last_episode_to_air.episode_number && <li key='last-ep'>Episode {item.last_episode_to_air.episode_number}</li>}
            {item.last_episode_to_air.air_date && <li key='last-ep-air-date'>Air Date: {convertDate(item.last_episode_to_air.air_date)}</li>}
            {item.last_episode_to_air.runtime && <li key='last-ep-runtime'>Runtime: {item.last_episode_to_air.runtime} mins</li>}
            {item.last_episode_to_air.overview && <li key='last-synopsis'>Synopsis: {item.last_episode_to_air.overview}</li>}
            
       
            </ul></li>}
          











        </ul>
        <button onClick={fetchTvShow}>fetch</button>
      </section>
    </div>
  )
}
