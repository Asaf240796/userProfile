import styled from "styled-components";

export const CardContainer = styled.div`
  width: 255px;
  height: 196px;
  box-shadow: 0px 2px 4px rgba(194, 194, 194, 0.25);
  border-radius: 8px;

  padding: 1rem;
  margin-bottom: 1rem;
  margin-left: 100px;
`;

export const ImageContainer = styled.div`
  background: url(.jpg);
  border-radius: 8px;
`;

export const NameContainer = styled.div`
  /* Header H4 */
  display: flex;
  align-items: center;
  color: #151b26;

  font: Gordita;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
`;

export const EmailContainer = styled.div`
  font: Gordita;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #6b7381;
`;

// export const img = styled.img`
// width:84px;
// height: 84px;
// border-radius: 8px;
// `
