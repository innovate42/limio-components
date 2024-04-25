//@flow
import * as React from "react";
import "../source/style/style.css";
import { useCheckout } from "@limio/internal-checkout-sdk"
import { formatCurrency } from "../source/currency"
import { getPeriodForOffer } from "../source/utils/offers";
import { formatDate, getTermDates } from "../source/utils/date";
import { getAppConfigValue } from "@limio/shop/src/shop/appConfig.js"
import { useSubscriptions, useUser } from "@limio/sdk"
import { DateTime } from "luxon"

type Props = {
  title: String,
  message: String
  messageTitle: String

}

function OrderConfirmation({title, message, messageTitle }: Props): React.Node {
const { useCheckoutSelector } = useCheckout()
const { order = {}, paidSchedule = {}, schedule = {}, paymentMethod, locale, completed } = useCheckoutSelector(state => state)
const price = formatCurrency(paidSchedule.amount, paidSchedule.currency, locale)
const dateFormat = getAppConfigValue(["shop", "default_date_format"])
const user = useUser()
const subscriptions = useSubscriptions()
const { termStartDate, termEndDate } = getTermDates(order, paymentMethod, subscriptions.subscriptions[0].subscription.data)
const today = DateTime.local().toISO()
const {customerDetails, billingDetails} = order

console.log("billingDetails", billingDetails)
  return (
  <div className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl mx-auto py-20 px-8">
    <div className="flex flex-col">
      <h2 className="dark:text-white text-1xl md:text-3xl font-bold"> {title}</h2>
      <div className="flex flex-col items-center mt-4 md:mt-8">
        <h3 className=" mb-5 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{messageTitle}</h3>
        <h4 className="mb-4 font-light text-gray-500 sm:text-xl dark:text-gray-400">{message}</h4>
      </div>
      <div className="py-4">
        <h4 className="dark:text-white text-base md:text-lg font-semibold">Order Summary</h4>
      </div>
      <table className=" bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white flex flex-col md:flex-row justify-evenly py-8">
     {order.orderItems.map((orderItem) => 
     <>
          <tr className="dark:text-white text-left flex flex-row md:flex-col ">
            <th className="px-4 py-2 w-40 md:w-auto  md:text-sm ">Description</th>
            <td className="px-4 py-2  md:text-sm">Test</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Price</th>
            <td className="px-4 py-2  md:text-sm">{price}</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2  w-40 md:w-auto md:text-sm">Term</th>
            <td className="px-4 py-2  md:text-sm">{getPeriodForOffer(orderItem.offer)}</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Start date</th>
            <td className="px-4 py-2  md:text-sm">{formatDate(termStartDate, dateFormat)}</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">End date</th>
            <td className="px-4 py-2  md:text-sm">{formatDate(termEndDate, dateFormat)}</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Payment date</th>
            <td className="px-4 py-2  md:text-sm">{formatDate(today, dateFormat)}</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Renewal price</th>
            <td className="px-4 py-2  md:text-sm">{formatCurrency(schedule.amount, schedule.currency, locale)}</td>
          </tr>
          <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Confirmation email</th>
            <td className="px-4 py-2  md:text-sm">{customerDetails.email}</td>
          </tr>
          </>
)}
      </table>
      <div className="py-4">
        <h4 className="dark:text-white text-base md:text-lg font-semibold">Customer Details</h4>
      </div>
      <table className=" bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white flex flex-col md:flex-row justify-start py-8">
      <tr className="dark:text-white text-left flex flex-row md:flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Email Address</th>
            <td className="px-4 py-2  md:text-sm">{customerDetails.email}</td>
          </tr>
          <tr className="dark:text-white text-left flex  flex-col">
            <th className="px-4 py-2 w-40 md:w-auto md:text-sm">Billing Address</th>
            <td className="px-4 py-2  md:text-sm">{billingDetails.address1}</td>
            <td className="px-4 py-2  md:text-sm">{billingDetails.city}</td>
            <td className="px-4 py-2  md:text-sm">{billingDetails.region}</td>
            <td className="px-4 py-2  md:text-sm">{billingDetails.postalCode}</td>
          </tr>
      </table>
      <div>

      </div>
    </div>

    </div>

  </div>
  )
}

export default OrderConfirmation