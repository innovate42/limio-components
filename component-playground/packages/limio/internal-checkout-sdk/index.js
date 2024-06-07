import { basketItems } from "../data/basket";
import {addresses} from "../data/address";
import { paymentMethods } from "../data/paymentMethods";

function useCheckout() {
  const basket = {
    order: {
      orderDate: "2023-10-30T23:54:08.374Z",
      sub_reference: "777JPLJO1550",
      checkoutId: "basket-83e91b5a-edde-4394-88eb-80f59e2d7506",
      basketItems,
      orderItems: basketItems,
      isGift: false,
      order_type: "new",
      customerDetails: {
        firstName: "Test",
        lastName: "User",
        email: "support@limio.com"
      },
      payment: {
        type: "zuora",
        zuora: {
          "success": true,
          "paymentGateway": "Test Gateway",
        }
      },
      billingDetails: {
        address1: "Unit 13.1.1, THE LEATHER MARKET, 11-13 Weston Stt",
        city: "London",
        region: "",
        postalCode: "SE1 3ER",
      }
    },
    paidSchedule: {
      date: "2023-10-30T00:00:00.000",
      amountWithoutTax: "20.00",
      lineItems: [
        {
          amountWithoutTax: "20.00",
          processingType: "Charge",
          quantity: 1,
          taxAmount: "0",
          chargeName: "Physical All Access ",
          productName: "Physical - All Access",
        }
      ],
      amount: "20.00",
      quantity: 1,
      description: "Physical All Access Now ",
      currency: "GBP",
      unit_amount: "20.00",
      schedule_date: "2023-10-30T00:00:00.000",
      type: "payment",
      taxAmount: 0
    },
    schedule: {
      date: "2023-11-27T00:00:00.000",
      amountWithoutTax: "50.00",
      lineItems: [
        {
          amountWithoutTax: "50.00",
          processingType: "Charge",
          quantity: 1,
          taxAmount: "0",
          chargeName: "Physical All Access ",
          productName: "Physical - All Access",
        }
      ],
      amount: "20.00",
      quantity: 1,
      description: "Physical All Access Now ",
      currency: "GBP",
      unit_amount: "20.00",
      schedule_date: "2023-11-27T00:00:00.000",
      type: "payment",
      taxAmount: 0
    },
    paymentMethod: "CreditCard",
    termEndDate: "2024-10-28",
    termStartDate: "2023-10-30",

  }

  function useCheckoutSelector(callback) {
    return callback(basket)
  }

  return { useCheckoutSelector }
}


function useLimioUserSubscriptionAddresses(subId) {
  const revalidate = () => {
    console.log("addresses revalidated")
  }
  return { addresses: addresses, revalidate }
}


const useLimioUserSubscriptionPaymentMethods  = (subId) => {
  const revalidate = () => {
    console.log("payment method revalidated")
  }

  return  { payment_methods: paymentMethods, revalidate }

}

const useOrderPreview = (order) => {
  const orderPreview = {
    "preview": {
        "success": true,
        "previewResult": {
            "invoices": [
                {
                    "amount": 42.5,
                    "amountWithoutTax": 42.5,
                    "taxAmount": 0,
                    "targetDate": "2024-08-10",
                    "invoiceItems": [
                        {
                            "serviceStartDate": "2024-06-10",
                            "serviceEndDate": "2024-07-09",
                            "amountWithoutTax": -7.5,
                            "taxAmount": 0,
                            "chargeDescription": "",
                            "chargeName": "Discount",
                            "chargeNumber": null,
                            "processingType": "Discount",
                            "productName": "Limio Digital",
                            "productRatePlanChargeId": "2c92c0f8778bf8e90177aa5632fc7ada",
                            "unitPrice": 30,
                            "subscriptionNumber": "JBJHUT24BQO0",
                            "orderLineItemNumber": null,
                            "appliedToChargeNumber": "C-00276052",
                            "additionalInfo": {
                                "quantity": 1,
                                "unitOfMeasure": "",
                                "numberOfDeliveries": 0
                            }
                        },
                        {
                            "serviceStartDate": "2024-06-10",
                            "serviceEndDate": "2024-07-09",
                            "amountWithoutTax": 25,
                            "taxAmount": 0,
                            "chargeDescription": "",
                            "chargeName": "Monthly",
                            "chargeNumber": "C-00276052",
                            "processingType": "Charge",
                            "productName": "Limio Physical",
                            "productRatePlanChargeId": "2c92c0f8778bf8e90177aa78dd567a7b",
                            "unitPrice": 25,
                            "subscriptionNumber": "JBJHUT24BQO0",
                            "orderLineItemNumber": null,
                            "additionalInfo": {
                                "quantity": 1,
                                "unitOfMeasure": "",
                                "numberOfDeliveries": 0
                            }
                        },
                        {
                            "serviceStartDate": "2024-07-10",
                            "serviceEndDate": "2024-08-09",
                            "amountWithoutTax": 25,
                            "taxAmount": 0,
                            "chargeDescription": "",
                            "chargeName": "Monthly",
                            "chargeNumber": "C-00276052",
                            "processingType": "Charge",
                            "productName": "Limio Physical",
                            "productRatePlanChargeId": "2c92c0f8778bf8e90177aa78dd567a7b",
                            "unitPrice": 25,
                            "subscriptionNumber": "JBJHUT24BQO0",
                            "orderLineItemNumber": null,
                            "additionalInfo": {
                                "quantity": 1,
                                "unitOfMeasure": "",
                                "numberOfDeliveries": 0
                            }
                        }
                    ]
                }
            ]
        }
    },
    "schedule": [
        {
            "date": "2024-06-10T00:00:00.000",
            "schedule_date": "2024-06-10T00:00:00.000",
            "type": "payment",
            "description": "Print Monthly UK",
            "amount": "12.25",
            "taxAmount": 0,
            "amountWithoutTax": "17.50",
            "currency": "GBP",
            "unit_amount": "17.50",
            "quantity": 1,
            "lineItems": [
                {
                    "amountWithoutTax": "-7.50",
                    "taxAmount": "0.00",
                    "chargeDescription": "",
                    "processingType": "Discount",
                    "chargeName": "Discount",
                    "productName": "Limio Digital",
                    "quantity": 1
                },
                {
                    "amountWithoutTax": "25.00",
                    "taxAmount": "0.00",
                    "chargeDescription": "",
                    "processingType": "Charge",
                    "chargeName": "Monthly",
                    "productName": "Limio Physical",
                    "quantity": 1
                }
            ]
        },
        {
            "date": "2024-07-10T00:00:00.000",
            "schedule_date": "2024-07-10T00:00:00.000",
            "type": "payment",
            "description": "Print Monthly UK",
            "amount": "25.00",
            "taxAmount": 0,
            "amountWithoutTax": "25.00",
            "currency": "GBP",
            "unit_amount": "25.00",
            "quantity": 1,
            "lineItems": [
                {
                    "amountWithoutTax": "25.00",
                    "taxAmount": "0.00",
                    "chargeDescription": "",
                    "processingType": "Charge",
                    "chargeName": "Monthly",
                    "productName": "Limio Physical",
                    "quantity": 1
                }
            ]
        }
    ]
}
return(orderPreview)

}



export { useCheckout, useLimioUserSubscriptionAddresses, useLimioUserSubscriptionPaymentMethods, useOrderPreview }



