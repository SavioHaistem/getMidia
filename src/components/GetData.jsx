import axios from "axios";
import { useState, useEffect } from "react";

function GetData(WrappedComponent) {
  function newComponent({UserSearch, setUserSearch}) {
    const mykey = `5c9f10225671a251a0d525e14cb03542`

    const [Response, setResponse] = useState();
    const getData = async()=>{
      if (UserSearch) {
          await axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${mykey}&language=pt-BR&page=${1}&query=${UserSearch}`)
            .then((response) => setResponse(response.data))
            .catch((error)=>console.dir(error))
        } else {
          await axios
            .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${mykey}`)
            .then((response) => setResponse(response.data))
            .catch((error)=>console.dir(error))
        }

    }
    
    useEffect(()=>{getData()},[UserSearch])

    return <WrappedComponent data={Response} setUserSearch={setUserSearch}/>
  }
  return newComponent;
}

export default GetData;