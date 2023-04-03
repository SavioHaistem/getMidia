import React from 'react';
import GetData from './GetData';
import '../css/MoviePage.css'
import '../css/contentArea.css'

function MoviePage({data}) {

  console.dir(data && data)
  return(
  <>
    <div className='movieTab transparentEffect scroolBar'>
      <div className="fixPosition">
        <div className="backgroundMovieTab">
          <div className="blackEffect"><h1 className='MovieTitle'>{data?.title}</h1></div>
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
        </div>
      </div>
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