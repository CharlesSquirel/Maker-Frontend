import React from "react";
import {
  StyledPricing,
  TextWrapper,
  Title,
  Description,
  CardWrapper,
  CardDip,
  CardDive,
  CardDipTitle,
  CardDiveTitle,
  CardDipDescription,
  CardDiveDescription,
  CardDipSlogan,
  CardDiveSlogan,
  CardDipList,
  CardDiveList,
} from "./StyledPricing";

// type ListContentProps = [string[], string[]];

// const listContent: ListContentProps = [
//   ["Unlimited products", "Basic analytics", "Limited marketplace exposure", "10% fee per transaction"],
//   ["Custom domain", "Advanced analytics and reports", "High marketplace visibility", "5% fee per transaction"],
// ];

const Pricing = () => {
  return (
    <StyledPricing>
      <TextWrapper>
        <Title>Our pricing plans</Title>
        <Description>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</Description>
      </TextWrapper>
      <CardWrapper>
        <CardDip>
          <CardDipTitle>Dip your toe</CardDipTitle>
          <CardDipDescription>Just getting started? No problem at all! Our free plan will take you a long way.</CardDipDescription>
          <CardDipSlogan>Free</CardDipSlogan>
          <CardDipList>
            {/* {listContent[0].map((item, index) => (
              <li key={index}>{item}</li>
            ))} */}
            <li>Unlimited products</li>
            <li>Basic analytics</li>
            <li>Limited marketplace exposure</li>
            <li>10% fee per transaction</li>
          </CardDipList>
        </CardDip>
        <CardDive>
          <CardDiveTitle>Dive right in</CardDiveTitle>
          <CardDiveDescription>Ready for the big time? Our paid plan will help you take your business to the next level.</CardDiveDescription>
          <CardDiveSlogan>
            $25.00 <span>/month</span>
          </CardDiveSlogan>
          <CardDiveList>
            {/* {listContent[1].map((item, index) => (
              <li key={index}>{item}</li>
            ))} */}
            <li>Custom domain</li>
            <li>Advanced analytics and reports</li>
            <li>High marketplace visibility</li>
            <li>5% fee per transaction</li>
          </CardDiveList>
        </CardDive>
      </CardWrapper>
    </StyledPricing>
  );
};

export default Pricing;
