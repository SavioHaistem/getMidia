import './css/global.css'
import SearchBar from './components/SearchArea/SearchBar'
import SearchArea from './components/SearchArea/SearchArea'
import SearchFilter from './components/SearchArea/SearchFilter'

function App() {
  return (
    <>
      <SearchArea>
        <SearchBar/>
        <SearchFilter/>
      </SearchArea>      
    </>
  )
}

export default App