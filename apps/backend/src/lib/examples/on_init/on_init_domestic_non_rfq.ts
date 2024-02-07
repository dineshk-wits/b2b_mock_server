export const onInitDomesticNonRFQ = {
  context: {
    domain: "ONDC:RET10",
    location: {
      city: {
        code: "std:080"
      },
      country: {
        code: "IND"
      }
    },
    action: "on_init",
    version: "2.0.2",
    bap_id: "buyerapp.com",
    bap_uri: "https://buyerapp.com/grocery",
    bpp_id: "sellerapp.com",
    bpp_uri: "https://sellerapp.com/grocery",
    transaction_id: "T1",
    message_id: "M1",
    timestamp: "2023-01-08T22:00:30.000Z",
    ttl: "PT30S"
  },
  message: {
    order: {
      provider: {
        id: "P1"
      },
      provider_location: {
        id: "L1"
      },
      items: [
        {
          id: "I1",
          fulfillment_ids: [
            "F1"
          ],
          quantity: {
            selected: {
              count: 200
            }
          },
          add_ons: [
            {
              id: "78787723"
            }
          ]
        }
      ],
      billing: {
        name: "ONDC buyer",
        address: "22, Mahatma Gandhi Rd, Craig Park Layout, Ashok Nagar, Bengaluru, Karnataka 560001",
        state: {
          name: "Karnataka"
        },
        city: {
          name: "Bengaluru"
        },
        tax_id: "XXXXXXXXXXXXXXX",
        email: "nobody@nomail.com",
        phone: "9886098860"
      },
      fulfillments: [
        {
          id: "F1",
          type: "Delivery",
          "@ondc/org/provider_name": "Loadshare",
          "@ondc/org/category": "Express Delivery",
          "@ondc/org/TAT": "P7D",
          tracking: false,
          stops: [
            {
              type: "end",
              location: {
                gps: "12.974002,77.613458",
                address: "My House #, My buildin",
                city: {
                  name: "Bengaluru"
                },
                country: {
                  code: "IND"
                },
                area_code: "560001",
                state: {
                  name: "Karnataka"
                }
              },
              contact: {
                phone: "9886098860"
              }
            }
          ]
        }
      ],
      quote: {
        price: {
          currency: "INR",
          value: "53600"
        },
        breakup: [
          {
            "@ondc/org/item_id": "I1",
            "@ondc/org/item_quantity": {
              count: 200
            },
            title: "Dhara Mustard Oil",
            "@ondc/org/title_type": "item",
            price: {
              currency: "INR",
              value: "50000"
            },
            item: {
              price: {
                currency: "INR",
                value: "250"
              }
            }
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Delivery charges",
            "@ondc/org/title_type": "delivery",
            price: {
              currency: "INR",
              value: "4000"
            }
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Packing charges",
            "@ondc/org/title_type": "packing",
            price: {
              currency: "INR",
              value: "500"
            }
          },
          {
            "@ondc/org/item_id": "I1",
            title: "Tax",
            "@ondc/org/title_type": "tax",
            price: {
              currency: "INR",
              value: "0"
            }
          },
          {
            "@ondc/org/item_id": "I1",
            title: "Discount",
            "@ondc/org/title_type": "discount",
            price: {
              currency: "INR",
              value: "-1000"
            }
          },
          {
            "@ondc/org/item_id": "F1",
            title: "Convenience Fee",
            "@ondc/org/title_type": "misc",
            price: {
              currency: "INR",
              value: "100"
            }
          }
        ],
        ttl: "P1D"
      },
      payments: [
        {
          type: "PRE-FULFILLMENT",
          collected_by: "BAP",
          "@ondc/org/buyer_app_finder_fee_type": "percent",
          "@ondc/org/buyer_app_finder_fee_amount": "0",
          "@ondc/org/settlement_basis": "delivery",
          "@ondc/org/settlement_window": "P1D",
          "@ondc/org/withholding_amount": "10.00",
          "@ondc/org/settlement_details": [
            {
              settlement_counterparty: "seller-app",
              settlement_phase: "sale-amount",
              settlement_type: "upi",
              upi_address: "gft@oksbi",
              settlement_bank_account_no: "XXXXXXXXXX",
              settlement_ifsc_code: "XXXXXXXXX",
              beneficiary_name: "xxxxx",
              bank_name: "xxxx",
              branch_name: "xxxx"
            }
          ]
        }
      ],
      tags: [
        {
          descriptor: {
            code: "buyer_id"
          },
          list: [
            {
              descriptor: {
                code: "buyer_id_code"
              },
              value: "gst"
            },
            {
              descriptor: {
                code: "buyer_id_no"
              },
              value: "xxxxxxxxxxxxxxx"
            }
          ]
        },
        {
          descriptor: {
            code: "bpp_terms"
          },
          list: [
            {
              descriptor: {
                code: "max_liability"
              },
              value: "2"
            },
            {
              descriptor: {
                code: "max_liability_cap"
              },
              value: "10000"
            },
            {
              descriptor: {
                code: "mandatory_arbitration"
              },
              value: "false"
            },
            {
              descriptor: {
                code: "court_jurisdiction"
              },
              value: "Bengaluru"
            },
            {
              descriptor: {
                code: "delay_interest"
              },
              value: "1000"
            }
          ]
        }
      ]
    }
  }
}