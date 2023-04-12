import './css/global.css';
import Home from './routes/home/components/Home';
import MoviePage from './routes/movie/components/MoviePage';
import { createContext, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

export const AppContext = createContext(null)

export function GetMidia() {

  const [userSearch, setUserSearch] = useState();
  const [Page, setPage] = useState('2');

  return (  
    <>
      <AppContext.Provider value={{ userSearch, Page, setPage, setUserSearch }}>
        <Routes>
          <Route 
            path="/" 
            element={ <Home /> }/>
          <Route 
            path={'/:mediaType/:id'} 
            element={ <MoviePage/> } />  
        </Routes>
      </AppContext.Provider>
    </>
  )
}