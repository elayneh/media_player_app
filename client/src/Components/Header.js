import React from "react";
import logo from "../assets/images.jpeg";
import { StyledHeader, Nav, Logo, Text } from "./Styles/Header.style";
import { Button } from "./Styles/SongListStyle.style";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Text>
          <Logo src={logo} alt="logo" />
        </Text>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
