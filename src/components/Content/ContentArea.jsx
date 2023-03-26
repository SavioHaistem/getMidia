import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/contentarea.css';
import GetData from '../GetData';

function ContentArea({data}) {
  return (
    <>
      <div className="contentarea">
        <ol className='contentlist'>
          {data && data.results.map((movie, index) => (
          <div 
            style={{ 
              background: `linear-gradient(rgba(0, 0, 0, 0.511),rgba(0, 0, 0, 0.511)),
                           url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              backgroundPosition: `center`,
              backgroundSize: `cover`,
              backdropFilter: `blur(1rem)`}} 
            key={index} 
            className="movieCard" >

            <p className='movieDate'>{movie.release_date}</p>
            <img className='moviePoster' 
                 src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}>
            </img>
            <p className='movieTitle'>{movie.title}</p>
          </div>
        ))}
        </ol>
      </div>
    </>
  );
}

export default GetData(ContentArea);