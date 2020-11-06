const top100Films = [
  { marker: "London" },
  { marker: "San Francisco" },
  { marker: "New York" },
  { marker: "Sydney" },
  { marker: "Philadelphia" },
  { marker: "Manchester" },
  { marker: "Houston" },
  { marker: "Birmingham" },
  { marker: "Los Angeles" },
  { marker: "Berlin" },
  { marker: "Chicago" },
  { marker: "Tokyo" },
  { marker: "Beijing" },
  { marker: "Mexico City" },
  { marker: "Osaka" },
  { marker: "Bristol" },
  { marker: "Mumbai" },
  { marker: "Glasgow" },
  { marker: "Amsterdam" },
  { marker: "Johannesburg" },
  { marker: "Rio de Janeiro" },
  { marker: "Shanghai" },
  { marker: "New Delhi" },
  { marker: "Jakarta" },
  { marker: "Seoul" },
  { marker: "São Paulo" },
  { marker: "Moscow" },
  { marker: "Hong Kong" },
  { marker: "San Diego" },
  { marker: "San Jose" },
  { marker: "Dallas" },

  { marker: "Indianapolis" },

  { marker: "San Antonio" },

  { marker: "Montréal" },

  { marker: "Jacksonville" },

  { marker: "Austin" },

  { marker: "Kiev" },

  { marker: "Phoenix" },

  { marker: "Madrid" },

  { marker: "Toronto" },

  { marker: "Fort Worth" },

  { marker: "Guangzhou" },

  { marker: "Columbus" },

  { marker: "Memphis" },

  { marker: "Washington DC" },

  { marker: "Paris" },

  { marker: "Munich" },

  { marker: "Brisbane" },

  { marker: "Rome" },

  { marker: "Milwaukee" },

  { marker: "Bradford" },

  { marker: "Liverpool" },

  { marker: "Wakefield" },

  { marker: "Istanbul" },

  { marker: "El Paso" },

  { marker: "Seattle" },

  { marker: "Baltimore" },

  { marker: "Las Vegas" },

  { marker: "Melbourne" },

  { marker: "Buenos Aires" },

  { marker: "Boston" },

  { marker: "Nashville" },

  { marker: "Edinburgh" },

  { marker: "Perth" },

  { marker: "Karachi" },

  { marker: "Hamburg" },

  { marker: "Dubai" },

  { marker: "Leeds" },

  { marker: "Sheffield" },

  { marker: "Adelaide" },

  { marker: "Charlotte" },

  { marker: "Detroit" },

  { marker: "Louisville" },

  { marker: "Barcelona" },

  { marker: "Denver" },

  { marker: "Portland" },

  { marker: "Oklahoma City" },

  { marker: "Cardiff" },

  { marker: "Kolkata" },

  { marker: "Cairo" },

  { marker: "Virginia Beach" },

  { marker: "Kinshasa" },

  { marker: "Honolulu" },

  { marker: "Tehrān" },

  { marker: "Colorado Springs" },

  { marker: "Auckland" },

  { marker: "Dongguan" },

  { marker: "Sacramento" },

  { marker: "Kansas City" },

  { marker: "Fresno" },

  { marker: "Bangkok" },

  { marker: "Ho Chi Minh City" },

  { marker: "Mesa" },

  { marker: "Atlanta" },

  { marker: "Bangalore" },

  { marker: "Lima" },

  { marker: "Albuquerque" },

  { marker: "Tucson" },

  { marker: "Lagos" },

  { marker: "Long Beach" },

  { marker: "Shenzhen" },

  { marker: "Bogotá" },

  { marker: "Omaha" },

  { marker: "Raleigh" },

  { marker: "Miami" },

  { marker: "Exeter" },

  { marker: "Hà Nội" },

  { marker: "Casablanca" },

  { marker: "Singapore" },

  { marker: "Yokohama" },

  { marker: "Nairobi" },

  { marker: "Tianjin" },

  { marker: "Dhaka" },

  { marker: "Pyongyang" },

  { marker: "Addis Ababa" },

  { marker: "Hyderabad" },

  { marker: "Santa Cruz" },

  { marker: "Dublin" },

  { marker: "Budapest" },

  { marker: "Milan" },

  { marker: "Cambridge" },

  { marker: "Oxford" },

  { marker: "Vienna" },

  { marker: "Brussels" },

  { marker: "Cologne" },

  { marker: "Riyadh" },

  { marker: "Damascus" },

  { marker: "Ankara" },

  { marker: "Little Rock" },

  { marker: "Wilmington" },

  { marker: "Santiago" },

  { marker: "Birmingham" },

  { marker: "Baghdad" },

  { marker: "Boise" },

  { marker: "Anchorage" },

  { marker: "Athens" },

  { marker: "Santorini" },

  { marker: "Reykjavík" },

  { marker: "Sofia" },

  { marker: "Prague" },

  { marker: "Zagreb" },

  { marker: "Oslo" },

  { marker: "Copenhagen" },

  { marker: "Bucharest" },

  { marker: "Torino" },

  { marker: "Stockholm" },

  { marker: "Naples" },

  { marker: "Warsaw" },

  { marker: "Bridgeport" },

  { marker: "Wichita" },

  { marker: "Richmond" },

  { marker: "New Orleans" },

  { marker: "Calgary" },

  { marker: "Edmonton" },

  { marker: "St Petersburg" },

  { marker: "Manila" },

  { marker: "Vancouver" },

  { marker: "Maracaibo" },

  { marker: "Caracas" },

  { marker: "Cheyenne" },

  { marker: "Charleston" },

  { marker: "Santander" },

  { marker: "İzmir" },

  { marker: "Toulouse" },

  { marker: "Bordeaux" },

  { marker: "Wuhan" },

  { marker: "Marseille" },

  { marker: "Lille" },

  { marker: "Ahmedabad" },

  { marker: "Lyon" },

  { marker: "Nice" },

  { marker: "Lahore" },

  { marker: "Belfast" },

  { marker: "Bremen" },

  { marker: "Stoke-on-Trent" },

  { marker: "Fargo" },

  { marker: "Sendai" },

  { marker: "Truro" },

  { marker: "Preston" },

  { marker: "Sunderland" },

  { marker: "Lisbon" },

  { marker: "Phuket" },

  { marker: "Palm Springs" },

  { marker: "Leicester" },

  { marker: "Stuttgart" },

  { marker: "Coventry" },

  { marker: "Gothenburg" },
  { marker: "Hanover" },
  { marker: "St. Louis" },
  { marker: "Salvador" },
  { marker: "Plymouth" },
  { marker: "Lake Tahoe" },
  { marker: "Nuremberg" },
  { marker: "Mountain View" },
  { marker: "Kawasaki" },
  { marker: "Kyoto" },
  { marker: "Kobe" },
  { marker: "Hangzhou" },
  { marker: "Blackpool" },
  { marker: "Yangon" },
  { marker: "Bakersfield" },
  { marker: "Salt Lake City" },
  { marker: "Geneva" },
  { marker: "Portland" },
  { marker: "Reading" },
  { marker: "Durban" },
  { marker: "Saitama" },
  { marker: "Brighton" },
  { marker: "Dresden" },
  { marker: "Ajaccio" },
  { marker: "Pune" },
  { marker: "Mombasa" },
  { marker: "Providence" },
  { marker: "Chennai" },
  { marker: "Kharkiv" },
  { marker: "Helsinki" },
  { marker: "Taipei" },
  { marker: "Essen" },
  { marker: "St Ives" },
  { marker: "Aberdeen" },
  { marker: "Oakland" },
  { marker: "Sapporo" },
  { marker: "Ipswich" },
  { marker: "Norwich" },
  { marker: "Christchurch" },
  { marker: "Surat" },
  { marker: "Busan" },
  { marker: "Manchester" },
  { marker: "Hiroshima" },
  { marker: "Northampton" },
  { marker: "Leipzig" },
  { marker: "Southend-on-Sea" },
  { marker: "The Hague" },
  { marker: "Minsk" },
  { marker: "Salford" },
  { marker: "Kirkwall" },
  { marker: "Swansea" },
  { marker: "Penzance" },
  { marker: "Ibadan" },
  { marker: "Billings" },
  { marker: "Alexandria" },
  { marker: "Newcastle" },
  { marker: "Jackson" },
  { marker: "Sioux Falls" },
  { marker: "Nagoya" },
  { marker: "Swindon" },
  { marker: "Brasília" },
  { marker: "Dundee" },
  { marker: "Kano" },
  { marker: "Kitakyushu" },
  { marker: "Denpasar" },
  { marker: "Boulder" },
  { marker: "Minneapolis" },
  { marker: "Frankfurt" },
  { marker: "Falmouth" },
  { marker: "Middlesbrough" },
  { marker: "Rhyl" },
  { marker: "Bournemouth" },
  { marker: "Fukuoka" },
  { marker: "Newark" },
  { marker: "Manukau" },
  { marker: "Luton" },
  { marker: "Wellington" },
  { marker: "Abidjan" },
  { marker: "Kingston upon Hull" },
  { marker: "Des Moines" },
  { marker: "Windhoek" },
  { marker: "Calvi" },
  { marker: "Venice" },
  { marker: "Santa Cruz de Tenerife" },
  { marker: "Chengdu" },
  { marker: "York" },
  { marker: "Kuala Lumpur" },
  { marker: "Portsmouth" },
  { marker: "Sidmouth" },
  { marker: "Burlington" },
  { marker: "Santa Fe" },
  { marker: "Zurich" },
  { marker: "Nottingham" },
  { marker: "Derby" },
  { marker: "Huddersfield" },
  { marker: "Dortmund" },
  { marker: "Wolverhampton" },
  { marker: "Cape Town" },
  { marker: "Düsseldorf" },
  { marker: "Columbia" }
];

export default top100Films;
