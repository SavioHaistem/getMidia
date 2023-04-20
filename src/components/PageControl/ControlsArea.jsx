import NextPageButton from "./NextPageButton";
import PreviusPageButton from "./PreviusPageButton";
import { S_ControlsArea } from "./StyledButton";

function ControlsArea() {
  return (
    <>
      <S_ControlsArea>
        <PreviusPageButton/>
        <NextPageButton/>
      </S_ControlsArea>
    </>
  );
}

export default ControlsArea;