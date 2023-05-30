import React from "react";
import styled from "styled-components";
import SingleBenefit from "./SingleBenefit";
import { befenitsContent } from "./content";

export interface SingleBenefitProps {
  title: string;
  description: string;
  img: string;
}

const StyledBenefits = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 209px 165px 0 165px;
  > div:nth-child(even) {
    margin-top: 50px;
  }
  @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    flex-direction: column;
    align-items: center;
    padding: 109px 0 0 0;
    > div:nth-child(even) {
      margin-top: 0;
      margin-right: 90px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    flex-direction: column;
    align-items: center;
    padding: 150px 0 0 0;
    > div:nth-child(even) {
      margin: 0;
    }
  }
`;

const Benefits: React.FC = () => {
  return (
    <StyledBenefits>
      {befenitsContent.map(
        ({ title, description, img }: SingleBenefitProps, index): React.ReactNode => (
          <SingleBenefit title={title} description={description} img={img} key={index} />
        )
      )}
    </StyledBenefits>
  );
};

export default Benefits;
