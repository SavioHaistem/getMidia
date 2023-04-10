import styled from "styled-components";

const S_box = styled.div`
  width: 200px;
  background-color: #ffffff70;
  padding: 15px;

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
    stroke: #444444;
  }
  circle:nth-child(2) {
    //stroke-dashoffset: ;
    stroke: #0080a3;
  }

  .box-Circle svg {
    width: 150px;
    height: 150px;
    position: relative;
  }
`


function AverageCard({count}) {
  console.log(count)
  const average_rate = Math.round(count * 10)
  console.log(average_rate)

  return (
    <>
      <S_box>
        <div className="box-Circle">
          <svg>
            <circle></circle>
            <circle></circle>
          </svg>
        </div>
          <h2>50%</h2>
      </S_box>
    </>
  );
}

export default AverageCard;