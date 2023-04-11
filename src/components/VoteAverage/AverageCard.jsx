import styled from "styled-components";

const S_box = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
  width: 130px;
  top: 0;
  left: 0;
  margin: 1rem;
  background-color: #0000006d;
  border-radius: 10rem;

  circle {
    cx: 50;
    cy: 50;
    r: 50;
    width: 130px;
    height: 130px;
    fill: none;
    stroke-width: 20;
    transform: translate(15px,17px);
    stroke-dasharray: 314;
    stroke-dashoffset: 314;
  }
  circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #393939;
  }
  circle:nth-child(2) {
    stroke-dashoffset: calc(314 - ${props => props.averageToCircle});
    stroke: #3ca300;
    stroke-linecap: round;
  }
  .box-Circle svg {
    width: 130px;
    height: 130px;
    position: relative;
  }
  .number {
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
  }
`


function AverageCard({count}) {
  let average_rate = Math.round(count * 10);
  let averageToCircle = Math.round(average_rate * 3.14)
  return (
    <>
      <S_box averageToCircle={averageToCircle}>
        <div className="box-Circle">
          <svg>
            <circle></circle>
            <circle></circle>
          </svg>
        </div>
        <div className="number">
          <h2>{average_rate}%</h2>
        </div>
      </S_box>
    </>
  );
}

export default AverageCard;