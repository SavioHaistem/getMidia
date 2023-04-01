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
      <div className="blackEffect"></div>
        <img className="transparentEffect" src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
      </div>
      <h1>{data?.original_title}</h1>
    </div>
  </>
  )
}

export default GetData(MoviePage);