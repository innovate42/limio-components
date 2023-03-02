import React from "react"
import GroupedOffers from "../index"
import { render, screen, waitFor, userEvent } from "@limio/test-harness-shop"
import { groupedOffers } from "@limio/test-data/mocks/offers"

const initialProps = {
  bestValueText: "Best Value Offer",
  buttonText: "Buy Now",
  buttonUrl: "/checkout",
  groupLabels: [
    { id: "digital", label: "Digital" },
    { id: "bundle", label: "Digital + Print" }
  ]
}

describe("Expected behaviour of Grouped Offers Component", () => {
  it("Component shows offers grouped with only one offer selected", async () => {
    render(<GroupedOffers {...initialProps} preselectFirstOfferInGroup={false} />, {
      pageContext: defaultPageContext => ({ ...defaultPageContext, offers: groupedOffers })
    })

    await waitFor(() => expect(screen.queryByText(groupedOffers[0].data.attributes.display_name__limio)).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText(groupedOffers[1].data.attributes.display_name__limio)).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText(groupedOffers[2].data.attributes.display_name__limio)).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText(groupedOffers[3].data.attributes.display_name__limio)).toBeInTheDocument())

    // difficult to actually return just the checked radio buttons but there should just be one
    expect(screen.getByLabelText(groupedOffers[0].data.attributes.display_name__limio)).toBeChecked()
    expect(document.querySelectorAll('input[type="radio"]:checked')).toHaveLength(1)

    await userEvent.click(screen.getByLabelText(groupedOffers[2].data.attributes.display_name__limio))

    expect(screen.getByLabelText(groupedOffers[0].data.attributes.display_name__limio)).not.toBeChecked()
    expect(screen.getByLabelText(groupedOffers[2].data.attributes.display_name__limio)).toBeChecked()
    expect(document.querySelectorAll('input[type="radio"]:checked')).toHaveLength(1)
  })

  it("Component shows offers grouped with first offer in group preselected", async () => {
    render(<GroupedOffers {...initialProps} preselectFirstOfferInGroup={true} />, {
      pageContext: defaultPageContext => ({ ...defaultPageContext, offers: groupedOffers })
    })

    await waitFor(() => expect(screen.queryByText(groupedOffers[0].data.attributes.display_name__limio)).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText(groupedOffers[1].data.attributes.display_name__limio)).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText(groupedOffers[2].data.attributes.display_name__limio)).toBeInTheDocument())
    await waitFor(() => expect(screen.queryByText(groupedOffers[3].data.attributes.display_name__limio)).toBeInTheDocument())

    expect(screen.getByLabelText(groupedOffers[0].data.attributes.display_name__limio)).toBeChecked()
    expect(screen.getByLabelText(groupedOffers[2].data.attributes.display_name__limio)).toBeChecked()
    expect(document.querySelectorAll('input[type="radio"]:checked')).toHaveLength(2)

    await userEvent.click(screen.getByLabelText(groupedOffers[1].data.attributes.display_name__limio))

    expect(screen.getByLabelText(groupedOffers[0].data.attributes.display_name__limio)).not.toBeChecked()
    expect(screen.getByLabelText(groupedOffers[1].data.attributes.display_name__limio)).toBeChecked()
    expect(screen.getByLabelText(groupedOffers[2].data.attributes.display_name__limio)).toBeChecked()
    expect(document.querySelectorAll('input[type="radio"]:checked')).toHaveLength(2)
  })

  it("does not show trial offers, when trial cookie is set", async () => {
    // add a trial attrubute to the first offer
    groupedOffers[0].data.attributes.trial__limio = true

    // make sure the trial cookie is set
    document.cookie = "limio-invalid=trial"

    render(<GroupedOffers {...initialProps} preselectFirstOfferInGroup={false} />, {
      pageContext: defaultPageContext => ({ ...defaultPageContext, offers: groupedOffers })
    })

    await waitFor(() => expect(screen.queryByText(groupedOffers[1].data.attributes.display_name__limio)).toBeInTheDocument())

    expect(screen.queryByText(groupedOffers[0].data.attributes.display_name__limio)).not.toBeInTheDocument()

    expect(screen.queryByText(groupedOffers[2].data.attributes.display_name__limio)).toBeInTheDocument()
    expect(screen.queryByText(groupedOffers[3].data.attributes.display_name__limio)).toBeInTheDocument()

    // difficult to actually return just the checked radio buttons but there should just be one
    expect(screen.getByLabelText(groupedOffers[1].data.attributes.display_name__limio)).toBeChecked()
    expect(document.querySelectorAll('input[type="radio"]:checked')).toHaveLength(1)

    await userEvent.click(screen.getByLabelText(groupedOffers[2].data.attributes.display_name__limio))

    expect(screen.getByLabelText(groupedOffers[1].data.attributes.display_name__limio)).not.toBeChecked()
    expect(screen.getByLabelText(groupedOffers[2].data.attributes.display_name__limio)).toBeChecked()
    expect(document.querySelectorAll('input[type="radio"]:checked')).toHaveLength(1)
  })
})
