import axios from "axios";
import { useState, useEffect } from "react"

function GetData(WrappedComponent) {

  function newComponent({UserSearch, Page, setPage}) {
    const [ResultSearched, setResultSearched] = useState();
    const getData = async()=>{
      try {
        await axios.get(
          `http://www.omdbapi.com/?s=${UserSearch}&page=${Page}&apikey=d1293f7f`
        )
        .then((response) => setResultSearched(response.data.Search));
      } catch(error) {
        console.log(error)
      }
    }

    useEffect(()=>{getData()},[UserSearch, Page])


    return <WrappedComponent data={ResultSearched} Page={Page} setPage={setPage}/>
  }
  return newComponent;
}

export default GetData;