import styled from "styled-components";

export const ButtonContainer = styled.div`
  background-color: #364156;
  height: 250px;
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  cursor: pointer;
  &:active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const LightBulb = styled.svg`
  fill {
    stroke: #fff;
  }
`;
