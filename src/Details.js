import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tmdbKey } from './api'
import Card from './Card'

export default function Details() {
    const {id} = useParams()
    //find title of id in url
    //memento id:77
    //got id: 1399

    const [item, setItem] = useState('')


    function handleIdSearchFilm(){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdbKey}&language=en-US`)
        .then(resp => resp.json())
        .then(res => {
           setItem(res)
        })
        console.log('item:')
        console.log(item)

        item.status_code === 34 ? handleIdSearchTv() : console.log('success')

    }


    function handleIdSearchTv(){
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbKey}&language=en-US`)
        .then(resp => resp.json())
        .then(res => {
            setItem(res)
        })
    }


  return (
    <div>
    <h1>DETAILS ... Coming soon!</h1>
    <p>Looking for title with id # {id}</p>
    <button onClick={handleIdSearchFilm}>find film by id</button>
    <p>{item.name}
    </p>
    <p>{item.title}</p>
      
    </div>
  )
}
