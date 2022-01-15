import styled from "styled-components";

export const Image = styled.img.attrs(({ src }) => ({
  src,
}))`
  height: 800px;
  width: 800px;
`;
