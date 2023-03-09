import React from "react"
import FaqBanner from "../index"
import { render, screen, fireEvent, axe, waitFor, userEvent } from "@limio/test-harness-shop"

const bgColor__limio_color = "#fff"
const downArrowImg = "https://image.flaticon.com/icons/svg/118/118738.svg"
const headline = "Do you have questions?"
const subline = "Here are some answers."
const faqItems = [
  {
    question: "Can I contact Customer Services?",
    answer__limio_richtext: "<script>alert('Hello World')</script>Go to our help centre"
  },
  {
    question: "Another Random question?",
    answer__limio_richtext: "Some Random answer with <b>Bold</b>!"
  }
]
const componentId = "faq-banner-limio"
const showButtonBackgroundColor = true
const btnBgColor__limio_color = "#efd5c4"
const btnBorderColor__limio_color = "#F47C24"

test("headline and subline render correctly", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const headlineElement = screen.getByText(headline)
  const sublineElement = screen.getByText(subline)

  expect(headlineElement.tagName).toEqual("H2")
  expect(sublineElement.tagName).toEqual("P")
})

test("if the script tag gets removed", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const answer1 = screen.queryByText("Go to our help centre")
  expect(answer1).not.toBeNull()
})

test("if the element is found with the default text", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const answer2 = screen.queryAllByTestId("answer")
  expect(answer2[1].innerHTML === faqItems[1].answer__limio_richtext).toBe(true)
})

test("that clicking the question activates the toggle", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const question1 = screen.queryByText(faqItems[0].question)
  const img = screen.getAllByAltText("down")[0]
  const answerPanel = screen.queryAllByTestId("answer")[0].parentElement

  expect(img.classList.contains("active")).toBe(false)
  expect(answerPanel.classList.contains("active")).toBe(false)

  await fireEvent.click(question1)
  expect(img.classList.contains("active")).toBe(true)
  expect(answerPanel.classList.contains("active")).toBe(true)

  await fireEvent.click(question1)
  expect(img.classList.contains("active")).toBe(false)
  expect(answerPanel.classList.contains("active")).toBe(false)
})

test("A question button when clicked has expanded state of true and false when clicked again", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const button1 = screen.queryAllByRole("button")[0]

  await fireEvent.click(button1)
  expect(button1).toHaveAttribute("aria-expanded", "true")

  await fireEvent.click(button1)
  expect(button1).toHaveAttribute("aria-expanded", "false")
})

test("Question button background color and border changes on hover and on focus", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const button1 = screen.queryAllByRole("button")[0]

  await fireEvent.mouseEnter(button1)
  expect(button1).toHaveStyle(`background-color: ${btnBgColor__limio_color}`, "border-width: 1px")

  await fireEvent.click(button1)
  expect(button1).toHaveStyle(`background-color: ${btnBgColor__limio_color}`, "border-width: 2px")

  await fireEvent.mouseLeave(button1)
  expect(button1).toHaveStyle("background-color: rgb(255, 255, 255)", "border-width: undefined")
})

test("When a user tabs through faq banner a buttons are given focus", async () => {
  const { internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const button1 = screen.queryAllByRole("button")[0]
  const button2 = screen.queryAllByRole("button")[1]

  expect(button1).toHaveStyle(`background-color: #ffffff`, "border: none")
  expect(button2).toHaveStyle(`background-color: #ffffff`, "border: none")

  await userEvent.tab()

  expect(button1).toHaveFocus()
  expect(button1).toHaveStyle(`background-color: ${btnBgColor__limio_color}`, "border-width: 1px")
  expect(button2).toHaveStyle(`background-color: #ffffff`, "border: none")

  await userEvent.tab()

  expect(button1).toHaveStyle("background-color: rgb(255, 255, 255)", "border-width: undefined")
  expect(button2).toHaveStyle(`background-color: ${btnBgColor__limio_color}`, "border-width: 1px")

  await userEvent.tab()
  expect(button2).toHaveStyle("background-color: rgb(255, 255, 255)", "border-width: undefined")
})

test("Component should not have accessibility issues", async () => {
  const { container, internalAppState } = render(
    <FaqBanner
      bgColor__limio_color={bgColor__limio_color}
      downArrowImg={downArrowImg}
      headline={headline}
      subline={subline}
      faqItems={faqItems}
      componentId={componentId}
      showButtonBackgroundColor={showButtonBackgroundColor}
      btnBgColor__limio_color={btnBgColor__limio_color}
      btnBorderColor__limio_color={btnBorderColor__limio_color}
    />
  )

  await waitFor(() => expect(internalAppState.pageContext).toMatchObject({ user: { loaded: true } }))

  const results = await axe(container)
  const button1 = screen.queryAllByRole("button")[0]

  expect(results).toHaveNoViolations()

  fireEvent.click(button1)
  await waitFor(() => expect(results).toHaveNoViolations())
})
