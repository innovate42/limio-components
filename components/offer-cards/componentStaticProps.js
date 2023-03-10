import { useComponentProps } from "@limio/sdk";

type StaticProps = {
  external_pricing_link: string,
  external_pricing_text: string,
  offerWidth: string,
  offerOverflowLayout: string,
  ineligibleMessage: string,
  includedFeaturesTitle: string,
  groupLabels: Array<{ id: string, label: string }>,
  offerGrouping: boolean,
  maxCards: number | string,
  showOfferImages: boolean,
  alwaysMinimise: boolean,
};

const defaultComponentProps: $Shape<StaticProps> = {
  external_pricing_link: "/long-term",
  external_pricing_text: "View multi-year pricing",
  offerWidth: 3,
  offerOverflowLayout: "stretch",
  ineligibleMessage:
    "You are not eligible for a trial offer. Please select a different offer to continue.",
  includedFeaturesTitle: "Whats Included?",
  groupLabels: [
    {
      id: "digital",
      label: "Digital",
    },
    {
      id: "bundle",
      label: "Print + Digital",
    },
  ],
  offerGrouping: false,
  maxCards: "",
  showOfferImages: false,
  alwaysMinimise: false,
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
}
