import '../../css/global.css';
import MovieDetails from '../../components/MoviePage';
import ContentArea from '../../components/Content/ContentArea';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function Home() {

  const [UserSearch, setUserSearch] = useState('gato');
  const [Page, setPage] = useState('1');
  return (  
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <ContentArea 
              UserSearch={UserSearch} 
              Page={Page} 
              setPage={setPage} 
              setUserSearch={setUserSearch} /> 
            }/>
        <Route 
          path='*' 
          element={ <MovieDetails/> } />
      </Routes>
    </>
  )
}

export default Home