import logo from "../assets/pic/logo.png";
import React from "react";
import { StyledHeader, Nav, Logo, Text } from "../Styles/header.style";
import { Button } from "../Styles/itemListStyle.style";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Text>
          <Logo src={logo} alt="logo" />
        </Text>
        <Button>Try Pro</Button>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
