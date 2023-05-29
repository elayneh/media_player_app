import React from "react";
import logo from "../assets/images/logo.png";
import {
  StyledHeader,
  Nav,
  Logo,
  Text,
  HeaderText,
} from "../styles/Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Text>
          <Logo src={logo} alt="LOGO" />
        </Text>
        <HeaderText> Addis Media</HeaderText>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
