import './css/global.css'
import SearchBar from './components/SearchBar'
import SearchArea from './components/SearchArea'
import SearchFilter from './components/SearchFilter'

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