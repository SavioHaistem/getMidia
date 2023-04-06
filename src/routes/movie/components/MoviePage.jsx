import React, { useEffect } from 'react';
import '../css/MoviePage.css'
import Banner from '../../../components/TextBanner/banner';
import useFetch from '../../../hooks/useFatch';
import { useParams } from 'react-router-dom';

function MoviePage(props) {
  const {id} = useParams()
  const {response, error} = useFetch(undefined,id)
  
  return(
  <>
  <div className="display">
    <div className="backgroundMovie">
        <div className="movieHeader">
        <h1 className='movieTitle'>{response?.title}</h1>
        {response?.tagline && <p className='movieTagLine'>{response?.tagline}</p>}
        <Banner text={response?.release_date.substring(0,4)}/>
      </div>
      <div className="gradientBlackEffect"></div>
        <img src={`https://image.tmdb.org/t/p/original/${response?.backdrop_path}`} alt={`${response?.title}`} />
      </div>
    <div className="contentText">
      <div className="movieSubTitle">
          <p>{response?.overview}</p>
      </div>   
    </div>
  </div>
  </>
  )
}

export default MoviePage;