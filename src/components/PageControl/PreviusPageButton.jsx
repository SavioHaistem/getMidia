import { StyleButton } from "./StyledButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../App";
library.add(faCaretLeft)

function PreviusPageButton() {
  let { Page, setPage } = useContext(AppContext)

  function previusPage() {
    if ( Page > 1 ) {
      setPage(--Page)
    }
  }

  return (
    <>
      <StyleButton rigtht={1}>
        <button className="transparentEffect Circle" onClick={()=>previusPage()}>
          <i className="filtericon fas fa-caret-left"></i>
        </button>
      </StyleButton>
    </>
  );
}

export default PreviusPageButton;