import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styled from "styled-components";

const PhoneNumber = ({ number, handleChangeNumber, disabled = false }) => {
  return (
    <StyledPhoneInput>
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="IL"
        placeholder={number}
        value={number}
        onChange={handleChangeNumber}
        disabled={disabled}
      />
    </StyledPhoneInput>
  );
};

const StyledPhoneInput = styled.div`
  width: fit-content;
  padding: 1rem 1rem 1rem 1rem;
`;
export default PhoneNumber;
