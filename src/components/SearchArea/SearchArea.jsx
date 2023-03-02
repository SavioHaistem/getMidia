import '../../css/searcharea.css'

function SearchArea(props) {
    return (
    <>
        <div className='SearchArea'>
            {props.children}
        </div>
    </>    
        
    );
}

export default SearchArea;