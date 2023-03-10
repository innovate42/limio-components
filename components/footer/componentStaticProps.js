import { useComponentProps } from "@limio/sdk";

type StaticProps = {
  enableLogo: boolean,
  logo: string,
  logoSize: string,
  contactFields: Array<{
    label: string,
    value: string,
    url: string,
  }>,
  copyrightText: string,
  poweredByLink: string,
  facebookLink: string,
  twitterLink: string,
  instagramLink: string,
  privacyLink: string,
  showJourneyCountryPicker: boolean,
  navigation: Array<{
    label: string,
    url: string,
  }>,
  navigationDivider: string,
  navigationPosition: string,
  navigationAlignment: string,
  componentId: string,
};

const defaultComponentProps: $Shape<StaticProps> = {
  enableLogo: true,
  logo: "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png",
  logoSize: "10",
  contactFields: [
    {
      label: "Email:",
      value: "support@limio.com",
      url: "mailto:support@limio.com",
    },
    {
      label: "Telephone:",
      value: "020 1234 1234",
      url: "tel:020 1234 1234",
    },
    {
      label: "Address:",
      value: "Leather Market, Weston Street, London, SE1 3ER",
      url: "",
    },
  ],
  copyrightText: "Copyright © 2019 Limio",
  poweredByLink: "https://www.limio.com",
  facebookLink: "",
  twitterLink: "",
  instagramLink: "",
  privacyLink: "https://www.limio.com/privacy",
  showJourneyCountryPicker: true,
  navigation: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Gift",
      url: "/gift",
    },
    {
      label: "Manage My Account",
      url: "/mma",
    },
  ],
  navigationDivider: "-",
  navigationPosition: "bottom",
  navigationAlignment: "center",
  componentId: "footer",
};

export function useComponentStaticProps(): StaticProps {
  const componentProps = useComponentProps(defaultComponentProps);
}
