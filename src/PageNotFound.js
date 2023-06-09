import React from 'react'
import './PageNotFound.css'
import gif2 from './assets/ronSwanson.gif'

export default function PageNotFound() {
  return (
    <div>
        <h1 className='page-not-found-title'>404 - page not found</h1>
        <div className='gifs'>
         <img className='gif' src='https://media3.giphy.com/media/kF0ngyP7S1DfmzKqiN/giphy.gif?cid=ecf05e47i8jow95a7pskun823ublvqrg8ojbnnbz7cnk5qx2&rid=giphy.gif&ct=g'/>
         <img className='gif' src={gif2}/>
        </div>
      </div>
  )
}
