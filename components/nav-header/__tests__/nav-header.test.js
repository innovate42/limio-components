/**
 * @jest-environment jsdom
 */
import React from "react"
import NavHeader from "../index"
import { render, screen, waitFor, userEvent, within } from "@limio/test-harness-shop"
import { setupServer, rest } from "@limio/test-harness-shop/msw"
import { mockLocation } from "@limio/test-harness-shop/mock-location-assign"
import { createTestUser } from "@limio/test-harness-shop/user"
import { addToBasketAction } from "@limio/shop-redux/src/shop/redux"
import { mockDeliveryOffer } from "../../__mocks__/shopItems"
import { mockApiDataHandler } from "@limio/test-harness-shop/mockdata"
import packageData from "../package.json"
import { getPropsFromPackageJson } from "@limio/components/helpers"

const postOrder = jest.fn()
const initateCheckout = jest.fn()
const packageProps = getPropsFromPackageJson(packageData)

const server = setupServer(
  rest.post("http://localhost/api/sf/oauth2/token", (req, res, ctx) => {
    return res(
      ctx.json(
        "eyJraWQiOiJ2VDRjZlZ2RlFJRytDcVl5NWEwWXo1SEFuS203bjJ0aVJpRWpjNm5vQng4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOTlmNmFiYS0xMjY0LTRkNDAtODMyNi02NGY3ZTJjYTMxNTYiLCJldmVudF9pZCI6IjcwNWRhMTE4LTY5MWYtNGJjNi04Y2I5LThjM2YzOGU3NjJiZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MzA4NjM3NzIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX0RhR0pSTmJtdSIsImV4cCI6MTYzMzA4OTIwNiwiaWF0IjoxNjMzMDg1NjA2LCJqdGkiOiIzM2M3N2QwNS1hNmE0LTQ5YmEtYWI4My0xMWE3MmE2ODI5NTUiLCJjbGllbnRfaWQiOiI1MmV1aG1rM2xrZ3RwMXFucGgwcW85dGYxNiIsInVzZXJuYW1lIjoiZGFuaWVsK3NhbmRib3hAbGltaW8uY29tIn0.ILyPqY3TzIxqdFpcYeN0HBhjWttxZLQPv83kclFObGKfZGHdAdY9TTeu5V4GSzCc86ed-HmxElconrNOCjrjUyAWreS1gIBXe-3YemaFwkfrfkFmTJMug_FL8WlDINB1D_d5yWwOyEr8J0sYtoWHKfh7izZ_POgD0OMBTm0ju9rfP-aIj3e6umxtqjFOcFbreGPrwAqzHTl_BDn3PYfLjrOc_L8zAGg577xvWpaBzCFJ-mUpeiinf-lgJQSYRZN4uSjRuy8wAkjjdbW4sBofe3kOacrE7y1sLi3u6cYJ4RvtJsTia20ziOtt36NRw1OEJP81uKtMMTjoqhZPEkC6ng"
      )
    )
  }),

  rest.post("http://localhost/api/checkout/initiate", (req, res, ctx) => {
    initateCheckout({ body: req.body, headers: { ...req.headers.all() } })
    return res(ctx.json({ basket_id: "basket-newbasket" }))
  }),

  rest.get("http://localhost/api/checkout/basket-ead1f544-5263-4e01-acb4-5128e2161678", (req, res, ctx) => {
    return mockApiDataHandler.handle(req, res)
  }),

  rest.get("http://localhost/api/sf/oauth2/logout", (req, res, ctx) => {
    return res(ctx.json({}))
  }),
  rest.post("http://localhost/api/checkout/validate/basket-ead1f544-5263-4e01-acb4-5128e2161678", (req, res, ctx) => {
    return mockApiDataHandler.handle(req, res)
  }),

  rest.post("http://localhost/api/plugins/zuora", (req, res, ctx) => {
    return mockApiDataHandler.handle(req, res)
  }),

  rest.get("http://localhost/api/mma/subscriptions", (req, res, ctx) => {
    return res(ctx.json({ items: [] }))
  }),

  rest.post("http://localhost/api/order", (req, res, ctx) => {
    postOrder({ body: req.body, headers: { ...req.headers.all() } })

    return res(ctx.json({ order_reference: "TEST_ORDER_REFERENCE" }))
  })
)

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "bypass"
  })
)

afterAll(() => server.close())

beforeEach(() => {
  jest.resetModules()
  jest.clearAllMocks()
  server.resetHandlers()
})

describe("Ensure Nav-Header component works as expected", () => {
  it("Test component logo renders correctly", async () => {
    window.sessionStorage.setItem("limio_order", "basket-ead1f544-5263-4e01-acb4-5128e2161678")

    render(<NavHeader />, {
      componentProps: packageProps
    })

    const logo = await screen.findByAltText(/Header logo/i)
    expect(logo).toBeInTheDocument()
  })

  it("Test logout button is pressed", async () => {
    window.sessionStorage.setItem("limio_order", "basket-ead1f544-5263-4e01-acb4-5128e2161678")

    const user = await createTestUser()
    document.cookie = `lmo_session=${user.bearerToken}`

    render(<NavHeader />, {
      componentProps: packageProps
    })

    // make sure the nav header is loaed
    await screen.findByRole("navigation")

    await waitFor(() => expect(screen.queryByTitle("loading")).toBeNull())

    const buttons = await screen.findAllByText(/Logout/i)
    const LogoutButton = buttons[0]
    expect(screen.queryByText(/Log In/i)).toBeNull()

    await userEvent.click(LogoutButton)

    await waitFor(() => expect(screen.queryAllByText(/Log In/i)).not.toBe([]))
  })

  it("An un-authenticated user can go to checkout", async () => {
    window.sessionStorage.setItem("limio_order", "basket-ead1f544-5263-4e01-acb4-5128e2161678")
    const modifiedProps = { ...packageProps, showBasket: true }

    const { internalStore } = render(<NavHeader />, {
      componentProps: modifiedProps
    })

    // add item to the basket
    internalStore.dispatch(addToBasketAction({ offer: mockDeliveryOffer, quantity: 1 }))

    expect(window.location).toMatchObject({ pathname: "/" })

    await screen.findAllByText("My basket")

    await waitFor(() => expect(screen.queryAllByText(/checkout/i)[0]).not.toBe([]))

    const baskets = await screen.findAllByText("Checkout")

    expect(baskets.length).toBe(2)

    // there are two baskets rendered - one for mobile and the other for desktop
    const mobileBasket = baskets.find(basket => {
      return basket.closest("div.basket-button").classList.contains("mobile") === true
    })

    const desktopBasket = baskets.find(basket => {
      return basket.closest("div.basket-button").classList.contains("mobile") === false
    })

    expect(desktopBasket).toBeDefined()
    expect(mobileBasket).toBeDefined()

    const desktopBasketSection = within(desktopBasket)

    await userEvent.click(desktopBasketSection.getByText("Checkout"))

    // NOTE: it important here that the value is assigned directly to window.top.location this allow cross domain navigation
    await waitFor(() =>
      expect(mockLocation.assign).toHaveBeenCalledWith("http://localhost/checkout?lmo_offer=%2Foffers%2FLimio%2FLimio&redirect=%2F&basket=undefined")
    )

    // The mock function was called twice
    expect(initateCheckout.mock.calls).toHaveLength(1)
    expect(initateCheckout.mock.calls[0][0]).toMatchObject({
      body: {
        basket: {
          basketItems: [
            {
              id: "439f3964-3fc4-4ec2-8e02-49f15cefe178",
              offer: {
                id: "41ed87882749af10cc75fdd8d9f61598db3c197d",
                name: "Bundle Annual",
                path: "/offers/Limio Subscription - UK/Bundle Annual",
                type: "item",
                version: "9746dfea68f5897a7da11daa0580d02d48102734"
              }
            }
          ],
          chooseDate: false,
          hasDelivery: true,
          isGift: false,
          isRedeem: false
        },
        locale: "GB",
        order: {
          __spec_version: "2",
          allowedCountries: [],
          autoRenew: true,
          billingDetails: {},
          checkoutId: "basket-ead1f544-5263-4e01-acb4-5128e2161678",
          chooseDate: false,
          country: "GB",
          customerDetails: { marketingPrefs: {} },
          deliveryDetails: {},
          external_id: "ead1f544-5263-4e01-acb4-5128e2161678",
          hasDelivery: true,
          isGift: false,
          isRedeem: false,
          isTrial: false,
          orderItems: [
            {
              details: "",
              id: "439f3964-3fc4-4ec2-8e02-49f15cefe178",
              name: "Annual",
              offer: {
                id: "41ed87882749af10cc75fdd8d9f61598db3c197d",
                name: "Bundle Annual",
                path: "/offers/Limio Subscription - UK/Bundle Annual",
                type: "item",
                version: "9746dfea68f5897a7da11daa0580d02d48102734"
              },
              price: { amount: 175, currency: "GBP", summary: { headline: "<p>£175.00/year</p>", subline: "<p>Auto-renewing at £175.00 annually.</p>" } }
            }
          ],
          orderState: "initial",
          order_type: "new",
          paymentType: "",
          recipientDetails: { sendEmail: true, startNow: false },
          redirectState: null,
          redirectUrl: null,
          requestCompany: false,
          source: "shop",
          student: true,
          studentDetails: { course: "", graduationYear: "2020", university: "" },
          subId: null,
          subRef: null,
          subscriptionId: null,
          subscriptionReference: null,
          total: { amount: 175, currency: "GBP" },
          tracking: { campaign: "/offers/Limio Subscription - UK", offers: ["/offers/Limio Subscription - UK/Bundle Annual"], tag: "/tags/uk/default" },
          userDetails: {},
          variant: "standard"
        },
        path: "/",
        tracking: { campaign: "/offers/Limio Subscription - UK", offers: ["/offers/Limio Subscription - UK/Bundle Annual"], tag: "/tags/uk/default" },
        campaignUrl: "/uk/default"
      },
      headers: { "content-type": "application/json; charset=utf-8", "x-limio-mode": "test", "x-limio-recaptcha": "" }
    })
  })

  it("Test basket item is rendered and can be removed", async () => {
    window.sessionStorage.setItem("limio_order", "basket-ead1f544-5263-4e01-acb4-5128e2161678")

    const modifiedProps = { ...packageProps, showBasket: true }

    const { rerender, internalStore } = render(<NavHeader />, {
      componentProps: modifiedProps
    })

    // add item to the basket
    internalStore.dispatch(addToBasketAction({ offer: mockDeliveryOffer, quantity: 1 }))

    // make sure the nav header is loaed
    await screen.findByRole("navigation")

    await waitFor(() => expect(screen.queryAllByText(/no items in basket/i)).toEqual([]))
    const removeItem = screen.getAllByTestId(/removeItem/i)[1]
    await userEvent.click(removeItem)

    // Redux store getting updated doesn't automatically trigger a rerender
    rerender(<NavHeader />, {
      componentProps: modifiedProps
    })
    await screen.findAllByText("My basket")

    await waitFor(() => expect(screen.queryAllByText(/limio offer/i)).toEqual([]))
    expect(screen.queryAllByText(/no items in basket/i)).not.toEqual([])
  })

  it("clicking the basket button toggles the visibility of the basket popover", async () => {
    window.sessionStorage.removeItem("limio_order")

    const modifiedProps = { ...packageProps, showBasket: true }

    const { internalStore } = render(<NavHeader />, {
      componentProps: modifiedProps
    })

    // make sure the nav header is loaed
    await screen.findByRole("navigation")

    // get basket button by aria label
    const basketButtons = screen.getAllByRole("button", { name: "show basket" })
    const basketButton = basketButtons[0]
    expect(basketButton).toBeInTheDocument()

    // Get the initial visibility of the basket popover
    const popoverHeaders = screen.getAllByText("My basket")
    const popoverHeader = popoverHeaders[0]
    const popover = popoverHeader.parentElement
    expect(popover).toBeInTheDocument()

    // initially the basket is closed
    await waitFor(() => {
      const updatedVisibility = popover.classList.contains("hidden")
      expect(updatedVisibility).toEqual(true)
    })

    // add item to the basket
    internalStore.dispatch(addToBasketAction({ offer: mockDeliveryOffer, quantity: 1 }))

    // adding an item that is not push to checkout causes the basket to open
    await waitFor(() => {
      const updatedVisibility = popover.classList.contains("hidden")
      expect(updatedVisibility).toEqual(false)
    })

    await userEvent.click(basketButton)

    await waitFor(() => {
      const updatedVisibility = popover.classList.contains("hidden")
      expect(updatedVisibility).toEqual(true)
    })

    await userEvent.click(basketButton)

    const resetVisibility = popover.classList.contains("hidden")
    expect(resetVisibility).toEqual(false)
  })

  it("Ensure Nav-Header component renders differently with modified props", async () => {
    const modifiedProps = {
      ...packageProps,
      items: [
        {
          label: "Test",
          href: "/test",
          button__limio_boolean: false,
          login__limio_boolean: true
        },
        {
          label: "Download",
          href: "/download",
          button__limio_boolean: true,
          login__limio_boolean: false
        }
      ],
      logoText: "My account",
      menuButtonIconUrl: "/logo.svg",
      menuButtonText: "Menu",
      showBasket: false,
      showProfile: false,
      menu_button__limio_color: "rgba(0,0,0,.5)"
    }
    render(<NavHeader />, {
      componentProps: modifiedProps
    })
    //since logo is an empty sting and logo text is not we expect it to show
    expect(screen.getByText("My account")).toBeInTheDocument()
    expect(screen.getByText("Menu")).toBeInTheDocument()
    const imgIcon = screen.getByRole("img")
    expect(imgIcon).toHaveAttribute("src", "/logo.svg")
    expect(imgIcon).toHaveAttribute("alt", "Menu Icon")

    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute("href", "/test")
    expect(screen.getByRole("link", { name: "Test" })).toHaveAttribute("href", "/test")
    expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute("href", "/download")

    expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute("href", "/download")
  })

  it("Nav Header and limio-basket cookie-Clears the limio-basket cookie after logout", async () => {
    window.sessionStorage.setItem("limio_order", "basket-ead1f544-5263-4e01-acb4-5128e2161678")

    const user = await createTestUser()
    document.cookie = `lmo_session=${user.bearerToken}`
    const { internalStore } = render(<NavHeader />, {
      componentProps: packageProps
    })

    // add item to the basket
    internalStore.dispatch(addToBasketAction({ offer: mockDeliveryOffer, quantity: 1 }))

    // basket is not empty
    await waitFor(() => expect(screen.queryAllByText(/checkout/i)[0]).not.toBe([]))

    // log the user out
    await waitFor(() => expect(screen.queryByText(/Log In/i)).toBeNull()) // Wait here as getUserSession is asynchronous
    const LogoutButton = (await screen.findAllByText(/Logout/i))[0]
    await userEvent.click(LogoutButton)

    // wait for the login to appear
    await screen.findAllByText("Log In")
    expect(screen.queryByText(/Logout/i)).toBeNull()

    // after logging out limio-basket cookie is cleared
    await waitFor(() => expect(document.cookie).not.toContain(`limio-basket`))
  })
})
