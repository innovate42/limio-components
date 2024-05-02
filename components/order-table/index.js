//@flow
import * as React from "react";
import "../source/style/style.css";
import { useSubscriptions} from "@limio/sdk"
import { SubscriptionInfo } from "./components/SubscriptionInfo.js";
import { EditAddress } from "./components/EditAddress.js";


type Props = {
}

function OrdersTable({goBackHeading,cancelLink, switchLink, changePaymentLink  }: Props): React.Node {
  const {subscriptions} = useSubscriptions()
const userSubscriptions = subscriptions.subscriptions






  return (
    <div className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl mx-auto py-20 px-8">
      <div className="flex justify-end ">
    <button className="mt-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full md:w-1/4">{goBackHeading}</button>
    </div>
    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Subscriptions</p>
    {
      userSubscriptions ?
      
      userSubscriptions.map((subscription) => (
  <div className="mb-8">
        <SubscriptionInfo key={subscription.id} subscription={subscription} cancelLink={cancelLink} switchLink={switchLink} changePaymentLink={changePaymentLink} />
        </div>
      ))
      :
      <p>Loading</p>
    }
    <div>
    </div>
      </div>
    </div>
  );
}

export default OrdersTable