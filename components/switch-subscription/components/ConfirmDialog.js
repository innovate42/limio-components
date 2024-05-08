import * as React from "react";
import { formatCurrency } from "../../source/currency";
import { getAppConfigValue } from "@limio/shop/src/shop/appConfig.js"
import { DateTime } from "luxon"
import {formatDate} from "../../source/utils/date"
import {  getCurrentAddress, addressSummary } from "../../source/utils/address";
import { mutateCacheById } from "@limio/shop/src/components/helpers.js"
import { AddressEditor } from "./AddressEditor";
import { sendOrder } from "@limio/shop/src/shop/helpers/postRequests.js"
import * as R from "ramda";



export const ConfirmDialog = ({offer, subscription, onCancel, onConfirm, confirmationOk, confirmationCancel, confirmHeading, confirmSubHeading, nextSchedule, customerAddress, revalidate, redirectUrl}) => {
    const [loading, setLoading] = React.useState(false)
    const externalPriceOnOffer = offer?.data?.attributes?.price__limio?.[0]?.use_external_price || false
    const effectiveDate = offer?.data?.attributes?.switch_date__limio === "immediate" ? DateTime.utc().toISO() : nextSchedule?.data?.schedule_date || subscription?.data?.termEndDate
    const dateFormat = getAppConfigValue(["shop", "default_date_format"])
    const products = offer?.data?.products
    const hasDelivery = products?.[0]?.attributes?.has_delivery__limio || products?.[0]?.data?.attributes?.has_delivery__limio
    const [editAddress, setEditAddress] = React.useState(false)
    const { id, mode } = subscription
    const [addresses, setAddresses] = React.useState(() => {
        const { data: deliveryAddress = {} } = getCurrentAddress("delivery", customerAddress)
        const { data: billingAddress = {} } = getCurrentAddress("billing", customerAddress)
        return { deliveryAddress, billingAddress }
      })

      const [newAddress, setNewAddress] = React.useState({
        firstName: "",
        lastName: "",
        country: "",
        address2: "",
        city: "",
        address1: "",
        postalCode: "",
        state: ""
      })
const [formErrors, setFormErrors] = React.useState({})
const [addressFormLoading, setAddressFormLoading] = React.useState(false)
const requiredFields = ["firstName", "lastName", "address1", "city", "postalCode", "country"]
const [sameAsDelivery, setSameAsDelivery] = React.useState(R.equals(addresses.deliveryAddress, addresses.billingAddress))

const handleAddressFieldChange = (e) => {
    const { id, value } = e.target
    setNewAddress({...newAddress, [id]: value})
  }

  const updateCustomerAddress = async (address, type) => {
    const order = {
      order_type: "change_address",
      type: type,
      forSubscription: {
        id: id
      },
      address: address,
      mode
    }
  
    return sendOrder(order)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  
  
  
  // Check all required fields are populates
  const errors = {}
  for(const key in newAddress){
    if(!newAddress[key] && requiredFields.includes(key)){
      errors[key] = `${key} is required`
    }
  }
  
  
  // Display relevant errors on form  
  setFormErrors(errors)
  
  if (Object.keys(errors).length !== 0) return
  
  // Show loading spinner
  setAddressFormLoading(true)
  
  // Send order to update address
  await updateCustomerAddress(newAddress, "delivery")
  
  if(sameAsDelivery){
    await updateCustomerAddress(newAddress, "billing")
  }
  
  revalidate()
  
  // Hide loading spinner
  setAddressFormLoading(false)
  
  // Update address in state
  if(sameAsDelivery){
    setAddresses({deliveryAddress: newAddress, billingAddress: newAddress})
  } else{
    setAddresses({deliveryAddress: newAddress, billingAddress: addresses.billingAddress})
  }
  
  // Hide modal
  setEditAddress(false)
  
  mutateCacheById(`/api/mma/subscriptions`)
  }


  const confirm = async () => {
    const params = new URL(window.location).searchParams

    setLoading(true)
    console.log("loading", loading)

    await onConfirm(addresses.deliveryAddress)
    setLoading(false)
    onCancel()
    window.location.href = `${redirectUrl}?subId=${params.get("subId")}${effectiveDate ? `&changeDate=${encodeURI(effectiveDate)}` : ""}`
  }


    const getPeriod = () => {
        if (externalPriceOnOffer) {
          if (offer?.data?.attributes?.term__limio) {
            const { length, type } = offer.data.attributes.term__limio
            return `${length} ${length > 1 ? type : type.substr(0, type.length - 1)}`
          }
    
          return ""
        }
    
        const price = offer?.data?.attributes?.price__limio?.[0]
        const { repeat_interval_type, repeat_interval } = price
        return `${repeat_interval} ${repeat_interval > 1 ? repeat_interval_type : repeat_interval_type.substr(0, repeat_interval_type.length - 1)}`
      }

    const getPrice = () => {
        const price = offer?.data?.attributes?.price__limio?.[0]
        const { currencyCode, value } = price
        const amount = (value * ( 1)).toFixed(2)
        return formatCurrency(amount, currencyCode)
      }


    


    return(
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            {loading ?
            
            <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
          </div> 
          :
        
            <div className="p-12 flex flex-col items-start w-2/4  text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white max-h-[80vh] overflow-y-auto">
                <div className="flex flex-col">
                    <h3 className="mb-4 text-lg sm:text-2xl font-semibold">{confirmHeading}</h3>
                    <p className="mb-4 text-base  text-gray-500 sm:text-lg dark:text-gray-400">{confirmSubHeading}</p>
                </div>


        <table className="w-full  bg-white   dark:bg-gray-800 dark:text-white flex flex-col md:flex-row justify-evenly my-8 border border-gray-100 rounded-lg shadow dark:border-gray-600 p-4">
        <tr className="dark:text-white text-left flex flex-row md:flex-col ">
                <th className="px-4  py-2 md:pr-4 md:pl-0 w-40 md:w-auto  text-sm ">Period:</th>
                <td className="px-4 py-2 md:pr-4 md:pl-0  text-sm">{getPeriod()}</td>
              </tr>
              <tr className="dark:text-white text-left flex flex-row md:flex-col ">
                <th className="px-4 py-2 w-40 md:w-auto  text-sm ">Amount due today:</th>
                <td className="px-4 py-2  text-sm">{getPrice()}</td>
              </tr>
              <tr className="dark:text-white text-left flex flex-row md:flex-col ">
                <th className="px-4 py-2 w-40 md:w-auto  text-sm ">Start date</th>
                <td className="px-4 py-2  text-sm">{formatDate(effectiveDate, dateFormat)}</td>
              </tr>
              <tr className="dark:text-white text-left flex flex-row md:flex-col ">
                <th className="px-4 py-2 w-40 md:w-auto  text-sm ">Use this address</th>
                <td className="px-4 py-2  text-sm">{addressSummary(addresses.deliveryAddress)}</td>
                <input type="checkbox" checked={!editAddress} onChange={() => setEditAddress(!editAddress)}  />
              </tr>
        </table>

        {hasDelivery && editAddress && (
            <AddressEditor
            setEditAddress={setEditAddress}
            handleAddressFieldChange={handleAddressFieldChange}
            handleSubmit={handleSubmit}
            newAddress={newAddress}
            formErrors={formErrors}
            loading={addressFormLoading}
            />
        )}
            <div className="flex  flex-col md:flex-row md:justify-center mb-4 w-full">
              <button className="mt-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full md:w-1/4"
              onClick={() => confirm()}>
              {confirmationOk}</button>
              <button className="mt-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full md:w-1/4"
              onClick={() => onCancel()}>{confirmationCancel}</button>
              </div>
            </div>
}
        </div>
    )
}