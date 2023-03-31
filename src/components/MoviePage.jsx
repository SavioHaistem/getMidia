import React from 'react';
import GetData from './GetData';
import '../css/MoviePage.css'


function MoviePage({data}) {

  console.dir(data && data)
  return(
  <>
    <div className='movieTab transparentEffect'>
      <div className="backgroundMovieTab">
        <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" />
      </div>
    </div>
  </>
  )
}

export default GetData(MoviePage);