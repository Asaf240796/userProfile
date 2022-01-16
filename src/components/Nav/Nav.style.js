import styled from "styled-components";

export const StyledNav = styled.nav`
  min-height: 30px;
  display: flex;
  background-color: white;
  padding: 10px;
`;

export const Avatar = styled.img.attrs(({ src }) => ({
  src,
}))`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

export const LogoConatiner = styled.div`
  margin-left: 40px;
  flex-grow: 1;
`;
