import React from "react";
import { Description, Logo, LogoContainer, LoveText, MouseIcon, StyledHeader, Title, TitleSection } from "./StyledHeader";
import logo from "../../assets/logo.svg";
import mouse from "../../assets/icon-scroll.svg";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </LogoContainer>
      <TitleSection>
        <Title>
          Get paid for the work you <LoveText>love</LoveText> to do.
        </Title>
        <Description>
          The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.
        </Description>
        <MouseIcon>
          <img src={mouse} alt="Mouse icon" />
        </MouseIcon>
      </TitleSection>
    </StyledHeader>
  );
};

export default Header;
