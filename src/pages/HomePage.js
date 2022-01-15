import React from 'react';
import styled from 'styled-components';
import UserProfileEdit from '../components/UserProfileEdit/UserProfileEdit';

const HomePage = () =>{
  return (
    <StyledDiv>
    <UserProfileEdit/>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`


export default HomePage;
