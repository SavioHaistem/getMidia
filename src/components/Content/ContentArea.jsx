import '../../css/contentarea.css';
import React from 'react';
import GetData from '../GetData';
import { Link } from 'react-router-dom';
import { ContentMovieCard } from './ContentMovieCard';
import SearchArea from '../SearchArea/SearchArea';

function ContentArea({data, setUserSearch}) {
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

export default GetData(ContentArea);