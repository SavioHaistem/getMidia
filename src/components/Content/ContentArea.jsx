import '../../css/contentarea.css';
import GetData from '../GetData';

function ContentArea({data, Page, setPage}) {
  return (
    <>
      <div className="contentarea">
        <ol className='contentlist'>
          {data && data.map((movie, index) => <div 
            key={index} 
            className="contentitem transparentEffect">
              <p>{movie.Year}</p>

              <img 
                className='imageMovie' 
                src={movie.Poster}>
              </img>

              <p>{movie.Title}</p>
          </div>)}
        </ol>
      </div>
      <button onClick={()=>{setPage(++Page)}}>
        change
      </button>
    </>
  );
}

export default GetData(ContentArea);