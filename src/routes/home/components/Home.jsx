import '../css/home.css'
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContentMovieCard from '../../../components/movieCard/MovieCard';
import SearchArea from '../../../components/SearchArea/SearchArea';
import useFetchData from '../../../hooks/test';


function Home({userSearch, setUserSearch}) {
  const {response, error} = useFetchData(userSearch)

  return (
    <>
    {console.log(userSearch, response)}
    <SearchArea setUserSearch={setUserSearch}/>
      <div className="contentarea">
        <ol className='contentlist'>
          {response && response.results.map((movie, index) => 
          (
            <React.Fragment key={`${index}`}>
              <Link to={`/movie/${movie.id}`} style={{textDecoration:'none', color: 'white', margin: 'none'}}>
                <ContentMovieCard movie={movie}/>
              </Link>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Home;