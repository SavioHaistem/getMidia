import './css/global.css';
import Home from './routes/home/components/Home';
import MoviePage from './routes/movie/components/MoviePage';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function GetMidia() {

  const [userSearch, setUserSearch] = useState('One');
  const [Page, setPage] = useState('2');
  return (  
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              userSearch={userSearch} 
              Page={Page} 
              setPage={setPage} 
              setUserSearch={setUserSearch} /> 
            }/>
        <Route 
          path={'/:mediaType/:id'} 
          element={ <MoviePage/> } />  
        </Routes>
    </>
  )
}

export default GetMidia