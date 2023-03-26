import axios from "axios";
import { useState, useEffect } from "react";

function GetData(WrappedComponent) {
  function newComponent({UserSearch, Page, setPage}) {
    const mykey = `5c9f10225671a251a0d525e14cb03542`

    const [ResultSearched, setResultSearched] = useState();
    const [TotalPages, setTotalPages] = useState();

    const getData = async()=>{
      try {
        await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${mykey}&language=pt-BR&page=${Page}&query=${UserSearch}`
        )
        .then((response) => setResultSearched(response.data))
      } catch(error) {
        console.log(error)
      }
    }
    
    useEffect(()=>{getData()},[UserSearch, Page])

    return <WrappedComponent data={ResultSearched} Page={Page} setPage={setPage} TotalPages={TotalPages}/>
  }
  return newComponent;
}

export default GetData;