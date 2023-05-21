export interface MediaProps {
  mobile: { maxWidth: string };
  tablet: { minWidth: string; maxWidth: string; midWidth: string };
}

export const theme: MediaProps = {
  mobile: {
    maxWidth: "699px",
  },
  tablet: {
    minWidth: "700px",
    maxWidth: "1440px",
    midWidth: "1050px",
  },
};
