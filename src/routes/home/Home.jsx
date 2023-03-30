import '../../css/global.css';
import ContentArea from '../../components/Content/ContentArea';
import MoviePage from '../../components/MoviePage';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function Home() {

  const [UserSearch, setUserSearch] = useState();
  const [Page, setPage] = useState('2');
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
          path={'/movie/:id'} 
          element={ <MoviePage/> } />  
        </Routes>
    </>
  )
}

export default Home