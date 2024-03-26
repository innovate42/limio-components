// @flow
export type CancelReason = {
  id: string,
  label: string,
  url: string,
  buttonImage: string,
  straightToUrl__limio_boolean: boolean,
  showCta__limio_boolean: boolean,
  ctaText: string,
  ctaImage: string,
  segments__limio_segments: string[],
};

export type CancelSurveyProps = {
  title?: string,
  subtitle?: string,
  arrange?: "horizontal" | "vertical",
  reasons?: CancelReason[],
  goBackUrl?: string,
  redirectUrl: string,
  feedbackPlaceholder?: string,
  confirmationTitle: string,
  confirmationBody: string,
  confirmationOk: string,
  confirmationCancel: string,
  iconPrimary__limio_color?: string,
  iconSecondary__limio_color?: string,
  backgroundColor__limio_color?: string,
  componentId?: string,
  pageBuilder__limio?: boolean,
};

export const DefaultCancelProps: CancelSurveyProps = {
  title: "Before you go",
  subtitle: "Please tell us why you want to cancel your subscription",
  arrange: "horizontal",
  reasons: [
    {
      id: "expensive",
      label: "This subscription is too expensive",
      url: "/save",
      buttonImage: "",
      straightToUrl__limio_boolean: false,
      showCta__limio_boolean: true,
      ctaText: "We can offer you a discount.",
      ctaImage: "",
      segments__limio_segments: [],
    },
    {
      id: "quantity",
      label: "I have too much",
      url: "mailto:support@limio.com",
      buttonImage: "",
      straightToUrl__limio_boolean: false,
      showCta__limio_boolean: true,
      ctaText: "We understand. Please contact us to talk about your options.",
      ctaImage: "",
      segments__limio_segments: [],
    },
    {
      id: "dislike",
      label: "I did not like the membership benefits",
      url: "",
      buttonImage: "",
      straightToUrl__limio_boolean: false,
      showCta__limio_boolean: false,
      ctaText: "",
      ctaImage: "",
      segments__limio_segments: [],
    },
    {
      id: "alternative",
      label: "I found an alternative",
      url: "",
      buttonImage: "",
      straightToUrl__limio_boolean: false,
      showCta__limio_boolean: false,
      ctaText: "",
      ctaImage: "",
      segments__limio_segments: [],
    },
    {
      id: "other",
      label: "Other reasons",
      url: "",
      buttonImage: "",
      straightToUrl__limio_boolean: false,
      showCta__limio_boolean: false,
      ctaText: "",
      ctaImage: "",
      segments__limio_segments: [],
    },
  ],
  goBackUrl: "/mma",
  redirectUrl: "/mma",
  feedbackPlaceholder:
    "Tell us what you would have made your experience better",
  confirmationTitle: "Are you sure you want to cancel?",
  confirmationBody:
    "Your subscription will lapse at the end of your term and you will lose all benefits.",
  confirmationOk: "OK",
  confirmationCancel: "Cancel",
  iconPrimary__limio_color: "rgba(0,0,0,.3)",
  iconSecondary__limio_color: "rgba(0,0,0,.1)",
  backgroundColor__limio_color: "#fff",
  componentId: "cancel-survey-limio-next",
  pageBuilder__limio: true,
};
