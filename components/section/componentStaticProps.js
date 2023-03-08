// @flow
import { useComponentProps } from "@limio/sdk";

type StaticProps = {
  bgColor__limio_color: string,
  wrapperBgColor__limio_color: string,
  componentId: string,
  image: string,
  imageShape: string,
  imagePosition: string,
  imageCaption__limio_richtext: string,
  showButtons: boolean,
  buttons: Array<{
    buttonText: string,
    buttonLocation: string,
  }>,
  header: string,
  text__limio_richtext: string,
  secondaryTextImage: string,
  componentId: string,
};

const defaultComponentProps: $Shape<StaticProps> = {
  bgColor__limio_color: "#ECECEC",
  wrapperBgColor__limio_color: "#FFFFFF",
  image: "",
  imageShape: "",
  imagePosition: "left",
  imageCaption__limio_richtext: "Lorem ipsum dolor sit amet.",
  showButtons: true,
  buttons: [
    {
      buttonText: "Learn More",
      buttonLocation: "https://limio.com",
    },
  ],
  header: "Lorem ipsum dolor sit amet.",
  text__limio_richtext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  secondaryTextImage: "",
  componentId: "section-limio",
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
  return componentProps;
}
