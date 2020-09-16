import React from "react";
import { ButtonContainer } from "./Button.styles";

import { Lamp } from "./Button.icons";

export const Button = ({ name, type, state, handleButtonClick, id, index }) => (
  <ButtonContainer id={index} onClick={handleButtonClick}>
    {type === "Color temperature light" || "Dimmable light" ? (
      <Lamp isOn={state.on} />
    ) : null}
    {name}
  </ButtonContainer>
);
