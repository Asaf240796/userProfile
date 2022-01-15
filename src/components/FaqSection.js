import React from "react";
import styled from "styled-components";
import { StyleLogo } from "../App";
import Logo from "./asserts/Logo";

const FaqSection = () => {
  return (
    <>
      <Faq className="faq">
        <div>How it works?</div>
        <div>About Us</div>
        <div>FAQ</div>
        <div>Contact Us</div>
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
      </Faq>

      <LogoCoantainer>
        <Logo />
      </LogoCoantainer>
      <CreditText>All rights reserved by PURPLE 2021</CreditText>
    </>
  );
};

const Faq = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 10rem;
  padding: 0% 16%;
  border-top: 1px solid #a3acbd;

  div {
    margin-top: 10px;
    height: 25%;
    width: 180px;
    font: Gordita;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    /* line-height: 26px; */
    color: #151b26;
  }
`;
const LogoCoantainer = styled.div`
  margin: 20px 15%;
  border-top: 1px solid;
  padding: 10px;
`;

const StyledLineBottom = styled.div`
  border: 1px solid #a3acbd;
`;
const CreditText = styled.div`
  font: Gordita;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 0px;
  padding-left: 35%;
`;

export default FaqSection;
