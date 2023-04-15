
import './App.css';
import { Routes, Route } from 'react-router-dom';
import WatchList from './WatchList';
import Watched from './Watched';
import Homepage from './Homepage';
import Header from './Header';
import PageNotFound from './PageNotFound';
import Search from './Search';


function App() {
  //TMDb
  // https://www.themoviedb.org/
  // const apidocs = 'https://developers.themoviedb.org/3'
  
  const apiKey = 'b80d4ee4fbbfe6174fcc84fb6ac757b9'

  


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage apiKey={apiKey} />} />
        <Route path='/watchlist' element={<WatchList />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/search' element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
     </Routes>
    </div>
  );
}

export default App;
