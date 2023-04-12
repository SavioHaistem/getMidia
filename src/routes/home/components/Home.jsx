import '../css/home.css'
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentMovieCard from '../../../components/movieCard/MovieCard';
import SearchArea from '../../../components/SearchArea/SearchArea';
import useFetch from '../../../hooks/useFatch'
import { AppContext } from '../../../App';

function Home(props) {
  const { userSearch, Page, setPage, setUserSearch } = useContext(AppContext)
  const { response, error } = useFetch(userSearch)

  if(!response) {
    return <h1>carregando. . .</h1>
  }
  return (
    <>
    {console.dir(response)}
    <SearchArea setUserSearch={setUserSearch}/>
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