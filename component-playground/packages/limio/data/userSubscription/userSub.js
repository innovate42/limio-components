export const useSub = [{
    "subscription": {
      "name": "2P5JKDP1GIGG",
      "start": "2024-01-26T13:35:30.165Z",
      "data": {
        "name": "Hero Plan - Annual",
        "tracking": {
          "offers": [
            "/offers2/Hero Plan - Annual"
          ],
          "lmo_offer": "/offers2/Hero+Plan+-+Annual",
          "campaign": "/pages2/Acquisition",
          "ltm_Subscription_Type": "Plan",
          "tag": "/tags/jazzhr",
          "ltm_Product_Type": "BasePlan",
          "ltm_Agreement_Length": "current+term+(12+month(s))"
        },
        "addOns": [
          {
            "addOn": {
              "name": "Dedicated Account Manager Annual",
              "path": "/add_ons/Dedicated Account Manager Annual",
              "id": "ad0668d8e7eadea94259c34e74a47d15825dd884",
              "type": "item",
              "data": {
                "price__limio": [],
                "created": "2023-10-05T09:42:24+00:00",
                "duplicatedFrom": "/add_ons/Candidate Texting Annual",
                "record_type": "add_on",
                "productBundles": [
                  {
                    "revenue_split": "100",
                    "product_path": "/products/Dedicated Account Management",
                    "rate_plan": "Yearly Subscription"
                  }
                ],
                "products": [
                  {
                    "baseTemplate": "/config/templates/products/default",
                    "entitlements": [
                      {
                        "$ref": "/entitlements/Dedicated Account Management"
                      }
                    ],
                    "path": "/products/Dedicated Account Management",
                    "created": "2023-06-14T11:30:50.661Z",
                    "modified": "2023-10-24T12:37:54+00:00",
                    "attributes": {
                      "display_name__limio": "Dedicated Account Management",
                      "Device Access": [
                        "Web",
                        "Tablet",
                        "Mobile"
                      ],
                      "product_code__limio": "SKU-00000110"
                    },
                    "record_subtype": null,
                    "record_type": "product"
                  }
                ],
                "baseTemplate": "/config/templates/add_ons/Add On Product",
                "path": "/add_ons/Candidate Texting",
                "priceReference": "/add_ons/Candidate Texting",
                "price": [],
                "name": "Candidate Texting",
                "modified": "2023-12-04T10:22:42+00:00",
                "attributes": {
                  "price__limio": [
                    {
                      "use_external_price": true,
                      "currencyCode": "USD",
                      "currency": {
                        "id": "N/A",
                        "label": "N/A"
                      }
                    }
                  ],
                  "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
                  "display_name__limio": "Dedicated Account Manager",
                  "billing_option": [
                    "annual"
                  ],
                  "compatible_products": [
                    "base"
                  ],
                  "label__limio": [
                    "all",
                    "test"
                  ]
                },
                "user": "steven+jazz-hr@limio.com"
              },
              "version": "7ccd262cd7c51d415c1f731792bbc198c1b83c2e"
            },
            "quantity": 1
          }
        ],
        "attributes": {
          "gift": false,
          "external": false
        },
        "details": "",
        "id": "261694e6-e028-4d10-9d80-c2b4c3832d38",
        "offer": {
          "mode": "production",
          "path": "/offers2/Hero Plan - Annual",
          "data": {
            "baseTemplate": "/config/templates/offers/default",
            "path": "/offers2/Hero Plan - Annual",
            "created": "2023-10-11T07:43:38+00:00",
            "name": "Hero Plan - Annual",
            "modified": "2023-12-14T15:37:05+00:00",
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
                "all",
                "test"
              ],
              "term__limio": {
                "renewal_type": "TERMED",
                "length": 1,
                "renewal_trigger": "EXTERNAL",
                "type": "years"
              },
              "billing_plan": [
                "annual"
              ],
              "display_price__limio": "<p>$test/mo</p>",
              "ltm_Subscription_Type": [
                "Plan"
              ],
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
              "The billing plan for this offer": [
                "annual"
              ],
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
              "ltm_Product_Type": "BasePlan",
              "offer_type__limio": "standard",
              "ltm_Agreement_Length": "current term (12 month(s))"
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
          "created": "2023-12-14T15:38:15.266Z",
          "name": "Hero Plan - Annual",
          "id": "3503b2b7d0bf8426a932150f1ac90cfe711c79d7",
          "type": "item",
          "updated": "2023-12-14T15:38:15.266Z",
          "version": "6509bef480b3164a04a3de006d6af5d90f2856ba",
          "record_type": "offer",
          "status": "active"
        },
        "price": {
          "summary": {
            "headline": "<p>$test/mo</p>",
            "subline": "<p>Annual\t</p>"
          },
          "currency": "USD",
          "amount": 0
        },
        "products": [
          {
            "baseTemplate": "/config/templates/products/default",
            "entitlements": [
              {
                "$ref": "/entitlements/Dedicated Account Management"
              }
            ],
            "path": "/products/Dedicated Account Management",
            "created": "2023-06-14T11:30:50.661Z",
            "modified": "2023-10-24T12:37:54+00:00",
            "attributes": {
              "display_name__limio": "Dedicated Account Management",
              "Device Access": [
                "Web",
                "Tablet",
                "Mobile"
              ],
              "product_code__limio": "SKU-00000110"
            },
            "record_subtype": null,
            "record_type": "product"
          },
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
        ],
        "purchaseCountry": "GB",
        "quantity": 1,
        "startDate": "2024-01-26T13:35:30.165Z",
        "termEndDate": "2027-01-26",
        "termStartDate": "2024-01-26"
      },
      "status": "active",
      "record_type": "subscription",
      "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
      "customer": "cus-d1869b1f549040e0b9fe8be7ff8644ca",
      "id": "sub-592ce8dc8612838d140e87273427e5c9",
      "service": "limio",
      "ref": "order-69c2a649fddad62b31686591cf292ee8/261694e6-e028-4d10-9d80-c2b4c3832d38",
      "created": "2024-01-26T13:35:31.960Z",
      "updated": "2024-01-26T16:02:36.962Z",
      "reference": "2P5JKDP1GIGG",
      "mode": "production"
    },
    "schedule": [
      {
        "data": {
          "date": "2029-12-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-12-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-ad71e6581b6a1a50c0be62550d597101",
        "service": "limio",
        "created": "2024-01-26T16:02:43.000Z",
        "updated": "2024-01-26T16:02:43.000Z",
        "reference": "5DE7J5G6RA30",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-12-26T00:00:00.000/limio/schedule-ad71e6581b6a1a50c0be62550d597101"
      },
      {
        "data": {
          "date": "2029-11-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-11-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-0b098224c561e211bff5a7d1ad04789d",
        "service": "limio",
        "created": "2024-01-26T16:02:42.999Z",
        "updated": "2024-01-26T16:02:42.999Z",
        "reference": "B16129HB1S80",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-11-26T00:00:00.000/limio/schedule-0b098224c561e211bff5a7d1ad04789d"
      },
      {
        "data": {
          "date": "2029-10-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-10-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-ad48b5f97728633afe18fac7c0ebbf13",
        "service": "limio",
        "created": "2024-01-26T16:02:42.990Z",
        "updated": "2024-01-26T16:02:42.990Z",
        "reference": "5D92QVITP8C0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-10-26T00:00:00.000/limio/schedule-ad48b5f97728633afe18fac7c0ebbf13"
      },
      {
        "data": {
          "date": "2029-09-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-09-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-30d5b04308827b266a13aa134025924e",
        "service": "limio",
        "created": "2024-01-26T16:02:42.990Z",
        "updated": "2024-01-26T16:02:42.990Z",
        "reference": "1GQMO46242FG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-09-26T00:00:00.000/limio/schedule-30d5b04308827b266a13aa134025924e"
      },
      {
        "data": {
          "date": "2029-08-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-08-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-d931c747641cacd10ab5d84bb1b30513",
        "service": "limio",
        "created": "2024-01-26T16:02:42.990Z",
        "updated": "2024-01-26T16:02:42.990Z",
        "reference": "6P673KEP0SM0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-08-26T00:00:00.000/limio/schedule-d931c747641cacd10ab5d84bb1b30513"
      },
      {
        "data": {
          "date": "2029-07-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-07-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-4219b774d969263e3137a8e210327c4b",
        "service": "limio",
        "created": "2024-01-26T16:02:42.989Z",
        "updated": "2024-01-26T16:02:42.989Z",
        "reference": "2236RN9MB950",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-07-26T00:00:00.000/limio/schedule-4219b774d969263e3137a8e210327c4b"
      },
      {
        "data": {
          "date": "2029-06-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-06-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-3057b3b929495372aa8e1caf57fde242",
        "service": "limio",
        "created": "2024-01-26T16:02:42.988Z",
        "updated": "2024-01-26T16:02:42.988Z",
        "reference": "1GAUPRIAA9AG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-06-26T00:00:00.000/limio/schedule-3057b3b929495372aa8e1caf57fde242"
      },
      {
        "data": {
          "date": "2029-05-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-05-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-413e929466d6eee9cf8beb5722cd421a",
        "service": "limio",
        "created": "2024-01-26T16:02:42.988Z",
        "updated": "2024-01-26T16:02:42.988Z",
        "reference": "217Q998PMMU0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-05-26T00:00:00.000/limio/schedule-413e929466d6eee9cf8beb5722cd421a"
      },
      {
        "data": {
          "date": "2029-04-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-04-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-384369c7eb4641978df0187824ecf347",
        "service": "limio",
        "created": "2024-01-26T16:02:42.988Z",
        "updated": "2024-01-26T16:02:42.988Z",
        "reference": "1O8DKSFQQ688",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-04-26T00:00:00.000/limio/schedule-384369c7eb4641978df0187824ecf347"
      },
      {
        "data": {
          "date": "2029-03-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-03-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-661a20ee6ced91ee1642fc32e358723a",
        "service": "limio",
        "created": "2024-01-26T16:02:42.987Z",
        "updated": "2024-01-26T16:02:42.987Z",
        "reference": "3638GESR7DI0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-03-26T00:00:00.000/limio/schedule-661a20ee6ced91ee1642fc32e358723a"
      },
      {
        "data": {
          "date": "2029-02-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-02-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-f00dc8dc7feec3da6d502c967611e2ad",
        "service": "limio",
        "created": "2024-01-26T16:02:42.986Z",
        "updated": "2024-01-26T16:02:42.986Z",
        "reference": "7G1N4DOVVEO0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-02-26T00:00:00.000/limio/schedule-f00dc8dc7feec3da6d502c967611e2ad"
      },
      {
        "data": {
          "date": "2029-01-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2029-01-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-a094283830c9fcff14ef62395b525bef",
        "service": "limio",
        "created": "2024-01-26T16:02:42.986Z",
        "updated": "2024-01-26T16:02:42.986Z",
        "reference": "50IGK3GC6A00",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2029-01-26T00:00:00.000/limio/schedule-a094283830c9fcff14ef62395b525bef"
      },
      {
        "data": {
          "date": "2028-12-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-12-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-4309b3947f1eb11a6fe5336c3b4a6ac2",
        "service": "limio",
        "created": "2024-01-26T16:02:42.986Z",
        "updated": "2024-01-26T16:02:42.986Z",
        "reference": "2316PP8VOUM0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-12-26T00:00:00.000/limio/schedule-4309b3947f1eb11a6fe5336c3b4a6ac2"
      },
      {
        "data": {
          "date": "2028-11-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-11-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-59de6eebc89358f37b7275c439900fe7",
        "service": "limio",
        "created": "2024-01-26T16:02:42.985Z",
        "updated": "2024-01-26T16:02:42.985Z",
        "reference": "2PRPNENI4JB0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-11-26T00:00:00.000/limio/schedule-59de6eebc89358f37b7275c439900fe7"
      },
      {
        "data": {
          "date": "2028-10-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-10-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-97b85cc8e479af5925763bd682f10b95",
        "service": "limio",
        "created": "2024-01-26T16:02:42.985Z",
        "updated": "2024-01-26T16:02:42.985Z",
        "reference": "4NN1ECHP3PM0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-10-26T00:00:00.000/limio/schedule-97b85cc8e479af5925763bd682f10b95"
      },
      {
        "data": {
          "date": "2028-09-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-09-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-24d28caa6766d31e6fedad143702ac14",
        "service": "limio",
        "created": "2024-01-26T16:02:42.985Z",
        "updated": "2024-01-26T16:02:42.985Z",
        "reference": "14QA6AKPR6QG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-09-26T00:00:00.000/limio/schedule-24d28caa6766d31e6fedad143702ac14"
      },
      {
        "data": {
          "date": "2028-08-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-08-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-7a74b9b9c4fcd8c6f623b48e3407b266",
        "service": "limio",
        "created": "2024-01-26T16:02:42.984Z",
        "updated": "2024-01-26T16:02:42.984Z",
        "reference": "3QEISRJH7SR0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-08-26T00:00:00.000/limio/schedule-7a74b9b9c4fcd8c6f623b48e3407b266"
      },
      {
        "data": {
          "date": "2028-07-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-07-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-e86a47675bb0297ea3dd779819c078cc",
        "service": "limio",
        "created": "2024-01-26T16:02:42.984Z",
        "updated": "2024-01-26T16:02:42.984Z",
        "reference": "78D93MEMTG50",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-07-26T00:00:00.000/limio/schedule-e86a47675bb0297ea3dd779819c078cc"
      },
      {
        "data": {
          "date": "2028-06-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-06-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-88ada60f7fa5c91bc3ae6b265afc77de",
        "service": "limio",
        "created": "2024-01-26T16:02:42.983Z",
        "updated": "2024-01-26T16:02:42.983Z",
        "reference": "48LMJ0UVT5P0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-06-26T00:00:00.000/limio/schedule-88ada60f7fa5c91bc3ae6b265afc77de"
      },
      {
        "data": {
          "date": "2028-05-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-05-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-58d19a19a60efc653c21b22bf9a4a1a7",
        "service": "limio",
        "created": "2024-01-26T16:02:42.983Z",
        "updated": "2024-01-26T16:02:42.983Z",
        "reference": "2OQ6D1J9GEVG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-05-26T00:00:00.000/limio/schedule-58d19a19a60efc653c21b22bf9a4a1a7"
      },
      {
        "data": {
          "date": "2028-04-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-04-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-59f03185459d3ce66d349d560de972dd",
        "service": "limio",
        "created": "2024-01-26T16:02:42.983Z",
        "updated": "2024-01-26T16:02:42.983Z",
        "reference": "2PU0OOAHCT7G",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-04-26T00:00:00.000/limio/schedule-59f03185459d3ce66d349d560de972dd"
      },
      {
        "data": {
          "date": "2028-03-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-03-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-bb37c801f99abf1f0236fe2be524ef46",
        "service": "limio",
        "created": "2024-01-26T16:02:42.982Z",
        "updated": "2024-01-26T16:02:42.982Z",
        "reference": "5R6V403UCQO0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-03-26T00:00:00.000/limio/schedule-bb37c801f99abf1f0236fe2be524ef46"
      },
      {
        "data": {
          "date": "2028-02-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-02-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-54015651861c93c5c5d8f7d485e5e4e9",
        "service": "limio",
        "created": "2024-01-26T16:02:42.982Z",
        "updated": "2024-01-26T16:02:42.982Z",
        "reference": "2K05B531GSIG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-02-26T00:00:00.000/limio/schedule-54015651861c93c5c5d8f7d485e5e4e9"
      },
      {
        "data": {
          "date": "2028-01-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2028-01-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-da3f6c871e0dc51e1b45b27b261594c5",
        "service": "limio",
        "created": "2024-01-26T16:02:42.981Z",
        "updated": "2024-01-26T16:02:42.981Z",
        "reference": "6Q7TM8E7GDP0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2028-01-26T00:00:00.000/limio/schedule-da3f6c871e0dc51e1b45b27b261594c5"
      },
      {
        "data": {
          "date": "2027-12-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-12-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-864b9c03fd64f73cef3a37ac0539d39a",
        "service": "limio",
        "created": "2024-01-26T16:02:42.981Z",
        "updated": "2024-01-26T16:02:42.981Z",
        "reference": "469EE07VB4V0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-12-26T00:00:00.000/limio/schedule-864b9c03fd64f73cef3a37ac0539d39a"
      },
      {
        "data": {
          "date": "2027-11-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-11-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-c688732abeb99cb559819af5491c01c7",
        "service": "limio",
        "created": "2024-01-26T16:02:42.981Z",
        "updated": "2024-01-26T16:02:42.981Z",
        "reference": "66H1PILFLPK0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-11-26T00:00:00.000/limio/schedule-c688732abeb99cb559819af5491c01c7"
      },
      {
        "data": {
          "date": "2027-10-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-10-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-c1d2e46f32e351500ceaa5a700674b47",
        "service": "limio",
        "created": "2024-01-26T16:02:42.980Z",
        "updated": "2024-01-26T16:02:42.980Z",
        "reference": "61QBI6UCN3A0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-10-26T00:00:00.000/limio/schedule-c1d2e46f32e351500ceaa5a700674b47"
      },
      {
        "data": {
          "date": "2027-09-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-09-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-9a76b45b4eb331c10a23b3270260ae73",
        "service": "limio",
        "created": "2024-01-26T16:02:42.980Z",
        "updated": "2024-01-26T16:02:42.980Z",
        "reference": "4QEQQ5MJLJ60",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-09-26T00:00:00.000/limio/schedule-9a76b45b4eb331c10a23b3270260ae73"
      },
      {
        "data": {
          "date": "2027-08-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-08-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-990586f3589348bed223e895c3bbbd37",
        "service": "limio",
        "created": "2024-01-26T16:02:42.979Z",
        "updated": "2024-01-26T16:02:42.979Z",
        "reference": "4P0M3F6M4J90",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-08-26T00:00:00.000/limio/schedule-990586f3589348bed223e895c3bbbd37"
      },
      {
        "data": {
          "date": "2027-07-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-07-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-15875b57fcdcb6e462121d17cd66d7e5",
        "service": "limio",
        "created": "2024-01-26T16:02:42.970Z",
        "updated": "2024-01-26T16:02:42.970Z",
        "reference": "LGTDLFV6SMS0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-07-26T00:00:00.000/limio/schedule-15875b57fcdcb6e462121d17cd66d7e5"
      },
      {
        "data": {
          "date": "2027-06-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-06-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-671c10851714a91003f117c5c30326a1",
        "service": "limio",
        "created": "2024-01-26T16:02:42.970Z",
        "updated": "2024-01-26T16:02:42.970Z",
        "reference": "373G88A5OKL0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-06-26T00:00:00.000/limio/schedule-671c10851714a91003f117c5c30326a1"
      },
      {
        "data": {
          "date": "2027-05-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-05-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-1b81f67ceaad8389257249d33b84de00",
        "service": "limio",
        "created": "2024-01-26T16:02:42.970Z",
        "updated": "2024-01-26T16:02:42.970Z",
        "reference": "RG7R7PQLDGG0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-05-26T00:00:00.000/limio/schedule-1b81f67ceaad8389257249d33b84de00"
      },
      {
        "data": {
          "date": "2027-04-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-04-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-3e6fdf9bda6686c72f18bf2e29dbb8c7",
        "service": "limio",
        "created": "2024-01-26T16:02:42.969Z",
        "updated": "2024-01-26T16:02:42.969Z",
        "reference": "1UDVFPNMJ6GO",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-04-26T00:00:00.000/limio/schedule-3e6fdf9bda6686c72f18bf2e29dbb8c7"
      },
      {
        "data": {
          "date": "2027-03-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-03-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-e7b75f98e60e68c5c11a2a43cb3efcd2",
        "service": "limio",
        "created": "2024-01-26T16:02:42.969Z",
        "updated": "2024-01-26T16:02:42.969Z",
        "reference": "77MTFPHPGED0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-03-26T00:00:00.000/limio/schedule-e7b75f98e60e68c5c11a2a43cb3efcd2"
      },
      {
        "data": {
          "date": "2027-02-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-02-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-2a12f69a5b33ba6040dd5fa97c10e904",
        "service": "limio",
        "created": "2024-01-26T16:02:42.969Z",
        "updated": "2024-01-26T16:02:42.969Z",
        "reference": "1A2BR9KMPJN8",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-02-26T00:00:00.000/limio/schedule-2a12f69a5b33ba6040dd5fa97c10e904"
      },
      {
        "data": {
          "date": "2027-01-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2027-01-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-3716ae851747b964117b8e5ef6a93492",
        "service": "limio",
        "created": "2024-01-26T16:02:42.968Z",
        "updated": "2024-01-26T16:02:42.968Z",
        "reference": "1N2QN8A5Q7N8",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2027-01-26T00:00:00.000/limio/schedule-3716ae851747b964117b8e5ef6a93492"
      },
      {
        "data": {
          "date": "2026-12-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-12-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-3398d2fd8df9177085fa4a4c6815c441",
        "service": "limio",
        "created": "2024-01-26T16:02:42.968Z",
        "updated": "2024-01-26T16:02:42.968Z",
        "reference": "1JJ39FR3FP30",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-12-26T00:00:00.000/limio/schedule-3398d2fd8df9177085fa4a4c6815c441"
      },
      {
        "data": {
          "date": "2026-11-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-11-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-a2379e631bc41ccc9e9ae13b91402188",
        "service": "limio",
        "created": "2024-01-26T16:02:42.967Z",
        "updated": "2024-01-26T16:02:42.967Z",
        "reference": "526UF666U440",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-11-26T00:00:00.000/limio/schedule-a2379e631bc41ccc9e9ae13b91402188"
      },
      {
        "data": {
          "date": "2026-10-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-10-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-a1d5f2bcb7330563ae1add4c3c9d16ec",
        "service": "limio",
        "created": "2024-01-26T16:02:42.967Z",
        "updated": "2024-01-26T16:02:42.967Z",
        "reference": "51QNPBPDPJ10",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-10-26T00:00:00.000/limio/schedule-a1d5f2bcb7330563ae1add4c3c9d16ec"
      },
      {
        "data": {
          "date": "2026-09-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-09-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-5d271d7ec0d347c7ed4d019c0b2bfed2",
        "service": "limio",
        "created": "2024-01-26T16:02:42.967Z",
        "updated": "2024-01-26T16:02:42.967Z",
        "reference": "2T4SENTG6J90",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-09-26T00:00:00.000/limio/schedule-5d271d7ec0d347c7ed4d019c0b2bfed2"
      },
      {
        "data": {
          "date": "2026-08-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-08-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-e3969789959a746ff83c5af731099ae0",
        "service": "limio",
        "created": "2024-01-26T16:02:42.966Z",
        "updated": "2024-01-26T16:02:42.966Z",
        "reference": "73IQBOJ5CQF0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-08-26T00:00:00.000/limio/schedule-e3969789959a746ff83c5af731099ae0"
      },
      {
        "data": {
          "date": "2026-07-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-07-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-711c694f68311a0667912c769ad735c3",
        "service": "limio",
        "created": "2024-01-26T16:02:42.966Z",
        "updated": "2024-01-26T16:02:42.966Z",
        "reference": "3H3HKKUQ1H3G",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-07-26T00:00:00.000/limio/schedule-711c694f68311a0667912c769ad735c3"
      },
      {
        "data": {
          "date": "2026-06-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-06-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-126620e7e4900d81756dd7a84a939db7",
        "service": "limio",
        "created": "2024-01-26T16:02:42.966Z",
        "updated": "2024-01-26T16:02:42.966Z",
        "reference": "ICOGEFP4G1O0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-06-26T00:00:00.000/limio/schedule-126620e7e4900d81756dd7a84a939db7"
      },
      {
        "data": {
          "date": "2026-05-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-05-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-d7e9ca0118bb751344f687f4dd460d8c",
        "service": "limio",
        "created": "2024-01-26T16:02:42.965Z",
        "updated": "2024-01-26T16:02:42.965Z",
        "reference": "6NT750265RF0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-05-26T00:00:00.000/limio/schedule-d7e9ca0118bb751344f687f4dd460d8c"
      },
      {
        "data": {
          "date": "2026-04-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-04-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-b01bfe2ee6808ea108e76bf62e4842d3",
        "service": "limio",
        "created": "2024-01-26T16:02:42.965Z",
        "updated": "2024-01-26T16:02:42.965Z",
        "reference": "5G3FV2TPK0I0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-04-26T00:00:00.000/limio/schedule-b01bfe2ee6808ea108e76bf62e4842d3"
      },
      {
        "data": {
          "date": "2026-03-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-03-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-6aa30c5929242489969e29d21c491281",
        "service": "limio",
        "created": "2024-01-26T16:02:42.964Z",
        "updated": "2024-01-26T16:02:42.964Z",
        "reference": "3AKC65IA944G",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-03-26T00:00:00.000/limio/schedule-6aa30c5929242489969e29d21c491281"
      },
      {
        "data": {
          "date": "2026-02-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-02-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-71b7d05505b3aba0f643327f43f9f80d",
        "service": "limio",
        "created": "2024-01-26T16:02:42.964Z",
        "updated": "2024-01-26T16:02:42.964Z",
        "reference": "3HMV85A1DJLG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-02-26T00:00:00.000/limio/schedule-71b7d05505b3aba0f643327f43f9f80d"
      },
      {
        "data": {
          "date": "2026-01-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2026-01-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-14a5ba969443c58b3d20a971e6abd607",
        "service": "limio",
        "created": "2024-01-26T16:02:42.964Z",
        "updated": "2024-01-26T16:02:42.964Z",
        "reference": "KKMT9D523OO0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2026-01-26T00:00:00.000/limio/schedule-14a5ba969443c58b3d20a971e6abd607"
      },
      {
        "data": {
          "date": "2025-12-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-12-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-083f3846f33b171d2a6e8e5688b6a6b9",
        "service": "limio",
        "created": "2024-01-26T16:02:42.963Z",
        "updated": "2024-01-26T16:02:42.963Z",
        "reference": "87SS4DSPR2S0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-12-26T00:00:00.000/limio/schedule-083f3846f33b171d2a6e8e5688b6a6b9"
      },
      {
        "data": {
          "date": "2025-11-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-11-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-fe18ae36dbcae2789bd8cccadca0a62a",
        "service": "limio",
        "created": "2024-01-26T16:02:42.963Z",
        "updated": "2024-01-26T16:02:42.963Z",
        "reference": "7U32N3DMUAS0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-11-26T00:00:00.000/limio/schedule-fe18ae36dbcae2789bd8cccadca0a62a"
      },
      {
        "data": {
          "date": "2025-10-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-10-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-12328bd6979bd72e9406e0ccd2a3faf5",
        "service": "limio",
        "created": "2024-01-26T16:02:42.962Z",
        "updated": "2024-01-26T16:02:42.962Z",
        "reference": "I6A5TD5SRQS0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-10-26T00:00:00.000/limio/schedule-12328bd6979bd72e9406e0ccd2a3faf5"
      },
      {
        "data": {
          "date": "2025-09-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-09-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-74f275bde238bece99b8d3a0668a972d",
        "service": "limio",
        "created": "2024-01-26T16:02:42.962Z",
        "updated": "2024-01-26T16:02:42.962Z",
        "reference": "3KU9QRROHOO0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-09-26T00:00:00.000/limio/schedule-74f275bde238bece99b8d3a0668a972d"
      },
      {
        "data": {
          "date": "2025-08-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-08-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-3a41a172be657d5a01a3cb28ca2fe7b5",
        "service": "limio",
        "created": "2024-01-26T16:02:42.962Z",
        "updated": "2024-01-26T16:02:42.962Z",
        "reference": "1Q86GN5FJ5FO",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-08-26T00:00:00.000/limio/schedule-3a41a172be657d5a01a3cb28ca2fe7b5"
      },
      {
        "data": {
          "date": "2025-07-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-07-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-96ccf65f1028533a6c4fb605f1adc85e",
        "service": "limio",
        "created": "2024-01-26T16:02:42.961Z",
        "updated": "2024-01-26T16:02:42.961Z",
        "reference": "4MPJR5U418A0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-07-26T00:00:00.000/limio/schedule-96ccf65f1028533a6c4fb605f1adc85e"
      },
      {
        "data": {
          "date": "2025-06-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-06-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-7dee657e154496ba281a813e8ec19715",
        "service": "limio",
        "created": "2024-01-26T16:02:42.961Z",
        "updated": "2024-01-26T16:02:42.961Z",
        "reference": "3TTPINS5A4J0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-06-26T00:00:00.000/limio/schedule-7dee657e154496ba281a813e8ec19715"
      },
      {
        "data": {
          "date": "2025-05-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-05-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-58e443bd42ab87c7d069820b9f953665",
        "service": "limio",
        "created": "2024-01-26T16:02:42.961Z",
        "updated": "2024-01-26T16:02:42.961Z",
        "reference": "2OSH1RQGLBH0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-05-26T00:00:00.000/limio/schedule-58e443bd42ab87c7d069820b9f953665"
      },
      {
        "data": {
          "date": "2025-04-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-04-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-376a89fb14e8a47192bc4abdf78caf60",
        "service": "limio",
        "created": "2024-01-26T16:02:42.960Z",
        "updated": "2024-01-26T16:02:42.960Z",
        "reference": "1NDA4VM578KG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-04-26T00:00:00.000/limio/schedule-376a89fb14e8a47192bc4abdf78caf60"
      },
      {
        "data": {
          "date": "2025-03-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-03-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-73be4d2a27535d20fc52091764c63d74",
        "service": "limio",
        "created": "2024-01-26T16:02:42.960Z",
        "updated": "2024-01-26T16:02:42.960Z",
        "reference": "3JNP6IK9QJBG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-03-26T00:00:00.000/limio/schedule-73be4d2a27535d20fc52091764c63d74"
      },
      {
        "data": {
          "date": "2025-02-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-02-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-d380099207955c10a1955bc22ede2a74",
        "service": "limio",
        "created": "2024-01-26T16:02:42.951Z",
        "updated": "2024-01-26T16:02:42.951Z",
        "reference": "6JG04P41SLC0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-02-26T00:00:00.000/limio/schedule-d380099207955c10a1955bc22ede2a74"
      },
      {
        "data": {
          "date": "2025-01-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2025-01-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-85572347f04d0a3f2827e072c4e86259",
        "service": "limio",
        "created": "2024-01-26T16:02:42.950Z",
        "updated": "2024-01-26T16:02:42.950Z",
        "reference": "45ASHKFS2D10",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2025-01-26T00:00:00.000/limio/schedule-85572347f04d0a3f2827e072c4e86259"
      },
      {
        "data": {
          "date": "2024-12-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-12-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-f60c3388e6be167cc043ce1095f1715f",
        "service": "limio",
        "created": "2024-01-26T16:02:42.950Z",
        "updated": "2024-01-26T16:02:42.950Z",
        "reference": "7M1GPOHPLU30",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-12-26T00:00:00.000/limio/schedule-f60c3388e6be167cc043ce1095f1715f"
      },
      {
        "data": {
          "date": "2024-11-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-11-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-8597364dd0fba1ec4d0c3e11d579cc13",
        "service": "limio",
        "created": "2024-01-26T16:02:42.950Z",
        "updated": "2024-01-26T16:02:42.950Z",
        "reference": "45ISR4RK7RK0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-11-26T00:00:00.000/limio/schedule-8597364dd0fba1ec4d0c3e11d579cc13"
      },
      {
        "data": {
          "date": "2024-10-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-10-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-d828cabaed0be35878d78054ee8b555f",
        "service": "limio",
        "created": "2024-01-26T16:02:42.949Z",
        "updated": "2024-01-26T16:02:42.949Z",
        "reference": "6O535BLR8BS0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-10-26T00:00:00.000/limio/schedule-d828cabaed0be35878d78054ee8b555f"
      },
      {
        "data": {
          "date": "2024-09-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-09-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-fe47b766db9a52724a01642f852ab1f9",
        "service": "limio",
        "created": "2024-01-26T16:02:42.949Z",
        "updated": "2024-01-26T16:02:42.949Z",
        "reference": "7U8URMDMSQA0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-09-26T00:00:00.000/limio/schedule-fe47b766db9a52724a01642f852ab1f9"
      },
      {
        "data": {
          "date": "2024-08-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-08-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-32ce40274ac898bb8e6f5cd670b38dd1",
        "service": "limio",
        "created": "2024-01-26T16:02:42.948Z",
        "updated": "2024-01-26T16:02:42.948Z",
        "reference": "1IPP02EIM8J0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-08-26T00:00:00.000/limio/schedule-32ce40274ac898bb8e6f5cd670b38dd1"
      },
      {
        "data": {
          "date": "2024-07-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-07-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-f1cecb7eeae162b9f9264ae20612b05e",
        "service": "limio",
        "created": "2024-01-26T16:02:42.948Z",
        "updated": "2024-01-26T16:02:42.948Z",
        "reference": "7HPR5NTQN1C0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-07-26T00:00:00.000/limio/schedule-f1cecb7eeae162b9f9264ae20612b05e"
      },
      {
        "data": {
          "date": "2024-06-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-06-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-f6f3975a4021b0e08229ddc06a796c13",
        "service": "limio",
        "created": "2024-01-26T16:02:42.948Z",
        "updated": "2024-01-26T16:02:42.948Z",
        "reference": "7MUEBLKG11M0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-06-26T00:00:00.000/limio/schedule-f6f3975a4021b0e08229ddc06a796c13"
      },
      {
        "data": {
          "date": "2024-05-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-05-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-430eab628fe142f8b1041fb45f9f77fb",
        "service": "limio",
        "created": "2024-01-26T16:02:42.947Z",
        "updated": "2024-01-26T16:02:42.947Z",
        "reference": "231QLM53V18G",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-05-26T00:00:00.000/limio/schedule-430eab628fe142f8b1041fb45f9f77fb"
      },
      {
        "data": {
          "date": "2024-04-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-04-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-42ee1536c526f2c798dcef43a75d9a5a",
        "service": "limio",
        "created": "2024-01-26T16:02:42.947Z",
        "updated": "2024-01-26T16:02:42.947Z",
        "reference": "22TOAJDH96UG",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-04-26T00:00:00.000/limio/schedule-42ee1536c526f2c798dcef43a75d9a5a"
      },
      {
        "data": {
          "date": "2024-03-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-03-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-e5004535e51d1ef4ff783bff1bd017b2",
        "service": "limio",
        "created": "2024-01-26T16:02:42.946Z",
        "updated": "2024-01-26T16:02:42.946Z",
        "reference": "75012JBP8T40",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-03-26T00:00:00.000/limio/schedule-e5004535e51d1ef4ff783bff1bd017b2"
      },
      {
        "data": {
          "date": "2024-02-26T00:00:00.000",
          "amountWithoutTax": "418.19",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            }
          ],
          "amount": "418.19",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "418.19",
          "schedule_date": "2024-02-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-1b7d9567de22f9b9b92cecdad2304242",
        "service": "limio",
        "created": "2024-01-26T16:02:42.946Z",
        "updated": "2024-01-26T16:02:42.946Z",
        "reference": "RFMAMFNH2V80",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-02-26T00:00:00.000/limio/schedule-1b7d9567de22f9b9b92cecdad2304242"
      },
      {
        "data": {
          "date": "2024-01-26T02:00:00.000+00:00",
          "reference": "8ad097048d452583018d45fba2503b54",
          "amountWithoutTax": 1658.4,
          "amount": 1658.4,
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": 1658.4,
          "schedule_date": "2024-01-26T02:00:00.000+00:00",
          "type": "payment"
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-55629fd047196e2fd2db897859eb3c8f",
        "service": "limio",
        "created": "2024-01-26T16:02:42.890Z",
        "updated": "2024-01-26T16:02:42.890Z",
        "reference": "2LCAFT0HOPE0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-01-26T02:00:00.000+00:00/limio/schedule-55629fd047196e2fd2db897859eb3c8f"
      },
      {
        "data": {
          "date": "2024-01-26T00:00:00.000",
          "amountWithoutTax": "-1240.21",
          "lineItems": [
            {
              "amountWithoutTax": "19.50",
              "processingType": "Charge",
              "quantity": 25,
              "taxAmount": "0.00",
              "chargeName": "Candidate Texting - Monthly Volume",
              "productName": "Candidate Texting",
              "chargeDescription": "Candidate Texting - Monthly Volume"
            },
            {
              "amountWithoutTax": "29.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Single Sign-on",
              "chargeDescription": "Monthly"
            },
            {
              "amountWithoutTax": "99.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Subscripton",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Monthly Subscription"
            },
            {
              "amountWithoutTax": "270.69",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Monthly Subscription",
              "productName": "Pro Plan",
              "chargeDescription": "Monthly - Three Year Agreement"
            },
            {
              "amountWithoutTax": "-1188.00",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Yearly Subscription",
              "productName": "Dedicated Account Management",
              "chargeDescription": "Yearly Subscription"
            },
            {
              "amountWithoutTax": "-470.40",
              "processingType": "Charge",
              "quantity": 1,
              "taxAmount": "0.00",
              "chargeName": "Annual Subscription",
              "productName": "Hero Plan",
              "chargeDescription": "Annual"
            }
          ],
          "amount": "-1240.21",
          "quantity": 1,
          "description": "Hero Plan - Annual",
          "currency": "USD",
          "unit_amount": "-1240.21",
          "schedule_date": "2024-01-26T00:00:00.000",
          "type": "payment",
          "taxAmount": 0
        },
        "status": "pending-external",
        "record_type": "schedule",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "schedule-c26b9581d06cbd96f97dd51ef4f57d06",
        "service": "limio",
        "created": "2024-01-26T16:02:42.945Z",
        "updated": "2024-01-26T16:02:42.945Z",
        "reference": "62DEAO3K3CO0",
        "mode": "production",
        "process_hash": "jazzhr-dev/production/limio/pending-external",
        "process_key": "pending-external/2024-01-26T00:00:00.000/limio/schedule-c26b9581d06cbd96f97dd51ef4f57d06"
      }
    ],
    "offers": [
      {
        "data": {
          "end": "2024-01-26",
          "name": "Hero Plan - Annual",
          "price": {
            "summary": {
              "headline": "<p>$test/mo</p>",
              "subline": "<p>Annual\t</p>"
            },
            "currency": "USD",
            "amount": 0
          },
          "start": "2024-01-26T13:35:30.165Z",
          "offer": {
            "mode": "production",
            "path": "/offers2/Hero Plan - Annual",
            "data": {
              "baseTemplate": "/config/templates/offers/default",
              "path": "/offers2/Hero Plan - Annual",
              "created": "2023-10-11T07:43:38+00:00",
              "name": "Hero Plan - Annual",
              "modified": "2023-12-14T15:37:05+00:00",
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
                  "all",
                  "test"
                ],
                "term__limio": {
                  "renewal_type": "TERMED",
                  "length": 1,
                  "renewal_trigger": "EXTERNAL",
                  "type": "years"
                },
                "billing_plan": [
                  "annual"
                ],
                "display_price__limio": "<p>$test/mo</p>",
                "ltm_Subscription_Type": [
                  "Plan"
                ],
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
                "The billing plan for this offer": [
                  "annual"
                ],
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
                "ltm_Product_Type": "BasePlan",
                "offer_type__limio": "standard",
                "ltm_Agreement_Length": "current term (12 month(s))"
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
            "created": "2023-12-14T15:38:15.266Z",
            "name": "Hero Plan - Annual",
            "id": "3503b2b7d0bf8426a932150f1ac90cfe711c79d7",
            "type": "item",
            "updated": "2023-12-14T15:38:15.266Z",
            "version": "6509bef480b3164a04a3de006d6af5d90f2856ba",
            "record_type": "offer",
            "status": "active"
          },
          "quantity": 1,
          "addOns": [
            {
              "addOn": {
                "name": "Dedicated Account Manager Annual",
                "path": "/add_ons/Dedicated Account Manager Annual",
                "id": "ad0668d8e7eadea94259c34e74a47d15825dd884",
                "type": "item",
                "data": {
                  "price__limio": [],
                  "created": "2023-10-05T09:42:24+00:00",
                  "duplicatedFrom": "/add_ons/Candidate Texting Annual",
                  "record_type": "add_on",
                  "productBundles": [
                    {
                      "revenue_split": "100",
                      "product_path": "/products/Dedicated Account Management",
                      "rate_plan": "Yearly Subscription"
                    }
                  ],
                  "products": [
                    {
                      "baseTemplate": "/config/templates/products/default",
                      "entitlements": [
                        {
                          "$ref": "/entitlements/Dedicated Account Management"
                        }
                      ],
                      "path": "/products/Dedicated Account Management",
                      "created": "2023-06-14T11:30:50.661Z",
                      "modified": "2023-10-24T12:37:54+00:00",
                      "attributes": {
                        "display_name__limio": "Dedicated Account Management",
                        "Device Access": [
                          "Web",
                          "Tablet",
                          "Mobile"
                        ],
                        "product_code__limio": "SKU-00000110"
                      },
                      "record_subtype": null,
                      "record_type": "product"
                    }
                  ],
                  "baseTemplate": "/config/templates/add_ons/Add On Product",
                  "path": "/add_ons/Candidate Texting",
                  "priceReference": "/add_ons/Candidate Texting",
                  "price": [],
                  "name": "Candidate Texting",
                  "modified": "2023-12-04T10:22:42+00:00",
                  "attributes": {
                    "price__limio": [
                      {
                        "use_external_price": true,
                        "currencyCode": "USD",
                        "currency": {
                          "id": "N/A",
                          "label": "N/A"
                        }
                      }
                    ],
                    "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
                    "display_name__limio": "Dedicated Account Manager",
                    "billing_option": [
                      "annual"
                    ],
                    "compatible_products": [
                      "base"
                    ],
                    "label__limio": [
                      "all",
                      "test"
                    ]
                  },
                  "user": "steven+jazz-hr@limio.com"
                },
                "version": "7ccd262cd7c51d415c1f731792bbc198c1b83c2e"
              },
              "quantity": 1
            }
          ],
          "details": "",
          "id": "261694e6-e028-4d10-9d80-c2b4c3832d38",
          "tracking": {
            "offers": [
              "/offers2/Hero Plan - Annual"
            ],
            "lmo_offer": "/offers2/Hero+Plan+-+Annual",
            "campaign": "/pages2/Acquisition",
            "ltm_Subscription_Type": "Plan",
            "tag": "/tags/jazzhr",
            "ltm_Product_Type": "BasePlan",
            "ltm_Agreement_Length": "current+term+(12+month(s))"
          },
          "products": [
            {
              "baseTemplate": "/config/templates/products/default",
              "entitlements": [
                {
                  "$ref": "/entitlements/Dedicated Account Management"
                }
              ],
              "path": "/products/Dedicated Account Management",
              "created": "2023-06-14T11:30:50.661Z",
              "modified": "2023-10-24T12:37:54+00:00",
              "attributes": {
                "display_name__limio": "Dedicated Account Management",
                "Device Access": [
                  "Web",
                  "Tablet",
                  "Mobile"
                ],
                "product_code__limio": "SKU-00000110"
              },
              "record_subtype": null,
              "record_type": "product"
            },
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
        "status": "active",
        "record_type": "subscription_offer",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "customer": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "subscription_offer-402ff4285b5189f9b45568b3912244b3",
        "service": "limio",
        "created": "2024-01-26T13:35:31.977Z",
        "updated": "2024-01-26T13:37:06.875Z",
        "reference": "205VQ2GMQHH0",
        "mode": "production"
      },
      {
        "data": {
          "start": "2024-01-26",
          "price": {
            "currency": "USD",
            "amount": 0
          },
          "offer": {
            "mode": "production",
            "data": {
              "baseTemplate": "/config/templates/offers/default",
              "path": "/offers2/Hero - Monthly",
              "created": "2023-09-20T10:36:15+00:00",
              "name": "Pro Plan - Monthly Three Year Agreement",
              "modified": "2024-01-19T10:50:58+00:00",
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
                "default_quantity_options__limio": {},
                "allowed_countries__limio": [
                  "AX",
                  "AL",
                  "DZ",
                  "AS",
                  "AD",
                  "AO",
                  "AI",
                  "AQ",
                  "AG",
                  "AR",
                  "AM",
                  "AW",
                  "AU",
                  "AT",
                  "AZ",
                  "BS",
                  "BH",
                  "BD",
                  "BB",
                  "BY",
                  "BE",
                  "BZ",
                  "BJ",
                  "BM",
                  "BT",
                  "BO",
                  "BQ",
                  "BA",
                  "BW",
                  "BV",
                  "BR",
                  "IO",
                  "BN",
                  "BG",
                  "BF",
                  "BI",
                  "CV",
                  "KH",
                  "CM",
                  "CA",
                  "KY",
                  "CF",
                  "TD",
                  "CL",
                  "CN",
                  "CX",
                  "CC",
                  "CO",
                  "KM",
                  "CG",
                  "CD",
                  "CK",
                  "CR",
                  "CI",
                  "HR",
                  "CW",
                  "CY",
                  "CZ",
                  "DK",
                  "DJ",
                  "DM",
                  "DO",
                  "EC",
                  "EG",
                  "SV",
                  "GQ",
                  "ER",
                  "EE",
                  "SZ",
                  "ET",
                  "FK",
                  "FO",
                  "FJ",
                  "FI",
                  "FR",
                  "GF",
                  "PF",
                  "TF",
                  "GA",
                  "GM",
                  "GE",
                  "DE",
                  "GH",
                  "GI",
                  "GR",
                  "GL",
                  "GD",
                  "GP",
                  "GU",
                  "GT",
                  "GG",
                  "GN",
                  "GW",
                  "GY",
                  "HT",
                  "HM",
                  "VA",
                  "HN",
                  "HK",
                  "HU",
                  "IS",
                  "IN",
                  "ID",
                  "IE",
                  "IM",
                  "IL",
                  "IT",
                  "JM",
                  "JP",
                  "JE",
                  "JO",
                  "KZ",
                  "KE",
                  "KI",
                  "XK",
                  "KR",
                  "KW",
                  "KG",
                  "LA",
                  "LV",
                  "LB",
                  "LS",
                  "LR",
                  "LY",
                  "LI",
                  "LT",
                  "LU",
                  "MO",
                  "MG",
                  "MW",
                  "MY",
                  "MV",
                  "ML",
                  "MT",
                  "MH",
                  "MQ",
                  "MR",
                  "MU",
                  "YT",
                  "MX",
                  "FM",
                  "MD",
                  "MC",
                  "MN",
                  "ME",
                  "MS",
                  "MA",
                  "MZ",
                  "MM",
                  "NA",
                  "NR",
                  "NP",
                  "NL",
                  "NC",
                  "NZ",
                  "NI",
                  "NE",
                  "NG",
                  "NU",
                  "NF",
                  "MK",
                  "MP",
                  "NO",
                  "OM",
                  "PK",
                  "PW",
                  "PS",
                  "PA",
                  "PG",
                  "PY",
                  "PE",
                  "PH",
                  "PN",
                  "PL",
                  "PT",
                  "PR",
                  "QA",
                  "RE",
                  "RO",
                  "RU",
                  "RW",
                  "BL",
                  "SH",
                  "KN",
                  "LC",
                  "MF",
                  "PM",
                  "VC",
                  "WS",
                  "SM",
                  "ST",
                  "SA",
                  "SN",
                  "RS",
                  "SC",
                  "SL",
                  "SG",
                  "SX",
                  "SK",
                  "SI",
                  "SB",
                  "ZA",
                  "GS",
                  "ES",
                  "LK",
                  "SR",
                  "SJ",
                  "SE",
                  "CH",
                  "TW",
                  "TJ",
                  "TZ",
                  "TH",
                  "TL",
                  "TG",
                  "TK",
                  "TO",
                  "TT",
                  "TN",
                  "TR",
                  "TM",
                  "TC",
                  "TV",
                  "UG",
                  "UA",
                  "AE",
                  "GB",
                  "US",
                  "UM",
                  "UY",
                  "UZ",
                  "VU",
                  "VE",
                  "VN",
                  "VG",
                  "VI",
                  "WF",
                  "EH",
                  "ZM",
                  "ZW"
                ],
                "label__limio": [
                  "proplan",
                  "all",
                  "test",
                  "grow"
                ],
                "term__limio": {
                  "renewal_type": "TERMED",
                  "length": 3,
                  "renewal_trigger": "EXTERNAL",
                  "type": "years"
                },
                "billing_plan": [
                  "monthly"
                ],
                "display_price__limio": "<p>$359/mo</p>",
                "ltm_Subscription_Type": [
                  "Plan"
                ],
                "cta_text__limio": " Monthly Three Year Agreement",
                "payment_types__limio": [
                  "zuora_card"
                ],
                "offer_features__limio": "<p>Includes:</p><ul><li>Job Posting &amp; Syndication</li><li>Applicant Tracking System</li><li>Interviews &amp; Assessments</li><li>Offers &amp; eSignatures</li><li>Reporting &amp; Compliance</li><li>All-Access Support</li></ul>",
                "detailed_display_price__limio": "<p>&nbsp;Monthly Three Year Agreement</p>",
                "The billing plan for this offer": [
                  "monthly"
                ],
                "display_name__limio": "Pro Plan - Monthly Three Year Agreement",
                "checkout__limio": {
                  "checkout_type": "standard"
                },
                "push_to_checkout__limio": true,
                "initial_term__limio": {
                  "renewal_type": "TERMED",
                  "length": 3,
                  "renewal_trigger": "EXTERNAL",
                  "type": "years"
                },
                "ltm_Product_Type": "BasePlan",
                "offer_type__limio": "standard",
                "ltm_Agreement_Length": "current term (36 month(s))"
              },
              "user": "steven+jazz-hr@limio.com",
              "record_type": "offer",
              "productBundles": [
                {
                  "revenue_split": "100",
                  "product_path": "/products/Pro Plan",
                  "rate_plan": "Monthly - Three Year Agreement"
                }
              ],
              "products": [
                {
                  "baseTemplate": "/config/templates/products/default",
                  "entitlements": [
                    {
                      "$ref": "/entitlements/Reporting  Compliance"
                    },
                    {
                      "$ref": "/entitlements/Pro access"
                    },
                    {
                      "$ref": "/entitlements/All-Access Support"
                    },
                    {
                      "$ref": "/entitlements/Candidate Export Webhook"
                    },
                    {
                      "$ref": "/entitlements/eSignatures"
                    }
                  ],
                  "path": "/products/Pro Plan",
                  "created": "2023-06-14T11:30:50.661Z",
                  "modified": "2023-10-24T12:54:16+00:00",
                  "attributes": {
                    "display_name__limio": "Pro Plan",
                    "Device Access": [
                      "Web",
                      "Tablet",
                      "Mobile"
                    ],
                    "product_code__limio": "SKU-PLAN-PRO"
                  },
                  "record_subtype": null,
                  "record_type": "product"
                }
              ]
            },
            "service": "limio",
            "created": "2024-01-19T15:46:04.159Z",
            "name": "/offers2/Pro Plan - Monthly Three Year Agreement",
            "id": "offer-8941f17b3ed5e1cc2db02ef7367780aebc3d75f5",
            "updated": "2024-01-19T15:46:04.159Z",
            "version": "06b0df53f67f0c1600703cf81f7c1725fd982fe0",
            "record_type": "offer",
            "status": "active"
          },
          "quantity": 1
        },
        "status": "active",
        "record_type": "subscription_offer",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "customer": "cus-d1869b1f549040e0b9fe8be7ff8644ca",
        "id": "subscription_offer-3e41a395af2f15b073edba02e80295e4",
        "service": "limio",
        "created": "2024-01-26T13:37:06.897Z",
        "updated": "2024-01-26T13:37:06.897Z",
        "reference": "1U86HPBBPF2O",
        "mode": "production"
      }
    ],
    "addOns": [
      {
        "data": {
          "end": "2024-01-26",
          "price": {
            "currency": "GBP",
            "amount": 0
          },
          "start": "2024-01-26T13:35:30.165Z",
          "quantity": 1,
          "add_on": {
            "name": "Dedicated Account Manager Annual",
            "path": "/add_ons/Dedicated Account Manager Annual",
            "id": "ad0668d8e7eadea94259c34e74a47d15825dd884",
            "type": "item",
            "data": {
              "price__limio": [],
              "created": "2023-10-05T09:42:24+00:00",
              "duplicatedFrom": "/add_ons/Candidate Texting Annual",
              "record_type": "add_on",
              "productBundles": [
                {
                  "revenue_split": "100",
                  "product_path": "/products/Dedicated Account Management",
                  "rate_plan": "Yearly Subscription"
                }
              ],
              "products": [
                {
                  "baseTemplate": "/config/templates/products/default",
                  "entitlements": [
                    {
                      "$ref": "/entitlements/Dedicated Account Management"
                    }
                  ],
                  "path": "/products/Dedicated Account Management",
                  "created": "2023-06-14T11:30:50.661Z",
                  "modified": "2023-10-24T12:37:54+00:00",
                  "attributes": {
                    "display_name__limio": "Dedicated Account Management",
                    "Device Access": [
                      "Web",
                      "Tablet",
                      "Mobile"
                    ],
                    "product_code__limio": "SKU-00000110"
                  },
                  "record_subtype": null,
                  "record_type": "product"
                }
              ],
              "baseTemplate": "/config/templates/add_ons/Add On Product",
              "path": "/add_ons/Candidate Texting",
              "priceReference": "/add_ons/Candidate Texting",
              "price": [],
              "name": "Candidate Texting",
              "modified": "2023-12-04T10:22:42+00:00",
              "attributes": {
                "price__limio": [
                  {
                    "use_external_price": true,
                    "currencyCode": "USD",
                    "currency": {
                      "id": "N/A",
                      "label": "N/A"
                    }
                  }
                ],
                "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
                "display_name__limio": "Dedicated Account Manager",
                "billing_option": [
                  "annual"
                ],
                "compatible_products": [
                  "base"
                ],
                "label__limio": [
                  "all",
                  "test"
                ]
              },
              "user": "steven+jazz-hr@limio.com"
            },
            "version": "7ccd262cd7c51d415c1f731792bbc198c1b83c2e"
          }
        },
        "status": "active",
        "record_type": "subscription_add_on",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "id": "subscription_add_on-1e4bd5e274d481ff10428f88eae4a0e8",
        "service": "limio",
        "created": "2024-01-26T13:35:32.025Z",
        "updated": "2024-01-26T13:37:06.877Z",
        "reference": "U9FAU4T6KG80",
        "mode": "production"
      },
      {
        "data": {
          "start": "2024-01-26",
          "price": {
            "currency": "USD",
            "amount": 0
          },
          "quantity": 1,
          "add_on": {
            "mode": "production",
            "data": {
              "price__limio": [],
              "created": "2023-10-05T09:42:24+00:00",
              "duplicatedFrom": "/add_ons/Candidate Texting Month to Month",
              "record_type": "add_on",
              "productBundles": [
                {
                  "revenue_split": "100",
                  "product_path": "/products/Dedicated Account Management",
                  "rate_plan": "Monthly Subscription"
                }
              ],
              "products": [
                {
                  "baseTemplate": "/config/templates/products/default",
                  "entitlements": [
                    {
                      "$ref": "/entitlements/Dedicated Account Management"
                    }
                  ],
                  "path": "/products/Dedicated Account Management",
                  "created": "2023-06-14T11:30:50.661Z",
                  "modified": "2023-10-24T12:37:54+00:00",
                  "attributes": {
                    "display_name__limio": "Dedicated Account Management",
                    "Device Access": [
                      "Web",
                      "Tablet",
                      "Mobile"
                    ],
                    "product_code__limio": "SKU-00000110"
                  },
                  "record_subtype": null,
                  "record_type": "product"
                }
              ],
              "baseTemplate": "/config/templates/add_ons/Add On Product",
              "path": "/add_ons/Candidate Texting",
              "priceReference": "/add_ons/Candidate Texting",
              "price": [],
              "name": "Candidate Texting",
              "modified": "2024-01-19T11:07:19+00:00",
              "attributes": {
                "price__limio": [
                  {
                    "use_external_price": true,
                    "currencyCode": "USD",
                    "currency": {
                      "id": "N/A",
                      "label": "N/A"
                    }
                  }
                ],
                "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
                "display_name__limio": "Dedicated Account Manager",
                "billing_option": [
                  "monthly"
                ],
                "compatible_products": [
                  "base"
                ],
                "label__limio": [
                  "all",
                  "test",
                  "grow"
                ]
              },
              "user": "steven+jazz-hr@limio.com"
            },
            "service": "limio",
            "created": "2024-01-19T15:46:04.324Z",
            "name": "/add_ons/Dedicated Account Manager to Month",
            "id": "add_on-e9f41bad2fe75797d720237b5db45cf57746c444",
            "updated": "2024-01-19T15:46:04.324Z",
            "version": "2a89a2a4e9f34fa9830cb8a32630d18fba7be910",
            "record_type": "add_on",
            "status": "active"
          }
        },
        "status": "active",
        "record_type": "subscription_add_on",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "customer": "cus-d1869b1f549040e0b9fe8be7ff8644ca",
        "id": "subscription_add_on-0d7a45701388e6be691be21679703c21",
        "service": "limio",
        "created": "2024-01-26T13:37:06.963Z",
        "updated": "2024-01-26T13:37:06.963Z",
        "reference": "DF92N04S8SQ0",
        "mode": "production"
      },
      {
        "data": {
          "start": "2024-01-26",
          "price": {
            "currency": "USD",
            "amount": 0
          },
          "quantity": 1,
          "add_on": {
            "mode": "production",
            "data": {
              "price__limio": [],
              "created": "2023-10-05T09:36:40+00:00",
              "duplicatedFrom": "/add_ons/Candidate Texting Month to Month",
              "record_type": "add_on",
              "productBundles": [
                {
                  "revenue_split": "100",
                  "product_path": "/products/Single Signon",
                  "rate_plan": "Monthly"
                }
              ],
              "products": [
                {
                  "baseTemplate": "/config/templates/products/default",
                  "entitlements": [
                    {
                      "$ref": "/entitlements/Single Sign On"
                    }
                  ],
                  "path": "/products/Single Signon",
                  "created": "2023-06-14T11:30:50.661Z",
                  "modified": "2023-12-15T08:14:31+00:00",
                  "attributes": {
                    "display_name__limio": "Single Signon",
                    "product_code__limio": "SKU-00000112"
                  },
                  "record_subtype": null,
                  "record_type": "product"
                }
              ],
              "baseTemplate": "/config/templates/add_ons/Add On Product",
              "path": "/add_ons/Candidate Texting",
              "priceReference": "/add_ons/Candidate Texting",
              "price": [],
              "name": "Candidate Texting",
              "modified": "2024-01-19T11:07:36+00:00",
              "attributes": {
                "price__limio": [
                  {
                    "use_external_price": true,
                    "currencyCode": "USD",
                    "currency": {
                      "id": "N/A",
                      "label": "N/A"
                    }
                  }
                ],
                "description__limio": "<p>Simplify password management for your team. </p>",
                "display_name__limio": "Single Sign-on",
                "billing_option": [
                  "monthly"
                ],
                "compatible_products": [
                  "base"
                ],
                "label__limio": [
                  "all",
                  "test",
                  "grow"
                ]
              },
              "user": "steven+jazz-hr@limio.com"
            },
            "service": "limio",
            "created": "2024-01-19T15:46:04.502Z",
            "name": "/add_ons/Single Sign-on Month to Month",
            "id": "add_on-fc87617f812dcc6c7900c9cdce390061e4c45d30",
            "updated": "2024-01-19T15:46:04.502Z",
            "version": "10bb45b6eb13fc54a01b957c9dc917f9987662f0",
            "record_type": "add_on",
            "status": "active"
          }
        },
        "status": "active",
        "record_type": "subscription_add_on",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "customer": "cus-d1869b1f549040e0b9fe8be7ff8644ca",
        "id": "subscription_add_on-542e4e5012b61f55e6b1c8bc5f1c77a0",
        "service": "limio",
        "created": "2024-01-26T13:37:06.959Z",
        "updated": "2024-01-26T13:37:06.959Z",
        "reference": "2K5P7504LM40",
        "mode": "production"
      },
      {
        "data": {
          "start": "2024-01-26",
          "price": {
            "currency": "USD",
            "amount": 0
          },
          "quantity": "25",
          "add_on": {
            "mode": "production",
            "data": {
              "price__limio": [],
              "created": "2023-10-05T09:34:01+00:00",
              "duplicatedFrom": "/add_ons/Candidate Texting Triennial",
              "record_type": "add_on",
              "productBundles": [
                {
                  "revenue_split": "100",
                  "product_path": "/products/Candidate Texting",
                  "rate_plan": "Candidate Texting - Monthly Volume"
                }
              ],
              "products": [
                {
                  "baseTemplate": "/config/templates/products/default",
                  "entitlements": [
                    {
                      "$ref": "/entitlements/Candidate Texting"
                    }
                  ],
                  "path": "/products/Candidate Texting",
                  "created": "2023-06-14T11:30:50.661Z",
                  "modified": "2023-10-24T12:35:12+00:00",
                  "attributes": {
                    "display_name__limio": "Candidate Texting",
                    "Device Access": [
                      "Web",
                      "Tablet",
                      "Mobile"
                    ],
                    "product_code__limio": "SKU-ADDON-TEXTING"
                  },
                  "record_subtype": null,
                  "record_type": "product"
                }
              ],
              "baseTemplate": "/config/templates/add_ons/Add On Product",
              "path": "/add_ons/Candidate Texting",
              "priceReference": "/add_ons/Candidate Texting",
              "price": [],
              "name": "Candidate Texting",
              "modified": "2024-01-19T11:06:48+00:00",
              "attributes": {
                "price__limio": [
                  {
                    "use_external_price": true,
                    "currencyCode": "USD",
                    "currency": {
                      "id": "N/A",
                      "label": "N/A"
                    }
                  }
                ],
                "description__limio": "<p>Personalize communication and engage candidates with real-time texting conversations.</p>",
                "display_name__limio": "Candidate Texting ",
                "volume_plan": true,
                "billing_option": [
                  "monthly"
                ],
                "label__limio": [
                  "all",
                  "test",
                  "grow"
                ],
                "quantities": [
                  "25",
                  "50",
                  "75",
                  "100"
                ],
                "quantity_text": "Conversations",
                "compatible_products": [
                  "base"
                ]
              },
              "user": "steven+jazz-hr@limio.com"
            },
            "service": "limio",
            "created": "2024-01-19T15:46:04.263Z",
            "name": "/add_ons/Candidate Texting Month to Month",
            "id": "add_on-97c601b49c8e8e50311b8f4006e49286d2c354b3",
            "updated": "2024-01-19T15:46:04.263Z",
            "version": "b780d481d4ca73234fc669b8c69063f35b962537",
            "record_type": "add_on",
            "status": "active"
          }
        },
        "status": "active",
        "record_type": "subscription_add_on",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "customer": "cus-d1869b1f549040e0b9fe8be7ff8644ca",
        "id": "subscription_add_on-9572eb34f556e8614720b252fba9d8b8",
        "service": "limio",
        "created": "2024-01-26T16:02:33.660Z",
        "updated": "2024-01-26T16:02:33.660Z",
        "reference": "4LEBLJ9TAMT0",
        "mode": "production"
      },
      {
        "data": {
          "end": "2024-01-26",
          "price": {
            "currency": "USD",
            "amount": 0
          },
          "start": "2024-01-26",
          "quantity": "1",
          "add_on": {
            "mode": "production",
            "data": {
              "price__limio": [],
              "created": "2023-10-05T09:37:48+00:00",
              "duplicatedFrom": "/add_ons/Single Sign-on Triennial",
              "record_type": "add_on",
              "productBundles": [
                {
                  "revenue_split": "100",
                  "product_path": "/products/Single Signon",
                  "rate_plan": "Annual"
                }
              ],
              "products": [
                {
                  "baseTemplate": "/config/templates/products/default",
                  "entitlements": [
                    {
                      "$ref": "/entitlements/Single Sign On"
                    }
                  ],
                  "path": "/products/Single Signon",
                  "created": "2023-06-14T11:30:50.661Z",
                  "modified": "2023-12-15T08:14:31+00:00",
                  "attributes": {
                    "display_name__limio": "Single Signon",
                    "product_code__limio": "SKU-00000112"
                  },
                  "record_subtype": null,
                  "record_type": "product"
                }
              ],
              "baseTemplate": "/config/templates/add_ons/Add On Product",
              "path": "/add_ons/Candidate Texting",
              "priceReference": "/add_ons/Candidate Texting",
              "price": [],
              "name": "Candidate Texting",
              "modified": "2024-01-19T11:07:36+00:00",
              "attributes": {
                "price__limio": [
                  {
                    "use_external_price": true,
                    "currencyCode": "USD",
                    "currency": {
                      "id": "N/A",
                      "label": "N/A"
                    }
                  }
                ],
                "description__limio": "<p>Simplify password management for your team. </p>",
                "display_name__limio": "Single Sign-on",
                "billing_option": [
                  "annual"
                ],
                "compatible_products": [
                  "base"
                ],
                "label__limio": [
                  "all",
                  "test",
                  "grow"
                ]
              },
              "user": "steven+jazz-hr@limio.com"
            },
            "service": "limio",
            "created": "2024-01-19T15:46:04.457Z",
            "name": "/add_ons/Single Sign-on Annual",
            "id": "add_on-716ba76d279dc88c85ff5c117534b4671c9fd8e2",
            "updated": "2024-01-19T15:46:04.457Z",
            "version": "32640c7b1dcd3c0a107ac77b044c01209aa760b7",
            "record_type": "add_on",
            "status": "active"
          }
        },
        "status": "active",
        "record_type": "subscription_add_on",
        "related": "sub-592ce8dc8612838d140e87273427e5c9",
        "owner": "id-feb56fe7cb73c4760611bd37a5078aa6",
        "customer": "cus-d1869b1f549040e0b9fe8be7ff8644ca",
        "id": "subscription_add_on-46fb7747107a3988dd923de49ddc7521",
        "service": "limio",
        "created": "2024-01-26T13:36:13.450Z",
        "updated": "2024-01-26T13:37:06.879Z",
        "reference": "26VDRKE43Q70",
        "mode": "production"
      }
    ]
  }]
  