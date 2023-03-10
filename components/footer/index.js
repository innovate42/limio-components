// @flow
import React, { useEffect, useState } from "react";
import type { FooterProps } from "./types";
import FooterNavigation from "./components/FooterNavigation";
import CountryPicker from "./components/CountryPicker";
import ContactFields from "./components/ContactFields";
import Logo from "./components/Logo";
import SocialLinks from "./components/SocialLinks";
import { useLimio } from "@limio/sdk";
import { getCookie } from "@limio/utils/cookie";
import countriesJson from "@limio/resources/countries.json";
import "./index.css";
import { useComponentStaticProps } from "./componentStaticProps";

const Footer = ({
  enableLogo,
  logo,
  logoSize,
  contactFields = [],
  copyrightText,
  facebookLink,
  twitterLink,
  instagramLink,
  privacyLink,
  poweredByLink,
  showJourneyCountryPicker,
  navigation,
  navigationDivider,
  navigationPosition,
  navigationAlignment,
  componentId,
}: FooterProps) => {
  // const {
  //   enableLogo,
  //   logo,
  //   logoSize,
  //   contactFields = [],
  //   copyrightText,
  //   facebookLink,
  //   twitterLink,
  //   instagramLink,
  //   privacyLink,
  //   poweredByLink,
  //   showJourneyCountryPicker,
  //   navigation,
  //   navigationDivider,
  //   navigationPosition,
  //   navigationAlignment,
  //   componentId,
  // } = useComponentStaticProps();

  const [currentCountrySelection, setCurrentCountrySelection] = useState({
    countryCode: "",
    label: "",
    link: "/",
  });
  const [journeyCountries, setJourneyCountries] = useState([]);

  const { pageBuilder__limio } = useLimio();

  useEffect(() => {
    const limioCountry = !pageBuilder__limio
      ? getCookie("limio-country")
      : "GB";

    if (limioCountry) {
      setCurrentCountrySelection({
        countryCode: limioCountry,
        label: countriesJson[limioCountry],
        link: "/",
      });
    }

    const cookieJourney = !pageBuilder__limio
      ? getCookie("limio-journey")
      : "/myjourney";
    const countriesCookie = !pageBuilder__limio
      ? getCookie("limio-journey-countries") || "[]"
      : '["GB", "US"]';
    const cookieJourneyCountries = JSON.parse(countriesCookie);

    if (cookieJourney && cookieJourneyCountries) {
      setJourneyCountries(
        cookieJourneyCountries.map((country) => ({
          countryCode: country,
          label: countriesJson[country],
          link: `${cookieJourney}?lmo_co=${country}`,
        }))
      );
    }
  }, [pageBuilder__limio]);

  return (
    <div className="FooterOuter" id={componentId}>
      <div className="FooterWrapper">
        {navigationPosition === "top" && (
          <FooterNavigation
            items={navigation}
            alignment={navigationAlignment}
            divider={navigationDivider}
          />
        )}
        <div className="FooterContent">
          {enableLogo && <Logo logo={logo} logoSize={logoSize} />}
          {navigationPosition === "middle" && (
            <FooterNavigation
              items={navigation}
              alignment={navigationAlignment}
              divider={navigationDivider}
            />
          )}
          <div className="FooterSections">
            <div className="FooterLeft">
              <ContactFields contactFields={contactFields} />
            </div>
            <div className="FooterRight">
              <SocialLinks
                facebookLink={facebookLink}
                twitterLink={twitterLink}
                instagramLink={instagramLink}
              />
              <a
                className="FooterLink"
                href={privacyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Privacy Policy</p>
              </a>
              {copyrightText && <p>{copyrightText}</p>}
              {poweredByLink && (
                <p>
                  Powered by{" "}
                  <a
                    id="powered-link"
                    href={poweredByLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Limio
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
        {navigationPosition === "bottom" && (
          <FooterNavigation
            items={navigation}
            alignment={navigationAlignment}
            divider={navigationDivider}
          />
        )}
        {/* Use new cookie logic to display country picker */}
        {showJourneyCountryPicker && (
          <CountryPicker
            countries={journeyCountries}
            selected={currentCountrySelection}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
