import { useComponentProps } from "@limio/sdk";

type StaticProps = {
  header: string,
  subheader: string,
  mobileSwipe: boolean,
  showSwipeArrows: boolean,
  arrowColor__limio_color: string,
  squareTheme: Boolean,
  imageFit: string,
  features: Array,
  componentId: string,
};

const defaultComponentProps: $Shape<StaticProps> = {
  header: "Lorem ipsum dolor sit amet",
  subheader:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit.",
  mobileSwipe: true,
  showSwipeArrows: true,
  arrowColor__limio_color: "#4444444",
  sqareTheme: false,
  imageFit: "cover",
  features: [
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit0.png",
      header: "Download Music.",
      text: "Listen anywhere.",
      showButton__limio_boolean: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit1.png",
      header: "Listen without ads.",
      text: "Enjoy nonstop music.",
      showButton__limio_boolean: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit2.png",
      header: "Play any song.",
      text: "Even on mobile.",
      showButton__limio_boolean: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
    {
      image: "https://campaigns.scdn.co/images/midyear-prem-benefit3.png",
      header: "Unlimited skips.",
      text: "Just hit next.",
      showButton__limio_boolean: false,
      buttonText: "Click here",
      buttonLink: "https://www.limio.com",
    },
  ],
  componentId: "features-limio",
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
}
