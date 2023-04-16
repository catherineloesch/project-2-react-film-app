

//   return (
//     <div>
//       <div className='details-poster'>
//       {item.poster_path ? (

//           <img
//           className='card-poster-img'
//           src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
//           alt={`${item.name} poster`}
//         />
        

      
//       ) : <img className='poster-not-available' src={notAvailable} alt={`${item.name} poster not available`} style={{width: `${imgWidth}px`}}/>}
//       </div>
//     </div>
//   )
// }

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbKey } from './api'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import './Details.css'

export default function TvDetails() {
  const {id} = useParams()

  const imgWidth = '500'
  const [item, setItem] = useState('')

  function fetchTvShow(){
      fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbKey}&language=en-US`)
      .then(resp => resp.json())
      .then(res => {
         setItem(res)
      })
      console.log('found a show:')
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
          <li>Title: {item.name}</li>

          {item.created_by && <li><ul>Created by: {item.created_by.map((person) => {
            return <li>{person.name}</li>})}
            </ul></li>}

          {item.type && <li>Show Type: {item.type}</li>}
          {item.tagline && <li>Tagline: {item.tagline}</li>}
          {item.status && <li>Status: {item.status}</li>}
          {item.genres && <li><ul>Genres: {item.genres.map((genre) => {
            return <li>{genre.name}</li>})}
            </ul></li>}

          {item.number_of_seasons && <li>Number of Seasons: {item.number_of_seasons}</li>}
          {item.number_of_episodes && <li>Number of Episodes: {item.number_of_episodes}</li>}
          {item.overview && <li>Synopsis: {item.overview}</li>}



          {item.first_air_date && <li>First Air Date: {convertDate(item.first_air_date)}</li>}
          {item.last_air_date && <li>Last Air Date: {convertDate(item.last_air_date)}</li>}


          {item.origin_country && <li>Origin Country: {item.origin_country}</li>}

          {item.original_language && <li>Original Language: {item.original_language}</li>}
          {item.spoken_languages && <li><ul>Spoken Languages: {item.spoken_languages.map((lang) => {
            return <li>{lang.name}</li>})}
            </ul></li>}
          {item.languages && <li><ul>Languages: {item.languages.map((lang) => {
            return <li>{lang}</li>})}
            </ul></li>}


          
          {item.production_countries && <li><ul>Production Countries: {item.production_countries.map((country) => {
            return <li>{country.name}</li>})}
            </ul></li>}

          {item.production_companies && <li><ul>Production Companies: {item.production_companies.map((company) => {
            return <li>{company.name}</li>})}
            </ul></li>}
          {item.networks && <li><ul>Networks: {item.networks.map((network) => {
            return <li>{network.name}</li>})}
            </ul></li>}


          {item.last_episode_to_air && <li><ul>Last Episode to air:
            {item.last_episode_to_air.name && <li>Title: {item.last_episode_to_air.name}</li>}
            {item.last_episode_to_air.season_number && <li>Season {item.last_episode_to_air.season_number}</li>}
            {item.last_episode_to_air.episode_number && <li>Episode {item.last_episode_to_air.episode_number}</li>}



            {item.last_episode_to_air.air_date && <li>Air Date: {convertDate(item.last_episode_to_air.air_date)}</li>}
            {item.last_episode_to_air.runtime && <li>Runtime: {item.last_episode_to_air.runtime} mins</li>}
            {item.last_episode_to_air.overview && <li>Synopsis: {item.last_episode_to_air.overview}</li>}
            
       
            </ul></li>}
          











        </ul>
        <button onClick={fetchTvShow}>fetch</button>
      </section>
    </div>
  )
}
