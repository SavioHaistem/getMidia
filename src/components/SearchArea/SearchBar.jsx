import '../../css/searchbar.css'

function SearchBar() {
    return (
    <>
            <input
             type="text"
             name="searchbar" 
             id="searchbar" 
             placeholder='Search'
             className='transparentEffect'
            /> 
    </>
    );
}

export default SearchBar;