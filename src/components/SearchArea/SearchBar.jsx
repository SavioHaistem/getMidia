import '../../css/searchbar.css'

function SearchBar({setUserSearch}) {
    return (
    <>
            <input
             type="text"
             name="searchbar" 
             id="searchbar" 
             placeholder='Search'
             className='transparentEffect'
             onChange={(e)=>setUserSearch(e.target.value)}
            /> 
    </>
    );
}

export default SearchBar;