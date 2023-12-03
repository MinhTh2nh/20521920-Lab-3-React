// Footer.js
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-color: #364768;
    color: white;
    padding: 0.5rem;
    text-align: center;
`;

const ContactInfo = styled.div``;

const Footer = () => {
  return (
    <FooterWrapper>
      <h2>Contact Information</h2>
      <ContactInfo>
        <p>Email: minhthanh5346@gmail.com</p>
        <p>GitHub: github.com/minhth2nh</p>
      </ContactInfo>
    </FooterWrapper>
  );
};

export default Footer;