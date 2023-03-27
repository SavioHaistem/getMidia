import '../../css/contentarea.css';
import React from 'react';
import GetData from '../GetData';
import SearchArea from '../SearchArea/SearchArea';
import SearchFilter from '../SearchArea/SearchFilter';
import SearchBar from '../SearchArea/SearchBar';
import { Link } from 'react-router-dom';

function ContentArea({data, setUserSearch}) {
  return (
    <>
    <SearchArea>
      <SearchBar setUserSearch={(text)=>setUserSearch(text)}/>
      <SearchFilter/>
    </SearchArea>
      <div className="contentarea">
        <ol className='contentlist'>
          {data && data.results.map((movie, index) => 
          (
            <React.Fragment key={`${index}`}>
              <Link to={`/${index}`} key={index} style={{textDecoration:'none', color: 'white', textShadow: '2px black'}}>

                <div className="movieCard transparentEffect" >
                  <div className="movieCardBackground transparentCard">
                    <img src={`${`https://image.tmdb.org/t/p/original/${movie.poster_path}`}`} alt={`${movie.name}`} />
                  </div>
                    
                    <div className="posterWrapper">
                      <p className="movieDate"> {`${movie.release_date}`} </p>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                           alt={`${movie.name}_Background`}
                           className="moviePoster" />
                      <p className="movieTitle">{movie.title}</p>
                    </div>                  
                </div>

              </Link>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </>
  );
}

export default GetData(ContentArea);