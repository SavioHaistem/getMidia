import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData (userSearch=undefined, movieId=undefined) {
  const mykey = `5c9f10225671a251a0d525e14cb03542`
  const [response, setResponse] = useState()
  const [Error, setError] = useState(null)

  userSearch ? useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${mykey}&language=pt-BR&page=${1}&query=${userSearch}`)
    .then((res)=> setResponse(res.data))
    .catch((error)=> setError(error))
  },[userSearch]) : movieId ? useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${mykey}&language=pt-BR`)
    .then((res)=> setResponse(res.data))
    .catch((error)=> setError(error))
  },[]) : useEffect(()=>{
    axios
    .get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${mykey}`)
    .then((res) => setResponse(res.data))
    .catch((error)=>console.dir(error))},[])
  
  return {response, Error}
}

export default useFetchData;