// @flow
import React, { useState, useEffect, useMemo } from "react"
import Redeem from "@limio/component-redeem"
import NavHeader from "@limio/component-nav-header"
import { ComponentSelector } from "./ComponentSelector"
import { useLimioContext } from "@limio/sdk"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import { ErrorBoundary } from "./ErrorBoundary"
import "bootstrap/dist/css/bootstrap.min.css"
import "@limio/design-system/style.css"
import "./App.css"
import { Header } from "./Header"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer, { addToBasket } from "@i42/shared/src/shop/redux"
import dummyOffer from "@i42/component-playground/data/dummyOffer.json"
const components = [Redeem]

function createLocalStore(initialState) {
  const store = createStore(rootReducer(initialState))
  return store
}

const appStore = createLocalStore({ appConfig: { mode: "production" } })
appStore.dispatch(addToBasket(dummyOffer, null, 1))

function App() {
  const LimioContext = useLimioContext()
  let params = new URL(document.location).searchParams

  const [user, setUser] = useState({})
  const [endpoint, setEndpoint] = useState(params.get("endpoint") || "https://localhost:9002")
  const [key, setKey] = useState(0)
  const [selectedComponents, setSelectedComponents] = useState([Redeem])
  const [basketOpen, setBasketOpen] = useState(false)

  const context = useMemo(
    () => ({
      mode: "production",
      endpoint: endpoint,
      shop: {
        groupValues: [
          {
            id: "digital + print",
            label: "Digital and Print"
          },
          {
            id: "digital",
            label: "Digital"
          }
        ],
        loqate_country_codes: ["GB"],
        language: "fr",
        addToBasket: () => undefined,
        removeFromBasket: () => undefined,
        cancelOrder: () => undefined,
        updateOrder: obj => console.log(obj),
        basketItems: [],
        basketOpen,
        setBasketOpen,
        offer: {},
        primaryColor: "orange",
        secondaryColor: "grey",
        selectedCountry: "GB",
        tag: "/tags/ots",
        offers: [
          {
            item_id: "12cb89b3ef6bf4d8004b742ef9f90b107bd66fc1",
            segment_id: "931ce6c8216105ec66eded99aef3af2e57c682bd",
            id: "12cb89b3ef6bf4d8004b742ef9f90b107bd66fc1.931ce6c8216105ec66eded99aef3af2e57c682bd",
            path_parts: ["offers", "The Economist Digital - UK-UK", "2 Year"],
            parent_path: "/offers/The Economist Digital - UK-UK",
            path: "/offers/The Economist Digital - UK-UK/2 Year",
            name: "2 Year",
            type: "item",
            data: {
              attributes: {
                primary_color__limio: "#f47c24",
                secondary_color__limio: "#0e4f1b",
                tertiary_color__limio: "#020109",
                valid_date_range__limio: {
                  from: "2020-09-13T16:30:55.297Z",
                  to: "2020-10-01T16:30:59.747Z"
                },
                allowed_countries__limio: ["GB"],
                push_to_checkout__limio: true,
                term__limio: {
                  length: 2,
                  type: "years"
                },
                checkout__limio: {
                  checkout_type: "external",
                  external_url:
                    "https://sit-theeconomist.cs122.force.com/economist/s/authentication?starturl=https%3A%2F%2Feconomist-sit-shop.dev.limio.com%2Fcheckout"
                },
                display_name__limio: "2 year digital",
                display_price__limio: "Two years for £319",
                offer_features__limio:
                  '<p><span style="background-color: transparent; color: rgb(0, 0, 0);">Daily analysis on Economist.com</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">The weekly newspaper, digitally</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">The Economist app</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Exclusive newsletters</span></p>',
                cta_text__limio: "Buy now",
                payment_types__limio: ["zuora_paypal", "zuora_card"],
                price__limio: [
                  {
                    name: "charge_1",
                    label: "Charge 1",
                    value: "319.00",
                    currencyCode: "GBP",
                    type: "recurring",
                    trigger: "subscription_start",
                    repeat_interval: 2,
                    repeat_interval_type: "years",
                    repeat_count: 1,
                    delay_interval: null,
                    subscription_start_day: null,
                    attributes: [],
                    delay_interval_type: "years"
                  }
                ],
                rate_plan__zuora: "UK-UK A 2 Year",
                detailed_display_price__limio: "Cancel at any time",
                group__limio: "digital"
              },
              name: "2 Year",
              headline: "Limio helps you to sell subscriptions. This campaign shows how....",
              description:
                '<p><strong>Campaigns</strong> help you to deliver subscription conversion experiences, for example landing pages from ads or offer displays. This campaign will show how you can build them in <a href="https://sandbox.dev.limio.com/landing/index.html" target="_blank">Limio</a>.</p>',
              status: "draft",
              baseTemplate: "/config/templates/offers/OfferBase",
              team: "testTeam",
              user: "alexandr",
              tags: ["/tags/uk-uk/default"],
              validTo: "2019-07-31T12:30:00.000Z",
              validFrom: "2019-07-27T03:30:00.000Z",
              segments: ["/segments/regions/UK/UK/GB"],
              subline: "àáâãämåçèéêëìíîðñòôõöö",
              duplicatedFrom: "/offers/Example Campaign_v2",
              parent_path: "/offers/The Economist Digital - UK-UK",
              path: "/offers/The Economist Digital - UK-UK/2 Year",
              type: "item",
              modified: "2020-10-12T10:16:10+00:00",
              familyName: "offers",
              record_type: "offer",
              created: "2020-09-11T15:13:13+00:00",
              mobileStyle:
                "\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H2.my-0 {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 20px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H3.display-price {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .products SPAN {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .offer-images DIV.offer-img {\n            padding:  !important;\n            color:  !important;\n            justify-content: center !important;\n            margin: 5px 0px !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size:  !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesWrapper.mobile-swipe .FeaturesContainer .Feature .FeatureTextWrapper P {\n            padding: 9px 10px !important;\n            color: rgb(105, 118, 137) !important;\n            justify-content: normal !important;\n            margin: 8px 0px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesContainer .Feature .FeatureTextWrapper H3 {\n            padding: 0px 10px !important;\n            color: rgb(227, 18, 11) !important;\n            justify-content: normal !important;\n            margin: 14px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 18px !important;\n            font-style: normal !important;\n            font-weight: 500 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-d495b949-294c-42a2-8194-993ba7ed5831 .Section .SectionWrapper.left .BodyContainer .TextContainer .Text P {\n            padding: 0px 0px !important;\n            color: rgb(68, 68, 68) !important;\n            justify-content: center !important;\n            margin: 0px 0px !important;\n            align-items: center !important;\n            text-align: center !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}",
              tabletStyle: "",
              childSorting: {
                "/offers/The Economist Digital - UK-UK/2 Year": 1,
                "/offers/The Economist Digital - UK-UK/3 Year": 0,
                "/offers/The Economist Digital - UK-UK/Annual": 2,
                "/offers/The Economist Digital - UK-UK/Monthly": 3,
                "/offers/The Economist Digital - UK-UK/Quarterly": 4
              },
              products: [
                {
                  name: "Digital Premium",
                  baseTemplate: "/config/templates/products/ProductBase",
                  record_type: "product",
                  type: "item",
                  attributes: {
                    product_code__limio: "TE.DIGITALPREM",
                    description__limio: "<p>The Economist apps&nbsp;</p><p>Economist.com</p><p>Audio edition and podcasts</p>"
                  },
                  created: "2020-09-11T10:36:21+00:00",
                  modified: "2020-10-08T14:09:58+00:00",
                  path: "/products/Economist/Digital Premium"
                }
              ],
              attachments: [
                {
                  url: "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/831985/Asset_3_ivtnda.png",
                  type: "image/png",
                  path: "/assets/Images/Economist Digital Print",
                  name: "Economist Digital Print"
                }
              ],
              associations: {
                exchange: ["/offers/The Economist Digital - UK-UK"]
              }
            }
          },
          {
            item_id: "f99699c4f1403d88353d03eb857db330ff47b2dd",
            segment_id: "931ce6c8216105ec66eded99aef3af2e57c682bd",
            id: "f99699c4f1403d88353d03eb857db330ff47b2dd.931ce6c8216105ec66eded99aef3af2e57c682bd",
            path_parts: ["offers", "The Economist Digital - UK-UK", "3 Year"],
            parent_path: "/offers/The Economist Digital - UK-UK",
            path: "/offers/The Economist Digital - UK-UK/3 Year",
            name: "3 Year",
            type: "item",
            data: {
              attributes: {
                primary_color__limio: "#f47c24",
                secondary_color__limio: "#0e4f1b",
                tertiary_color__limio: "#020109",
                valid_date_range__limio: {
                  from: "2020-09-13T16:30:55.297Z",
                  to: "2020-10-01T16:30:59.747Z"
                },
                allowed_countries__limio: ["GB"],
                push_to_checkout__limio: true,
                term__limio: {
                  length: 3,
                  type: "years"
                },
                checkout__limio: {
                  checkout_type: "external",
                  external_url:
                    "https://sit-theeconomist.cs122.force.com/economist/s/authentication?starturl=https%3A%2F%2Feconomist-sit-shop.dev.limio.com%2Fcheckout"
                },
                display_price__limio: "Three years for £429",
                display_name__limio: "3 years digital",
                offer_features__limio:
                  '<p><span style="color: rgb(0, 0, 0); background-color: transparent;">Daily analysis on Economist.com</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">The weekly newspaper, digitally</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">The Economist app</span></p><p><span style="color: rgb(0, 0, 0); background-color: transparent;">Exclusive newsletters</span></p>',
                cta_text__limio: "Buy now",
                payment_types__limio: ["zuora_paypal", "zuora_card"],
                price__limio: [
                  {
                    name: "charge_1",
                    label: "Charge 1",
                    value: "429.00",
                    currencyCode: "GBP",
                    type: "recurring",
                    trigger: "subscription_start",
                    repeat_interval: 3,
                    repeat_interval_type: "years",
                    repeat_count: 1,
                    delay_interval: null,
                    subscription_start_day: null,
                    attributes: [],
                    delay_interval_type: "years"
                  }
                ],
                rate_plan__zuora: "UK-UK A 3 Year",
                detailed_display_price__limio: "Cancel at any time",
                group__limio: "digital"
              },
              name: "3 Year",
              headline: "Limio helps you to sell subscriptions. This campaign shows how....",
              description:
                '<p><strong>Campaigns</strong> help you to deliver subscription conversion experiences, for example landing pages from ads or offer displays. This campaign will show how you can build them in <a href="https://sandbox.dev.limio.com/landing/index.html" target="_blank">Limio</a>.</p>',
              status: "draft",
              baseTemplate: "/config/templates/offers/OfferBase",
              team: "testTeam",
              user: "alexandr",
              tags: ["/tags/uk-uk/default"],
              validTo: "2019-07-31T12:30:00.000Z",
              validFrom: "2019-07-27T03:30:00.000Z",
              segments: ["/segments/regions/UK/UK/GB"],
              subline: "àáâãämåçèéêëìíîðñòôõöö",
              duplicatedFrom: "/offers/Example Campaign_v2",
              parent_path: "/offers/The Economist Digital - UK-UK",
              path: "/offers/The Economist Digital - UK-UK/3 Year",
              type: "item",
              modified: "2020-10-12T10:16:15+00:00",
              familyName: "offers",
              record_type: "offer",
              created: "2020-09-11T15:13:23+00:00",
              mobileStyle:
                "\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H2.my-0 {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 20px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H3.display-price {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .products SPAN {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .offer-images DIV.offer-img {\n            padding:  !important;\n            color:  !important;\n            justify-content: center !important;\n            margin: 5px 0px !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size:  !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesWrapper.mobile-swipe .FeaturesContainer .Feature .FeatureTextWrapper P {\n            padding: 9px 10px !important;\n            color: rgb(105, 118, 137) !important;\n            justify-content: normal !important;\n            margin: 8px 0px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesContainer .Feature .FeatureTextWrapper H3 {\n            padding: 0px 10px !important;\n            color: rgb(227, 18, 11) !important;\n            justify-content: normal !important;\n            margin: 14px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 18px !important;\n            font-style: normal !important;\n            font-weight: 500 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-d495b949-294c-42a2-8194-993ba7ed5831 .Section .SectionWrapper.left .BodyContainer .TextContainer .Text P {\n            padding: 0px 0px !important;\n            color: rgb(68, 68, 68) !important;\n            justify-content: center !important;\n            margin: 0px 0px !important;\n            align-items: center !important;\n            text-align: center !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}",
              tabletStyle: "",
              childSorting: {
                "/offers/The Economist Digital - UK-UK/2 Year": 1,
                "/offers/The Economist Digital - UK-UK/3 Year": 0,
                "/offers/The Economist Digital - UK-UK/Annual": 2,
                "/offers/The Economist Digital - UK-UK/Monthly": 3,
                "/offers/The Economist Digital - UK-UK/Quarterly": 4
              },
              products: [
                {
                  name: "Digital Premium",
                  baseTemplate: "/config/templates/products/ProductBase",
                  record_type: "product",
                  type: "item",
                  attributes: {
                    product_code__limio: "TE.DIGITALPREM",
                    description__limio: "<p>The Economist apps&nbsp;</p><p>Economist.com</p><p>Audio edition and podcasts</p>"
                  },
                  created: "2020-09-11T10:36:21+00:00",
                  modified: "2020-10-08T14:09:58+00:00",
                  path: "/products/Economist/Digital Premium"
                }
              ],
              attachments: [
                {
                  url: "/public/6aba220a-cf9d-471f-a931-ef42cac9da39/Print-Digital-.png",
                  type: "image/png",
                  path: "/assets/Images/Economist Digital Print",
                  name: "Economist Digital Print"
                }
              ],
              associations: {
                exchange: ["/offers/The Economist Digital - UK-UK"]
              }
            }
          },
          {
            item_id: "b6e3fce81ff5ad4a7e763a3c637c3cc91bdd96c8",
            segment_id: "931ce6c8216105ec66eded99aef3af2e57c682bd",
            id: "b6e3fce81ff5ad4a7e763a3c637c3cc91bdd96c8.931ce6c8216105ec66eded99aef3af2e57c682bd",
            path_parts: ["offers", "The Economist Digital - UK-UK", "Annual"],
            parent_path: "/offers/The Economist Digital - UK-UK",
            path: "/offers/The Economist Digital - UK-UK/Annual",
            name: "Annual",
            type: "item",
            data: {
              attributes: {
                primary_color__limio: "#f47c24",
                secondary_color__limio: "#0e4f1b",
                tertiary_color__limio: "#020109",
                valid_date_range__limio: {
                  from: "2020-09-13T16:30:55.297Z",
                  to: "2020-10-01T16:30:59.747Z"
                },
                allowed_countries__limio: ["GB"],
                push_to_checkout__limio: true,
                term__limio: {
                  length: 1,
                  type: "years"
                },
                checkout__limio: {
                  checkout_type: "external",
                  external_url:
                    "https://sit-theeconomist.cs122.force.com/economist/s/authentication?starturl=https%3A%2F%2Feconomist-sit-shop.dev.limio.com%2Fcheckout"
                },
                cta_text__limio: "Buy now",
                display_name__limio: "Annual digital",
                offer_features__limio:
                  '<p><span style="background-color: transparent;">Daily news analysis on Economist.com</span></p><p><span style="background-color: transparent;">Enjoy the weekly full newspaper digitally</span></p><p><span style="background-color: transparent;">Stay up to date on the go with the app</span></p><p><span style="background-color: transparent;">Exclusive subscriber-only newsletters</span></p>',
                payment_types__limio: ["zuora_paypal", "zuora_card"],
                rate_plan__zuora: "UK-UK A Annual",
                price__limio: [
                  {
                    name: "charge_1",
                    label: "Charge 1",
                    value: "179.00",
                    currencyCode: "GBP",
                    type: "recurring",
                    trigger: "subscription_start",
                    repeat_interval: 1,
                    repeat_interval_type: "years",
                    repeat_count: 1,
                    delay_interval: null,
                    subscription_start_day: null,
                    attributes: [],
                    delay_interval_type: "years"
                  }
                ],
                display_price__limio: "Annual subscription for £179",
                detailed_display_price__limio: "Renews automatically. Cancel at any time",
                autoRenew__limio: true,
                group__limio: "digital + print"
              },
              name: "Annual",
              headline: "Limio helps you to sell subscriptions. This campaign shows how....",
              description:
                '<p><strong>Campaigns</strong> help you to deliver subscription conversion experiences, for example landing pages from ads or offer displays. This campaign will show how you can build them in <a href="https://sandbox.dev.limio.com/landing/index.html" target="_blank">Limio</a>.</p>',
              status: "draft",
              baseTemplate: "/config/templates/offers/OfferBase",
              team: "testTeam",
              user: "alexandr",
              tags: ["/tags/uk-uk/default"],
              validTo: "2019-07-31T12:30:00.000Z",
              validFrom: "2019-07-27T03:30:00.000Z",
              segments: ["/segments/regions/UK/UK/GB"],
              subline: "àáâãämåçèéêëìíîðñòôõöö",
              duplicatedFrom: "/offers/Example Campaign_v2",
              parent_path: "/offers/The Economist Digital - UK-UK",
              path: "/offers/The Economist Digital - UK-UK/Annual",
              type: "item",
              modified: "2020-10-12T10:16:23+00:00",
              familyName: "offers",
              record_type: "offer",
              created: "2020-09-11T15:13:01+00:00",
              mobileStyle:
                "\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H2.my-0 {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 20px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H3.display-price {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .products SPAN {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .offer-images DIV.offer-img {\n            padding:  !important;\n            color:  !important;\n            justify-content: center !important;\n            margin: 5px 0px !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size:  !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesWrapper.mobile-swipe .FeaturesContainer .Feature .FeatureTextWrapper P {\n            padding: 9px 10px !important;\n            color: rgb(105, 118, 137) !important;\n            justify-content: normal !important;\n            margin: 8px 0px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesContainer .Feature .FeatureTextWrapper H3 {\n            padding: 0px 10px !important;\n            color: rgb(227, 18, 11) !important;\n            justify-content: normal !important;\n            margin: 14px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 18px !important;\n            font-style: normal !important;\n            font-weight: 500 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-d495b949-294c-42a2-8194-993ba7ed5831 .Section .SectionWrapper.left .BodyContainer .TextContainer .Text P {\n            padding: 0px 0px !important;\n            color: rgb(68, 68, 68) !important;\n            justify-content: center !important;\n            margin: 0px 0px !important;\n            align-items: center !important;\n            text-align: center !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}",
              tabletStyle: "",
              childSorting: {
                "/offers/The Economist Digital - UK-UK/2 Year": 1,
                "/offers/The Economist Digital - UK-UK/3 Year": 0,
                "/offers/The Economist Digital - UK-UK/Annual": 2,
                "/offers/The Economist Digital - UK-UK/Monthly": 3,
                "/offers/The Economist Digital - UK-UK/Quarterly": 4
              },
              products: [
                {
                  name: "Digital Premium",
                  baseTemplate: "/config/templates/products/ProductBase",
                  record_type: "product",
                  type: "item",
                  attributes: {
                    product_code__limio: "TE.DIGITALPREM",
                    description__limio: "<p>The Economist apps&nbsp;</p><p>Economist.com</p><p>Audio edition and podcasts</p>"
                  },
                  created: "2020-09-11T10:36:21+00:00",
                  modified: "2020-10-08T14:09:58+00:00",
                  path: "/products/Economist/Digital Premium"
                }
              ],
              attachments: [
                {
                  url: "https://sandbox.dev.limio.com/public/21f7546d-c39b-4ad3-9e98-6139a014d891/Screenshot%202022-09-08%20at%2012.19.33.png",
                  type: "image/png",
                  path: "/assets/Images/Economist Digital Print",
                  name: "Economist Digital Print"
                }
              ],
              associations: {
                exchange: ["/offers/The Economist Digital - UK-UK"]
              }
            }
          },
          {
            item_id: "b6e3fce81ff5ad4a7e763a3c637c3cc91bdd96c8",
            segment_id: "931ce6c8216105ec66eded99aef3af2e57c682bd",
            id: "b6e3fce81ff5ad4a7e763a3c637c3cc91bdd96c8.931ce6c8216105ec66eded99aef3af2e57c682bd",
            path_parts: ["offers", "The Economist Digital - UK-UK", "Annual"],
            parent_path: "/offers/The Economist Digital - UK-UK",
            path: "/offers/The Economist Digital - UK-UK/Annual",
            name: "Annual",
            type: "item",
            data: {
              attributes: {
                primary_color__limio: "#f47c24",
                secondary_color__limio: "#0e4f1b",
                tertiary_color__limio: "#020109",
                valid_date_range__limio: {
                  from: "2020-09-13T16:30:55.297Z",
                  to: "2020-10-01T16:30:59.747Z"
                },
                allowed_countries__limio: ["GB"],
                push_to_checkout__limio: true,
                term__limio: {
                  length: 1,
                  type: "years"
                },
                checkout__limio: {
                  checkout_type: "external",
                  external_url:
                    "https://sit-theeconomist.cs122.force.com/economist/s/authentication?starturl=https%3A%2F%2Feconomist-sit-shop.dev.limio.com%2Fcheckout"
                },
                cta_text__limio: "Buy now",
                display_name__limio: "Annual digital",
                offer_features__limio:
                  '<p><span style="background-color: transparent;">Daily news analysis on Economist.com</span></p><p><span style="background-color: transparent;">Enjoy the weekly full newspaper digitally</span></p><p><span style="background-color: transparent;">Stay up to date on the go with the app</span></p><p><span style="background-color: transparent;">Exclusive subscriber-only newsletters</span></p>',
                payment_types__limio: ["zuora_paypal", "zuora_card"],
                rate_plan__zuora: "UK-UK A Annual",
                price__limio: [
                  {
                    name: "charge_1",
                    label: "Charge 1",
                    value: "179.00",
                    currencyCode: "GBP",
                    type: "recurring",
                    trigger: "subscription_start",
                    repeat_interval: 1,
                    repeat_interval_type: "years",
                    repeat_count: 1,
                    delay_interval: null,
                    subscription_start_day: null,
                    attributes: [],
                    delay_interval_type: "years"
                  }
                ],
                display_price__limio: "Annual subscription for £179",
                detailed_display_price__limio: "Renews automatically. Cancel at any time",
                autoRenew__limio: true,
                group__limio: "digital + print"
              },
              name: "Annual",
              headline: "Limio helps you to sell subscriptions. This campaign shows how....",
              description:
                '<p><strong>Campaigns</strong> help you to deliver subscription conversion experiences, for example landing pages from ads or offer displays. This campaign will show how you can build them in <a href="https://sandbox.dev.limio.com/landing/index.html" target="_blank">Limio</a>.</p>',
              status: "draft",
              baseTemplate: "/config/templates/offers/OfferBase",
              team: "testTeam",
              user: "alexandr",
              tags: ["/tags/uk-uk/default"],
              validTo: "2019-07-31T12:30:00.000Z",
              validFrom: "2019-07-27T03:30:00.000Z",
              segments: ["/segments/regions/UK/UK/GB"],
              subline: "àáâãämåçèéêëìíîðñòôõöö",
              duplicatedFrom: "/offers/Example Campaign_v2",
              parent_path: "/offers/The Economist Digital - UK-UK",
              path: "/offers/The Economist Digital - UK-UK/Annual",
              type: "item",
              modified: "2020-10-12T10:16:23+00:00",
              familyName: "offers",
              record_type: "offer",
              created: "2020-09-11T15:13:01+00:00",
              mobileStyle:
                "\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H2.my-0 {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 20px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H3.display-price {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .products SPAN {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .offer-images DIV.offer-img {\n            padding:  !important;\n            color:  !important;\n            justify-content: center !important;\n            margin: 5px 0px !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size:  !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesWrapper.mobile-swipe .FeaturesContainer .Feature .FeatureTextWrapper P {\n            padding: 9px 10px !important;\n            color: rgb(105, 118, 137) !important;\n            justify-content: normal !important;\n            margin: 8px 0px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesContainer .Feature .FeatureTextWrapper H3 {\n            padding: 0px 10px !important;\n            color: rgb(227, 18, 11) !important;\n            justify-content: normal !important;\n            margin: 14px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 18px !important;\n            font-style: normal !important;\n            font-weight: 500 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-d495b949-294c-42a2-8194-993ba7ed5831 .Section .SectionWrapper.left .BodyContainer .TextContainer .Text P {\n            padding: 0px 0px !important;\n            color: rgb(68, 68, 68) !important;\n            justify-content: center !important;\n            margin: 0px 0px !important;\n            align-items: center !important;\n            text-align: center !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}",
              tabletStyle: "",
              childSorting: {
                "/offers/The Economist Digital - UK-UK/2 Year": 1,
                "/offers/The Economist Digital - UK-UK/3 Year": 0,
                "/offers/The Economist Digital - UK-UK/Annual": 2,
                "/offers/The Economist Digital - UK-UK/Monthly": 3,
                "/offers/The Economist Digital - UK-UK/Quarterly": 4
              },
              products: [
                {
                  name: "Digital Premium",
                  baseTemplate: "/config/templates/products/ProductBase",
                  record_type: "product",
                  type: "item",
                  attributes: {
                    product_code__limio: "TE.DIGITALPREM",
                    description__limio: "<p>The Economist apps&nbsp;</p><p>Economist.com</p><p>Audio edition and podcasts</p>"
                  },
                  created: "2020-09-11T10:36:21+00:00",
                  modified: "2020-10-08T14:09:58+00:00",
                  path: "/products/Economist/Digital Premium"
                }
              ],
              attachments: [
                {
                  url: "/public/6aba220a-cf9d-471f-a931-ef42cac9da39/Print-Digital-.png",
                  type: "image/png",
                  path: "/assets/Images/Economist Digital Print",
                  name: "Economist Digital Print"
                }
              ],
              associations: {
                exchange: ["/offers/The Economist Digital - UK-UK"]
              }
            }
          },
          {
            item_id: "b6e3fce81ff5ad4a7e763a3c637c3cc91bdd96c8",
            segment_id: "931ce6c8216105ec66eded99aef3af2e57c682bd",
            id: "b6e3fce81ff5ad4a7e763a3c637c3cc91bdd96c8.931ce6c8216105ec66eded99aef3af2e57c682bd",
            path_parts: ["offers", "The Economist Digital - UK-UK", "Annual"],
            parent_path: "/offers/The Economist Digital - UK-UK",
            path: "/offers/The Economist Digital - UK-UK/Annual",
            name: "Annual",
            type: "item",
            data: {
              attributes: {
                primary_color__limio: "#f47c24",
                secondary_color__limio: "#0e4f1b",
                tertiary_color__limio: "#020109",
                valid_date_range__limio: {
                  from: "2020-09-13T16:30:55.297Z",
                  to: "2020-10-01T16:30:59.747Z"
                },
                allowed_countries__limio: ["GB"],
                push_to_checkout__limio: true,
                term__limio: {
                  length: 1,
                  type: "years"
                },
                checkout__limio: {
                  checkout_type: "external",
                  external_url:
                    "https://sit-theeconomist.cs122.force.com/economist/s/authentication?starturl=https%3A%2F%2Feconomist-sit-shop.dev.limio.com%2Fcheckout"
                },
                cta_text__limio: "Buy now",
                display_name__limio: "Annual digital",
                offer_features__limio:
                  '<p><span style="background-color: transparent;">Daily news analysis on Economist.com</span></p><p><span style="background-color: transparent;">Enjoy the weekly full newspaper digitally</span></p><p><span style="background-color: transparent;">Stay up to date on the go with the app</span></p><p><span style="background-color: transparent;">Exclusive subscriber-only newsletters</span></p>',
                payment_types__limio: ["zuora_paypal", "zuora_card"],
                rate_plan__zuora: "UK-UK A Annual",
                price__limio: [
                  {
                    name: "charge_1",
                    label: "Charge 1",
                    value: "179.00",
                    currencyCode: "GBP",
                    type: "recurring",
                    trigger: "subscription_start",
                    repeat_interval: 1,
                    repeat_interval_type: "years",
                    repeat_count: 1,
                    delay_interval: null,
                    subscription_start_day: null,
                    attributes: [],
                    delay_interval_type: "years"
                  }
                ],
                display_price__limio: "Annual subscription for £179",
                detailed_display_price__limio: "Renews automatically. Cancel at any time",
                autoRenew__limio: true,
                group__limio: "digital + print"
              },
              name: "Annual",
              headline: "Limio helps you to sell subscriptions. This campaign shows how....",
              description:
                '<p><strong>Campaigns</strong> help you to deliver subscription conversion experiences, for example landing pages from ads or offer displays. This campaign will show how you can build them in <a href="https://sandbox.dev.limio.com/landing/index.html" target="_blank">Limio</a>.</p>',
              status: "draft",
              baseTemplate: "/config/templates/offers/OfferBase",
              team: "testTeam",
              user: "alexandr",
              tags: ["/tags/uk-uk/default"],
              validTo: "2019-07-31T12:30:00.000Z",
              validFrom: "2019-07-27T03:30:00.000Z",
              segments: ["/segments/regions/UK/UK/GB"],
              subline: "àáâãämåçèéêëìíîðñòôõöö",
              duplicatedFrom: "/offers/Example Campaign_v2",
              parent_path: "/offers/The Economist Digital - UK-UK",
              path: "/offers/The Economist Digital - UK-UK/Annual",
              type: "item",
              modified: "2020-10-12T10:16:23+00:00",
              familyName: "offers",
              record_type: "offer",
              created: "2020-09-11T15:13:01+00:00",
              mobileStyle:
                "\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H2.my-0 {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 20px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .display-name H3.display-price {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .products SPAN {\n            padding:  !important;\n            color:  !important;\n            justify-content:  !important;\n            margin:  !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size: 16px !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-f1121d72-19da-4233-aa58-3f2ad4c45564 .offers.py-2.container-fluid .container.mb-2 .offer-container.mobile.swipe.card-deck.mt-4.text-center.row .price-card.mb-5.shadow-sm .card-body.Stretch .offer-images DIV.offer-img {\n            padding:  !important;\n            color:  !important;\n            justify-content: center !important;\n            margin: 5px 0px !important;\n            align-items:  !important;\n            text-align:  !important;\n            font-size:  !important;\n            font-style:  !important;\n            font-weight:  !important;\n            text-decoration:  !important;\n            background-position:  !important;\n            background-color:  !important;\n            background-image:  !important;\n            border-top:  !important;\n            border-left:  !important;\n            border-right:  !important;\n            border-bottom:  !important;\n            border-radius:  !important;\n            border-color:  !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesWrapper.mobile-swipe .FeaturesContainer .Feature .FeatureTextWrapper P {\n            padding: 9px 10px !important;\n            color: rgb(105, 118, 137) !important;\n            justify-content: normal !important;\n            margin: 8px 0px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-86f3ca1b-e117-462e-885f-07dde4041a4a .Features .FeaturesContainer .Feature .FeatureTextWrapper H3 {\n            padding: 0px 10px !important;\n            color: rgb(227, 18, 11) !important;\n            justify-content: normal !important;\n            margin: 14px 0px !important;\n            align-items: normal !important;\n            text-align: left !important;\n            font-size: 18px !important;\n            font-style: normal !important;\n            font-weight: 500 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}\n.limio-d495b949-294c-42a2-8194-993ba7ed5831 .Section .SectionWrapper.left .BodyContainer .TextContainer .Text P {\n            padding: 0px 0px !important;\n            color: rgb(68, 68, 68) !important;\n            justify-content: center !important;\n            margin: 0px 0px !important;\n            align-items: center !important;\n            text-align: center !important;\n            font-size: 16px !important;\n            font-style: normal !important;\n            font-weight: 400 !important;\n            text-decoration: none solid rgb(68, 68, 68) !important;\n            background-position: 0% 0% !important;\n            background-color: rgba(0, 0, 0, 0) !important;\n            background-image: none !important;\n            border-top: 0px none rgb(68, 68, 68) !important;\n            border-left: 0px none rgb(68, 68, 68) !important;\n            border-right: 0px none rgb(68, 68, 68) !important;\n            border-bottom: 0px none rgb(68, 68, 68) !important;\n            border-radius: 0px !important;\n            border-color: rgb(68, 68, 68) !important;\n            border-width: 0px !important; \n}",
              tabletStyle: "",
              childSorting: {
                "/offers/The Economist Digital - UK-UK/2 Year": 1,
                "/offers/The Economist Digital - UK-UK/3 Year": 0,
                "/offers/The Economist Digital - UK-UK/Annual": 2,
                "/offers/The Economist Digital - UK-UK/Monthly": 3,
                "/offers/The Economist Digital - UK-UK/Quarterly": 4
              },
              products: [
                {
                  name: "Digital Premium",
                  baseTemplate: "/config/templates/products/ProductBase",
                  record_type: "product",
                  type: "item",
                  attributes: {
                    product_code__limio: "TE.DIGITALPREM",
                    description__limio: "<p>The Economist apps&nbsp;</p><p>Economist.com</p><p>Audio edition and podcasts</p>"
                  },
                  created: "2020-09-11T10:36:21+00:00",
                  modified: "2020-10-08T14:09:58+00:00",
                  path: "/products/Economist/Digital Premium"
                }
              ],
              attachments: [
                {
                  url: "/public/6aba220a-cf9d-471f-a931-ef42cac9da39/Print-Digital-.png",
                  type: "image/png",
                  path: "/assets/Images/Economist Digital Print",
                  name: "Economist Digital Print"
                }
              ],
              associations: {
                exchange: ["/offers/The Economist Digital - UK-UK"]
              }
            }
          }
        ],
        groups: [
          { id: "digital", label: "Digital" },
          { id: "bundle", label: "Digital + Print" }
        ]
      },
      user: {
        token: user.token
      },
      pageBuilder__limio: true,
      key: {
        limio: "public_f23a92c0016d719355e502b2a013fd4ae2c687bb3a64ef9a",
        stripeId: "pk_test_OqIyko2wE5A4H1kqvKtvh6cO",
        stripeConnectId: "acct_1FIeQmCmtz3PyVm9"
      }
    }),
    [basketOpen, user.token, endpoint]
  )

  const propsToInsert = {
    showContinueButton: false,
    confirmationReturn: "Return to my account",
    confirmHeading: "Are you sure you want change your subscription?",
    confirmSubheading: "You will be switched over to this offer, starting your next billing date:",
    showCancelButton: true,
    cancelCtaText: "Cancel My Subscription",
    cancelRedirectUrl: "/change-term-success",
    confirmCancelHeading: "Are you sure you want to cancel?",
    confirmCancelSubheading: "Your subscription will lapse at the end of your term and you will lose all benefits.",
    confirmationOk: "Agree",
    confirmationCancel: "Cancel",
    heading: "Billing details",
    description__limio_richtext: "lol",
    // heading: "We value you as a reader…",
    // subheading: "We would like to offer you a discount to continue enjoying our objective opinion. You can still cancel at any time.",
    title: "Before you go",
    subtitle: "Please tell us why you want to cancel your subscription",
    showImage: true,
    reverseHeadings: true,
    address1Label: "Billing address",
    customerDetailsHeading: "1. Your details",
    paymentDetailsHeading: "2. Payment details",
    //billingAddressHeading: "3. Billing address",
    // phoneNumberRequired: true,
    goBackButtonText: "Go back",
    continueButtonText: "Continue",
    enableFloatingBasket: true,
    checkoutButtonText: "Checkout",
    processingButtonText: "Preparing your order",
    bringMobileBasketToTop: true,
    hideTotals: true,
    showBasketShoppingRegion: true,
    disableRemoveFromBasket: true,
    flatView: true,
    showReference: false,
    showSubscriptionInfo: true,
    pendingChangeMessage: "You have a pending change to your subscription. To change something else, please contact us.",
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
        segments__limio_segments: []
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
        segments__limio_segments: []
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
        segments__limio_segments: []
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
        segments__limio_segments: []
      },
      {
        id: "other",
        label: "Other reasons",
        url: "",
        buttonImage: "",
        showCta__limio_boolean: false,
        ctaText: "",
        ctaImage: "",
        segments__limio_segments: []
      }
    ],
    consents: [
      {
        type: "checkbox",
        org: "generic",
        for: "terms",
        options: [
          {
            id: "terms",
            label:
              '<p>I agree with the <a href="https://www.limio.com?open=terms-and-conditions" rel="noopener noreferrer" target="_blank">Terms and Conditions</a></p>',
            required: true,
            requiredMessage: "Please accept to continue"
          }
        ]
      }
    ],
    prefillMapping: [{ queryParamValue: "date", attributeValue: "palisadeEventDate" }],
    regionMessage: "Billing address must match your shopping region. ",
    regionCta: "Change region",
    phoneNumberPicklist: true,
    showMessage: false,
    groupOffers: false,
    splitByGroups: true,
    showDescription: true,
    messageTitle: "Thank you for subscribing",
    message: "You’re all set! would you like to return to where you were?",
    messageCTA: "Go back to article",
    messageUrl: "",
    associationType: { selected: { id: "save" } },
    imagePosition: { selected: { id: "center" } },
    componentId: "checkout-limio",
    contactNumber: "+44 (0) 20 7576 8000",
    squareTheme: true,
    showPaymentMethod: true,
    paymentMethodHeading: "Payment method",
    paymentFrequencyLabel: "Frequency",
    paymentAmountLabel: "Next payment",
    paymentDateLabel: "Next payment date",
    showOfferFeatures: true,
    confirmationText:
      "We recommend you revisit our terms and conditions again before continuing, and we will process your details in accordance with our privacy policy."
  }

  const proppies = {
    heading: "Redeem Gift",
    subHeading: "Test",
    giftCodeLabel: "Gift Code",
    contactUsMessage: "contact us",
    incorrectGiftCodeMessage: "incorrect",
    noGiftCodeMessage: "none",
    alreadyRedeemedMessage: "already redeemed",
    invalidGiftCodeMessage: "invalid",
    expiredCodeMessage: "expired",
    fallbackErrorMessage: "try again",
    confirmButtonText: "confirm",
    confirmButtonUrl: "/confirm",
    showOptionalFields: false,
    giftCodeRegex: "^[a-zA-Z0-9]{12,14}$"
  }

  return (
    <div>
      <Header onSetUser={setUser} endpoint={endpoint} setEndpoint={setEndpoint}>
        <ComponentSelector onSelect={setSelectedComponents} components={components} selectedComponents={selectedComponents} />
        <button
          className="btn"
          onClick={() => {
            setKey(key + 1)
          }}
        >
          <FontAwesomeIcon icon={faSyncAlt} />
        </button>
      </Header>

      <div>
        <ErrorBoundary>
          <LimioContext.Provider key={key} value={context}>
            {selectedComponents.map((Component, i) => (
              <Provider store={appStore}>
                <Component key={i} {...propsToInsert} {...proppies} />
              </Provider>
            ))}
          </LimioContext.Provider>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
