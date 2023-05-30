import styled from "styled-components";

export const StyledPricing = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 105px;
  padding-top: 200px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 540px;
`;
export const Title = styled.h2`
  font-weight: var(--bold);
  font-size: 32px;
  line-height: 44px;
  text-align: center;
`;
export const Description = styled.p`
  line-height: 25px;
  text-align: center;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
  width: 100vw;
`;
export const CardDip = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 445px;
  height: 425px;
  background: #093f68;
  border-radius: 8px;
`;
export const CardDive = styled(CardDip)`
  height: 450px;
  background: #3ee9e5;
`;
export const CardDipTitle = styled.h3`
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 25px;
`;
export const CardDiveTitle = styled(CardDipTitle)`
  color: var(--dark-blue);
`;
export const CardDipDescription = styled.p`
  line-height: 25px;
  opacity: 0.6;
`;
export const CardDiveDescription = styled(CardDipDescription)`
  color: var(--dark-blue);
`;
export const CardDipSlogan = styled.p`
  font-weight: var(--bold);
  font-size: 40px;
  line-height: 55px;
  color: var(--white);
`;
export const CardDiveSlogan = styled(CardDipSlogan)`
  color: var(--dark-blue);
  span {
    font-weight: var(--regular);
    font-size: 15px;
    line-height: 25px;
    opacity: 0.6;
  }
`;
export const CardDipList = styled.ul`
  line-height: 25px;
`;
export const CardDiveList = styled.ul`
  line-height: 25px;
  color: var(--dark-blue);
`;
