import React from 'react';
import GetData from './GetData';

function MoviePage({data}) {
  console.log(data && data.original_title)
  return(
    <div>
      
    </div>
  )
}

export default GetData(MoviePage);