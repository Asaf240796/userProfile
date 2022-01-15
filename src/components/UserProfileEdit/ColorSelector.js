import React from "react";
import styled from "styled-components";

const colors = ["blue", "red", "purple"];

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px;
  gap: 5px;
`;

const ColorStyle = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ backgroundColor = "black" }) => backgroundColor};
`;

const ColorSelector = ({ setColor }) => {
  return (
    <Container>
      {colors.map((color) => (
        <ColorStyle
          key={color}
          backgroundColor={color}
          onClick={(e) => setColor(color)}
        />
      ))}
    </Container>
  );
};

export default ColorSelector;
