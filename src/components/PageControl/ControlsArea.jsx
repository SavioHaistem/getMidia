import NextPageButton from "./NextPageButton";
import PreviusPageButton from "./PreviusPageButton";
import { S_ControlsArea } from "./StyledButton";
import CountCurrentPage from "./CountCurrentPage.jsx"

function ControlsArea() {
  return (
    <>
      <S_ControlsArea>
        <PreviusPageButton/>
        <CountCurrentPage/>
        <NextPageButton/>
      </S_ControlsArea>
    </>
  );
}

export default ControlsArea;