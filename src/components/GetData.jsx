import axios from "axios";
import { useState, useEffect } from "react";

function GetData(WrappedComponent) {
  function newComponent({UserSearch, setUserSearch}) {
    const mykey = `5c9f10225671a251a0d525e14cb03542`

    const [ResultSearched, setResultSearched] = useState();
    const getData = async()=>{
      try {
        await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${mykey}&language=pt-BR&page=${1}&query=${UserSearch}`
        )
        .then((response) => setResultSearched(response.data))
      } catch(error) {
        console.log(error)
      }
    }
    
    useEffect(()=>{getData()},[UserSearch])

    return <WrappedComponent data={ResultSearched} setUserSearch={setUserSearch}/>
  }
  return newComponent;
}

export default GetData;