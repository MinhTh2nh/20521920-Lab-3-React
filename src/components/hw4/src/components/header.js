// Header.js
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #364768;
  color: white;
  padding: 0.5rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Nguyễn Minh Thành</h1>
      <p>Web Developer</p>
    </HeaderWrapper>
  );
};

export default Header;