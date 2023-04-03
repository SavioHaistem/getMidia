import '../../css/contentarea.css';
import GetData from '../../components/GetData';
import React from 'react';
import { Link } from 'react-router-dom';
import ContentMovieCard from '../../components/MovieCard';
import SearchArea from './SearchArea/components/SearchArea';

function Home({data, setUserSearch}) {
  return (
    <>
    <SearchArea setUserSearch={setUserSearch}/>
      <div className="contentarea">
        <ol className='contentlist'>
          {data && data.results.map((movie, index) => 
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

export default GetData(Home);