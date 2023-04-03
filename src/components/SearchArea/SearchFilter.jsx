import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
library.add(faFilter);
import '../../css/searchfilter.css'

function SearchFilter() {
  return (
    <>
      <div className="searchfilter transparentEffect">
        <i className="filtericon fas fa-filter"></i>
        <p style={{fontSize: '12px'}}>Apenas filmes no momento</p>
      </div>
    </>
  );
}

export default SearchFilter;