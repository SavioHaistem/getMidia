import './css/global.css'
import SearchArea from './components/SearchArea/SearchArea'
import SearchBar from './components/SearchArea/SearchBar'
import SearchFilter from './components/SearchArea/SearchFilter'
import ContentArea from './components/Content/ContentArea'
import { useState } from 'react'

function App() {

  const [UserSearch, setUserSearch] = useState('gato');
  const [Page, setPage] = useState('1')
  return (  
    <>
      <SearchArea>
        <SearchBar setSearch={setUserSearch}/>
        <SearchFilter/>
      </SearchArea>
      <ContentArea UserSearch={UserSearch} Page={Page}/>     
    </>
  )
}

export default App