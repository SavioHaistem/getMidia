import { StyleButton } from "./StyledButton";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../App";
library.add(faCaretLeft)

function PreviusPageButton() {
  let { Page, setPage } = useContext(AppContext)

  return (
    <>
      <StyleButton rigtht={1}>
        <button className="transparentEffect Circle" onClick={()=>setPage(--Page)}>
          <i className="filtericon fas fa-caret-left"></i>
        </button>
      </StyleButton>
    </>
  );
}

export default PreviusPageButton;