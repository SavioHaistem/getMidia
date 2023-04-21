import styled from "styled-components"

const S_ControlsArea = styled.div`
  margin-top: 5rem;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const StyleButton = styled.div`
    .Circle {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    width: 3rem;
    
    border-radius: 1.2rem;
    border: none;
    color: white;
    font-weight: 700;
    margin: 0.2rem;
  }
`

export {S_ControlsArea, StyleButton}