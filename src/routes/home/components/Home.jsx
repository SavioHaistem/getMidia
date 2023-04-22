import '../css/home.css'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentMovieCard from '../../../components/movieCard/MovieCard';
import SearchArea from '../../../components/SearchArea/SearchArea';
import useFetch from '../../../hooks/useFatch'
import { AppContext } from '../../../App';
import ControlsArea from '../../../components/PageControl/ControlsArea';

function Home() {
  
  let { userSearch, Page, setUserSearch, setPage, totalPages, setTotalPages } = useContext(AppContext)
  const { response, error } = useFetch(undefined, undefined, userSearch, Page)

  if(!response) {
    return <h1>carregando. . .</h1>
  }

  response.total_pages ? setTotalPages(response.total_pages) : setTotalPages(1)

  return (
    <>
    <header>
      <SearchArea/>
      <ControlsArea/>
    </header>
      <div className="contentarea">
        <ol className='contentlist'>
          {response && response.results.map((media, index) => 
          (
            <React.Fragment key={`${index}`}>
              <Link to={`/${media.media_type||'movie'}/${media.id}`} style={{textDecoration:'none', color: 'white', margin: 'none'}}>
                <ContentMovieCard movie={media}/>
              </Link>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Home;