import '../css/home.css'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentMovieCard from '../../../components/movieCard/MovieCard';
import SearchArea from '../../../components/SearchArea/SearchArea';
import useFetch from '../../../hooks/useFatch'
import { AppContext } from '../../../App';

function Home() {
  let { userSearch, Page, setUserSearch, setPage } = useContext(AppContext)
  const { response, error } = useFetch(undefined, undefined, userSearch, Page)

  if(!response) {
    return <h1>carregando. . .</h1>
  }
  
  function backOnePage() {
    if (Page > 1) {
      setPage(--Page)
      console.log(Page)
    }
  }
  function nextOnePage() {
    if (Page < response.total_pages) {
      setPage(++Page)
      console.log(Page)
    }
  }

  return (
    <>
    <SearchArea/>
    <button onClick={backOnePage}> BackPage</button>
    <button onClick={nextOnePage}> NextPage </button>
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