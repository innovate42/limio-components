import { useComponentProps } from "@limio/sdk";

type StaticProps = {
  logo: string,
  componentId: string,
};

const defaultComponentProps: $Shape<StaticProps> = {
  logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
  componentId: "header-limio",
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
}
