export const onSearchFashion = {
  context: {
    domain: "ONDC:RET12",
    location: {
      city: {
        code: "std:080"
      },
      country: {
        code: "IND"
      }
    },
    action: "on_search",
    version: "2.0.2",
    bap_id: "buyerapp.com",
    bap_uri: "https://buyerapp.com/fs",
    bpp_id: "sellerapp.com",
    bpp_uri: "https://sellerapp.com/fs",
    transaction_id: "9568beb3-265a-4730-be4e-c00ba2e5e30a",
    message_id: "86fb6231-ea67-42d1-b1ef-e43f1719a44f",
    timestamp: "2023-01-08T22:00:30.000Z",
    ttl: "PT30S"
  },
  message: {
    catalog: {
      fulfillments: [
        {
          id: "1",
          type: "Delivery"
        },
        {
          id: "2",
          type: "Self-Pickup"
        }
      ],
      payments: [
        {
          id: "1",
          type: "PRE-FULFILLMENT"
        },
        {
          id: "2",
          type: "ON-FULFILLMENT"
        },
        {
          id: "3",
          type: "POST-FULFILLMENT"
        }
      ],
      descriptor: {
        name: "ABC store",
        short_desc: "Online eCommerce Store",
        long_desc: "Online eCommerce Store",
        images: [
          {
            url: "https://abc.com/images/1-shop-img"
          }
        ]
      },
      providers: [
        {
          id: "P1",
          descriptor: {
            name: "ABC store",
            code: "P001",
            short_desc: "ABC store",
            long_desc: "ABC store",
            additional_desc: {
              url: "chat link",
              content_type: "text/html"
            },
            images: [
              {
                url: "https://abc.com/images/1-shop-img"
              }
            ]
          },
          rating: "4.4",
          ttl: "PT1D",
          locations: [
            {
              id: "L1",
              gps: "12.967555,77.749666",
              address: "Jayanagar 4th Block",
              city: {
                code: "std:080",
                name: "Bengaluru"
              },
              state: {
                code: "KA"
              },
              country: {
                code: "IND"
              },
              area_code: "560076"
            }
          ],
          creds: [
            {
              id: "ESG-12345678",
              type: "License",
              desc: "Export License No. ESG-12345678",
              url: "https://abcd.cdn.com/images/license-img"
            }
          ],
          tags: [
            {
              descriptor: {
                code: "serviceability"
              },
              list: [
                {
                  descriptor: {
                    code: "location"
                  },
                  value: "L1"
                },
                {
                  descriptor: {
                    code: "category"
                  },
                  value: "RET1A-1012"
                },
                {
                  descriptor: {
                    code: "type"
                  },
                  value: "12"
                },
                {
                  descriptor: {
                    code: "val"
                  },
                  value: "IND"
                },
                {
                  descriptor: {
                    code: "unit"
                  },
                  value: "country"
                }
              ]
            },
            {
              descriptor: {
                code: "seller_terms"
              },
              list: [
                {
                  descriptor: {
                    code: "gst_credit_invoice"
                  },
                  value: "Y"
                }
              ]
            },
            {
              descriptor: {
                code: "seller_id"
              },
              list: [
                {
                  descriptor: {
                    code: "seller_id_code"
                  },
                  value: "gst"
                },
                {
                  descriptor: {
                    code: "seller_id_no"
                  },
                  value: "xxxxxxxxxxxxxxx"
                }
              ]
            }
          ],
          categories: [
            {
              id: "V1",
              descriptor: {
                name: "Variant Group 1"
              }
            },
            {
              tags: [
                {
                  descriptor: {
                    code: "type"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "type"
                      },
                      value: "variant_group"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "attr"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "name"
                      },
                      value: "item.tags.attribute.colour"
                    },
                    {
                      descriptor: {
                        code: "seq"
                      },
                      value: "1"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "attr"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "name"
                      },
                      value: "item.tags.attribute.size"
                    },
                    {
                      descriptor: {
                        code: "seq"
                      },
                      value: "2"
                    }
                  ]
                }
              ]
            }
          ],
          items: [
            {
              id: "I1",
              parent_item_id: "V1",
              descriptor: {
                name: "Allen Solly Men T-shirt",
                code: "UPC / EAN code",
                short_desc: "Allen Solly Men T-shirt",
                long_desc: "Allen Solly Men T-shirt",
                images: [
                  {
                    url: "https://abc.com/images/207.png"
                  }
                ],
                media: [
                  {
                    mimetype: "video/mp4",
                    url: "https://abc.com/images/207.mp4"
                  }
                ]
              },
              creator: {
                descriptor: {
                  name: "xxxxx",
                  contact: {
                    name: "xxxx",
                    address: {
                      full: "Allen Solly Ltd,A-3, NDDB House, Sector-1, Noida,Uttar Pradesh-201301"
                    },
                    phone: "18001801018",
                    email: "consumer.services@xxxx.com"
                  }
                }
              },
              price: {
                currency: "INR",
                value: "300.00",
                offered_value: "250.00",
                maximum_value: "350.00"
              },
              quantity: {
                unitized: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  }
                },
                available: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  },
                  count: 99
                },
                maximum: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  },
                  count: 99
                },
                minimum: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  },
                  count: 99
                }
              },
              category_ids: [
                "RET12-102F"
              ],
              fulfillment_ids: [
                "1"
              ],
              location_ids: [
                "L1"
              ],
              payment_ids: [
                "2"
              ],
              cancellation_terms: [
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Pending"
                    }
                  },
                  reason_required: false,
                  cancellation_fee: {
                    percentage: "0",
                    amount: {
                      currency: "IND",
                      value: "0"
                    }
                  }
                },
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Packed"
                    }
                  },
                  reason_required: false,
                  cancellation_fee: {
                    percentage: "0",
                    amount: {
                      currency: "IND",
                      value: "0"
                    }
                  }
                }
              ],
              return_terms: {
                fulfillment_state: {
                  descriptor: {
                    code: "Order-delivered"
                  }
                },
                return_eligible: true,
                return_time: {
                  duration: "P7D"
                },
                return_location: {
                  address: "RTO address",
                  gps: "12.667555,77.349666"
                },
                fulfillment_managed_by: "seller"
              },
              replacement_terms: [
                {
                  replace_within: "P7D"
                }
              ],
              time: {
                label: "validity",
                range: {
                  start: "2022-12-24T00:00:00.000Z",
                  end: "2022-12-31T00:00:00.000Z"
                }
              },
              matched: true,
              recommended: true,
              tags: [
                {
                  descriptor: {
                    code: "origin"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "country"
                      },
                      value: "IND"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "image"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "type"
                      },
                      value: "back_image"
                    },
                    {
                      descriptor: {
                        code: "url"
                      },
                      value: "https://sellerNP.com/images/i1_back_image.png"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "attribute"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "brand"
                      },
                      value: "Allen Solly"
                    },
                    {
                      descriptor: {
                        code: "colour"
                      },
                      value: "coral"
                    },
                    {
                      descriptor: {
                        code: "size"
                      },
                      value: "M"
                    },
                    {
                      descriptor: {
                        code: "gender"
                      },
                      value: "male"
                    },
                    {
                      descriptor: {
                        code: "pattern"
                      },
                      value: "striped"
                    },
                    {
                      descriptor: {
                        code: "material"
                      },
                      value: "cotton"
                    },
                    {
                      descriptor: {
                        code: "occasion"
                      },
                      value: "casual"
                    },
                    {
                      descriptor: {
                        code: "season"
                      },
                      value: "summer"
                    },
                    {
                      descriptor: {
                        code: "trend"
                      },
                      value: "tribal"
                    },
                    {
                      descriptor: {
                        code: "features"
                      },
                      value: "alpha"
                    },
                    {
                      descriptor: {
                        code: "material_finish"
                      },
                      value: "embossed"
                    },
                    {
                      descriptor: {
                        code: "size_chart"
                      },
                      value: "https://sellerNP.com/images/i1_size_chart.png"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "g2"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "time_to_ship"
                      },
                      value: "P1D"
                    },
                    {
                      descriptor: {
                        code: "tax_rate"
                      },
                      value: "12"
                    },
                    {
                      descriptor: {
                        code: "cancellable"
                      },
                      value: "true"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "g3"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "brand"
                      },
                      value: "Dhara"
                    },
                    {
                      descriptor: {
                        code: "pack_size"
                      },
                      value: "5"
                    },
                    {
                      descriptor: {
                        code: "num_price_slabs"
                      },
                      value: "3"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "1"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: "4"
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "250"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "5"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: "9"
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "200"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "10"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: ""
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "175"
                    }
                  ]
                }
              ]
            },
            {
              id: "I2",
              parent_item_id: "V1",
              descriptor: {
                name: "Allen Solly Men T-shirt",
                code: "UPC / EAN code",
                short_desc: "Allen Solly Men T-shirt",
                long_desc: "Allen Solly Men T-shirt",
                images: [
                  {
                    url: "https://abc.com/images/207.png"
                  }
                ],
                media: [
                  {
                    mimetype: "video/mp4",
                    url: "https://abc.com/images/207.mp4"
                  }
                ]
              },
              creator: {
                descriptor: {
                  name: "xxxxx",
                  contact: {
                    name: "xxxx",
                    address: {
                      full: "Allen Solly Ltd,A-3, NDDB House, Sector-1, Noida,Uttar Pradesh-201301"
                    },
                    phone: "18001801018",
                    email: "consumer.services@xxxx.com"
                  }
                }
              },
              price: {
                currency: "INR",
                value: "300.00",
                offered_value: "250.00",
                maximum_value: "350.00"
              },
              quantity: {
                unitized: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  }
                },
                available: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  },
                  count: 99
                },
                maximum: {
                  measure: {
                    unit: "unit",
                    value: "1"
                  },
                  count: 99
                }
              },
              category_ids: [
                "RET12-102F"
              ],
              fulfillment_ids: [
                "1"
              ],
              location_ids: [
                "L1"
              ],
              payment_ids: [
                "2"
              ],
              cancellation_terms: [
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Pending"
                    }
                  },
                  reason_required: false,
                  cancellation_fee: {
                    percentage: "0",
                    amount: {
                      currency: "IND",
                      value: "0"
                    }
                  }
                },
                {
                  fulfillment_state: {
                    descriptor: {
                      code: "Packed"
                    }
                  },
                  reason_required: false,
                  cancellation_fee: {
                    percentage: "0",
                    amount: {
                      currency: "IND",
                      value: "0"
                    }
                  }
                }
              ],
              return_terms: {
                fulfillment_state: {
                  descriptor: {
                    code: "Order-delivered"
                  }
                },
                return_eligible: true,
                return_time: {
                  duration: "P7D"
                },
                return_location: {
                  address: "RTO address",
                  gps: "12.667555,77.349666"
                },
                fulfillment_managed_by: "seller"
              },
              replacement_terms: [
                {
                  replace_within: "P7D"
                }
              ],
              time: {
                label: "validity",
                range: {
                  start: "2022-12-24T00:00:00.000Z",
                  end: "2022-12-31T00:00:00.000Z"
                }
              },
              matched: true,
              recommended: true,
              tags: [
                {
                  descriptor: {
                    code: "origin"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "country"
                      },
                      value: "IND"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "image"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "type"
                      },
                      value: "back_image"
                    },
                    {
                      descriptor: {
                        code: "url"
                      },
                      value: "https://sellerNP.com/images/i1_back_image.png"
                    }
                  ]
                },
                {
                  descriptor: null,
                  code: "attribute",
                  list: [
                    {
                      descriptor: {
                        code: "brand"
                      },
                      value: "Allen Solly"
                    },
                    {
                      descriptor: {
                        code: "colour"
                      },
                      value: "coral"
                    },
                    {
                      descriptor: {
                        code: "size"
                      },
                      value: "M"
                    },
                    {
                      descriptor: {
                        code: "gender"
                      },
                      value: "male"
                    },
                    {
                      descriptor: {
                        code: "pattern"
                      },
                      value: "striped"
                    },
                    {
                      descriptor: {
                        code: "material"
                      },
                      value: "cotton"
                    },
                    {
                      descriptor: {
                        code: "occasion"
                      },
                      value: "casual"
                    },
                    {
                      descriptor: {
                        code: "season"
                      },
                      value: "summer"
                    },
                    {
                      descriptor: {
                        code: "trend"
                      },
                      value: "tribal"
                    },
                    {
                      descriptor: {
                        code: "features"
                      },
                      value: "alpha"
                    },
                    {
                      descriptor: {
                        code: "material_finish"
                      },
                      value: "embossed"
                    },
                    {
                      descriptor: {
                        code: "size_chart"
                      },
                      value: "https://sellerNP.com/images/i1_size_chart.png"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "g2"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "time_to_ship"
                      },
                      value: "P1D"
                    },
                    {
                      descriptor: {
                        code: "tax_rate"
                      },
                      value: "12"
                    },
                    {
                      descriptor: {
                        code: "cancellable"
                      },
                      value: "true"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "g3"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "brand"
                      },
                      value: "Dhara"
                    },
                    {
                      descriptor: {
                        code: "pack_size"
                      },
                      value: "5"
                    },
                    {
                      descriptor: {
                        code: "num_price_slabs"
                      },
                      value: "3"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "1"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: "4"
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "250"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "5"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: "9"
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "200"
                    }
                  ]
                },
                {
                  descriptor: {
                    code: "price_slab"
                  },
                  list: [
                    {
                      descriptor: {
                        code: "min_pack_size"
                      },
                      value: "10"
                    },
                    {
                      descriptor: {
                        code: "max_pack_size"
                      },
                      value: ""
                    },
                    {
                      descriptor: {
                        code: "unit_sale_price"
                      },
                      value: "175"
                    }
                  ]
                }
              ]
            }
          ],
          offers: [
            {
              id: "offer-1",
              descriptor: {
                name: "Scarf",
                code: "FREEBIE",
                short_desc: "Scarf",
                long_desc: "Scarf",
                images: [
                  {
                    url: "https://abc.com/images/207.png"
                  }
                ]
              },
              location_ids: [],
              category_ids: [],
              item_ids: [],
              time: {
                label: "validity",
                range: {
                  start: "2023-01-08T00:00:00.000Z",
                  end: "2023-01-15T00:00:00.000Z"
                }
              }
            }
          ],
          fulfillments: [
            {
              contact: {
                phone: "9886098860",
                email: "abc@xyz.com"
              }
            }
          ]
        }
      ]
    }
  }
}