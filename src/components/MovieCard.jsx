import '../css/movieCard.css'

function ContentMovieCard({movie}) {
  return (
  <>
    <div className="movieCard transparentEffect">
      <div className="movieCardBackground">
        <img src={`${`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}`} alt={`${movie.name}`} />
      </div>
        <div className="posterWrapper">
          <p className="cardText">{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`${movie.name}_Background`}
              className="moviePoster" />
                <p className="cardText"> {`${movie.release_date}`} </p>
        </div>                 
      </div>
  </>);
}

export default ContentMovieCard;