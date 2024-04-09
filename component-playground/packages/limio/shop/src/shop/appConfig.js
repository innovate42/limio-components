import * as R from "ramda"

function getConfig(){
    return {
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
                        tenant_id: "tim",
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
                            label: "<p>I agree with the <a href=https://www.limio.com?open=terms-and-conditions rel=noopener noreferrer target=_blank>Terms and Conditions</a></p>",
                            required: true
                        }
                    ],
                    type: "checkbox"
                }
            ],
            payments: {
                plugins: {
                    stripe: {
                        public_key: "pk_test_OqIyko2wE5A4H1kqvKtvh6cO",
                        express_checkout_label: "DevShop"
                    },
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
        },
        test: {
            payments: {
                plugins: {
                    stripe: {
                        public_key: "pk_test_OqIyko2wE5A4H1kqvKtvh6cO"
                    }
                }
            }
        }
    }
    
}

export function getAppConfigValue<T = any>(path: Array<string>): T {
  const appConfig = getConfig()

  const { mode } = appConfig
  const config = appConfig[mode]
  return R.path(path, config)
}