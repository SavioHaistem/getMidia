import { useContext } from 'react';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import styled from 'styled-components';
import { AppContext } from '../../App';
import useFetch from '../../hooks/useFatch';

const S_SearchArea = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

function SearchArea(props) {
    let {setUserSearch} = useContext(AppContext)

    return (
    <>
        <S_SearchArea>
            <SearchBar setUserSearch={setUserSearch}/>
            <SearchFilter/>
        </S_SearchArea>
    </>    
);
}

export default SearchArea;