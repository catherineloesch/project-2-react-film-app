import React from 'react'
import gif1 from './assets/pulpFiction.gif'
import gif2 from './assets/ronSwanson.gif'

export default function PageNotFound() {
  return (
    <div>
        <h1>404</h1>
        <p>This is not the page you are looking for!</p>
         <img src={gif2}/>
         <img src={gif1}/>
         <img src='https://media3.giphy.com/media/kF0ngyP7S1DfmzKqiN/giphy.gif?cid=ecf05e47i8jow95a7pskun823ublvqrg8ojbnnbz7cnk5qx2&rid=giphy.gif&ct=g'/>
         <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2Y3N2EyMzFjNjk0YjQ4NGRjMjEzMmFkYzg2OTFjOTY5YTZhODE1YSZjdD1n/de9SqBlr1ViwvGwzWp/giphy.gif'/>
    </div>
  )
}
