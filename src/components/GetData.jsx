import axios from "axios";
import { useState, useEffect } from "react"

function GetData(WrappedComponent) {

  function newComponent({UserSearch}) {
    const [ResultSearched, setResultSearched] = useState();

    const getData = async()=>{
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${UserSearch}&plot=full&apikey=d1293f7f`
        )
        .then((response)=>console.log(response.data));
      }
      catch(error) {console.log(error)}
    }
    
    useEffect(()=>{getData()},[UserSearch])
    return <WrappedComponent data={ResultSearched}/>
  }
  return newComponent;
}

export default GetData;