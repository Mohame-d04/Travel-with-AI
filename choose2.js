const plans = {
    "Luxury": {
        "Beach Relaxation": {
            "Short Weekend": {
                "Warm and Sunny": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Maldives",
                            "hotel": "Soneva Jani",
                            "price": "$1,200 per night",
                            "details": "Stay in a luxury overwater villa. Enjoy scuba diving, snorkeling, and pristine beaches.",
                            "photo": "https://www.sonevajani.com/images/overwater-villa.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Athens, Greece",
                            "hotel": "King George Hotel",
                            "price": "$800 per night",
                            "details": "Stay in a luxury hotel with views of the Acropolis. Explore ancient ruins and vibrant neighborhoods.",
                            "photo": "https://www.kinggeorge.gr/images/acropolis-view.jpg"
                        },
                        "Wildlife": {
                            "plan": "Kenya",
                            "hotel": "Giraffe Manor",
                            "price": "$700 per night",
                            "details": "Stay at a boutique hotel with giraffe encounters. Enjoy luxury safaris and explore Kenyan wildlife.",
                            "photo": "https://www.giraffemanor.com/images/giraffe-encounter.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "New York City, USA",
                            "hotel": "The Peninsula New York",
                            "price": "$1,000 per night",
                            "details": "Stay in a luxury hotel near Central Park. Explore iconic landmarks like Times Square and Broadway shows.",
                            "photo": "https://www.peninsula.com/images/new-york-city.jpg"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Dubai, UAE",
                            "hotel": "Burj Al Arab Jumeirah",
                            "price": "$900 per night",
                            "details": "Stay in a luxury hotel with iconic architecture. Enjoy desert safaris, skydiving, and explore futuristic cityscapes.",
                            "photo": "https://www.burjalarab.com/images/skyline.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Cairo, Egypt",
                            "hotel": "Marriott Mena House",
                            "price": "$350 per night",
                            "details": "Stay at a luxury hotel near the Pyramids. Explore ancient Egyptian artifacts and enjoy local cuisine.",
                            "photo": "https://www.marriott.com/images/pyramids-view.jpg"
                        },
                        "Wildlife": {
                            "plan": "Galápagos Islands, Ecuador",
                            "hotel": "Pikaia Lodge",
                            "price": "$800 per night",
                            "details": "Stay at a luxury eco-lodge. Explore unique wildlife, enjoy guided tours, and relax on pristine beaches.",
                            "photo": "https://www.pikaialodge.com/images/galapagos-wildlife.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Tokyo, Japan",
                            "hotel": "The Peninsula Tokyo",
                            "price": "$700 per night",
                            "details": "Stay at a luxury hotel in Shinjuku. Explore the city's diverse neighborhoods, enjoy local cuisine, and visit cultural landmarks.",
                            "photo": "https://www.peninsula.com/images/tokyo-skyline.jpg"
                        }
                    }
                },
                "Mild and Pleasant": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Bali, Indonesia",
                            "hotel": "Four Seasons Resort Bali at Sayan",
                            "price": "$450 per night",
                            "details": "Stay in a luxury eco-resort. Enjoy surfing, diving, and exploring lush landscapes.",
                            "photo": "https://www.fourseasons.com/images/bali.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Lisbon, Portugal",
                            "hotel": "Palácio Ramalhete",
                            "price": "$300 per night",
                            "details": "Stay in a historic boutique hotel. Explore historical landmarks and enjoy local cuisine.",
                            "photo": "https://www.palacioramalhete.com/images/lisbon.jpg"
                        },
                        "Wildlife": {
                            "plan": "Costa Rica",
                            "hotel": "Nayara Springs",
                            "price": "$600 per night",
                            "details": "Stay at a luxury eco-lodge. Enjoy guided wildlife tours, explore rainforests, and relax in natural hot springs.",
                            "photo": "https://www.nayarasprings.com/images/costa-rica.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "San Francisco, California",
                            "hotel": "Hotel Nikko San Francisco",
                            "price": "$350 per night",
                            "details": "Stay in a luxury hotel with views of the Golden Gate Bridge. Explore the city’s landmarks and enjoy diverse dining options.",
                            "photo": "https://www.hotelnikkosf.com/images/golden-gate.jpg"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Queenstown, New Zealand",
                            "hotel": "The Rees Hotel",
                            "price": "$500 per night",
                            "details": "Stay at a luxury adventure lodge. Enjoy bungee jumping, skydiving, and exploring nearby fjords.",
                            "photo": "https://www.thereeshotel.com/images/queenstown.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Rome, Italy",
                            "hotel": "Hotel Hassler",
                            "price": "$600 per night",
                            "details": "Stay at a luxury hotel near historical landmarks. Visit the Colosseum, Vatican Museums, and enjoy Italian cuisine.",
                            "photo": "https://www.hotelhasslerrome.com/images/rome.jpg"
                        },
                        "Wildlife": {
                            "plan": "Costa Rica",
                            "hotel": "Nayara Springs",
                            "price": "$600 per night",
                            "details": "Stay at a luxury eco-lodge. Enjoy guided wildlife tours, explore rainforests, and relax in natural hot springs.",
                            "photo": "https://www.nayarasprings.com/images/costa-rica.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Tokyo, Japan",
                            "hotel": "The Peninsula Tokyo",
                            "price": "$700 per night",
                            "details": "Stay at a luxury hotel in Shinjuku. Explore the city's diverse neighborhoods, enjoy local cuisine, and visit cultural landmarks.",
                            "photo": "https://www.peninsula.com/images/tokyo-skyline.jpg"
                        }
                    }
                }
            },
            "One Week": {
                "Warm and Sunny": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Hawaii, USA",
                            "hotel": "Four Seasons Resort Maui",
                            "price": "$800 per night",
                            "details": "Stay in a luxurious beachfront resort with water activities, spa treatments, and family-friendly amenities.",
                            "photo": "https://www.fourseasons.com/images/maui.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Kyoto, Japan",
                            "hotel": "The Ritz-Carlton Kyoto",
                            "price": "$700 per night",
                            "details": "Stay in a luxury hotel overlooking the Kamogawa River. Explore Kyoto’s temples, gardens, and traditional tea houses.",
                            "photo": "https://www.ritzcarlton.com/images/kyoto.jpg"
                        },
                        "Wildlife": {
                            "plan": "Sri Lanka",
                            "hotel": "Cinnamon Lodge Habarana",
                            "price": "$400 per night",
                            "details": "Stay in a luxury lodge near national parks. Enjoy wildlife safaris and explore ancient ruins.",
                            "photo": "https://www.cinnamonhotels.com/images/habarana.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "London, UK",
                            "hotel": "The Langham",
                            "price": "$650 per night",
                            "details": "Stay in a historic luxury hotel. Explore London’s iconic landmarks, museums, and West End shows.",
                            "photo": "https://www.langhamhotels.com/images/langham-london.jpg"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Costa Rica",
                            "hotel": "Andaz Costa Rica Resort",
                            "price": "$500 per night",
                            "details": "Stay in a luxury resort with eco-adventures, water activities, and relaxing amenities.",
                            "photo": "https://www.andaz.com/images/costa-rica.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Rome, Italy",
                            "hotel": "Hotel Hassler",
                            "price": "$600 per night",
                            "details": "Stay at a luxury hotel near historical landmarks. Visit the Colosseum, Vatican Museums, and enjoy Italian cuisine.",
                            "photo": "https://www.hotelhasslerrome.com/images/hassler-rome.jpg"
                        },
                        "Wildlife": {
                            "plan": "Kenya",
                            "hotel": "Mahali Mzuri",
                            "price": "$850 per night",
                            "details": "Stay at a luxury tented camp in the Maasai Mara. Enjoy game drives and guided safaris.",
                            "photo": "https://www.virunga.org/images/maasai-mara.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "New York City, USA",
                            "hotel": "The Greenwich Hotel",
                            "price": "$750 per night",
                            "details": "Stay in a luxury boutique hotel in Tribeca. Explore New York’s art galleries, theaters, and dining.",
                            "photo": "https://www.thegreenwichhotel.com/images/tribeca.jpg"
                        }
                    }
                }
            }
        },
        "Mountain Retreat": {
            "Short Weekend": {
                "Warm and Sunny": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Chamonix, France",
                            "hotel": "Les Granges d'en Haut",
                            "price": "$600 per night",
                            "details": "Stay in a luxury chalet with mountain views. Enjoy skiing, hiking, and gourmet dining.",
                            "photo": "https://www.lesgrangesdenhaut.com/images/chamonix.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Edinburgh, Scotland",
                            "hotel": "The Balmoral",
                            "price": "$700 per night",
                            "details": "Stay in a historic hotel with views of Edinburgh Castle. Explore the city’s rich history and vibrant culture.",
                            "photo": "https://www.balmoralhotel.com/images/edinburgh.jpg"
                        },
                        "Wildlife": {
                            "plan": "Tanzania",
                            "hotel": "Ngorongoro Crater Lodge",
                            "price": "$1,200 per night",
                            "details": "Stay in a luxury lodge with spectacular views of the Ngorongoro Crater. Enjoy guided safaris and wildlife viewing.",
                            "photo": "https://www.ngorongorocraterlodge.com/images/crater-lodge.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Zurich, Switzerland",
                            "hotel": "Baur Au Lac",
                            "price": "$800 per night",
                            "details": "Stay in a luxury hotel by Lake Zurich. Explore the city’s cultural attractions and enjoy fine dining.",
                            "photo": "https://www.bauraulac.ch/images/zurich.jpg"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Whistler, Canada",
                            "hotel": "Four Seasons Resort Whistler",
                            "price": "$500 per night",
                            "details": "Stay in a luxury resort with access to skiing, mountain biking, and outdoor activities.",
                            "photo": "https://www.fourseasons.com/images/whistler.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Vienna, Austria",
                            "hotel": "Hotel Sacher",
                            "price": "$500 per night",
                            "details": "Stay in a historic hotel with luxury amenities. Explore Vienna’s palaces, museums, and classical music scene.",
                            "photo": "https://www.sacher.com/images/hotel-sacher.jpg"
                        },
                        "Wildlife": {
                            "plan": "Namibia",
                            "hotel": "Wolwedans Dune Camp",
                            "price": "$700 per night",
                            "details": "Stay in a luxury camp in the Namib Desert. Enjoy stunning dunes, star-gazing, and desert wildlife.",
                            "photo": "https://www.wolwedans.com/images/dune-camp.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Los Angeles, USA",
                            "hotel": "The Beverly Hills Hotel",
                            "price": "$900 per night",
                            "details": "Stay in a legendary luxury hotel. Explore Hollywood, Beverly Hills, and enjoy top-notch dining and shopping.",
                            "photo": "https://www.dorchestercollection.com/images/beverly-hills.jpg"
                        }
                    }
                },
                "Mild and Pleasant": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Zermatt, Switzerland",
                            "hotel": "The Omnia",
                            "price": "$600 per night",
                            "details": "Stay in a luxurious mountain retreat with skiing, hiking, and stunning Alpine views.",
                            "photo": "https://www.the-omnia.com/images/zermatt.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Istanbul, Turkey",
                            "hotel": "Four Seasons Hotel Istanbul at Sultanahmet",
                            "price": "$500 per night",
                            "details": "Stay in a luxury hotel with views of the Hagia Sophia and Blue Mosque. Explore Istanbul’s rich history and vibrant markets.",
                            "photo": "https://www.fourseasons.com/images/istanbul.jpg"
                        },
                        "Wildlife": {
                            "plan": "Botswana",
                            "hotel": "andBeyond Sandibe Okavango Safari Lodge",
                            "price": "$1,200 per night",
                            "details": "Stay in a luxurious safari lodge with exceptional wildlife viewing opportunities. Enjoy game drives and boat safaris.",
                            "photo": "https://www.andbeyond.com/images/sandibe.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Barcelona, Spain",
                            "hotel": "Hotel Arts",
                            "price": "$450 per night",
                            "details": "Stay in a luxury hotel with views of the Mediterranean. Explore Barcelona’s architecture and vibrant nightlife.",
                            "photo": "https://www.hotelartsbarcelona.com/images/hotel-arts.jpg"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Zermatt, Switzerland",
                            "hotel": "The Omnia",
                            "price": "$600 per night",
                            "details": "Stay in a luxurious mountain retreat with skiing, hiking, and stunning Alpine views.",
                            "photo": "https://www.the-omnia.com/images/zermatt.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Istanbul, Turkey",
                            "hotel": "Four Seasons Hotel Istanbul at Sultanahmet",
                            "price": "$500 per night",
                            "details": "Stay in a luxury hotel with views of the Hagia Sophia and Blue Mosque. Explore Istanbul’s rich history and vibrant markets.",
                            "photo": "https://www.fourseasons.com/images/istanbul.jpg"
                        },
                        "Wildlife": {
                            "plan": "Namibia",
                            "hotel": "Wolwedans Dune Camp",
                            "price": "$700 per night",
                            "details": "Stay in a luxury camp in the Namib Desert. Enjoy stunning dunes, star-gazing, and desert wildlife.",
                            "photo": "https://www.wolwedans.com/images/dune-camp.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Los Angeles, USA",
                            "hotel": "The Beverly Hills Hotel",
                            "price": "$900 per night",
                            "details": "Stay in a legendary luxury hotel. Explore Hollywood, Beverly Hills, and enjoy top-notch dining and shopping.",
                            "photo": "https://www.dorchestercollection.com/images/beverly-hills.jpg"
                        }
                    }
                }
            }
        },
        "City Breaks": {
            "Short Weekend": {
                "Warm and Sunny": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "San Diego, USA",
                            "hotel": "Hotel del Coronado",
                            "price": "$500 per night",
                            "details": "Stay in a historic beachfront hotel. Enjoy water sports, shopping, and family-friendly activities.",
                            "photo": "https://www.hoteldel.com/images/coronado.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Jerusalem, Israel",
                            "hotel": "King David Hotel",
                            "price": "$650 per night",
                            "details": "Stay in a luxury hotel near Old City landmarks. Explore historical and religious sites.",
                            "photo": "https://www.kingdavidhotel.com/images/jerusalem.jpg"
                        },
                        "Wildlife": {
                            "plan": "Galápagos Islands, Ecuador",
                            "hotel": "Pikaia Lodge",
                            "price": "$800 per night",
                            "details": "Stay at a luxury eco-lodge. Explore unique wildlife, enjoy guided tours, and relax on pristine beaches.",
                            "photo": "https://www.pikaialodge.com/images/galapagos-wildlife.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "New York City, USA",
                            "hotel": "The Greenwich Hotel",
                            "price": "$750 per night",
                            "details": "Stay in a luxury boutique hotel in Tribeca. Explore New York’s art galleries, theaters, and dining.",
                            "photo": "https://www.thegreenwichhotel.com/images/tribeca.jpg"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Vancouver, Canada",
                            "hotel": "Fairmont Pacific Rim",
                            "price": "$600 per night",
                            "details": "Stay in a luxury hotel with views of the harbor and mountains. Enjoy outdoor activities and fine dining.",
                            "photo": "https://www.fairmont.com/images/vancouver.jpg"
                        },
                        "Historical Sites": {
                            "plan": "Budapest, Hungary",
                            "hotel": "Four Seasons Hotel Gresham Palace",
                            "price": "$450 per night",
                            "details": "Stay in a historic palace hotel. Explore Budapest’s thermal baths, architecture, and cultural landmarks.",
                            "photo": "https://www.fourseasons.com/images/budapest.jpg"
                        },
                        "Wildlife": {
                            "plan": "South Africa",
                            "hotel": "Ulusaba Private Game Reserve",
                            "price": "$1,000 per night",
                            "details": "Stay at a luxury safari lodge with exceptional wildlife viewing. Enjoy game drives and guided bush walks.",
                            "photo": "https://www.ulusaba.com/images/safari-lodge.jpg"
                        },
                        "Urban Exploration": {
                            "plan": "Hong Kong",
                            "hotel": "The Peninsula Hong Kong",
                            "price": "$750 per night",
                            "details": "Stay in a luxury hotel with stunning harbor views. Explore Hong Kong’s skyline, shopping, and dining.",
                            "photo": "https://www.peninsula.com/images/hong-kong.jpg"
                        }
                    }
                }
            }
        }
    },
        "Budget": {
            "Beach Relaxation": {
                "Short Weekend": {
                    "Warm and Sunny": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Myrtle Beach, South Carolina",
                                "hotel": "Sea Mist Oceanfront Resort",
                                "price": "$100 per night",
                                "details": "Stay at a budget-friendly resort near the beach. Enjoy family-friendly beach activities and nearby attractions.",
                                "photo": "link_to_photo1"
                            },
                            "Historical Sites": {
                                "plan": "Virginia Beach, Virginia",
                                "hotel": "Ocean Sands Resort",
                                "price": "$110 per night",
                                "details": "Stay at a budget-friendly hotel. Explore historic sites like Cape Henry Lighthouse and enjoy beach activities.",
                                "photo": "link_to_photo2"
                            },
                            "Wildlife": {
                                "plan": "Gulf Shores, Alabama",
                                "hotel": "Beachside Resort Hotel",
                                "price": "$90 per night",
                                "details": "Stay at a budget hotel near the beach. Explore the nearby wildlife refuge and enjoy family-friendly beach activities.",
                                "photo": "link_to_photo3"
                            },
                            "Urban Exploration": {
                                "plan": "Daytona Beach, Florida",
                                "hotel": "Daytona Beach Resort",
                                "price": "$95 per night",
                                "details": "Stay at a budget hotel with beach access. Enjoy exploring the boardwalk, local shops, and family-friendly attractions.",
                                "photo": "link_to_photo4"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Pensacola, Florida",
                                "hotel": "Surf & Sand Hotel",
                                "price": "$85 per night",
                                "details": "Stay at a budget hotel near the beach. Enjoy surfing, beach volleyball, and local nightlife.",
                                "photo": "link_to_photo5"
                            },
                            "Historical Sites": {
                                "plan": "St. Augustine Beach, Florida",
                                "hotel": "Regency Inn & Suites",
                                "price": "$75 per night",
                                "details": "Stay at a budget-friendly hotel. Explore historic St. Augustine and enjoy beach activities with friends.",
                                "photo": "link_to_photo6"
                            },
                            "Wildlife": {
                                "plan": "Corpus Christi, Texas",
                                "hotel": "Emerald Beach Hotel",
                                "price": "$80 per night",
                                "details": "Stay at a budget hotel near the beach. Explore nearby wildlife parks and enjoy beach activities.",
                                "photo": "link_to_photo7"
                            },
                            "Urban Exploration": {
                                "plan": "Fort Lauderdale, Florida",
                                "hotel": "Galt Villas Hotel",
                                "price": "$90 per night",
                                "details": "Stay at a budget-friendly hotel. Enjoy exploring the city, local beaches, and vibrant nightlife.",
                                "photo": "link_to_photo8"
                            }
                        }
                    },
                    "Mild and Pleasant": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Portland, Maine",
                                "hotel": "Inn at St. John",
                                "price": "$70 per night",
                                "details": "Stay at a budget hotel. Enjoy family-friendly hiking, biking trails, and nearby beaches.",
                                "photo": "link_to_photo9"
                            },
                            "Historical Sites": {
                                "plan": "Charleston, South Carolina",
                                "hotel": "Town & Country Inn and Suites",
                                "price": "$85 per night",
                                "details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy family-friendly activities.",
                                "photo": "link_to_photo10"
                            },
                            "Wildlife": {
                                "plan": "Asheville, North Carolina",
                                "hotel": "Red Roof Inn Asheville",
                                "price": "$75 per night",
                                "details": "Stay at a budget hotel. Explore local wildlife parks and enjoy outdoor activities with family.",
                                "photo": "link_to_photo11"
                            },
                            "Urban Exploration": {
                                "plan": "Savannah, Georgia",
                                "hotel": "Quality Inn Savannah Historic District",
                                "price": "$90 per night",
                                "details": "Stay at a budget-friendly hotel. Explore the historic district and enjoy family-friendly city activities.",
                                "photo": "link_to_photo12"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Boulder, Colorado",
                                "hotel": "Rodeway Inn & Suites",
                                "price": "$80 per night",
                                "details": "Stay at a budget hotel. Enjoy hiking, mountain biking, and exploring the vibrant town with friends.",
                                "photo": "link_to_photo13"
                            },
                            "Historical Sites": {
                                "plan": "Williamsburg, Virginia",
                                "hotel": "Days Inn by Wyndham Williamsburg Historic Area",
                                "price": "$85 per night",
                                "details": "Stay at a budget-friendly hotel. Explore colonial history and enjoy activities with friends.",
                                "photo": "link_to_photo14"
                            },
                            "Wildlife": {
                                "plan": "Bozeman, Montana",
                                "hotel": "Bozeman Inn",
                                "price": "$75 per night",
                                "details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy outdoor activities.",
                                "photo": "link_to_photo15"
                            },
                            "Urban Exploration": {
                                "plan": "Austin, Texas",
                                "hotel": "Super 8 by Wyndham Austin Downtown/Capitol Area",
                                "price": "$85 per night",
                                "details": "Stay at a budget-friendly hotel. Explore the city’s live music scene and vibrant nightlife with friends.",
                                "photo": "link_to_photo16"
                            }
                        }
                    }
                },
                "One Week": {
                    "Warm and Sunny": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Panama City Beach, Florida",
                                "hotel": "La Quinta Inn & Suites by Wyndham Panama City Beach",
                                "price": "$95 per night",
                                "details": "Stay at a budget hotel near the beach. Enjoy water sports and family-friendly attractions.",
                                "photo": "link_to_photo17"
                            },
                            "Historical Sites": {
                                "plan": "Galveston, Texas",
                                "hotel": "Gaido's Seaside Inn",
                                "price": "$80 per night",
                                "details": "Stay at a budget hotel near the beach. Explore historic sites and enjoy beach activities.",
                                "photo": "link_to_photo18"
                            },
                            "Wildlife": {
                                "plan": "South Padre Island, Texas",
                                "hotel": "Island Inn",
                                "price": "$85 per night",
                                "details": "Stay at a budget hotel near the beach. Explore nearby wildlife areas and enjoy family-friendly beach activities.",
                                "photo": "link_to_photo19"
                            },
                            "Urban Exploration": {
                                "plan": "Miami Beach, Florida",
                                "hotel": "Collins Hotel",
                                "price": "$95 per night",
                                "details": "Stay at a budget hotel near the beach. Enjoy exploring the city, local beaches, and vibrant nightlife.",
                                "photo": "link_to_photo20"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Virginia Beach, Virginia",
                                "hotel": "Oceans 2700 Hotel",
                                "price": "$75 per night",
                                "details": "Stay at a budget hotel near the beach. Enjoy surfing, beach volleyball, and local nightlife.",
                                "photo": "link_to_photo21"
                            },
                            "Historical Sites": {
                                "plan": "Newport, Rhode Island",
                                "hotel": "Motel 6 Newport",
                                "price": "$85 per night",
                                "details": "Stay at a budget-friendly hotel. Explore historic mansions and enjoy beach activities with friends.",
                                "photo": "link_to_photo22"
                            },
                            "Wildlife": {
                                "plan": "Myrtle Beach, South Carolina",
                                "hotel": "Sea Mist Oceanfront Resort",
                                "price": "$100 per night",
                                "details": "Stay at a budget-friendly resort near the beach. Explore nearby wildlife parks and enjoy beach activities.",
                                "photo": "link_to_photo23"
                            },
                            "Urban Exploration": {
                                "plan": "Fort Lauderdale, Florida",
                                "hotel": "Galt Villas Hotel",
                                "price": "$90 per night",
                                "details": "Stay at a budget-friendly hotel. Enjoy exploring the city, local beaches, and vibrant nightlife.",
                                "photo": "link_to_photo24"
                            }
                        }
                    },
                    "Mild and Pleasant": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Sedona, Arizona",
                                "hotel": "Andante Inn of Sedona",
                                "price": "$95 per night",
                                "details": "Stay at a budget hotel. Enjoy family-friendly hiking, biking trails, and scenic red rock views.",
                                "photo": "link_to_photo25"
                            },
                            "Historical Sites": {
                                "plan": "Gettysburg, Pennsylvania",
                                "hotel": "Eisenhower Hotel & Conference Center",
                                "price": "$85 per night",
                                "details": "Stay at a budget-friendly hotel. Explore historic battlefields and enjoy family-friendly activities.",
                                "photo": "link_to_photo26"
                            },
                            "Wildlife": {
                                "plan": "Brevard, North Carolina",
"hotel": "The Sunset Motel",
"price": "$75 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife parks and enjoy outdoor activities with family.",
"photo": "link_to_photo27"
},
"Urban Exploration": {
"plan": "Raleigh, North Carolina",
"hotel": "Super 8 by Wyndham Raleigh Downtown",
"price": "$90 per night",
"details": "Stay at a budget-friendly hotel. Explore the city’s museums, parks, and family-friendly activities.",
"photo": "link_to_photo28"
}
},
"Friends": {
"Adventure Sports": {
"plan": "Flagstaff, Arizona",
"hotel": "Motel 6 Flagstaff",
"price": "$70 per night",
"details": "Stay at a budget hotel. Enjoy hiking, mountain biking, and exploring the vibrant town with friends.",
"photo": "link_to_photo29"
},
"Historical Sites": {
"plan": "Salem, Massachusetts",
"hotel": "The Salem Inn",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy activities with friends.",
"photo": "link_to_photo30"
},
"Wildlife": {
"plan": "Yellowstone, Wyoming",
"hotel": "Yellowstone Pioneer Lodge",
"price": "$95 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy outdoor activities.",
"photo": "link_to_photo31"
},
"Urban Exploration": {
"plan": "Nashville, Tennessee",
"hotel": "Knights Inn Nashville",
"price": "$80 per night",
"details": "Stay at a budget-friendly hotel. Explore the city’s live music scene and vibrant nightlife with friends.",
"photo": "link_to_photo32"
}
}
}
},
"Two Weeks": {
"Warm and Sunny": {
"Family": {
"Adventure Sports": {
"plan": "Orlando, Florida",
"hotel": "Motel 6 Orlando",
"price": "$70 per night",
"details": "Stay at a budget hotel. Enjoy family-friendly water parks and nearby beaches.",
"photo": "link_to_photo33"
},
"Historical Sites": {
"plan": "Charleston, South Carolina",
"hotel": "Town & Country Inn and Suites",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy family-friendly activities.",
"photo": "link_to_photo34"
},
"Wildlife": {
"plan": "Gulf Shores, Alabama",
"hotel": "Beachside Resort Hotel",
"price": "$90 per night",
"details": "Stay at a budget hotel near the beach. Explore nearby wildlife refuge and enjoy family-friendly beach activities.",
"photo": "link_to_photo35"
},
"Urban Exploration": {
"plan": "San Diego, California",
"hotel": "Pacific Shores Inn",
"price": "$95 per night",
"details": "Stay at a budget-friendly hotel near the beach. Enjoy exploring the city and nearby beaches.",
"photo": "link_to_photo36"
}
},
"Friends": {
"Adventure Sports": {
"plan": "Maui, Hawaii",
"hotel": "Maui Beach Hotel",
"price": "$95 per night",
"details": "Stay at a budget hotel near the beach. Enjoy surfing, beach volleyball, and local nightlife.",
"photo": "link_to_photo37"
},
"Historical Sites": {
"plan": "Key West, Florida",
"hotel": "Blue Marlin Motel",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy beach activities with friends.",
"photo": "link_to_photo38"
},
"Wildlife": {
"plan": "Big Sur, California",
"hotel": "Riverside Campground and Cabins",
"price": "$80 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy beach activities.",
"photo": "link_to_photo39"
},
"Urban Exploration": {
"plan": "Santa Monica, California",
"hotel": "Seaview Hotel",
"price": "$95 per night",
"details": "Stay at a budget-friendly hotel near the beach. Enjoy exploring the city, local beaches, and vibrant nightlife.",
"photo": "link_to_photo40"
}
}
},
"Mild and Pleasant": {
"Family": {
"Adventure Sports": {
"plan": "Portland, Oregon",
"hotel": "Econo Lodge Portland",
"price": "$70 per night",
"details": "Stay at a budget hotel. Enjoy family-friendly hiking, biking trails, and nearby beaches.",
"photo": "link_to_photo41"
},
"Historical Sites": {
"plan": "Santa Fe, New Mexico",
"hotel": "The Santa Fe Suites",
"price": "$75 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy family-friendly activities.",
"photo": "link_to_photo42"
},
"Wildlife": {
"plan": "Estes Park, Colorado",
"hotel": "Murphy's River Lodge",
"price": "$85 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife parks and enjoy outdoor activities with family.",
"photo": "link_to_photo43"
},
"Urban Exploration": {
"plan": "San Antonio, Texas",
"hotel": "Red Roof PLUS+ San Antonio Downtown",
"price": "$80 per night",
"details": "Stay at a budget-friendly hotel. Explore the city’s museums, parks, and family-friendly activities.",
"photo": "link_to_photo44"
}
},
"Friends": {
"Adventure Sports": {
"plan": "Lake Tahoe, California",
"hotel": "Big Pines Mountain House",
"price": "$95 per night",
"details": "Stay at a budget hotel. Enjoy hiking, mountain biking, and exploring the vibrant town with friends.",
"photo": "link_to_photo45"
},
"Historical Sites": {
"plan": "Santa Fe, New Mexico",
"hotel": "Guadalupe Inn",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy activities with friends.",
"photo": "link_to_photo46"
},
"Wildlife": {
"plan": "Jackson, Wyoming",
"hotel": "Mountain Modern Motel",
"price": "$90 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy outdoor activities.",
"photo": "link_to_photo47"
},
"Urban Exploration": {
"plan": "Denver, Colorado",
"hotel": "Motel 6 Denver",
"price": "$75 per night",
"details": "Stay at a budget-friendly hotel. Explore the city’s live music scene and vibrant nightlife with friends.",
"photo": "link_to_photo48"
}
}
}
},
"Three Weeks": {
"Warm and Sunny": {
"Family": {
"Adventure Sports": {
"plan": "Destin, Florida",
"hotel": "Inn on Destin Harbor",
"price": "$90 per night",
"details": "Stay at a budget hotel near the beach. Enjoy family-friendly water sports and nearby beaches.",
"photo": "link_to_photo49"
},
"Historical Sites": {
"plan": "Mobile, Alabama",
"hotel": "Quality Inn Downtown Historic District",
"price": "$75 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy family-friendly activities.",
"photo": "link_to_photo50"
},
"Wildlife": {
"plan": "Sanibel Island, Florida",
"hotel": "Anchor Inn & Cottages",
"price": "$85 per night",
"details": "Stay at a budget hotel near the beach. Explore nearby wildlife refuge and enjoy family-friendly beach activities.",
"photo": "link_to_photo51"
},
"Urban Exploration": {
"plan": "Honolulu, Hawaii",
"hotel": "Pagoda Hotel",
"price": "$95 per night",
"details": "Stay at a budget-friendly hotel near the beach. Enjoy exploring the city and nearby beaches.",
"photo": "link_to_photo52"
}
},
"Friends": {
"Adventure Sports": {
"plan": "San Diego, California",
"hotel": "Pacific Shores Inn",
"price": "$95 per night",
"details": "Stay at a budget hotel near the beach. Enjoy surfing, beach volleyball, and local nightlife.",
"photo": "link_to_photo53"
},
"Historical Sites": {
"plan": "St. Augustine, Florida",
"hotel": "Southern Oaks Inn",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy beach activities with friends.",
"photo": "link_to_photo54"
},
"Wildlife": {
"plan": "Everglades, Florida",
"hotel": "Ivey House",
"price": "$80 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy beach activities.",
"photo": "link_to_photo55"
},
"Urban Exploration": {
"plan": "San Francisco, California",
"hotel": "Adante Hotel",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Enjoy exploring the city, local beaches, and vibrant nightlife.",
"photo": "link_to_photo56"
}
}
},
"Mild and Pleasant": {
"Family": {
"Adventure Sports": {
"plan": "Boulder, Colorado",
"hotel": "Rodeway Inn & Suites",
"price": "$80 per night",
"details": "Stay at a budget hotel. Enjoy family-friendly hiking, biking trails, and scenic mountain views.",
"photo": "link_to_photo57"
},
"Historical Sites": {
"plan": "Williamsburg, Virginia",
"hotel": "Days Inn by Wyndham Williamsburg Historic Area",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy family-friendly activities.",
"photo": "link_to_photo58"
},
"Wildlife": {
"plan": "Bozeman, Montana",
"hotel": "Bozeman Inn",
"price": "$75 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy outdoor activities with family.",
"photo": "link_to_photo59"
},
"Urban Exploration": {
"plan": "Seattle, Washington",
"hotel": "College Inn Hotel",
"price": "$80 per night",
"details": "Stay at a budget-friendly hotel. Explore the city’s museums, parks, and family-friendly activities.",
"photo": "link_to_photo60"
}
},
"Friends": {
"Adventure Sports": {
"plan": "Lake Tahoe, California",
"hotel": "Big Pines Mountain House",
"price": "$95 per night",
"details": "Stay at a budget hotel. Enjoy hiking, mountain biking, and exploring the vibrant town with friends.",
"photo": "link_to_photo61"
},
"Historical Sites": {
"plan": "Santa Fe, New Mexico",
"hotel": "Guadalupe Inn",
"price": "$85 per night",
"details": "Stay at a budget-friendly hotel. Explore historic sites and enjoy activities with friends.",
"photo": "link_to_photo62"
},
"Wildlife": {
"plan": "Jackson, Wyoming",
"hotel": "Mountain Modern Motel",
"price": "$90 per night",
"details": "Stay at a budget hotel. Explore nearby wildlife areas and enjoy outdoor activities.",
"photo": "link_to_photo63"
},
"Urban Exploration": {
"plan": "Denver, Colorado",
"hotel": "Motel 6 Denver",
"price": "$75 per night",
"details": "Stay at a budget-friendly hotel. Explore the city’s live music scene and vibrant nightlife with friends.",
"photo": "link_to_photo64"
}
}
}
}
}
},
    "Mid-Budget": {
        "Beach Relaxation": {
            "Short Weekend": {
                "Warm and Sunny": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Santa Monica, California",
                            "hotel": "Shore Hotel",
                            "price": "$150 per night",
                            "details": "Stay at a mid-budget hotel near the beach. Enjoy surfing, cycling along the beach, and exploring local shops.",
                            "photo": "link_to_photo1"
                        },
                        "Historical Sites": {
                            "plan": "Charleston, South Carolina",
                            "hotel": "The Dewberry Charleston",
                            "price": "$140 per night",
                            "details": "Stay at a mid-budget hotel in the historic district. Explore cobblestone streets, visit historic homes, and enjoy Southern cuisine.",
                            "photo": "link_to_photo2"
                        },
                        "Wildlife": {
                            "plan": "Everglades National Park, Florida",
                            "hotel": "Ivey House",
                            "price": "$130 per night",
                            "details": "Stay in a mid-budget lodge. Explore the park’s unique ecosystem, go on airboat tours, and spot wildlife.",
                            "photo": "link_to_photo3"
                        },
                        "Urban Exploration": {
                            "plan": "New Orleans, Louisiana",
                            "hotel": "The Eliza Jane",
                            "price": "$135 per night",
                            "details": "Stay at a mid-budget hotel in the French Quarter. Enjoy live jazz, Creole cuisine, and explore historic neighborhoods.",
                            "photo": "link_to_photo4"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "San Diego, California",
                            "hotel": "Hotel Indigo",
                            "price": "$140 per night",
                            "details": "Stay at a mid-budget hotel. Enjoy surfing, visit local breweries, and explore Balboa Park.",
                            "photo": "link_to_photo5"
                        },
                        "Historical Sites": {
                            "plan": "Savannah, Georgia",
                            "hotel": "The Gastonian",
                            "price": "$145 per night",
                            "details": "Stay at a historic bed and breakfast. Explore historic squares, visit nearby plantations, and enjoy Southern charm.",
                            "photo": "link_to_photo6"
                        },
                        "Wildlife": {
                            "plan": "Asheville, North Carolina",
                            "hotel": "The Omni Grove Park Inn",
                            "price": "$150 per night",
                            "details": "Stay at a mid-budget resort. Explore the Blue Ridge Parkway, go hiking, and enjoy local craft beer.",
                            "photo": "link_to_photo7"
                        },
                        "Urban Exploration": {
                            "plan": "Philadelphia, Pennsylvania",
                            "hotel": "The Rittenhouse",
                            "price": "$145 per night",
                            "details": "Stay at a mid-budget hotel in downtown. Explore historic sites like Independence Hall and enjoy diverse dining options.",
                            "photo": "link_to_photo8"
                        }
                    }
                },
                "Mild and Pleasant": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Lake Tahoe, California",
                            "hotel": "Lake Tahoe Resort Hotel",
                            "price": "$140 per night",
                            "details": "Stay in a mid-budget hotel with easy access to outdoor activities. Enjoy hiking, mountain biking, and lake activities.",
                            "photo": "link_to_photo9"
                        },
                        "Historical Sites": {
                            "plan": "St. Augustine, Florida",
                            "hotel": "Casa Monica Resort & Spa",
                            "price": "$150 per night",
                            "details": "Stay at a historic hotel. Explore the oldest city in the U.S., visit historic landmarks, and enjoy local dining.",
                            "photo": "link_to_photo10"
                        },
                        "Wildlife": {
                            "plan": "Bozeman, Montana",
                            "hotel": "Element Bozeman",
                            "price": "$135 per night",
                            "details": "Stay in a mid-budget hotel. Explore nearby wildlife areas, go hiking, and visit local museums.",
                            "photo": "link_to_photo11"
                        },
                        "Urban Exploration": {
                            "plan": "Chicago, Illinois",
                            "hotel": "The Palmer House Hilton",
                            "price": "$140 per night",
                            "details": "Stay at a historic hotel in downtown Chicago. Explore Millennium Park, visit museums, and enjoy diverse dining.",
                            "photo": "link_to_photo12"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Bend, Oregon",
                            "hotel": "Oxford Hotel Bend",
                            "price": "$135 per night",
                            "details": "Stay at a mid-budget hotel with access to outdoor adventures. Enjoy hiking, mountain biking, and explore local breweries.",
                            "photo": "link_to_photo13"
                        },
                        "Historical Sites": {
                            "plan": "Montpelier, Vermont",
                            "hotel": "Capitol Plaza Hotel",
                            "price": "$130 per night",
                            "details": "Stay at a mid-budget hotel. Visit historic landmarks, explore nearby scenic areas, and enjoy local cuisine.",
                            "photo": "link_to_photo14"
                        },
                        "Wildlife": {
                            "plan": "Jackson Hole, Wyoming",
                            "hotel": "The Wort Hotel",
                            "price": "$140 per night",
                            "details": "Stay in a mid-budget hotel. Explore nearby national parks, go wildlife spotting, and enjoy local outdoor activities.",
                            "photo": "link_to_photo15"
                        },
                        "Urban Exploration": {
                            "plan": "Seattle, Washington",
                            "hotel": "The Edgewater",
                            "price": "$145 per night",
                            "details": "Stay at a mid-budget hotel with waterfront views. Explore Pike Place Market, visit local attractions, and enjoy diverse dining options.",
                            "photo": "link_to_photo16"
                        }
                    }
                }
            },
            "One Week": {
                "Warm and Sunny": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Orlando, Florida",
                            "hotel": "Disney’s Contemporary Resort",
                            "price": "$170 per night",
                            "details": "Stay at a mid-budget hotel with easy access to theme parks. Enjoy visits to Disney World, Universal Studios, and water parks.",
                            "photo": "link_to_photo17"
                        },
                        "Historical Sites": {
                            "plan": "Philadelphia, Pennsylvania",
                            "hotel": "The Rittenhouse",
                            "price": "$160 per night",
                            "details": "Stay at a mid-budget hotel in downtown. Explore historic sites like Independence Hall and enjoy diverse dining options.",
                            "photo": "link_to_photo18"
                        },
                        "Wildlife": {
                            "plan": "Jackson Hole, Wyoming",
                            "hotel": "The Wort Hotel",
                            "price": "$165 per night",
                            "details": "Stay in a mid-budget hotel. Explore nearby national parks, go wildlife spotting, and enjoy local outdoor activities.",
                            "photo": "link_to_photo19"
                        },
                        "Urban Exploration": {
                            "plan": "San Francisco, California",
                            "hotel": "Hotel Nikko San Francisco",
                            "price": "$170 per night",
                            "details": "Stay in a mid-budget hotel with views of the Golden Gate Bridge. Explore the city’s landmarks and enjoy diverse dining options.",
                            "photo": "link_to_photo20"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Whistler, Canada",
                            "hotel": "Pan Pacific Whistler Village Centre",
                            "price": "$155 per night",
                            "details": "Stay at a mid-budget resort with access to outdoor adventures. Enjoy skiing, mountain biking, and explore local nightlife.",
                            "photo": "link_to_photo21"
                        },
                        "Historical Sites": {
                            "plan": "Washington, D.C.",
                            "hotel": "The Darcy Hotel",
                            "price": "$160 per night",
                            "details": "Stay at a mid-budget hotel in downtown. Explore national monuments, museums, and enjoy local dining options.",
                            "photo": "link_to_photo22"
                        },
                        "Wildlife": {
                            "plan": "Yellowstone National Park, USA",
                            "hotel": "Old Faithful Inn",
                            "price": "$165 per night",
                            "details": "Stay at a mid-budget lodge. Explore geothermal features, go wildlife spotting, and enjoy guided tours.",
                            "photo": "link_to_photo23"
                        },
                        "Urban Exploration": {
                            "plan": "New York City, New York",
                            "hotel": "The Marlton Hotel",
                            "price": "$170 per night",
                            "details": "Stay at a mid-budget boutique hotel. Explore iconic landmarks like Times Square, Central Park, and Broadway.",
                            "photo": "link_to_photo24"
                        }
                    }
                },
                "Mild and Pleasant": {
                    "Family": {
                        "Adventure Sports": {
                            "plan": "Park City, Utah",
                            "hotel": "Marriott’s Summit Watch",
                            "price": "$165 per night",
                            "details": "Stay in a mid-budget hotel with easy access to skiing and outdoor activities. Enjoy hiking, mountain biking, and local dining.",
                            "photo": "link_to_photo25"
                        },
                        "Historical Sites": {
                            "plan": "Santa Fe, New Mexico",
                            "hotel": "La Fonda on the Plaza",
                            "price": "$160 per night",
                            "details": "Stay at a historic hotel. Explore adobe architecture, visit art galleries, and enjoy local cuisine.",
                            "photo": "link_to_photo26"
                        },
                        "Wildlife": {
                            "plan": "Bozeman, Montana",
                            "hotel": "Element Bozeman",
                            "price": "$155 per night",
                            "details": "Stay in a mid-budget hotel. Explore nearby wildlife areas, go hiking, and visit local museums.",
                            "photo": "link_to_photo27"
                        },
                        "Urban Exploration": {
                            "plan": "Chicago, Illinois",
                            "hotel": "The Palmer House Hilton",
                            "price": "$160 per night",
                            "details": "Stay at a historic hotel in downtown Chicago. Explore Millennium Park, visit museums, and enjoy diverse dining.",
                            "photo": "link_to_photo28"
                        }
                    },
                    "Friends": {
                        "Adventure Sports": {
                            "plan": "Bend, Oregon",
                            "hotel": "Oxford Hotel Bend",
                            "price": "$155 per night",
                            "details": "Stay at a mid-budget hotel with access to outdoor adventures. Enjoy hiking, mountain biking, and explore local breweries.",
                            "photo": "link_to_photo29"
                        },
                        "Historical Sites": {
                            "plan": "Montpelier, Vermont",
                            "hotel": "Capitol Plaza Hotel",
                            "price": "$150 per night",
                            "details": "Stay at a mid-budget hotel. Visit historic landmarks, explore nearby scenic areas, and enjoy local cuisine.",
                            "photo": "link_to_photo30"
                        },
                        "Wildlife": {
                            "plan": "Jackson Hole, Wyoming",
                            "hotel": "The Wort Hotel",
                            "price": "$160 per night",
                            "details": "Stay in a mid-budget hotel. Explore nearby national parks, go wildlife spotting, and enjoy local outdoor activities.",
                            "photo": "link_to_photo31"
                        },
                        "Urban Exploration": {
                            "plan": "Seattle, Washington",
                            "hotel": "The Edgewater",
                            "price": "$160 per night",
                            "details": "Stay at a mid-budget hotel with waterfront views. Explore Pike Place Market, visit local attractions, and enjoy diverse dining options.",
                            "photo": "link_to_photo32"
                        }
                    }
                }
            }
        }
    },
        "Economical": {
            "Beach Relaxation": {
                "Short Weekend": {
                    "Warm and Sunny": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Myrtle Beach, South Carolina",
                                "hotel": "Holiday Inn at the Pavilion",
                                "price": "$100 per night",
                                "details": "Stay at an economical hotel near the beach. Enjoy surfing, mini-golf, and exploring local shops.",
                                "photo": "link_to_photo1"
                            },
                            "Historical Sites": {
                                "plan": "Galveston, Texas",
                                "hotel": "La Quinta Inn",
                                "price": "$90 per night",
                                "details": "Stay at an economical hotel near historic sites. Explore the Strand Historic District, visit museums, and enjoy local seafood.",
                                "photo": "link_to_photo2"
                            },
                            "Wildlife": {
                                "plan": "Gulf Shores, Alabama",
                                "hotel": "Best Western on the Beach",
                                "price": "$95 per night",
                                "details": "Stay at an economical hotel. Explore the beach, go on dolphin cruises, and visit the zoo.",
                                "photo": "link_to_photo3"
                            },
                            "Urban Exploration": {
                                "plan": "Virginia Beach, Virginia",
                                "hotel": "Red Roof Inn",
                                "price": "$85 per night",
                                "details": "Stay at an economical hotel near the boardwalk. Enjoy the beach, local restaurants, and live entertainment.",
                                "photo": "link_to_photo4"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Ocean City, Maryland",
                                "hotel": "Comfort Inn Boardwalk",
                                "price": "$90 per night",
                                "details": "Stay at an economical hotel. Enjoy parasailing, jet skiing, and the vibrant nightlife.",
                                "photo": "link_to_photo5"
                            },
                            "Historical Sites": {
                                "plan": "St. Augustine, Florida",
                                "hotel": "Best Western Bayfront",
                                "price": "$95 per night",
                                "details": "Stay at an economical hotel. Explore historic landmarks, enjoy local dining, and visit nearby beaches.",
                                "photo": "link_to_photo6"
                            },
                            "Wildlife": {
                                "plan": "Sanibel Island, Florida",
                                "hotel": "Sanibel Inn",
                                "price": "$100 per night",
                                "details": "Stay at an economical hotel. Explore wildlife refuges, go shelling, and enjoy nature trails.",
                                "photo": "link_to_photo7"
                            },
                            "Urban Exploration": {
                                "plan": "Miami, Florida",
                                "hotel": "Selina Miami River",
                                "price": "$110 per night",
                                "details": "Stay at an economical hotel in Little Havana. Explore vibrant neighborhoods, enjoy local cuisine, and visit beaches.",
                                "photo": "link_to_photo8"
                            }
                        }
                    },
                    "Mild and Pleasant": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Outer Banks, North Carolina",
                                "hotel": "Days Inn & Suites",
                                "price": "$105 per night",
                                "details": "Stay at an economical hotel with beach access. Enjoy kayaking, fishing, and exploring sand dunes.",
                                "photo": "link_to_photo9"
                            },
                            "Historical Sites": {
                                "plan": "Savannah, Georgia",
                                "hotel": "Quality Inn",
                                "price": "$95 per night",
                                "details": "Stay at an economical hotel in the historic district. Explore historic homes, gardens, and local museums.",
                                "photo": "link_to_photo10"
                            },
                            "Wildlife": {
                                "plan": "Corpus Christi, Texas",
                                "hotel": "Hotel De Ville",
                                "price": "$90 per night",
                                "details": "Stay at an economical hotel. Visit the aquarium, explore wildlife reserves, and enjoy local seafood.",
                                "photo": "link_to_photo11"
                            },
                            "Urban Exploration": {
                                "plan": "San Diego, California",
                                "hotel": "La Quinta Inn",
                                "price": "$100 per night",
                                "details": "Stay at an economical hotel in downtown. Explore Balboa Park, visit museums, and enjoy local dining.",
                                "photo": "link_to_photo12"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Myrtle Beach, South Carolina",
                                "hotel": "Holiday Inn at the Pavilion",
                                "price": "$100 per night",
                                "details": "Stay at an economical hotel near the beach. Enjoy surfing, mini-golf, and exploring local shops.",
                                "photo": "link_to_photo13"
                            },
                            "Historical Sites": {
                                "plan": "Charleston, South Carolina",
                                "hotel": "The Dewberry Charleston",
                                "price": "$140 per night",
                                "details": "Stay at a mid-budget hotel in the historic district. Explore cobblestone streets, visit historic homes, and enjoy Southern cuisine.",
                                "photo": "link_to_photo14"
                            },
                            "Wildlife": {
                                "plan": "Everglades National Park, Florida",
                                "hotel": "Ivey House",
                                "price": "$130 per night",
                                "details": "Stay in a mid-budget lodge. Explore the park’s unique ecosystem, go on airboat tours, and spot wildlife.",
                                "photo": "link_to_photo15"
                            },
                            "Urban Exploration": {
                                "plan": "New Orleans, Louisiana",
                                "hotel": "The Eliza Jane",
                                "price": "$135 per night",
                                "details": "Stay at a mid-budget hotel in the French Quarter. Enjoy live jazz, Creole cuisine, and explore historic neighborhoods.",
                                "photo": "link_to_photo16"
                            }
                        }
                    }
                },
                "One Week": {
                    "Warm and Sunny": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Orlando, Florida",
                                "hotel": "Disney’s Contemporary Resort",
                                "price": "$170 per night",
                                "details": "Stay at a mid-budget hotel with easy access to theme parks. Enjoy visits to Disney World, Universal Studios, and water parks.",
                                "photo": "link_to_photo17"
                            },
                            "Historical Sites": {
                                "plan": "Philadelphia, Pennsylvania",
                                "hotel": "The Rittenhouse",
                                "price": "$160 per night",
                                "details": "Stay at a mid-budget hotel in downtown. Explore historic sites like Independence Hall and enjoy diverse dining options.",
                                "photo": "link_to_photo18"
                            },
                            "Wildlife": {
                                "plan": "Jackson Hole, Wyoming",
                                "hotel": "The Wort Hotel",
                                "price": "$165 per night",
                                "details": "Stay in a mid-budget hotel. Explore nearby national parks, go wildlife spotting, and enjoy local outdoor activities.",
                                "photo": "link_to_photo19"
                            },
                            "Urban Exploration": {
                                "plan": "San Francisco, California",
                                "hotel": "Hotel Nikko San Francisco",
                                "price": "$170 per night",
                                "details": "Stay in a mid-budget hotel with views of the Golden Gate Bridge. Explore the city’s landmarks and enjoy diverse dining options.",
                                "photo": "link_to_photo20"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Whistler, Canada",
                                "hotel": "Pan Pacific Whistler Village Centre",
                                "price": "$155 per night",
                                "details": "Stay at a mid-budget resort with access to outdoor adventures. Enjoy skiing, mountain biking, and explore local nightlife.",
                                "photo": "link_to_photo21"
                            },
                            "Historical Sites": {
                                "plan": "Washington, D.C.",
                                "hotel": "The Darcy Hotel",
                                "price": "$160 per night",
                                "details": "Stay at a mid-budget hotel in downtown. Explore national monuments, museums, and enjoy local dining options.",
                                "photo": "link_to_photo22"
                            },
                            "Wildlife": {
                                "plan": "Yellowstone National Park, USA",
                                "hotel": "Old Faithful Inn",
                                "price": "$165 per night",
                                "details": "Stay at a mid-budget lodge. Explore geothermal features, go wildlife spotting, and enjoy guided tours.",
                                "photo": "link_to_photo23"
                            },
                            "Urban Exploration": {
                                "plan": "New York City, New York",
                                "hotel": "The Marlton Hotel",
                                "price": "$170 per night",
                                "details": "Stay at a mid-budget boutique hotel. Explore iconic landmarks like Times Square, Central Park, and Broadway.",
                                "photo": "link_to_photo24"
                            }
                        }
                    },
                    "Mild and Pleasant": {
                        "Family": {
                            "Adventure Sports": {
                                "plan": "Park City, Utah",
                                "hotel": "Marriott’s Summit Watch",
                                "price": "$165 per night",
                                "details": "Stay in a mid-budget hotel with easy access to skiing and outdoor activities. Enjoy hiking, mountain biking, and local dining.",
                                "photo": "link_to_photo25"
                            },
                            "Historical Sites": {
                                "plan": "Santa Fe, New Mexico",
                                "hotel": "La Fonda on the Plaza",
                                "price": "$160 per night",
                                "details": "Stay at a historic hotel. Explore adobe architecture, visit art galleries, and enjoy local cuisine.",
                                "photo": "link_to_photo26"
                            },
                            "Wildlife": {
                                "plan": "Bozeman, Montana",
                                "hotel": "Element Bozeman",
                                "price": "$155 per night",
                                "details": "Stay in a mid-budget hotel. Explore nearby wildlife areas, go hiking, and visit local museums.",
                                "photo": "link_to_photo27"
                            },
                            "Urban Exploration": {
                                "plan": "Chicago, Illinois",
                                "hotel": "The Palmer House Hilton",
                                "price": "$160 per night",
                                "details": "Stay at a historic hotel in downtown Chicago. Explore Millennium Park, visit museums, and enjoy diverse dining.",
                                "photo": "link_to_photo28"
                            }
                        },
                        "Friends": {
                            "Adventure Sports": {
                                "plan": "Bend, Oregon",
                                "hotel": "Oxford Hotel Bend",
                                "price": "$155 per night",
                                "details": "Stay at a mid-budget hotel with access to outdoor adventures. Enjoy hiking, mountain biking, and explore local breweries.",
                                "photo": "link_to_photo29"
                            },
                            "Historical Sites": {
                                "plan": "Montpelier, Vermont",
                                "hotel": "Capitol Plaza Hotel",
                                "price": "$150 per night",
                                "details": "Stay at a mid-budget hotel. Visit historic landmarks, explore nearby scenic areas, and enjoy local cuisine.",
                                "photo": "link_to_photo30"
                            },
                            "Wildlife": {
                                "plan": "Jackson Hole, Wyoming",
                                "hotel": "The Wort Hotel",
                                "price": "$160 per night",
                                "details": "Stay in a mid-budget hotel. Explore nearby national parks, go wildlife spotting, and enjoy local outdoor activities.",
                                "photo": "link_to_photo31"
                            },
                            "Urban Exploration": {
                                "plan": "Seattle, Washington",
                                "hotel": "The Edgewater",
                                "price": "$160 per night",
                                "details": "Stay at a mid-budget hotel with waterfront views. Explore Pike Place Market, visit local attractions, and enjoy diverse dining options.",
                                "photo": "link_to_photo32"
                            }
                        }
                    }
                }
            }
        }
    };
    


function generatePlan() {
    const budget = document.getElementById('budget').value;
    const interests = document.getElementById('interests').value;
    const duration = document.getElementById('duration').value;
    const climate = document.getElementById('climate').value;
    const companions = document.getElementById('companions').value;
    const activities = document.getElementById('activities').value;

    // Default message when no plan is available
    const defaultMessage = "No plan available for selected criteria.";

    // Accessing the plan object based on user selections
    const plan = plans[budget] && plans[budget][interests] &&
                  plans[budget][interests][duration] &&
                  plans[budget][interests][duration][climate] &&
                  plans[budget][interests][duration][climate][companions] &&
                  plans[budget][interests][duration][climate][companions][activities] || defaultMessage;

    // Displaying the generated plan
    if (plan === defaultMessage) {
        document.getElementById('plan').innerHTML = `<p>${defaultMessage}</p>`;
        document.getElementById('photo').src = "";
        document.getElementById('photo').alt = "No image available";
    } else {
        const { plan: destination, hotel, price, details, photo } = plan;
        document.getElementById('plan').innerHTML = `
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Hotel:</strong> ${hotel}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Details:</strong> ${details}</p>`;
        document.getElementById('photo').src = photo || "";
        document.getElementById('photo').alt = hotel || "Hotel Image";
    }
}


document.getElementById('generate-button').addEventListener('click', generatePlan);


function toggleChatbot() {
    var chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
        chatbotWindow.style.display = 'block';
    } else {
        chatbotWindow.style.display = 'none';
    }
}


