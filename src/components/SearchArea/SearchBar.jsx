import '../../css/searchbar.css'

function SearchBar({setSearch}) {
    return (
    <>
            <input
             type="text"
             name="searchbar" 
             id="searchbar" 
             placeholder='Search'
             className='transparentEffect'
             onChange={(e)=>setSearch(e.target.value)}
            /> 
    </>
    );
}

export default SearchBar;