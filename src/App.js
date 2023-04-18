
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import Watched from './Watched';
import Homepage from './Homepage';
import Header from './Header';
import PageNotFound from './PageNotFound';
import Search from './Search';
import FilmDetails from './FilmDetails';
import TvDetails from './TvDetails';
import { useState } from 'react';


function App() {
  //TMDb
  // https://www.themoviedb.org/
  // const apidocs = 'https://developers.themoviedb.org/3'
  
  // const apiKey = 'b80d4ee4fbbfe6174fcc84fb6ac757b9'

  const [toWatchList, setToWatchList] = useState([])
  const [watchedList, setWatchedList] = useState([])

  function addNewToWatch(item) {
    const idList = toWatchList.map(item => item.id)

    if (!idList.includes(item.id)){
      const newItem = {...item}
      newItem.watched = false
      setToWatchList([...toWatchList, newItem])
    }    
  }

  function removeFromWatchList(item) {
    const rmId = item.id
    const updatedList = toWatchList.filter((item) => (item.id !== rmId))
    setToWatchList(updatedList)
  }

  function unMarkAsWatched(item) {
    const rmId = item.id
    const updatedList = watchedList.filter((item) => (item.id !== rmId))
    setWatchedList(updatedList)
  }


  function markAsWatched(item) {
    const idList = watchedList.map(item => item.id)

    if (!idList.includes(item.id)){
      const newItem = {...item}
      newItem.watched = true
      setWatchedList([...watchedList, newItem])
    }
  }

  function clearToWatch() {
    setToWatchList([])
  }

  function clearWatched() {
    setWatchedList([])
  }

  function onToWatchList(item) {
    const idList = toWatchList.map(item => item.id)
    return idList.includes(item.id)
  }

  function onWatchedList(item) {
    const idList = watchedList.map(item => item.id)
    return idList.includes(item.id)
  }



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage  addNewToWatch={addNewToWatch} removeFromWatchList={removeFromWatchList} markAsWatched={markAsWatched} onToWatchList={onToWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>} />
        <Route path='/watchlist' element={<WatchList toWatchList={toWatchList} clearToWatch={clearToWatch} addNewToWatch={addNewToWatch} removeFromWatchList={removeFromWatchList} markAsWatched={markAsWatched} onToWatchList={onToWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>} />
        <Route path='/watched' element={<Watched watchedList={watchedList} clearWatched={clearWatched} markAsWatched={markAsWatched} addNewToWatch={addNewToWatch} removeFromWatchList={removeFromWatchList} onToWatchList={onToWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>} />
        <Route path='/search' element={<Search addNewToWatch={addNewToWatch} removeFromWatchList={removeFromWatchList} markAsWatched={markAsWatched} onToWatchList={onToWatchList} onWatchedList={onWatchedList} unMarkAsWatched={unMarkAsWatched}/>} />
        
        <Route path="/film/details/:id" element={<FilmDetails onToWatchList={onToWatchList} onWatchedList={onWatchedList} addNewToWatch={addNewToWatch} removeFromWatchList={removeFromWatchList} markAsWatched={markAsWatched} unMarkAsWatched={unMarkAsWatched} toWatchList={toWatchList} watchedList={watchedList}/>} />
        <Route path='/tv/details/:id' element={<TvDetails onToWatchList={onToWatchList} onWatchedList={onWatchedList} addNewToWatch={addNewToWatch} removeFromWatchList={removeFromWatchList} markAsWatched={markAsWatched} unMarkAsWatched={unMarkAsWatched} toWatchList={toWatchList} watchedList={watchedList}/>} />
        <Route path='*' element={<PageNotFound />} />
     </Routes>
    </div>
  );
}

export default App;
