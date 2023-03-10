import { useComponentProps } from "@limio/sdk";
import type { Group } from "@limio/types/offers";

type StaticProps = {
  ineligibleHeading: string,
  ineligibleMessage: string,
  componentId: string,
  fullPriceUrl: string,
  fullPriceLabel: string,
  groupLabels: Group[],
  bestValueText: string,
  buttonText: string,
  buttonUrl: string,
  preselectFirstOfferInGroup: boolean,
};

const defaultComponentProps: $Shape<StaticProps> = {
  ineligibleHeading: "Pick another offer",
  ineligibleMessage: "You’ve already used your free trial.",
  fullPriceUrl: "/full-price",
  fullPriceLabel: "Click here",
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
  bestValueText: "Best value",
  buttonText: "View multi-year offers",
  buttonUrl: "/multi",
  preselectFirstOfferInGroup: false,
  componentId: "grouped-offers-component-limio",
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
}
