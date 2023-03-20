import { useState } from 'react';
import '../../css/contentarea.css';
import GetData from '../GetData';

function ContentArea({data, Page, setPage, TotalPages}) {
  const NumbersOfPages = []

  for (let i = 0; i < TotalPages; i++) {
    NumbersOfPages.push(i)
  }

  function findpage() {
    const NextPage = ++Page
    let respost = NumbersOfPages.indexOf(NextPage)
    respost > 0 ? setPage(NextPage) : setPage(1)
  }

  return (
    <>
      <div className="contentarea">
        <ol className='contentlist'>
          {data && data.map((movie, index) => (

          <div 
            style={{ background: `linear-gradient(rgba(0, 0, 0, 0.511),rgba(0, 0, 0, 0.511)), url(https://image.tmdb.org/t/p/w200/${movie.backdrop_path})` }} 
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
      <div className="pages">
        <button className='pagebutton' onClick={findpage}></button>
      </div>
    </>
  );
}

export default GetData(ContentArea);