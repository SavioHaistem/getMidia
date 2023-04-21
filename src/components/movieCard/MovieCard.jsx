import './css/movieCard.css'
import poster from '../../../public/imgs/Card.png'

function ContentMovieCard({movie}) {
  return (
  <>
    <div className="movieCard transparentEffect">
      <div className="movieCardBackground">
        <img src={movie.poster_path ? `${`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}` : poster } alt={`${movie.name}`} />
      </div>
        <div className='gradientBlackEffect'></div>
        <div className="posterWrapper">
          <p className="cardText">{movie.title||movie.name}</p>
            <img src={ movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : poster }
              alt={`${movie.name}_Background`}
              className="moviePoster" />
        </div>                 
      </div>
  </>);
}

export default ContentMovieCard;