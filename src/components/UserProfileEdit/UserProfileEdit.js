import React, { useContext, useState } from "react";
import styled from "styled-components";
import PhotoUpload from "../PhotoUpload";
import PhoneNumber from "../PhoneNumber";
import * as Styled from "../shared/UserProfile.style";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { SECOND_PAGE } from "../../router/routes";
import ColorSelector from "./ColorSelector";

export const ImageContext = React.createContext();

const UserProfileEdit = () => {
  const [color, setColor] = useState("black");
  const [font, setFontWeight] = useState("normal");
  const [job, setJob] = useState({ text: "", error: false });
  const [company, setCompany] = useState({ text: "", error: false });
  const [about, setAbout] = useState("");
  const [number, setNumber] = useState("");
  const [files, setFiles] = useState("");

  const navigate = useNavigate();

  const handleChangeJob = (e) => {
    const text = e.target.value;
    if (text.length > 20) {
      setJob((prev) => ({ ...prev, error: true }));
    } else {
      setJob({ error: false, text });
    }
  };

  const handleChangeCompany = (e) => {
    const text = e.target.value;
    if (text.length > 20) {
      setCompany((prev) => ({ ...prev, error: true }));
    } else {
      setCompany({ error: false, text });
    }
  };
  const handleChangeAbout = (e) => {
    const text = e.target.value;
    setAbout(text);
    setFontWeight(text);
  };

  const handleSave = () => {
    navigate(SECOND_PAGE, {
      state: {
        job: job.text,
        number: number,
        about: about,
        company: company.text,
        img: files,
      },
    });
  };

  return (
    <Styled.Container>
      <Styled.Header>User profile</Styled.Header>
      <Styled.EditContainer>
        <Styled.ProfilePictureHeaderContainer>
          <Styled.ProfilePictureHeader>
            Profile picture
          </Styled.ProfilePictureHeader>
          <ImageContext.Provider value={[files, setFiles]}>
            <PhotoUpload cropImage={files} />
          </ImageContext.Provider>
        </Styled.ProfilePictureHeaderContainer>
        <Styled.SubHeader>Job title</Styled.SubHeader>
        <Styled.Input
          error={job.error}
          value={job.text}
          onChange={handleChangeJob}
        />
        <Styled.SubHeader>Current company</Styled.SubHeader>
        <Styled.Input
          error={company.error}
          value={company.text}
          onChange={handleChangeCompany}
        />
        <Styled.SubHeader>About yourself</Styled.SubHeader>
        <ColorSelector setColor={setColor} setFontWeight={setFontWeight} />
        <Styled.AboutYourselfInput
          color={color}
          font={font}
          value={about}
          onChange={handleChangeAbout}
        />
        <PhoneNumber number={number} handleChangeNumber={setNumber} />
        <Button callBack={handleSave}>save</Button>
      </Styled.EditContainer>
    </Styled.Container>
  );
};

export default UserProfileEdit;
