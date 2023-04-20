import { AppContext } from "../../App";
import { useContext } from "react";
import { StyleButton } from "./StyledButton";

function CountCurrentPage() {
let { Page } = useContext(AppContext)

  return (<>
    <StyleButton>
        <p className="transparentEffect Circle">{Page}</p>
    </StyleButton>
  </>);
}

export default CountCurrentPage;