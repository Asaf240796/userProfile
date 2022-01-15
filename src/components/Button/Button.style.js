import styled from "styled-components";

export const Title = styled.div`
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
`

export const Button = styled.button`
height: 40px;
align-self: flex-end;
  width: 115px;
  user-select: none;
  background-color: #734EE1;
  outline: none;
  padding: 0px;
  position: relative;
  font-weight: 500;
  font-size: 35px;
  border-radius: 4px;
  transition: 0.6s;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    transform: translateX(-100px) skewX(-15deg);
  }
  &:hover {
    background: #734EE1;
    cursor: pointer;
    &:before {
      transform: translateX(300px) skewX(-15deg);
      opacity: 0.6;
      transition: 2.7s;
    }
  }
`;
