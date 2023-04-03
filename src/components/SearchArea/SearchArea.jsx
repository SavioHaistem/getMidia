import '../../css/searcharea.css'
import SearchBar from './SearchBar'
import SearchFilter from './SearchFilter'

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