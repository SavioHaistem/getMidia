import './css/global.css'
import SearchArea from './components/SearchArea/SearchArea'
import SearchBar from './components/SearchArea/SearchBar'
import SearchFilter from './components/SearchArea/SearchFilter'
import ContentArea from './components/Content/ContentArea'

function App() {
  return (
    <>
      <SearchArea>
        <SearchBar/>
        <SearchFilter/>
      </SearchArea>
      <ContentArea>
        
      </ContentArea>      
    </>
  )
}

export default App