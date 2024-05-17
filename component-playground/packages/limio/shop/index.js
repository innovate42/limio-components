import { func } from "prop-types"


export function useDispatch (){
    console.log("Dispatching")
}

export function useStore(){
    const store ={
        getState
    }
}

function getState(){
    const state = {
        appConfig: {
            mode: "production",
            production: {
                limio: {
                    api_key: "public_046c57e6a55add1fce849b083247a8a23f4e6e4bdd3bf9f9",
                    base_endpoint: "https://localhost:9002",
                    asset_endpoint: "https://localhost:9002"
                },
                shop: {
                    site_title: "DevShop",
                    site_url: "https://localhost:8003",
                    default_locale: "GB",
                    default_date_format: "",
                    default_language: "en",
                    enabled_payment_types: [],
                    use_loqate: true,
                    use_loqate_compact_address: true,
                    loqate_key: "FN62-BG93-WJ53-YM41",
                    loqate_country_codes: [
                        "GB",
                        "BE",
                        "FR",
                        "AU",
                        "CH"
                    ],
                    capture_building_number: true,
                    show_price_with_tax: false,
                    show_price_with_tax_country_codes: [
                        "US",
                        "CA"
                    ],
                    delivery_country_codes: [
                        "BE"
                    ],
                    disallowed_country_codes: [],
                    country_specific_rules: [],
                    order_complete_hook: {},
                    shop_domains: [
                        {
                            tenant_id: "user",
                            host: "localhost:8107",
                            type: "shop"
                        }
                    ],
                    prevent_mixed_rates: false,
                    use_phone_regex: ""
                },
                analytics: {
                    google_analytics: "UA-97075304-5",
                    fb_pixel: "YOUR_FB_PIXEL"
                },
                consent: [
                    {
                        org: "generic",
                        title: "Contact Permissions",
                        for: "email",
                        options: [
                            {
                                id: "yes",
                                label: "<p>Yes. I'd like to receive marketing emails.</p>"
                            },
                            {
                                id: "no",
                                label: "<p>No. I don't want to receive marketing emails.</p>"
                            }
                        ],
                        type: "radio"
                    },
                    {
                        org: "generic",
                        title: "Terms and Conditions",
                        for: "terms",
                        options: [
                            {
                                id: "terms",
                                label: "<p>I agree with the <a href=\"https://www.limio.com?open=terms-and-conditions\" rel=\"noopener noreferrer\" target=\"_blank\">Terms and Conditions</a></p>",
                                required: true
                            }
                        ],
                        type: "checkbox"
                    }
                ],
                payments: {
                    plugins: {
                        paypal: {
                            client_id: "",
                            mode: "sandbox"
                        },
                        apple_pay: {},
                        nexi: {
                            key: "ALIAS_WEB_00014958",
                            env: "INTEG"
                        }
                    }
                }
            }
        },
        display: {
            checkoutDisabled: false
        },
        order: {
            __spec_version: "2",
            orderState: "initial",
            external_id: "0f2ae9e7-9a8a-471e-b3a8-cf549efdf3ac",
            orderItems: [
                {
                    offer: {
                        mode: "production",
                        path: "/offers2/Publish Offer",
                        data: {
                            baseTemplate: "/config/templates/offers/default",
                            path: "/offers2/Publish Offer",
                            created: "2024-03-27T10:25:14+00:00",
                            name: "Publish Offer",
                            modified: "2024-03-27T10:25:39+00:00",
                            attributes: {
                                payment_types__limio: [
                                    "zuora_card"
                                ],
                                price__limio: [
                                    {
                                        delay_interval_type: "month",
                                        name: "charge_1",
                                        delay_interval: null,
                                        repeat_interval: 1,
                                        attributes: [],
                                        label: "Charge 1",
                                        trigger: "subscription_start",
                                        repeat_interval_type: "month",
                                        repeat_count: 1,
                                        type: "recurring",
                                        value: "17.50",
                                        currencyCode: "GBP"
                                    }
                                ],
                                default_quantity_options__limio: {},
                                detailed_display_price__limio: "£17.50",
                                display_name__limio: "Published Offer",
                                checkout__limio: {
                                    checkout_type: "external",
                                    external_url: "/basket"
                                },
                                label__limio: [
                                    "published_promo_code_offer"
                                ],
                                term__limio: {
                                    renewal_type: "TERMED",
                                    length: 1,
                                    renewal_trigger: "EXTERNAL",
                                    type: "months"
                                },
                                display_price__limio: "£17.50",
                                cta_text__limio: "Subscribe Now",
                                display_description__limio: "Published Offer"
                            },
                            team: "users",
                            user: "user@limio.com",
                            record_type: "offer",
                            productBundles: [
                                {
                                    revenue_split: "100",
                                    product_path: "/products/test prod/Digital",
                                    rate_plan: "UK Monthly"
                                }
                            ],
                            products: [
                                {
                                    baseTemplate: "/config/templates/products/default",
                                    path: "/products/test prod/Digital",
                                    created: "2022-11-08T11:16:43+00:00",
                                    modified: "2023-06-07T11:30:32+00:00",
                                    attributes: {
                                        display_name__limio: "Digital",
                                        has_delivery__limio: true,
                                        product_code__limio: "LI.DIGITAL"
                                    },
                                    record_subtype: null,
                                    record_type: "product"
                                }
                            ]
                        },
                        service: "limio",
                        created: "2024-03-27T10:59:38.058Z",
                        name: "Publish Offer",
                        id: "bb908f8764200a2a22ee7f07b87f27b6f27c1def",
                        type: "item",
                        updated: "2024-03-27T10:59:38.058Z",
                        version: "30b5cf47038eb03c759a50cddd32aa4c748d2962",
                        record_type: "offer",
                        status: "active"
                    },
                    quantity: 1,
                    price: {
                        summary: {
                            headline: "£17.50",
                            subline: "£17.50"
                        },
                        currency: "GBP",
                        amount: 17.5
                    },
                    addOns: [],
                    name: "Published Offer",
                    details: "",
                    id: "dcc665c9-2d15-4eed-9143-faa54a42fa70",
                    products: [
                        {
                            baseTemplate: "/config/templates/products/default",
                            path: "/products/test prod/Digital",
                            created: "2022-11-08T11:16:43+00:00",
                            modified: "2023-06-07T11:30:32+00:00",
                            attributes: {
                                display_name__limio: "Digital",
                                has_delivery__limio: true,
                                product_code__limio: "LI.DIGITAL"
                            },
                            record_subtype: null,
                            record_type: "product"
                        }
                    ]
                }
            ],
            userDetails: {
                issuer: "https://localhost:8003",
                iat: 1712242590,
                exp: 1712245987,
                sub: "id-f8ac1477f11de7a06f6be66a303d7f58",
                email: "user@limio.com",
                email_verified: true,
                userSubscriptionType: "New"
            },
            customerDetails: {
                marketingPrefs: {}
            },
            recipientDetails: {
                sendEmail: true,
                startNow: false
            },
            studentDetails: {
                university: "",
                course: "",
                graduationYear: "2020"
            },
            deliveryDetails: {},
            billingDetails: {},
            total: {
                amount: 17.5,
                currency: "GBP"
            },
            tracking: {
                campaign: "/pages2/Redeem Promo Code",
                tag: "/tags/redeem-promo-code",
                offers: [
                    "/offers2/Publish Offer"
                ]
            },
            country: "GB",
            allowedCountries: [],
            source: "shop",
            paymentType: "",
            redirectUrl: null,
            hasDelivery: true,
            isRedeem: false,
            variant: "standard",
            isGift: false,
            autoRenew: false,
            order_type: "new",
            redirectState: null,
            subRef: null,
            requestCompany: false,
            subId: null,
            subscriptionReference: null,
            chooseDate: false,
            checkoutId: "basket-0f2ae9e7-9a8a-471e-b3a8-cf549efdf3ac"
        },
        basket: {
            basketItems: [
                {
                    offer: {
                        name: "Publish Offer",
                        path: "/offers2/Publish Offer",
                        id: "bb908f8764200a2a22ee7f07b87f27b6f27c1def",
                        type: "item",
                        data: {
                            baseTemplate: "/config/templates/offers/default",
                            path: "/offers2/Publish Offer",
                            created: "2024-03-27T10:25:14+00:00",
                            name: "Publish Offer",
                            modified: "2024-03-27T10:25:39+00:00",
                            attributes: {
                                payment_types__limio: [
                                    "zuora_card"
                                ],
                                price__limio: [
                                    {
                                        delay_interval_type: "month",
                                        name: "charge_1",
                                        delay_interval: null,
                                        repeat_interval: 1,
                                        attributes: [],
                                        label: "Charge 1",
                                        trigger: "subscription_start",
                                        repeat_interval_type: "month",
                                        repeat_count: 1,
                                        type: "recurring",
                                        value: "17.50",
                                        currencyCode: "GBP"
                                    }
                                ],
                                default_quantity_options__limio: {},
                                detailed_display_price__limio: "£17.50",
                                display_name__limio: "Published Offer",
                                checkout__limio: {
                                    checkout_type: "external",
                                    external_url: "/basket"
                                },
                                label__limio: [
                                    "published_promo_code_offer"
                                ],
                                term__limio: {
                                    renewal_type: "TERMED",
                                    length: 1,
                                    renewal_trigger: "EXTERNAL",
                                    type: "months"
                                },
                                display_price__limio: "£17.50",
                                cta_text__limio: "Subscribe Now",
                                display_description__limio: "Published Offer"
                            },
                            team: "users",
                            user: "user@limio.com",
                            record_type: "offer",
                            productBundles: [
                                {
                                    revenue_split: "100",
                                    product_path: "/products/test prod/Digital",
                                    rate_plan: "UK Monthly"
                                }
                            ],
                            products: [
                                {
                                    baseTemplate: "/config/templates/products/default",
                                    path: "/products/test prod/Digital",
                                    created: "2022-11-08T11:16:43+00:00",
                                    modified: "2023-06-07T11:30:32+00:00",
                                    attributes: {
                                        display_name__limio: "Digital",
                                        has_delivery__limio: true,
                                        product_code__limio: "LI.DIGITAL"
                                    },
                                    record_subtype: null,
                                    record_type: "product"
                                }
                            ]
                        },
                        version: "30b5cf47038eb03c759a50cddd32aa4c748d2962"
                    },
                    id: "dcc665c9-2d15-4eed-9143-faa54a42fa70",
                    quantity: 1,
                    addOns: []
                }
            ],
            hasDelivery: true,
            isGift: false,
            chooseDate: false,
            isRedeem: false,
            autoRenew: false,
            allowedCountries: []
        },
        tracking: {
            offers: [
                "/offers2/Publish Offer"
            ],
            campaign: "/pages2/Redeem Promo Code",
            tag: "/tags/redeem-promo-code"
        },
        redirectUrl: null,
        country: null,
        locale: "GB",
        completed: false,
        expiresAt: "2024-04-18T13:31:16.451Z",
        loaded: true
    }
    
}






