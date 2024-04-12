export const order = {
  "__spec_version": "2",
  "orderState": "submitting",
  "external_id": "32d41317-b403-43af-b643-bc124096d323",
  "orderItems": [
    {
      "offer": {
        "mode": "production",
        "path": "/offers2/Hero Plan - Annual",
        "data": {
          "baseTemplate": "/config/templates/offers/default",
          "path": "/offers2/Hero Plan - Annual",
          "created": "2023-10-11T07:43:38+00:00",
          "name": "Hero Plan - Annual",
          "modified": "2023-10-31T17:08:49+00:00",
          "attributes": {
            "price__limio": [
              {
                "use_external_price": true,
                "currencyCode": "USD",
                "currency": {
                  "symbol": "$",
                  "id": "USD",
                  "label": "USD - US Dollar"
                }
              }
            ],
            "default_quantity_options__limio": {
              "maximum_quantity": 1,
              "minimum_quantity": 1,
              "quantity": 1
            },
            "label__limio": [
              "all"
            ],
            "term__limio": {
              "renewal_type": "TERMED",
              "length": 1,
              "renewal_trigger": "EXTERNAL",
              "type": "years"
            },
            "display_price__limio": "<p>$49/mo</p>",
            "cta_text__limio": "Annual",
            "sales_channel__limio": [
              "Online",
              "Salesforce"
            ],
            "payment_types__limio": [
              "zuora_card"
            ],
            "offer_features__limio": "<p>Includes:</p><ul><li>Job Posting &amp; Syndication</li></ul><p><br></p><p><em>*&nbsp;Post up to 3 jobs at once, add more jobs for just $9 per job per month.</em></p><p><em>* Hero price for staffing companies is $99/month.</em></p>",
            "detailed_display_price__limio": "<p>Annual\t</p>",
            "display_name__limio": "Hero Plan - Annual",
            "checkout__limio": {
              "checkout_type": "standard"
            },
            "push_to_checkout__limio": true,
            "initial_term__limio": {
              "renewal_type": "TERMED",
              "length": 1,
              "renewal_trigger": "EXTERNAL",
              "type": "years"
            },
            "offer_type__limio": "standard"
          },
          "user": "steven+jazz-hr@limio.com",
          "record_type": "offer",
          "productBundles": [
            {
              "revenue_split": "100",
              "product_path": "/products/Hero Plan",
              "rate_plan": "Annual"
            }
          ],
          "products": [
            {
              "baseTemplate": "/config/templates/products/default",
              "entitlements": [
                {
                  "$ref": "/entitlements/Hero access"
                }
              ],
              "path": "/products/Hero Plan",
              "created": "2023-06-14T11:30:50.661Z",
              "modified": "2023-10-24T12:51:30+00:00",
              "attributes": {
                "Device Access": [
                  "Web",
                  "Tablet",
                  "Mobile"
                ],
                "description__limio": "<p><br></p>",
                "display_name__limio": "Hero Plan",
                "Product Family": "Digital",
                "product_code__limio": "SKU-PLAN-HERO",
                "block_multiple__limio": true
              },
              "record_subtype": null,
              "record_type": "product"
            }
          ]
        },
        "service": "limio",
        "created": "2023-10-31T17:13:28.607Z",
        "name": "Hero Plan - Annual",
        "id": "3503b2b7d0bf8426a932150f1ac90cfe711c79d7",
        "type": "item",
        "updated": "2023-10-31T17:13:28.607Z",
        "version": "3d750c1ce43a708438409577a08f97bb3b0d8a4a",
        "record_type": "offer",
        "status": "active"
      },
      "quantity": 1,
      "price": {
        "summary": {
          "headline": "<p>$49/mo</p>",
          "subline": "<p>Annual\t</p>"
        },
        "currency": "USD",
        "amount": 0
      },
      "addOns": [],
      "name": "Hero Plan - Annual",
      "details": "",
      "id": "b92ac9d8-40b5-4296-8859-2cc2535a8938",
      "products": [
        {
          "baseTemplate": "/config/templates/products/default",
          "entitlements": [
            {
              "$ref": "/entitlements/Hero access"
            }
          ],
          "path": "/products/Hero Plan",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:51:30+00:00",
          "attributes": {
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ],
            "description__limio": "<p><br></p>",
            "display_name__limio": "Hero Plan",
            "Product Family": "Digital",
            "product_code__limio": "SKU-PLAN-HERO",
            "block_multiple__limio": true
          },
          "record_subtype": null,
          "record_type": "product"
        }
      ]
    }
  ],
  "userDetails": {
    "issuer": "https://jazzhr-dev-shop.prod.limio.com",
    "iat": 1701360815,
    "exp": 1701364322,
    "sub": "id-6ae656cad1ec0ec5910e0dd5c0c06a60",
    "email_verified": false,
    "https://jazzhr-dev-shop.prod.limio.com/aut": {
      "iss": "https://api.jobbonjovi.com",
      "sub": "289167"
    },
    "userSubscriptionType": "New"
  },
  "customerDetails": {
    "firstName": "s",
    "lastName": "s",
    "email": "s@s.com",
    "marketingPrefs": {}
  },
  "recipientDetails": {
    "sendEmail": true,
    "startNow": false
  },
  "studentDetails": {
    "university": "",
    "course": "",
    "graduationYear": "2020"
  },
  "deliveryDetails": {},
  "billingDetails": {
    "state": "",
    "postalCode": "s",
    "country": "GB"
  },
  "total": {
    "amount": 0,
    "currency": "USD"
  },
  "tracking": {
    "campaign": "/pages2/Acquisition",
    "tag": "/tags/jazzhr",
    "offers": [
      "/offers2/Hero Plan - Annual"
    ],
    "lmo_offer": "/offers2/Hero+Plan+-+Annual"
  },
  "country": "GB",
  "allowedCountries": [],
  "source": "shop",
  "paymentType": "zuora_card",
  "redirectUrl": null,
  "recaptchaPayload": null,
  "order_reference": "232POEEK2ABG",
  "student": false,
  "hasDelivery": false,
  "isTrial": false,
  "mode": "production",
  "isRedeem": false,
  "variant": "standard",
  "isGift": false,
  "autoRenew": false,
  "payment": {
    "type": "zuora",
    "zuora": {
      "signature": "nmaftmu8CeeqqHwYwfGYQ6Lq8ftWj8XQ6xupRWhEQKhF4EMce5LjeDjk3z5Y+TLVpvRFT5Dd9MruVWW5bUgoePzlLdU6KClwjc8zXqwv3ipkJW3rnqn4RBEdazWuGXqzXle/Rn8dZo9P9z/oJ5mq15WhQ+Rab9btE1jWtrNRqnlqDaV2+cU8b/vhzWevo4a3mijQ44cv7NooRakO8JW+Gj5IdLMnIpu/JQ2nOdKmfIRQ3fHFPP+TnvCsBLUkfYLgakKU8c3sDyaarGsplWxdtz0apJiQ6rxSdipJiHqxfMIuffCyOQ6h4F9njqHpqBgJ5z0CHPAL+ya+/VVL+AiZYQ==",
      "success": true,
      "tenantId": "13168",
      "responseFrom": "Response_From_Submit_Page",
      "refId": "8ad09be48c1f7d55018c2102199466bd",
      "paymentGateway": "Limio Test Gateway",
      "token": "P5x399ms1nNkWnTwDsUSlMrbHtT7pU4k"
    }
  },
  "order_type": "new",
  "redirectState": null,
  "subRef": null,
  "requestCompany": false,
  "subId": null,
  "subscriptionReference": null,
  "chooseDate": false,
  "sub_reference": "39IEQEBLLT60",
  "checkoutId": "basket-32d41317-b403-43af-b643-bc124096d323",
  "subscriptionId": null,
  "orderDate": "2023-11-30T16:13:57.820Z"
}

export const paidSchedule = {
  "date": "2023-11-30T00:00:00.000",
  "amountWithoutTax": "470.40",
  "lineItems": [
    {
      "amountWithoutTax": "470.40",
      "processingType": "Charge",
      "quantity": 1,
      "taxAmount": "0.00",
      "chargeName": "Annual Subscription",
      "productName": "Hero Plan",
      "chargeDescription": "Annual"
    }
  ],
  "amount": "470.40",
  "quantity": 1,
  "description": "Hero Plan - Annual",
  "currency": "USD",
  "unit_amount": "470.40",
  "schedule_date": "2023-11-30T00:00:00.000",
  "type": "payment",
  "taxAmount": 0
}
