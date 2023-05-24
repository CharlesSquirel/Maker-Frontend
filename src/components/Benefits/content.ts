import passionImg from "../../assets/illustration-passions.svg";
import financialImg from "../../assets/illustration-financial-freedom.svg";

interface SingleBenefitProps {
  title: string;
  description: string;
  img: string;
}

type BenefitsConentProps = SingleBenefitProps[];

export const befenitsContent: BenefitsConentProps = [
  {
    title: "Indulge your passions",
    description: "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
    img: passionImg,
  },
  {
    title: "Gain financial freedom",
    description: "Start making money work for you. There’s nothing quite like earning while you sleep.",
    img: financialImg,
  },
  {
    title: "Choose your lifestyle",
    description: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
    img: "../../assets/illustration-lifestyle.svg",
  },
  {
    title: "Work from anywhere",
    description: "Selling online means not being pinned down. Want to work AND travel? Go for it!",
    img: "../../assets/illustration-work-anywhere.svg",
  },
];
