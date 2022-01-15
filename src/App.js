import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import UserDetailsPage from "./pages/UserDetailsPage";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router";
import styled from "styled-components";
import { MAIN_PAGE, SECOND_PAGE } from "./router/routes";

export const StyleLogo = styled.img.attrs(({ src }) => ({
  src,
}))`
  width: 311px;
  height: 53px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path={MAIN_PAGE} element={<HomePage />} />
        <Route path={SECOND_PAGE} element={<UserDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
