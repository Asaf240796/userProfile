// import React, { useRef } from "react";
import React from "react";
import * as Style from "./CardInfo.style";

const CardInfo = ({ img }) => {
  // const canvasRef = useRef(null);

  return (
    <Style.CardContainer>
      <Style.ImageContainer src={img}>
        <Style.ImgStyle src={img} />
      </Style.ImageContainer>
      <Style.NameContainer> Tal Shefer </Style.NameContainer>
      <Style.EmailContainer> tal.s@prpl.io </Style.EmailContainer>
    </Style.CardContainer>
  );
};

export default CardInfo;
