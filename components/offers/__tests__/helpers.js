import React from "react"

export const offers = [
  {
    path: "/offers/UK Student Offer Campaign/student-offer",
    data: {
      created: "2020-08-18T13:03:30+00:00",
      isAuthenticated: true,
      type: "item",
      record_type: "offer",
      tags: ["/tags/ukstudent"],
      products: [
        {
          baseTemplate: "/limio/catalogs/1/items/config/templates/products/ProductBase",
          path: "/products/Limio/All Content",
          name: "All Content",
          modified: "2020-07-16T09:36:49+00:00",
          attributes: {
            "Device Access": ["Tablet", "Web", "Mobile"],
            "Product description": "<p>Product description</p>",
            "Product Family": "Digital",
            has_delivery__limio: true,
            product_code__limio: "TE.DIGITALFULL"
          }
        }
      ],
      segments: [],
      baseTemplate: "/config/templates/offers/OfferBase",
      childSorting: { "/offers/UK Student Offer Campaign/student-offer": 0, "/offers/UK Student Offer Campaign/student-offer2": 1 },
      familyName: "offers",
      name: "student-offer",
      modified: "2020-08-19T12:51:59+00:00",
      attachments: [
        {
          type: "image",
          url: "dummy-offer-image-1"
        },
        {
          type: "image",
          url: "dummy-offer-image-2"
        }
      ],
      attributes: {
        allow_multibuy__limio: true,
        payment_types__limio: ["apple_pay", "credit_card", "zuora_card"],
        price__limio: [
          {
            delay_interval_type: "months",
            subscription_start_day: "",
            delay_interval: null,
            label: "Charge 1",
            trigger: "",
            repeat_count: 0,
            type: "",
            name: "charge_1",
            repeat_interval: "1",
            attributes: [],
            repeat_interval_type: "months",
            value: "12.00",
            currencyCode: "GBP"
          }
        ],
        offer_features__limio: "<ul><li>Feature 1 </li><li>Feature 2 </li><li>Feature 3</li></ul>",
        detailed_display_price__limio: "£12 a month for a year",
        display_name__limio: "Student Subscription",
        display_price__limio: "£12 a month",
        cta_text__limio: "Subscribe"
      },
      referencedPage: "",
      status: "draft"
    },
    name: "student-offer",
    parent_path: "/offers/UK Student Offer Campaign",
    id: "c83055bb8d72d5e6f548b8628bf3fa386a40636d.97d170e1550eee4afc0af065b78cda302a97674c",
    type: "item"
  }
]

export const testProps = {
  inBasket: false,
  primaryColor: "#c03467",
  offerOverflowLayout: "end",
  removeFromBasket: jest.fn(),
  imageShape: "round",
  imagePosition: "top",
  showAllImages: true,
  showLearnMore: true,
  shadow: true,
  border: false,
  roundCorners: true,
  learnMoreText: "Learn more",
  setUseTransform: true,
  useTransform: true,
  invertCTA: false,
  thumbnailPosition: "left",
  productSelectText: "Choose One",
  offerWidth: "2",
  removeText: "Remove"
}

export const externalOffers = [
  {
    data: {
      attributes: {
        checkout__limio: {
          external_url: "http://www.limio.com",
          checkout_type: "external"
        }
      }
    }
  }
]
