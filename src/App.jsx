import './css/global.css'
import SearchArea from './components/SearchArea/SearchArea'
import SearchBar from './components/SearchArea/SearchBar'
import SearchFilter from './components/SearchArea/SearchFilter'
import ContentArea from './components/Content/ContentArea'
import { useEffect, useState } from 'react'

function App() {

  const [UserSearch, setUserSearch] = useState('Annabelle');
  console.log(UserSearch)
  return (  
    <>
      <SearchArea>
        <SearchBar setSearch={setUserSearch}/>
        <SearchFilter/>
      </SearchArea>
      <ContentArea UserSearch={UserSearch}/>     
    </>
  )
}

export default App