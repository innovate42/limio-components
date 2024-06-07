
export const addOns =[
  {
    "path": "/add_ons/Candidate Texting Annual",
    "name": "Candidate Texting Annual",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "annual"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Personalize communication and engage candidates with real-time texting conversations.</p>",
        "display_name__limio": "Candidate Texting ",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ],
        "volume_plan": true,
        "quantities": [25, 50, 75, 100],
        "quantity_text": "Texts",
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:32:20+00:00",
      "modified": "2023-11-22T12:08:30+00:00",
      "productBundles": [
        {
          "product_path": "/products/Candidate Texting",
          "revenue_split": "100",
          "rate_plan": "Candidate Texting - Annual Volume"
        }
      ],
      "products": [
        {
          "path": "/products/Candidate Texting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Candidate Texting",
            "product_code__limio": "SKU-ADDON-TEXTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:35:12+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Candidate Texting"
            }
          ]
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting (1)",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "fec7bc593ea6c6e4da477f2cf55445d339d3d28f",
    "version": "2953618ba88967023b82ff96ecfa0e8de7d6784a"
  },
  {
    "path": "/add_ons/Candidate Texting Month to Month",
    "name": "Candidate Texting Month to Month",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "monthly"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Personalize communication and engage candidates with real-time texting conversations.</p>",
        "display_name__limio": "Candidate Texting ",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ],
        "volume_plan": true,
        "quantities": [25, 50, 75, 100],
        "quantity_text": "Texts",
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:34:01+00:00",
      "modified": "2023-11-22T12:07:08+00:00",
      "productBundles": [
        {
          "product_path": "/products/Candidate Texting",
          "revenue_split": "100",
          "rate_plan": "Candidate Texting - Monthly Volume"
        }
      ],
      "products": [
        {
          "path": "/products/Candidate Texting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Candidate Texting",
            "product_code__limio": "SKU-ADDON-TEXTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:35:12+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Candidate Texting"
            }
          ]
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Triennial",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "97c601b49c8e8e50311b8f4006e49286d2c354b3",
    "version": "1adc2d0f17d0b1373b44e3fd83a8670348ce883b"
  },
  {
    "path": "/add_ons/Dedicated Account Manager Annual",
    "name": "Dedicated Account Manager Annual",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "annual"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
        "display_name__limio": "Dedicated Account Manager",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:42:24+00:00",
      "modified": "2023-11-01T12:50:54+00:00",
      "productBundles": [
        {
          "product_path": "/products/Dedicated Account Management",
          "revenue_split": "100",
          "rate_plan": "Yearly Subscription"
        }
      ],
      "products": [
        {
          "path": "/products/Dedicated Account Management",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Dedicated Account Management",
            "product_code__limio": "SKU-00000110",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:37:54+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Dedicated Account Management"
            }
          ]
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Annual",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "ad0668d8e7eadea94259c34e74a47d15825dd884",
    "version": "96c38e5640e579265282b105655b367b5da3379c"
  },
  {
    "path": "/add_ons/Dedicated Account Manager Biennial",
    "name": "Dedicated Account Manager Biennial",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "biennial"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
        "display_name__limio": "Dedicated Account Manager",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:42:24+00:00",
      "modified": "2023-11-01T12:50:59+00:00",
      "productBundles": [
        {
          "product_path": "/products/Dedicated Account Management",
          "revenue_split": "100",
          "rate_plan": "Yearly Subscription"
        }
      ],
      "products": [
        {
          "path": "/products/Dedicated Account Management",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Dedicated Account Management",
            "product_code__limio": "SKU-00000110",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:37:54+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Dedicated Account Management"
            }
          ]
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Biennial",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "de600e874a2da44aef420354106ece7a54eeb067",
    "version": "c13937845da5c73918644fe237a7a0b2f920dec6"
  },
  {
    "path": "/add_ons/Dedicated Account Manager to Month",
    "name": "Dedicated Account Manager to Month",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "monthly"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
        "display_name__limio": "Dedicated Account Manager",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:42:24+00:00",
      "modified": "2023-11-01T12:51:06+00:00",
      "productBundles": [
        {
          "product_path": "/products/Dedicated Account Management",
          "revenue_split": "100",
          "rate_plan": "Monthly Subscription"
        }
      ],
      "products": [
        {
          "path": "/products/Dedicated Account Management",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Dedicated Account Management",
            "product_code__limio": "SKU-00000110",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:37:54+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Dedicated Account Management"
            }
          ]
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Month to Month",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "e9f41bad2fe75797d720237b5db45cf57746c444",
    "version": "0bf361f354bad228a9cf4cde4941a22d9db4e913"
  },
  {
    "path": "/add_ons/Dedicated Account Manager Triennial",
    "name": "Dedicated Account Manager Triennial",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "triennial"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Partner with your account manager for quarterly account review, customized training for your team, and the first look at new features. </p>",
        "display_name__limio": "Dedicated Account Manager",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:42:24+00:00",
      "modified": "2023-11-01T12:51:11+00:00",
      "productBundles": [
        {
          "product_path": "/products/Dedicated Account Management",
          "revenue_split": "100",
          "rate_plan": "Yearly Subscription"
        }
      ],
      "products": [
        {
          "path": "/products/Dedicated Account Management",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Dedicated Account Management",
            "product_code__limio": "SKU-00000110",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:37:54+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Dedicated Account Management"
            }
          ]
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Triennial",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "ee15731901f3cf78f2fc971e9afbd857945ac2c8",
    "version": "1bae929c843c810bc7b6b58d4b49d043a7a73b27"
  },
  {
    "path": "/add_ons/RandC - Annual",
    "name": "RandC - Annual",
    "type": "item",
    "data": {
      "name": "RandC - Annual",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/RandC - Annual",
      "created": "2023-10-09T13:13:53+00:00",
      "modified": "2023-11-17T16:01:09+00:00",
      "attributes": {
        "display_name__limio": "Reporting & Compliance",
        "label__limio": [
          "plusaddon",
          "all"
        ],
        "compatible_products": [
          "plus"
        ],
        "billing_option": [
          "annual"
        ],
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "productBundles": [
        {
          "product_path": "/products/Advanced Reporting",
          "revenue_split": "100",
          "rate_plan": "Annual"
        }
      ],
      "products": [
        {
          "path": "/products/Advanced Reporting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Advanced Reporting",
            "product_code__limio": "SKU-ADDON-ADV-REPORTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:31:34+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Reporting  Compliance"
            }
          ]
        }
      ]
    },
    "id": "746a45d5969aece615c3ec4e4e5b8f991b438188",
    "version": "ae3e5b4ea898983623337ee40f758ab50a519f5d"
  },
  {
    "path": "/add_ons/RandC - Montlhy",
    "name": "RandC - Montlhy",
    "type": "item",
    "data": {
      "name": "RandC - Montlhy",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "display_name__limio": "Reporting & Compliance",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "USD",
              "label": "USD - US Dollar",
              "symbol": "$"
            }
          }
        ],
        "compatible_products": [
          "plus"
        ],
        "label__limio": [
          "plusaddon",
          "all"
        ],
        "billing_option": [
          "monthly"
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/RandC - Montlhy",
      "created": "2023-10-09T13:12:24+00:00",
      "modified": "2023-11-17T16:01:29+00:00",
      "productBundles": [
        {
          "product_path": "/products/Advanced Reporting",
          "revenue_split": "100",
          "rate_plan": "Monthly"
        }
      ],
      "products": [
        {
          "path": "/products/Advanced Reporting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Advanced Reporting",
            "product_code__limio": "SKU-ADDON-ADV-REPORTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:31:34+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Reporting  Compliance"
            }
          ]
        }
      ]
    },
    "id": "36d894139fbc26ccca66f0d7bcb33193ee8b897e",
    "version": "48dc53b1b39e09ba5fc40b0df037ab34016271ca"
  },
  {
    "path": "/add_ons/RandC - Quaterly",
    "name": "RandC - Quaterly",
    "type": "item",
    "data": {
      "name": "RandC - Quaterly",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/RandC - Quaterly",
      "created": "2023-10-09T13:17:12+00:00",
      "modified": "2023-11-17T16:01:34+00:00",
      "attributes": {
        "compatible_products": [
          "plus"
        ],
        "label__limio": [
          "plusaddon",
          "all"
        ],
        "display_name__limio": "Reporting & Compliance",
        "billing_option": [
          "quarterly"
        ],
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "productBundles": [
        {
          "product_path": "/products/Advanced Reporting",
          "revenue_split": "100",
          "rate_plan": "Quarterly"
        }
      ],
      "products": [
        {
          "path": "/products/Advanced Reporting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Advanced Reporting",
            "product_code__limio": "SKU-ADDON-ADV-REPORTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:31:34+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Reporting  Compliance"
            }
          ]
        }
      ]
    },
    "id": "f30ed108fa3fd7c85d86203f40bcf15ad577a4b3",
    "version": "1bc595766f6af9cfcb3968998b28ff43c646db4c"
  },
  {
    "path": "/add_ons/RandC - SemiAnnual",
    "name": "RandC - SemiAnnual",
    "type": "item",
    "data": {
      "name": "RandC - SemiAnnual",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/RandC - SemiAnnual",
      "created": "2023-10-09T13:16:16+00:00",
      "modified": "2023-11-17T16:01:37+00:00",
      "attributes": {
        "compatible_products": [
          "plus"
        ],
        "label__limio": [
          "plusaddon",
          "all"
        ],
        "display_name__limio": "Reporting & Compliance",
        "billing_option": [
          "semiannual"
        ],
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "productBundles": [
        {
          "product_path": "/products/Advanced Reporting",
          "revenue_split": "100",
          "rate_plan": "Semi-Annual"
        }
      ],
      "products": [
        {
          "path": "/products/Advanced Reporting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Advanced Reporting",
            "product_code__limio": "SKU-ADDON-ADV-REPORTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:31:34+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Reporting  Compliance"
            }
          ]
        }
      ]
    },
    "id": "12a15d07991a36f21f9c71859ae53d414c03efc3",
    "version": "a90fd4f11803113dd082d168f433502c442495b6"
  },
  {
    "path": "/add_ons/RandC - Triennial",
    "name": "RandC - Triennial",
    "type": "item",
    "data": {
      "name": "RandC - Triennial",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "compatible_products": [
          "plus"
        ],
        "display_name__limio": "Reporting & Compliance",
        "label__limio": [
          "plusaddon",
          "all"
        ],
        "billing_option": [
          "triennial"
        ],
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/RandC - Triennial",
      "created": "2023-10-09T13:18:55+00:00",
      "modified": "2023-11-17T16:01:39+00:00",
      "productBundles": [
        {
          "product_path": "/products/Advanced Reporting",
          "revenue_split": "100",
          "rate_plan": "Triennial"
        }
      ],
      "products": [
        {
          "path": "/products/Advanced Reporting",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Advanced Reporting",
            "product_code__limio": "SKU-ADDON-ADV-REPORTING",
            "Device Access": [
              "Web",
              "Tablet",
              "Mobile"
            ]
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-10-24T12:31:34+00:00",
          "entitlements": [
            {
              "$ref": "/entitlements/Reporting  Compliance"
            }
          ]
        }
      ]
    },
    "id": "8b3077d497d15851ab314e3bb2e07851cf75bb75",
    "version": "b69ddd76c232807d0b6d47aa2152513b21d14e7b"
  },
  {
    "path": "/add_ons/Single Sign-on Annual",
    "name": "Single Sign-on Annual",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "annual"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Simplify password management for your team. </p>",
        "display_name__limio": "Single Sign-on",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:37:48+00:00",
      "modified": "2023-11-01T12:51:33+00:00",
      "productBundles": [
        {
          "product_path": "/products/Single Signon",
          "revenue_split": "100",
          "rate_plan": "Annual"
        }
      ],
      "products": [
        {
          "path": "/products/Single Signon",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Single Signon",
            "product_code__limio": "SKU-00000112"
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-06-14T11:30:50.661Z"
        }
      ],
      "duplicatedFrom": "/add_ons/Single Sign-on Triennial",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "716ba76d279dc88c85ff5c117534b4671c9fd8e2",
    "version": "ef0b7c773f88e2df91254980ffd84b88986f1a08"
  },
  {
    "path": "/add_ons/Single Sign-on Biennial",
    "name": "Single Sign-on Biennial",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "biennial"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Simplify password management for your team. </p>",
        "display_name__limio": "Single Sign-on",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:36:40+00:00",
      "modified": "2023-11-01T12:51:38+00:00",
      "productBundles": [
        {
          "product_path": "/products/Single Signon",
          "revenue_split": "100",
          "rate_plan": "Biennial"
        }
      ],
      "products": [
        {
          "path": "/products/Single Signon",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Single Signon",
            "product_code__limio": "SKU-00000112"
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-06-14T11:30:50.661Z"
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Biennial",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "68a3ea99e4c4f700a2e70dd959085b6116f657e3",
    "version": "9b37342d9936d85f73e7d9b8b5f056d0b5c8c705"
  },
  {
    "path": "/add_ons/Single Sign-on Month to Month",
    "name": "Single Sign-on Month to Month",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "monthly"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Simplify password management for your team. </p>",
        "display_name__limio": "Single Sign-on",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:36:40+00:00",
      "modified": "2023-11-01T12:51:44+00:00",
      "productBundles": [
        {
          "product_path": "/products/Single Signon",
          "revenue_split": "100",
          "rate_plan": "Monthly"
        }
      ],
      "products": [
        {
          "path": "/products/Single Signon",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Single Signon",
            "product_code__limio": "SKU-00000112"
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-06-14T11:30:50.661Z"
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Month to Month",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "fc87617f812dcc6c7900c9cdce390061e4c45d30",
    "version": "4fc581dc9c50d715809d3ee9871159212e489df6"
  },
  {
    "path": "/add_ons/Single Sign-on Triennial",
    "name": "Single Sign-on Triennial",
    "type": "item",
    "data": {
      "name": "Candidate Texting",
      "record_type": "add_on",
      "baseTemplate": "/config/templates/add_ons/Add On Product",
      "attributes": {
        "billing_option": [
          "triennial"
        ],
        "compatible_products": [
          "base"
        ],
        "label__limio": [
          "all"
        ],
        "description__limio": "<p>Simplify password management for your team. </p>",
        "display_name__limio": "Single Sign-on",
        "price__limio": [
          {
            "use_external_price": true,
            "currency": {
              "id": "N/A",
              "label": "N/A"
            },
            "currencyCode": "USD"
          }
        ]
      },
      "user": "steven+jazz-hr@limio.com",
      "path": "/add_ons/Candidate Texting",
      "created": "2023-10-05T09:36:40+00:00",
      "modified": "2023-11-01T12:51:50+00:00",
      "productBundles": [
        {
          "product_path": "/products/Single Signon",
          "revenue_split": "100",
          "rate_plan": "Triennial"
        }
      ],
      "products": [
        {
          "path": "/products/Single Signon",
          "record_type": "product",
          "record_subtype": null,
          "attributes": {
            "display_name__limio": "Single Signon",
            "product_code__limio": "SKU-00000112"
          },
          "baseTemplate": "/config/templates/products/default",
          "created": "2023-06-14T11:30:50.661Z",
          "modified": "2023-06-14T11:30:50.661Z"
        }
      ],
      "duplicatedFrom": "/add_ons/Candidate Texting Triennial",
      "priceReference": "/add_ons/Candidate Texting",
      "price__limio": [],
      "price": []
    },
    "id": "142429510d53f42c773c8775eb8be07c79fe7991",
    "version": "3297d24d35a5782f34eb632c8127a1520b157552"
  }
]
