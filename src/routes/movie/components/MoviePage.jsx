import React, { useEffect } from 'react';
import '../css/MoviePage.css'
import Banner from '../../../components/TextBanner/banner';
import useFetch from '../../../hooks/useFatch';
import { useParams } from 'react-router-dom';
import AverageCard from '../../../components/VoteAverage/AverageCard';

function MoviePage(props) {
  const {id, mediaType} = useParams();

  const {response, error} = useFetch(id, mediaType)
  
  if(!response) {
    return <p>Carregando . . .</p>
  }

  return(
  <>
  <div className="display">
    <div className="backgroundMovie">
        <div className="movieHeader">
        <h1 className='movieTitle'>{response?.title||response?.name}</h1>
        {response?.tagline && <p className='movieTagLine'>{response?.tagline}</p>}
        {<Banner text={response?.release_date ? response?.release_date.substring(0,4) : response?.first_air_date.substring(0,4)}/>}
      </div>
      <div className="gradientBlackEffect"></div>
        <img style={{zIndex: '0' ,objectFit: 'contain'}} src={`https://image.tmdb.org/t/p/original/${response?.backdrop_path}`} alt={`${response?.title}`} />
        <img style={{zIndex: '-1' ,objectFit: 'cover', filter: 'blur(6px)' }} src={`https://image.tmdb.org/t/p/original/${response?.backdrop_path}`} alt={`${response?.title}`} />
      </div>
    <div className="contentText">
      <div className="movieSubTitle">
          <p>{response?.overview}</p>
          <AverageCard count={response?.vote_average}/>
      </div>   
    </div>
  </div>
  </>
  )
}

export default MoviePage;