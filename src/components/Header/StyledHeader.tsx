import styled from "styled-components";
import bgCenter from "../../assets/bg-hero-squiggle.svg";
import bgLeft from "../../assets/illustration-hero-left.svg";
import bgRight from "../../assets/illustration-hero-right.svg";
import bgMobile from "../../assets/illustration-hero-mobile.png";
import { MediaProps } from "../GlobalStyles/theme";

interface Props {
  theme: MediaProps;
}

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 114px;
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    background: url(${bgMobile}) 0 140px / 100% auto no-repeat;
  }
`;
export const LogoContainer = styled.div`
  padding: 81px 0 0 165px;
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 65px 0;
  }
  @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.midWidth}) {
    padding: 48px 0 0 39px;
  }
`;
export const Logo = styled.div`
  width: 120px;
  height: 35px;
`;
export const TitleSection = styled.section<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  max-width: 540px;
  height: 459px;
  background: url(${bgCenter}) no-repeat;
  ::before {
    content: url(${bgLeft});
    position: absolute;
    left: 0;
    @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
      content: "";
    }
    @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.midWidth}) {
      left: -300px;
    }
    @media (min-width: 1050px) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
      left: -120px;
    }
  }
  ::after {
    content: url(${bgRight});
    position: absolute;
    right: 0;
    @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
      content: "";
    }
    @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.midWidth}) {
      right: -300px;
    }
    @media (min-width: 1050px) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
      right: -120px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    max-width: 327px;
    padding-top: 60%;
    background: none;
  }
  @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    max-width: 457px;
  }
`;
export const Title = styled.h1`
  margin-bottom: 24px;
  font-weight: var(--bold);
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    font-size: 32px;
    line-height: 40px;
  }
`;
export const Description = styled.p`
  margin-bottom: 64px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
`;
export const MouseIcon = styled.div`
  width: 26px;
  height: 42px;
`;

export const LoveText = styled.span`
  color: var(--turqoise);
`;
