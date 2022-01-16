import React from "react";
import styled from "styled-components";

const colors = [
  "blue",
  "red",
  "purple",
  "yellow",
  "gray",
  "orange",
  "pink",
  "brown",
  "green",
];

const fontWeight = ["normal", "bold"];

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
const fontWeightStyle = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 5%;
  font-weight: ${({ fontWeight = "normal" }) => fontWeight};
`;

const ColorSelector = ({ setColor, setFontWeight }) => {
  return (
    <Container>
      {colors.map((color) => (
        <ColorStyle
          key={color}
          backgroundColor={color}
          onClick={(e) => setColor(color)}
        />
      ))}
      {fontWeight.map((font) => (
        <fontWeightStyle
          key={font}
          fontWeight={font}
          onClick={(e) => setFontWeight(font)}
        />
      ))}
    </Container>
  );
};

export default ColorSelector;
