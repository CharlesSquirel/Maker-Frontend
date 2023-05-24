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
`;

const Benefits: React.FC = () => {
  return (
    <StyledBenefits>
      {befenitsContent.map(
        ({ title, description, img }: SingleBenefitProps): React.ReactNode => (
          <SingleBenefit title={title} description={description} img={img} />
        )
      )}
    </StyledBenefits>
  );
};

export default Benefits;
