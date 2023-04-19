import React from 'react'
import FilmCard from './FilmCard'
import TvCard from './TvCard'
import { useState } from 'react';
import './List.css'

export default function WatchList({ toWatchList, clearToWatch, addNewToWatch, removeFromWatchList, markAsWatched, onToWatchList, onWatchedList, unMarkAsWatched, editItem, removeSelectedFromWatchList,  markSelectedAsWatched}) {
   
  
  const toWatchListElements = toWatchList.map(item => {
    if (item.media_type === 'movie') {
      return <FilmCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem} toWatchList={toWatchList}/>
    } else {
      return <TvCard key={item.id} item={item} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} removeFromWatchList={removeFromWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched} editItem={editItem} toWatchList={toWatchList}/>
    }
    
  })

  const templateObj = {
    budget: '',
    genres: [],
    id: Date.now(),
    original_language: '',
    overview: '',
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: '',
    runtime: '',
    spoken_languages: [],
    tagline: '',
    title: ''
  }

  const [formData, setFormData] = useState(templateObj)

  function handleClearSelected () {
    const itemsToRemove = toWatchList.filter((item) => (item.selected === true))
    removeSelectedFromWatchList(itemsToRemove)
  }

  function handleMarkSelectedWatched() {
    const watchedItems = toWatchList.filter((item) => (item.selected === true))
    markSelectedAsWatched(watchedItems)
  }

  function handleFormChange(e) {
    const newInput = {...formData, [e.target.name]: e.target.value}
    console.log(newInput)
    setFormData(newInput)
  }



  // const [inputFields, setInputFields] = useState([{name: ''}, {}])

  // function handleFieldChange(e, index) {
  //   const newValues = [...inputFields]
  //   newValues[index] = {name: e.target.value}
  //   setInputFields(newValues)
    
  //   console.log(newValues)

  // }

  // function handleAddField(e) {
  //   e.preventDefault()
  //   setInputFields([...inputFields, {name: ''}])
  // }

  // function handleRemoveField(e, index) {
  //   e.preventDefault()
  //   const newValues= [...inputFields];
  //   newValues.splice(index, 1)
  //   setInputFields(newValues)

  // }



const [companyFields, setCompanyFields] = useState([{name: ''}])
function addCompanyField(){
  setCompanyFields([...companyFields, {name: ''}])
}

function removeCompanyField(index) {
  if (index > 0) {
    const fields = [...companyFields]
    fields.splice(index, 1)
    setCompanyFields(fields)
  }


}

function handleCompanyField(e, index) {
  const data = [...companyFields]
  data[index] = {name: e.target.value}
  setCompanyFields(data);
  const newInput = {...formData}
  newInput[e.target.name] = data
  setFormData(newInput)
 }

const [countryFields, setCountryFields] = useState([{name: ''}])

function addCountryField(){
 setCountryFields([...countryFields, {name: ''}])
}


function removeCountryField(index) {
  if (index > 0) {
    const fields = [...countryFields]
    fields.splice(index, 1)
    setCountryFields(fields)
  }


}

function handleCountryField(e, index) {
  const data = [...countryFields]
  data[index] = {name: e.target.value}
  setCountryFields(data);
  const newInput = {...formData}
  newInput[e.target.name] = data
  setFormData(newInput)
 }


const [languageFields, setLanguageFields] = useState([{name: ''}])

function addLangField(){
 setLanguageFields([...languageFields, {name: ''}])
}


function removeLangField(index) {
  if (index > 0) {
    const fields = [...languageFields]
    fields.splice(index, 1)
    setLanguageFields(fields)
  }


}

function handleLangField(e, index) {
  const data = [...languageFields]
  data[index] = {name: e.target.value}
  setLanguageFields(data);
  const newInput = {...formData}
  newInput[e.target.name] = data
  setFormData(newInput)
 }


const [genres, setGenres] = useState([{name: 'Action'}])

function addGenre(){
 setGenres([...genres, {name: ''}])
}

function removeGenre(index) {
  if (index > 0) {
    const dropDowns = [...genres]
    dropDowns.splice(index, 1)
    setGenres(dropDowns)
  }

}

function handleGenres(e, index) {
  const data = [...genres]
  data[index] = {name: e.target.value}
  setGenres(data);
  const newInput = {...formData}
  newInput[e.target.name] = data
  setFormData(newInput)
 }



 function handleFormSubmit(e) {
  e.preventDefault()
  console.log(formData)



}
  // Clear/delete only marked items -> remove all watched items??
  // edit items


  return (
    <div>
    <h1>Watchlist</h1>
      <h2>so many episodes so little time...</h2>
      <button className='btn btn-clear-to-watch' onClick={clearToWatch}>Clear List</button>
      <button className='btn btn-clear-selected' onClick={handleClearSelected}>Clear selected</button>
      <button className='btn btn-mark-as-watched-selected' onClick={handleMarkSelectedWatched}>mark as watched</button>


      <button className='btn btn-create-new-item'>Add new title</button>
      <button className='btn btn-unmark-as-watched-selected'>unmark as watched selected</button>
      <button className='btn btn-edit'>edit</button>

      
      <section className='results-section'>
        {(toWatchListElements.length !== 0) && <ul className='results-list'>{toWatchListElements}</ul>}
      </section>
      <section className='new-item-form-section'>
        <form className='new-film-form' onSubmit={handleFormSubmit}>
 
          <ul>
            <li>Title: <input name='title' onChange={handleFormChange}></input></li>
            <li>Release Date: <input name='release_date' placeholder='DD/MM/YYYY' onChange={handleFormChange}></input></li>
            <li>Runtime: <input name='runtime' onChange={handleFormChange}></input></li>

            <li>Genres:

            {genres.map((genre, index) => {
              return (<div key={index}>
        
              <select key={index} name="genres" value={genre.name} onChange={(e) => handleGenres(e, index)}>
                <option value={'Action'}>Action</option>
                <option value={'Adventure'}>Adventure</option>
                <option value={'Animation'}>Animation</option>
                <option value={'Comedy'}>Comedy</option>
                <option value={'Crime'}>Crime</option>
                <option value={'Documentary'}>Documentary</option>
                <option value={'Drama'}>Drama</option>
                <option value={'Family'}>Family</option>
                <option value={'Fantasy'}>Fantasy</option>
                <option value={'History'}>History</option>
                <option value={'Horror'}>Horror</option>
                <option value={'Music'}>Music</option>
                <option value={'Mystery'}>Mystery</option>
                <option value={'Romance'}>Romance</option>
                <option value={'Science Fiction'}>Science Fiction</option>
                <option value={'Thriller'}>Thriller</option>
                <option value={'War'}>War</option>
                <option value={'Western'}>Western</option>

              </select>
              
              <button type="button" onClick={addGenre}>+</button>
              <button type="button" onClick={() => removeGenre(index)}>-</button>
              </div>)
            })}
     
            </li>

            <li>Synopsis: <textarea name='overview' onChange={handleFormChange}></textarea></li>

            <li>Tagline: <input name='tagline' onChange={handleFormChange}></input></li>

            <li>Production Companies:

            {companyFields.map((field, index) => {
              return (<div key={index}>
              <input name='production_companies' value={field.name} onChange={(e) => handleCompanyField(e, index)}></input>
              <button type="button" onClick={addCompanyField}>+</button>
              <button type="button" onClick={() => removeCompanyField(index)} >-</button>
              </div>)
            })}
     
            </li>

            <li>Production Countries:

            {countryFields.map((field, index) => {
              return (<div key={index}>
              <input name='production_countries' value={field.name} onChange={(e) => handleCountryField(e, index)}></input>
              <button type="button" onClick={addCountryField}>+</button>
              <button type="button" onClick={() => removeCountryField(index)}>-</button>
              </div>)
            })}
     
            </li>
   
            <li>Spoken Languages:

            {languageFields.map((field, index) => {
              return (<div key={index}>
              <input name='spoken_languages' value={field.name} onChange={(e) => handleLangField(e, index)}></input>
              <button type="button" onClick={addLangField}>+</button>
              <button type="button" onClick={() => removeLangField(index)}>-</button>
              </div>)
            })}
     
            </li>
            <li>Original Language: <input name='original_language' onChange={handleFormChange}></input>
            </li>
            <li>Revenue: <input name='revenue' onChange={handleFormChange}></input>USD
            </li>
            <li>Budget: <input name='budget' onChange={handleFormChange}></input>USD
            </li>
            <li>Image URL: <input name='poster_path' onChange={handleFormChange}></input>USD
            </li>

            <button type="submit">Add</button>
        </ul>

        </form>
      </section>
    </div>
  )
}
