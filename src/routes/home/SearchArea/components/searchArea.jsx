import '../css/searchArea.css'
import SearchBar from './searchBar'
import SearchFilter from './searchFilter'

function SearchArea({setUserSearch}) {
    return (
    <>
        <div className='SearchArea'>
            <SearchBar setUserSearch={setUserSearch}/>
            <SearchFilter/>
        </div>
    </>    
        
    );
}

export default SearchArea;