import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 85%;
`;

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fafafb;
`;

export const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #151b26;
  margin-bottom: 20px;
`;

export const ProfilePictureHeaderContainer = styled.div`
  box-shadow: 0px 0px 0px 1px rgba(63, 63, 68, 0.05),
    0px 1px 3px rgba(63, 63, 68, 0.15);
  border-radius: 3px;
  padding: 20px;
`;

export const ProfilePictureHeader = styled.div`
  color: #212b36;
  font-size: 18px;
  margin-bottom: 25px;
  border-radius: nullpx;
`;

export const SubHeader = styled.div`
  font-size: 18px;
  color: #151b26;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input.attrs(({ value }) => ({
  type: "text",
  value,
}))`
  border-color: ${({ error = false }) => (error ? "red" : "black")};
  border-radius: 20px;
  padding: 8px;
  :focus {
    border-color: ${({ error = false }) => (error ? "red" : "aquamarine")};
    outline: none;
  }
`;

export const AboutYourselfInput = styled.textarea.attrs(({ value }) => ({
  type: "text",
  value,
}))`
  height: 200px;
  border-radius: 20px;
  padding: 8px;
  color: ${({ color }) => color};
  font-weight: ${({ font }) => font};
  :focus {
    border-color: aquamarine;
    outline: none;
  }
`;
