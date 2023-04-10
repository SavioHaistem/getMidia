import styled from "styled-components";

const S_box = styled.div`
  width: 200px;
  background-color: #2b2b2b6f;
  padding: 15px;
  border-radius: 20px;

  circle {
    cx: 70;
    cy: 70;
    r: 70;
    width: 150px;
    height: 150px;
    fill: none;
    stroke: #ff0101;
    stroke-width: 10;
    transform: translate(5px,5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
  }
  circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #393939;
  }
  circle:nth-child(2) {
    stroke-dashoffset: calc(440 - ${props => props.averageToCircle});
    stroke: #0080a3;
  }

  .box-Circle svg {
    width: 150px;
    height: 150px;
    position: relative;
  }
`


function AverageCard({count}) {
  let average_rate = Math.round(count * 10);
  let averageToCircle = Math.round(average_rate * 4.4)
  return (
    <>
      <S_box averageToCircle={averageToCircle}>
        <div className="box-Circle">
          <svg>
            <circle></circle>
            <circle></circle>
          </svg>
        </div>
          <h2>{average_rate}</h2>
      </S_box>
    </>
  );
}

export default AverageCard;