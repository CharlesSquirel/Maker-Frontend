import React from "react";
import { Description, ImgContainer, StyledBenefit, TextContainer, Title } from "./StyledSingleBenefit";
import { SingleBenefitProps } from "./Benefits";

const SingleBenefit = ({ title, description, img }: SingleBenefitProps) => {
  return (
    <StyledBenefit>
      <ImgContainer>
        <img src={img} alt={title} />
      </ImgContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
    </StyledBenefit>
  );
};

export default SingleBenefit;
