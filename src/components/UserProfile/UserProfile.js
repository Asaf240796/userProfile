import React from "react";

import PhoneNumber from "../PhoneNumber";
import * as Styled from "../shared/UserProfile.style";

const UserProfile = ({ job, about, number, company }) => {
  return (
    <Styled.Container>
      <Styled.Header>User profile</Styled.Header>
      <Styled.EditContainer>
        <Styled.SubHeader>Job title</Styled.SubHeader>
        <Styled.Input disabled value={job} />
        <Styled.SubHeader>Current company</Styled.SubHeader>
        <Styled.Input disabled value={company} />
        <Styled.SubHeader>About yourself</Styled.SubHeader>
        <Styled.AboutYourselfInput disabled value={about} />
        <PhoneNumber disabled number={number} />
      </Styled.EditContainer>
    </Styled.Container>
  );
};

export default UserProfile;
