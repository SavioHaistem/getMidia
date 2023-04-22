import { useContext } from 'react';
import SearchBar from './SearchBar';
import SearchFilter from './SearchFilter';
import styled from 'styled-components';
import { AppContext } from '../../App';

const S_SearchArea = styled.div`
    gap: 1rem;
    display: flex;
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