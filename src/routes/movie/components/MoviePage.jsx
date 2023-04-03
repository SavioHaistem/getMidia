import React from 'react';
import GetData from '../../../components/GetData';
import '../css/MoviePage.css'

function MoviePage({data}) {

  console.dir(data && data)
  return(
  <>
    <div className='movieTab transparentEffect scroolBar'>
      <div className="fixPosition">
        <div className="backgroundMovieTab">
          <div className="blackEffect"></div>
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
        </div>
      </div>
      <h1 className='movieTitle'>{data?.title}</h1>
      <p className='movieTagline'>{data?.tagline}</p>
      <h4 className='movieDate'>{data?.release_date.substr(0,4)}</h4>
        <div className="movieSubTitle">
          <li>
            <p>{data?.overview}</p>
          </li>
        </div>
    </div>
  </>
  )
}

export default GetData(MoviePage);