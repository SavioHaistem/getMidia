import { StyleButton } from "./StyledButton";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../App";
library.add(faCaretRight);

function NextPageButton() {
  let { Page, setPage, totalPages } = useContext(AppContext)

  function nextPage() {
    if ( Page < totalPages ) {
      setPage(++Page)
    }
  }

  return (
    <>
      <StyleButton right={0}>
        <button className="transparentEffect Circle" onClick={nextPage}>
          <i className="filtericon fas fa-caret-right"></i>
        </button>
      </StyleButton>
    </>
  );
}


export default NextPageButton;