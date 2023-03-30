import '../../css/global.css';
import ContentArea from '../../components/Content/ContentArea';
import { useState } from 'react'
import MoviePage from '../../components/MoviePage';
import { Route, Routes } from 'react-router-dom';

function Home() {

  const [UserSearch, setUserSearch] = useState();
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
          path={'/movie/:id'} 
          element={ <MoviePage/> } />  
        </Routes>
    </>
  )
}

export default Home