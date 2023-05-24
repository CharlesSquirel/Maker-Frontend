import styled from "styled-components";

export const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 255px;
  @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    flex-direction: row;
    gap: 55px;
    width: 515px;
    height: 124px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    align-items: center;
  }
`;
export const ImgContainer = styled.div`
  display: grid;
  place-items: center;
  width: 160px;
  height: 164px;
  background: var(--blue);
  border-radius: 45px;
  @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    width: 120px;
    height: 124px;
    img {
      transform: scale(0.75);
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media (min-width: ${({ theme }) => theme.tablet.minWidth}) and (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    width: 340px;
    text-align: left;
  }
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-weight: var(--bold);
  font-size: 18px;
  line-height: 25px;
`;
export const Description = styled.p`
  line-height: 25px;
`;
