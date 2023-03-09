import '../../css/contentarea.css';
import GetData from '../GetData';

function ContentArea({data, Page, setPage}) {
  return (
    <>
    {console.log(data)}
      <div className="contentarea">
        <ol className='contentlist'>
          {data && data.map((movie, index) => (

          <div 
            style={{ background: `linear-gradient(rgba(0, 0, 0, 0.511),rgba(0, 0, 0, 0.511)), url(https://image.tmdb.org/t/p/w200/${movie.backdrop_path})` }} 
            key={index} 
            className="movieCard" >

            <p className='movieDate'>{movie.release_date}</p>
            <img className='moviePoster' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
            <p className='movieTitle'>{movie.title}</p>
          </div>

        ))}

        </ol>
      </div>
      <div className="pages">
        <button onClick={()=>{setPage(++Page)}} className={"pageButton"}> change </button>
      </div>
    </>
  );
}

export default GetData(ContentArea);