import React from "react";
import CardInfo from "../components/CardInfo";
import UserProfile from "../components/UserProfile/UserProfile";
import FaqSection from "../components/FaqSection";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import { useLocation } from "react-router";

const UserDetailsPage = () => {
  const { state } = useLocation();
  const { job, about, img, number, company } = state;

  return (
    <>
      <StyleContainer>
        <CardInfo img={img} />
        <UserProfile
          job={job}
          about={about}
          number={number}
          company={company}
        />
      </StyleContainer>
      <FaqSection />
    </>
  );
};

const StyleContainer = styled.div`
  display: flex;
  gap: 10%;
  row-gap: 10%;
  flex-wrap: wrap;
  margin: 1rem;
  margin-top: 60px;
  height: 60%;
  justify-content: flex-start;
`;
export default UserDetailsPage;
