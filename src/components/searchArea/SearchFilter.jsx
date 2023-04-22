import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
library.add(faFilter);

const S_SearchFilter = styled.div`
  .searchFilter {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function SearchFilter() {
  return (
    <>
      <S_SearchFilter>
        <div className="searchFilter transparentEffect">
          <i className="filtericon fas fa-filter"></i>
          <p style={{fontSize: '12px'}}></p>
        </div>
      </S_SearchFilter>
    </>
  );
}

export default SearchFilter;