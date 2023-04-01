import React from 'react';
import GetData from './GetData';
import '../css/MoviePage.css'
import '../css/contentArea.css'

function MoviePage({data}) {

  console.dir(data && data)
  return(
  <>
    <div className='movieTab transparentEffect'>
      <div className="backgroundMovieTab">
      <div className="blackEffect"><h1 className='MovieTitle'>{data?.original_title}</h1></div>
        <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
      </div>
      <div className="movieDetails">
        <li>
          <h3>Avaliação</h3>
        </li>
      </div>
    </div>
  </>
  )
}

export default GetData(MoviePage);