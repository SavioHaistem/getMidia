import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
library.add(faFilter);
import '../../css/searchfilter.css'

function SearchFilter() {
  return (
    <>
      <div className="searchfilter transparentEffect">
        <i className="filtericon fas fa-filter"></i>
      </div>
    </>
  );
}

export default SearchFilter;