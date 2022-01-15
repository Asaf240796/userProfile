import React, { useEffect, useRef } from "react";
import * as Style from "./CardInfo.style";

const CardInfo = ({ img }) => {
  const canvasRef = useRef(null);

  return (
    <Style.CardContainer>
      <Style.ImageContainer>
        <img src={img} />
      </Style.ImageContainer>
      <Style.NameContainer> Tal Shefer </Style.NameContainer>
      <Style.EmailContainer> tal.s@prpl.io </Style.EmailContainer>
    </Style.CardContainer>
  );
};

export default CardInfo;
