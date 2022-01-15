import React from "react";
import Logo from "../asserts/Logo";
import * as Styled from "./Nav.style";

const Nav = () => {
  return (
    <Styled.StyledNav>
      <Styled.LogoConatiner>
        <Logo />
      </Styled.LogoConatiner>
    </Styled.StyledNav>
  );
};

export default Nav;
