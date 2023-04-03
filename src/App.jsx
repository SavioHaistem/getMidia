import './css/global.css';
import Home from './routes/home/components/Home';
import MoviePage from './routes/movie/components/MoviePage';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function GetMidia() {

  const [UserSearch, setUserSearch] = useState();
  const [Page, setPage] = useState('2');
  return (  
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              UserSearch={UserSearch} 
              Page={Page} 
              setPage={setPage} 
              setUserSearch={setUserSearch} /> 
            }/>
        <Route 
          path={'/movie/:id'} 
          element={ <MoviePage/> } />  
        </Routes>
    </>
  )
}

export default GetMidia