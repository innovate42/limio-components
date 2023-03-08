import { useComponentProps } from "@limio/sdk";

type StaticProps = {
  linkUnderline: boolean,
  dividers: boolean,
  dividerColor__limio_color: string,
  header: string,
  breadcrumbs: Array,
  componentId: string,
};

const defaultComponentProps: $Shape<StaticProps> = {
  linkUnderline: false,
  dividers: true,
  dividerColor__limio_color: "#000000",
  header: "my Account",
  breadcrumbs: [
    { text: "Manage My Account", url: "/mma" },
    { text: "Cancel", url: "/cancel" },
    { text: "Change Payment Method", url: "/change-payment" },
  ],
  componentId: "breadcrumbs-limio",
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
}
