//@flow
import * as React from "react";
import "../source/style/style.css";
import { useCheckout } from "@limio/internal-checkout-sdk"

type Props = {
  title: String,
  message: String
  messageTitle: String

}

function OrderConfirmation({title, message, messageTitle }: Props): React.Node {
  const { useCheckoutSelector } = useCheckout()
  const { order = {} } = useCheckoutSelector(state => state)
  console.log("order", order)

  return (
  <div className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl mx-auto py-20 px-8">
    <div className="flex flex-col">
      <h2 className="dark:text-white text-1xl md:text-3xl font-bold"> {title}</h2>
      <div className="flex flex-col items-center mt-4 md:mt-8">
        <h3 className="dark:text-white text-2xl md:text-5xl font-semibold ">{messageTitle}</h3>
        <h4 className="text-gray-500  dark:text-gray-400 text-2xl m-8 font-light">{message}</h4>
      </div>
      <div className="my-8">
        <h4 className="dark:text-white text-base md:text-lg font-semibold">Order Summary</h4>
      </div>
      <table className="table-auto bg-white border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white py-8">
        <thead>
          <tr className="dark:text-white ">
            <th>Description</th>
            <th>Price</th>
            <th>Term</th>
            <th>End date</th>
            <th>Payment date</th>
            <th>Renewal price</th>
            <th>Confirmation email</th>
          </tr>
          <tbody>
            <tr>
              <td>Test</td>
            </tr>
          </tbody>
          
        </thead>
      </table>
      <div>

      </div>
    </div>

    </div>

  </div>
  )
}

export default OrderConfirmation