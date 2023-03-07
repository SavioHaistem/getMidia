import { useState, useEffect } from "react"

function GetData(WrappedComponent) {
  function newComponent({UserSearch}) {
    const [ResultSearched, setResultSearched] = useState();
    
    return <WrappedComponent data={ResultSearched} UserSearch={UserSearch}/>
  }
  return newComponent;
}

export default GetData;