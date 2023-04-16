
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import Watched from './Watched';
import Homepage from './Homepage';
import Header from './Header';
import PageNotFound from './PageNotFound';
import Search from './Search';
import Details from './Details';
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
    console.log(item)
    
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
    console.log(idList.includes(item.id))
    return idList.includes(item.id)
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage  addNewToWatch={addNewToWatch} markAsWatched={markAsWatched}/>} />
        <Route path='/watchlist' element={<WatchList toWatchList={toWatchList} clearToWatch={clearToWatch} addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList}/>} />
        <Route path='/watched' element={<Watched watchedList={watchedList} clearWatched={clearWatched} markAsWatched={markAsWatched} addNewToWatch={addNewToWatch} onToWatchList={onToWatchList}/>} />
        <Route path='/search' element={<Search addNewToWatch={addNewToWatch} markAsWatched={markAsWatched} onToWatchList={onToWatchList} />} />
        <Route path='/film/details' element={<Details />} />
          <Route path="/film/details/:id" element={<Details/>} />
        <Route path='/tv/details' element={<Details />} />
        <Route path='/tv/details/:id' element={<Details />} />

        <Route path='*' element={<PageNotFound />} />
     </Routes>
    </div>
  );
}

export default App;
