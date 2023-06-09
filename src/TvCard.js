import React, { useState } from 'react'
import notAvailable from './assets/posterNotAvailable2.jpg'
import './Card.css'
import { tmdbKey } from './api'
import EditTvForm from './EditTvForm'


export default function TvCard({ setToWatchList, setWatchedList, item, addNewToWatch, markAsWatched, onToWatchList, removeFromWatchList, onWatchedList, unMarkAsWatched, editItem, toWatchList,  watchedList}) {
  const [showDetails, setShowDetails] = useState(false)
  const [displayItem, setDisplayItem] = useState(item)
  const [showEditForm, setShowEditForm] = useState(false)
  const [fetchedTvShows, setFetchedTvShows] = useState([])

  function handleAddToWatchList() {
    addNewToWatch(item)
  }

  function handleRemoveFromToWatch() {
    removeFromWatchList(item)
  }

  function handleMarkAsWatched() {
    markAsWatched(item)
  }

  function handleUnmarkAsWatched() {
    unMarkAsWatched(item)
  }

  function handleCheckBoxChange(e) {
    item.selected = e.target.checked
    if (window.location.href.slice(-9) === 'watchlist') {
      editItem(toWatchList, item)
    } else if (window.location.href.slice(-7) === 'watched') {
      editItem(watchedList, item)
    }
  }

  function processDate(date) {
    if (item.user_entered) {
      return date.slice(-4)
    } else {
       return date.slice(0, 4)

    }   
  }

  async function handleImgClicked() {
    const fetchedIdList = fetchedTvShows.map((item) => item.id)

 
    if (item.user_entered === true) {
      setDisplayItem(item)
    } else if (fetchedIdList.includes(item.id)) {
      setDisplayItem(fetchedTvShows.find(fetchedTv => fetchedTv.id === item.id))
    } else {
      fetchTvShow()
      console.log('fetched show')
    }
  
    setShowDetails(true)
  }



  async function fetchTvShow(){
    const res = await (await fetch(`https://api.themoviedb.org/3/tv/${item.id}?api_key=${tmdbKey}&append_to_response=videos&language=en-US`)
    .catch(err => console.log("Error with GET request:", err)))
    .json()
    setDisplayItem(res)
    setFetchedTvShows([...fetchedTvShows, res])
    console.log(res)
}

  function convertDate(american) {
    const euro = american.split('-')
    return `${euro[2]}/${euro[1]}/${euro[0]}`
  }

  const imgWidth = '400'

  let poster_url;

if (item.poster_path){
   poster_url = `https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`
  } else if (item.poster_link) {
    poster_url = item.poster_link
  } else {
    poster_url = notAvailable
  }


  function handleOpenTrailer() {
    setShowTrailer(true)
  }

  function handleCloseTrailer() {
    setShowTrailer(false)
  }


  function handleEditClicked() {
    setShowEditForm(true)
  }

  function closeEditForm() {
    setShowEditForm(false)
  }

  // const trailer = (detailsItem.videos ? detailsItem.videos.results.find(vid => vid.name.toLowerCase().includes('official trailer')) : false)
  // const trailerKey = (trailer ? trailer.key : false)
  const [showTrailer, setShowTrailer] = useState(false)


  return (
    <li className='tv-card'>
    {(window.location.href.slice(-9) === 'watchlist' || window.location.href.slice(-7) === 'watched') && <input type='checkbox' className='checkbox' onChange={handleCheckBoxChange}></input> }
    
    <div className='card-poster'>
    {poster_url === notAvailable ? <img className='poster-not-available' src={notAvailable} onClick={handleImgClicked} alt={`${item.title} poster not available`} style={{width: `${180}px; height: auto;`}}/>
    : (
      
        <img
        className='card-poster-img'
        src={poster_url}
        alt={`${item.title} poster`}
        onClick={handleImgClicked}
        
      />)}
  </div>
      <div className='card-info'>
        <span>{item.name}
        {item.first_air_date && `(${processDate(item.first_air_date)})`}
        </span>       
      </div>
      <div className= 'card-btns'>
      {onWatchedList(item) ? <button className='btn unmark-as-watched-btn' onClick={handleUnmarkAsWatched}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M22.54 16.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 8c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 .5-.1 1-.23 1.43c.69-.27 1.44-.43 2.23-.43c1.12 0 2.17.32 3.07.85c.36-.58.67-1.2.93-1.85c-1.73-4.39-6-7.5-11-7.5S2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.35 0 .69 0 1.03-.05c-.03-.15-.03-.3-.03-.45c0-.79.16-1.54.43-2.23c-.43.13-.93.23-1.43.23Z"/></svg></button>
      : <button className='btn mark-as-watched-btn' onClick={handleMarkAsWatched}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5l1.5 1.5M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 8c.5 0 .97-.07 1.42-.21c-.27.71-.42 1.43-.42 2.21v.45l-1 .05c-5 0-9.27-3.11-11-7.5c1.73-4.39 6-7.5 11-7.5s9.27 3.11 11 7.5c-.25.64-.56 1.26-.92 1.85c-.9-.54-1.96-.85-3.08-.85c-.78 0-1.5.15-2.21.42c.14-.45.21-.92.21-1.42a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5Z"/></svg></button>}   

    {onToWatchList(item) ? <button className='btn remove-from-to-watch-btn' onClick={handleRemoveFromToWatch}>
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="#800020" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
    </button>
      : <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 12 12"><path fill="black" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/></svg>
      </button>}



      </div>
      
      {showDetails && <section className='tv-details'>
      <section className='details-poster'>
        {/* tv show poster */}
          {item.poster_path ? (
          <img
          className='details-poster-img'
          src={`https://image.tmdb.org/t/p/w${imgWidth}${item.poster_path}`}
          alt={`${item.name} poster`}
          />)
          : <img
          className='poster-not-available'
          src={notAvailable}
          alt={`${item.title} poster not available`}
          style={{width: `${imgWidth}px`}}
          />}
        {/* buttons */}
          <div className= 'details-btns'>
            {/* toggle button - mark as watched/unwatched */}
              {onWatchedList(item) ?
                <button className='btn unmark-as-watched-btn' onClick={handleUnmarkAsWatched}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M22.54 16.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 8c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 .5-.1 1-.23 1.43c.69-.27 1.44-.43 2.23-.43c1.12 0 2.17.32 3.07.85c.36-.58.67-1.2.93-1.85c-1.73-4.39-6-7.5-11-7.5S2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.35 0 .69 0 1.03-.05c-.03-.15-.03-.3-.03-.45c0-.79.16-1.54.43-2.23c-.43.13-.93.23-1.43.23Z"/></svg>
                </button>
              : <button className='btn mark-as-watched-btn' onClick={handleMarkAsWatched}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5l1.5 1.5M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 8c.5 0 .97-.07 1.42-.21c-.27.71-.42 1.43-.42 2.21v.45l-1 .05c-5 0-9.27-3.11-11-7.5c1.73-4.39 6-7.5 11-7.5s9.27 3.11 11 7.5c-.25.64-.56 1.26-.92 1.85c-.9-.54-1.96-.85-3.08-.85c-.78 0-1.5.15-2.21.42c.14-.45.21-.92.21-1.42a5 5 0 0 0-5-5a5 5 0 0 0-5 5a5 5 0 0 0 5 5Z"/></svg>
                </button>}
        
            {/* toggle button - mark as add/remove from watchlist */}
              {onToWatchList(item) ?
              <button className='btn remove-from-to-watch-btn' onClick={handleRemoveFromToWatch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="#800020" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
              </button>
              : <button className='btn add-to-watch-btn' onClick={handleAddToWatchList}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 12 12"><path fill="black" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/></svg>
              </button>}

              <button className='btn edit-btn' onClick={handleEditClicked}>edit</button>


            {/* button - play trailer */}
              <button className='btn play-trailer-btn' onClick={handleOpenTrailer}>Watch Trailer</button>
          </div>
      </section>

  <section className='details-text'>
  <div className='btn-close-details'><button className='btn btn-close-details-overlay' onClick={() => (setShowDetails(false))}>close</button></div>
  <div className='details-column'>
      <ul>
      
        <li key='title'><span className='details-title'>Title:&nbsp;</span>{item.name}</li>

        {displayItem.first_air_date && <li key='first-date'><span className='details-title'>First Air Date: </span>{convertDate(displayItem.first_air_date)}</li>}
        {displayItem.last_air_date && <li key='last-date'><span className='details-title'>Last Air Date: </span>{convertDate(displayItem.last_air_date)}</li>}

        {item.overview && <li key='synopsis' className='synopsis'><span className='details-title'>Synopsis:&nbsp; </span>{item.overview}</li>}
        {displayItem.tagline && <li key='tagline' className='tagline'><span className='details-title'>Tagline: </span>{displayItem.tagline}</li>}


        {displayItem.original_language && <li key='og-lang'><span className='details-title'>Original Language: </span>{displayItem.original_language}</li>}

        {displayItem.spoken_languages && <li key='spoken'><ul className='details-ul'><span className='details-title'>Spoken Languages: </span>{displayItem.spoken_languages.map((lang) => {
          return <li key={lang.name}>{lang.name}</li>})}
          </ul></li>}



        {displayItem.number_of_seasons && <li key='num-seasons'><span className='details-title'>Number of Seasons: </span>{displayItem.number_of_seasons}</li>}
        {displayItem.number_of_episodes && <li key='num-episodes'><span className='details-title'>Number of Episodes: </span>{displayItem.number_of_episodes}</li>}

        
        {displayItem.production_countries && <li key='prod-countries'><ul className='details-ul'><span className='details-title'>Production Countries:&nbsp;</span>{displayItem.production_countries.map((country) => {
          return <li key={country.name}>{country.name}</li>})}
        </ul></li>}
      {displayItem.production_companies && <li key='prod-companies'><ul className='details-ul'><span className='details-title'>Production Companies:&nbsp;</span>{displayItem.production_companies.map((company) => {
          return <li key={company.name}>{company.name}</li>})}
          </ul></li>}
      

         

    </ul>
    <ul>

    {displayItem.created_by && <li key='created-by'><ul className='details-ul'><span className='details-title'>Created by: </span>{displayItem.created_by.map((person) => {
      return <li key={person.name}>{person.name}</li>})}
      </ul></li>}
    {displayItem.type && <li key='type'><span className='details-title'>Show Type: </span>{displayItem.type}</li>}
    {displayItem.status && <li key='status'><span className='details-title'>Status: </span>{displayItem.status}</li>}

    {displayItem.origin_country && <li key='og-country'><span className='details-title'>Origin Country: </span>{displayItem.origin_country}</li>}
    
    {displayItem.networks && <li key='networks'><ul className={'details-ul'}><span className='details-title'>Networks: </span>{displayItem.networks.map((network) => {
      return <li key={network.name}>{network.name}</li>})}
      </ul></li>}

    {displayItem.genres && <li key='genres'><ul className='details-ul'><span className='details-title'>Genres: </span>{displayItem.genres.map((genre) => {
      return <li key={genre.name}>{genre.name}</li>})}
      </ul></li>}

    
        {displayItem.last_episode_to_air && <li key='last-episode'><ul className='details-ul'><span className='details-title'>Last Episode to air: 
          {displayItem.last_episode_to_air.season_number && <span> S{displayItem.last_episode_to_air.season_number}</span>}
          {displayItem.last_episode_to_air.episode_number && <span> E{displayItem.last_episode_to_air.episode_number}</span>}

        
        
        </span>
        {displayItem.last_episode_to_air.name && <li key='last-name'>Title: {displayItem.last_episode_to_air.name}</li>}
        {displayItem.last_episode_to_air.air_date && <li key='last-ep-air-date'>Air Date: {convertDate(displayItem.last_episode_to_air.air_date)}</li>}
        {displayItem.last_episode_to_air.runtime && <li key='last-ep-runtime'>Runtime: {displayItem.last_episode_to_air.runtime} mins</li>}
        </ul></li>}


    </ul>


    </div>
  </section>
  </section>}
  {showEditForm && <section className='edit-tv-section'><EditTvForm setShowDetails={setShowDetails} fetchedTvShows={fetchedTvShows} setFetchedTvShows={setFetchedTvShows} setWatchedList={setWatchedList} setToWatchList={setToWatchList} item={displayItem} closeEditForm={closeEditForm} editItem={editItem} watchedList={watchedList} toWatchList={toWatchList} onWatchedList={onWatchedList} onToWatchList={onToWatchList}/></section>}

    </li>

  )
}
