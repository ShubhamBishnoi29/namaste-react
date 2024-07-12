const resList = [
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                "collectionId": "80373",
                "title": "Poha",
                "description": "Dive into a plate of delicious, rich and flavourful Poha.",
                "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/1/01ac092d-3974-4062-860b-4a7ae8f48648_pic",
                "aspectRatio": "3.44",
                "cta": {
                    "link": "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha,poha,layout_BAU_Contextual",
                    "type": "collectionv2"
                },
                "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                "count": "56 restaurants"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                "sortConfigs": [
                    {
                        "key": "relevance",
                        "title": "Relevance(Default)",
                        "selected": true,
                        "defaultSelection": true
                    },
                    {
                        "key": "deliveryTimeAsc",
                        "title": "DeliveryTime"
                    },
                    {
                        "key": "modelBasedRatingDesc",
                        "title": "Rating"
                    },
                    {
                        "key": "costForTwoAsc",
                        "title": "Cost:LowtoHigh"
                    },
                    {
                        "key": "costForTwoDesc",
                        "title": "Cost:HightoLow"
                    }
                ],
                "restaurantCount": 56,
                "facetList": [
                    {
                        "label": "Veg/Non-veg",
                        "id": "isVeg",
                        "selection": "SELECT_TYPE_SINGLESELECT",
                        "facetInfo": [
                            {
                                "label": "Pure veg",
                                "id": "isVegfacetquery2",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Non Veg",
                                "id": "isVegfacetquery3",
                                "analytics": {}
                            }
                        ],
                        "viewType": "VIEW_TYPE_FLATTENED",
                        "subLabel": "Filterby"
                    },
                    {
                        "label": "Delivery Time",
                        "id": "deliveryTime",
                        "selection": "SELECT_TYPE_SINGLESELECT",
                        "facetInfo": [
                            {
                                "label": "Less than 45 mins",
                                "id": "deliveryTimefacetquery3",
                                "analytics": {}
                            }
                        ],
                        "viewType": "VIEW_TYPE_FLATTENED",
                        "subLabel": "Filterby"
                    },
                    {
                        "label": "Cost for two",
                        "id": "costForTwo",
                        "selection": "SELECT_TYPE_MULTISELECT",
                        "facetInfo": [
                            {
                                "label": "Rs. 300-Rs. 600",
                                "id": "costForTwofacetquery3",
                                "analytics": {},
                                "openFilter": true
                            },
                            {
                                "label": "Less than Rs. 300",
                                "id": "costForTwofacetquery5",
                                "analytics": {},
                                "openFilter": true
                            }
                        ],
                        "viewType": "VIEW_TYPE_HALF_CARD",
                        "subLabel": "Filterby"
                    }
                ]
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "layout": {
                    "rows": 1,
                    "widgetPadding": {
                        "left": 16,
                        "top": 20,
                        "right": 16,
                        "bottom": 16
                    },
                    "scrollBar": {},
                    "widgetTheme": {
                        "defaultMode": {
                            "backgroundColour": "#FFFFFF",
                            "theme": "THEME_TYPE_LIGHT"
                        },
                        "darkMode": {
                            "backgroundColour": "#1B3028",
                            "theme": "THEME_TYPE_DARK"
                        }
                    }
                },
                "id": "restaurantCountWidget",
                "gridElements": {
                    "infoWithStyle": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                        "text": "Restaurants to explore",
                        "headerStyling": {
                            "textSize": 15,
                            "textColor": "text_color_highest_emphasis",
                            "textFontName": "FONT_NAME_HEADER_H5",
                            "maxLines": 1
                        }
                    }
                }
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "860908",
                    "name": "Killer Kebabs And Tikkas",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/ab46d432-654f-4e94-b341-2103247ddfcd_95ce1773-ff4b-412b-9e1e-cce21aacb348.png",
                    "locality": "Vaishali Nagar",
                    "areaName": "Vaishali Nagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Snacks"
                    ],
                    "avgRating": 4.4,
                    "parentId": "505520",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "20+",
                    "promoted": true,
                    "adTrackingId": "cid=14948780~p=0~adgrpid=14948780#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=860908~eid=d60aa1f0-ecd8-4008-bbc4-84f06b30ed41~srvts=1720667292544~collid=80373",
                    "sla": {
                        "deliveryTime": 70,
                        "lastMileTravel": 8.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "70-75 mins",
                        "lastMileTravelString": "8.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "ABOVE ₹1000",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=860908&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "504607",
                    "name": "Shree sai south indian food",
                    "cloudinaryImageId": "58f6523a9c2cc626379fcb561efec8a7",
                    "locality": "jk hospital.",
                    "areaName": "Kardhani yojna kalwar road.",
                    "costForTwo": "₹100 for two",
                    "cuisines": [
                        "South Indian"
                    ],
                    "avgRating": 3.3,
                    "veg": true,
                    "parentId": "302152",
                    "avgRatingString": "3.3",
                    "totalRatingsString": "8",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 23:30:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=504607&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "105373",
                    "name": "Om Sweet Caterers",
                    "cloudinaryImageId": "ed441da4517c20f4b59a30a50fcec362",
                    "locality": "Nirman Nagar",
                    "areaName": "Shyam Nagar",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Sweets",
                        "Desserts",
                        "Snacks",
                        "Indian",
                        "North Eastern",
                        "Beverages"
                    ],
                    "avgRating": 4.5,
                    "veg": true,
                    "parentId": "151940",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "5K+",
                    "promoted": true,
                    "adTrackingId": "cid=15193839~p=1~adgrpid=15193839#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=105373~eid=be76a750-e61b-43a0-883f-780d7efc19f9~srvts=1720667292544~collid=80373",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 9.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "9.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 22:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "pureveg",
                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            },
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹50"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=105373&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "705218",
                    "name": "Mama Paratha",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/7/6ba81d69-54fe-48bb-8640-b6be4633bb14_778f1ccc-0d25-4cab-a946-8a49bdb8dcf3.jpg",
                    "locality": "Laxmi Pradise",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹100 for two",
                    "cuisines": [
                        "Indian"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "131100",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "6",
                    "sla": {
                        "deliveryTime": 49,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "45-50 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=705218&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "496827",
                    "name": "Indian Chai House",
                    "cloudinaryImageId": "eb3240f61486436cebeef20e14c48305",
                    "locality": "Vaishali Nagar",
                    "areaName": "Vaishali Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Beverages",
                        "Snacks",
                        "Fast Food",
                        "Italian-American"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "432012",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "500+",
                    "promoted": true,
                    "adTrackingId": "cid=15194172~p=2~adgrpid=15194172#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=496827~eid=c0586af8-231f-4859-9e80-a96044d418d7~srvts=1720667292544~collid=80373",
                    "sla": {
                        "deliveryTime": 44,
                        "lastMileTravel": 8.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "8.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 22:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                            "description": "pureveg"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.6",
                            "ratingCount": "500+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=496827&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "581467",
                    "name": "Ranthambore Parata House",
                    "cloudinaryImageId": "hf2sfhffsr5nslnxgaqe",
                    "locality": "Bal Vihar \n",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "North Indian"
                    ],
                    "avgRating": 2.5,
                    "veg": true,
                    "parentId": "348174",
                    "avgRatingString": "2.5",
                    "totalRatingsString": "8",
                    "sla": {
                        "deliveryTime": 50,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=581467&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "375368",
                    "name": "The 202 Cafe and kitchen",
                    "cloudinaryImageId": "iglx88o86fqosxwuhvp4",
                    "locality": "Officers Campus",
                    "areaName": "Khatipura",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Italian",
                        "Pastas",
                        "Pizzas"
                    ],
                    "avgRating": 4.4,
                    "parentId": "204535",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "100+",
                    "promoted": true,
                    "adTrackingId": "cid=15193969~p=3~adgrpid=15193969#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=375368~eid=af9ddbb1-7470-4c3e-927b-5b6af35917a0~srvts=1720667292544~collid=80373",
                    "sla": {
                        "deliveryTime": 51,
                        "lastMileTravel": 6.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "6.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 22:45:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textBased": {},
                            "imageBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.6",
                            "ratingCount": "500+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=375368&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "581452",
                    "name": "Indori Poha House",
                    "cloudinaryImageId": "hipyc3ntbkhy4jr8jdaj",
                    "locality": "Bal Vihar",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "North Indian"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "348166",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "5",
                    "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 23:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹599",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=581452&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "651070",
                    "name": "Samridhi Rasoi",
                    "cloudinaryImageId": "c8474df55c3b6b181ce6be403ca878f1",
                    "locality": "Saraswati Marg",
                    "areaName": "Bani Park",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Indian"
                    ],
                    "avgRating": 4.4,
                    "parentId": "391858",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "50+",
                    "promoted": true,
                    "adTrackingId": "cid=14985426~p=5~adgrpid=14985426#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=651070~eid=caffcee4-9a2f-4e8e-8f16-63359cd393c7~srvts=1720667292544~collid=80373",
                    "sla": {
                        "deliveryTime": 57,
                        "lastMileTravel": 9.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "55-60 mins",
                        "lastMileTravelString": "9.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-11 22:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹250 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=651070&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    },
    {
        "card": {
            "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                    "id": "899555",
                    "name": "Govindam Nutrition restaurant",
                    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/28/530b3e52-2b70-466d-8a5b-332c5aca813b_1cd68266-fdbb-4a75-b603-addfe0e92754.jpg",
                    "locality": "Hanumant Nagar",
                    "areaName": "Jhotwara",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Indian",
                        "North Indian",
                        "Healthy Food",
                        "Italian",
                        "Beverages"
                    ],
                    "avgRating": 4.2,
                    "veg": true,
                    "parentId": "523049",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "10+",
                    "sla": {
                        "deliveryTime": 51,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "50-55 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2024-07-12 00:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "textExtendedBadges": {},
                            "textBased": {},
                            "imageBased": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹100"
                    },
                    "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "isNewlyOnboarded": true,
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {},
                "cta": {
                    "link": "swiggy://menu?restaurant_id=899555&source=collection&query=Poha",
                    "text": "RESTAURANT_MENU",
                    "type": "DEEPLINK"
                },
                "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
            },
            "relevance": {
                "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                "sectionId": "MENU_RETURN_FOOD"
            }
        }
    }
];

export default resList;