import axios from "axios";
import { useEffect, useState } from "react";

function useFetch (movieId=undefined, mediaType=undefined, userSearch=undefined, Page=undefined ) {
  const mykey = `5c9f10225671a251a0d525e14cb03542`
  const [response, setResponse] = useState()
  const [Error, setError] = useState(null)

  userSearch ? useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${mykey}&language=pt-BR&page=${Page}&query=${userSearch}`)
    .then((res)=> setResponse(res.data))
    .catch((error)=> setError(error))
  },[userSearch,Page]) : movieId ? useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/${mediaType}/${movieId}?api_key=${mykey}&language=pt-BR`)
    .then((res)=> setResponse(res.data))
    .catch((error)=> setError(error))
  },[]) : useEffect(()=>{
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${mykey}&page=${Page}`)
    .then((res) => setResponse(res.data))
    .catch((error)=>console.dir(error))},[Page])
  
  return {response, Error}
}

export default useFetch;