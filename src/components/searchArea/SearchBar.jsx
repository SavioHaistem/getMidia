import './css/SearchBar.css'

function SearchBar({setUserSearch}) {
    return (
    <>
            <input
             type="text" 
             placeholder='Search'
             className='SearchBar transparentEffect'
             onChange={(e)=>setUserSearch(e.target.value)}
            /> 
    </>
    );
}

export default SearchBar;