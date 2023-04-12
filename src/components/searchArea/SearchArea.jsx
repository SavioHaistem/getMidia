import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import styled from 'styled-components';

const S_SearchArea = styled.div`
    margin: auto;
    width: 80vw;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

function SearchArea({setUserSearch}) {
    return (
    <>
        <S_SearchArea className='SearchArea'>
            <SearchBar setUserSearch={setUserSearch}/>
            <SearchFilter/>
        </S_SearchArea>
    </>    
);
}

export default SearchArea;