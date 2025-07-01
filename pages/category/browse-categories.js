// Categories data structure
const categoriesData = {
  "Business Services": [
    { name: "Advertising", count: 7050, url: "/category/advertising" },
    { name: "Overseas Business", count: 5293, url: "/category/overseas-business" },
    { name: "General Office Services", count: 2914, url: "/category/general-office-services" },
    { name: "General Business", count: 2669, url: "/category/general-business" },
    { name: "Retail Services", count: 2032, url: "/category/retail-services" },
    { name: "Consultants", count: 1786, url: "/category/consultants" },
    { name: "Printing", count: 1491, url: "/category/printing" },
    { name: "Cotton", count: 1402, url: "/category/cotton" },
    { name: "Small Business", count: 1169, url: "/category/small-business" },
    { name: "Human Resources", count: 838, url: "/category/human-resources" },
    { name: "Marketing", count: 830, url: "/category/marketing" },
    { name: "Health and Safety", count: 571, url: "/category/health-and-safety" },
    { name: "Market Research", count: 390, url: "/category/market-research" },
    { name: "Consulting", count: 311, url: "/category/consulting" },
    { name: "Fire Safety Consultants", count: 198, url: "/category/fire-safety-consultants" },
    { name: "Sales Outsourcing", count: 189, url: "/category/sales-outsourcing" },
    { name: "Training", count: 180, url: "/category/training" },
    { name: "Public Relations", count: 101, url: "/category/public-relations" },
    { name: "Secretarial Services", count: 74, url: "/category/secretarial-services" },
    { name: "Business to Business", count: 56, url: "/category/business-to-business" },
    { name: "B2B", count: 38, url: "/category/b2b" },
    { name: "AC Repair Services", count: 37, url: "/category/ac-repair-services" },
    { name: "Business Development", count: 27, url: "/category/business-development" },
    { name: "Laundry and Dry Cleaning", count: 15, url: "/category/laundry-and-dry-cleaning" },
    { name: "Pet Grooming", count: 13, url: "/category/pet-grooming" },
    { name: "Tailors and Alterations", count: 10, url: "/category/tailors-and-alterations" },
    { name: "Warehousing", count: 7, url: "/category/warehousing" },
    { name: "Recycling", count: 5, url: "/category/recycling" },
    { name: "Cremation Service", count: 4, url: "/category/cremation-service" },
    { name: "Cold Storage Services", count: 4, url: "/category/cold-storage-services" },
    { name: "Storage Services", count: 4, url: "/category/storage-services" },
    { name: "Waste Services", count: 4, url: "/category/waste-services" },
    { name: "Junk Dealers", count: 3, url: "/category/junk-dealers" },
    { name: "Animal Shelters", count: 3, url: "/category/animal-shelters" },
    { name: "Housekeeping Service", count: 2, url: "/category/housekeeping-service" },
    { name: "Timeshares", count: 2, url: "/category/timeshares" },
    { name: "Nanny Agency", count: 1, url: "/category/nanny-agency" },
    { name: "Membership Services", count: 1, url: "/category/membership-services" },
    { name: "Debt Collection Agencies", count: 1, url: "/category/debt-collection-agencies" },
    { name: "Baby Sitters", count: 1, url: "/category/baby-sitters" },
  ],
  "Computers & Internet": [
    { name: "Communications", count: 4637, url: "/category/communications" },
    { name: "Web Development", count: 1681, url: "/category/web-development" },
    { name: "Information Technology", count: 1393, url: "/category/information-technology" },
    { name: "Web Design", count: 1350, url: "/category/web-design" },
    { name: "Software Applications", count: 1165, url: "/category/software-applications" },
    { name: "Software", count: 769, url: "/category/software" },
    { name: "Web Services", count: 732, url: "/category/web-services" },
    { name: "Computer Software Solution", count: 577, url: "/category/computer-software-solution" },
    { name: "Computer Services", count: 460, url: "/category/computer-services" },
    { name: "Online Content", count: 425, url: "/category/online-content" },
    { name: "Web Hosting", count: 405, url: "/category/web-hosting" },
    { name: "Networking", count: 373, url: "/category/networking" },
    { name: "Computer Consumables", count: 306, url: "/category/computer-consumables" },
    { name: "Computer Training", count: 231, url: "/category/computer-training" },
    { name: "Apps", count: 125, url: "/category/apps" },
    { name: "Internet Service Providers", count: 122, url: "/category/internet-service-providers" },
    { name: "Computer Repair", count: 91, url: "/category/computer-repair" },
    { name: "Information Services", count: 88, url: "/category/information-services" },
    { name: "Cloud Computing", count: 48, url: "/category/cloud-computing" },
    { name: "EdTech (Educational Technology)", count: 47, url: "/category/edtech-educational-technology" },
    { name: "Artificial Intelligence", count: 46, url: "/category/artificial-intelligence" },
    { name: "FinTech (Financial Technology)", count: 44, url: "/category/fintech-financial-technology" },
    { name: "SaaS", count: 36, url: "/category/saas" },
    { name: "Project Management", count: 34, url: "/category/project-management" },
    { name: "E-Learning", count: 32, url: "/category/e-learning" },
    { name: "Cyber Security", count: 31, url: "/category/cyber-security" },
    { name: "iOS", count: 28, url: "/category/ios", featured: true },
    { name: "Software Engineering", count: 25, url: "/category/software-engineering" },
    { name: "Trading Platform", count: 21, url: "/category/trading-platform" },
    { name: "Blockchain", count: 19, url: "/category/blockchain" },
    { name: "Machine Learning", count: 15, url: "/category/machine-learning" },
    { name: "AgTech (Agricultural Technology)", count: 14, url: "/category/agtech-agricultural-technology" },
    { name: "Virtual Reality", count: 11, url: "/category/virtual-reality" },
    { name: "Cryptocurrency", count: 8, url: "/category/cryptocurrency" },
    { name: "Augmented Reality", count: 8, url: "/category/augmented-reality" },
    { name: "Digital Currency Mining", count: 6, url: "/category/digital-currency-mining" },
    { name: "Technology", count: 5, url: "/category/technology" },
    { name: "Scanning Services", count: 3, url: "/category/scanning-services" },
    { name: "Cybersecurity", count: 3, url: "/category/cybersecurity" },
  ],
  "Entertainment & Media": [
    { name: "Sports", count: 2475, url: "/category/sports" },
    { name: "Arts and Crafts", count: 1581, url: "/category/arts-and-crafts" },
    { name: "Newspapers", count: 883, url: "/category/newspapers" },
    { name: "Film, Television and Video", count: 710, url: "/category/film-television-and-video" },
    { name: "Photography", count: 514, url: "/category/photography" },
    { name: "Fashion", count: 447, url: "/category/fashion" },
    { name: "Pets and Animals", count: 417, url: "/category/pets-and-animals" },
    { name: "Leisure", count: 399, url: "/category/leisure" },
    { name: "Hobbies", count: 185, url: "/category/hobbies" },
    { name: "Pubs and Clubs", count: 55, url: "/category/pubs-and-clubs" },
    { name: "Music", count: 38, url: "/category/music" },
    { name: "Social Network", count: 24, url: "/category/social-network" },
    { name: "Culture", count: 19, url: "/category/culture" },
    { name: "Bookmakers", count: 5, url: "/category/bookmakers" },
    { name: "Lifestyle Management", count: 4, url: "/category/lifestyle-management" },
    { name: "Performing Arts", count: 4, url: "/category/performing-arts" },
    { name: "Casinos", count: 2, url: "/category/casinos" },
    { name: "Parties", count: 1, url: "/category/parties" },
    { name: "Gambling", count: 1, url: "/category/gambling" },
  ],
  "Events & Conferences": [
    { name: "Weddings", count: 521, url: "/category/weddings" },
    { name: "Event Services", count: 494, url: "/category/event-services" },
    { name: "Event Equipment", count: 126, url: "/category/event-equipment" },
    { name: "Conferences", count: 23, url: "/category/conferences" },
  ],
  "Finances & Insurance": [
    { name: "Financial Activity", count: 1612, url: "/category/financial-activity" },
    { name: "Audit and Accounting", count: 991, url: "/category/audit-and-accounting" },
    { name: "Legal Services", count: 794, url: "/category/legal-services" },
    { name: "Banks, Credit Unions", count: 671, url: "/category/banks-credit-unions" },
    { name: "Tax Consultants", count: 489, url: "/category/tax-consultants" },
    { name: "Business Management Consulting", count: 370, url: "/category/business-management-consulting" },
    { name: "Leasing", count: 198, url: "/category/leasing" },
    { name: "Investment Companies", count: 47, url: "/category/investment-companies" },
    { name: "Insurance Companies", count: 34, url: "/category/insurance-companies" },
    { name: "Insurance Services", count: 24, url: "/category/insurance-services" },
    { name: "Asset Management", count: 14, url: "/category/asset-management" },
    { name: "Banking Equipment", count: 14, url: "/category/banking-equipment" },
    { name: "Stock Exchanges", count: 10, url: "/category/stock-exchanges" },
    { name: "Online Payment Services", count: 8, url: "/category/online-payment-services" },
    { name: "Funding Platform", count: 6, url: "/category/funding-platform" },
    { name: "Personal Finance", count: 5, url: "/category/personal-finance" },
    { name: "Money Service Business", count: 5, url: "/category/money-service-business" },
    { name: "Investing", count: 3, url: "/category/investing" },
    { name: "Payroll Services", count: 3, url: "/category/payroll-services" },
    { name: "Dept Counseling", count: 2, url: "/category/dept-counseling" },
    { name: "Pawnshops", count: 1, url: "/category/pawnshops" },
    { name: "Consumer Lending", count: 1, url: "/category/consumer-lending" },
    { name: "Crowdfunding", count: 1, url: "/category/crowdfunding" },
  ],
  "Food & Drink": [
    { name: "Food Retailers", count: 4668, url: "/category/food-retailers" },
    { name: "Food Manufacturing", count: 358, url: "/category/food-manufacturing" },
    { name: "Restaurants", count: 347, url: "/category/restaurants" },
    { name: "Catering", count: 210, url: "/category/catering" },
    { name: "Catering Equipment", count: 89, url: "/category/catering-equipment" },
    { name: "Cafes", count: 35, url: "/category/cafes" },
    { name: "Take Aways", count: 33, url: "/category/take-aways" },
    { name: "Cookery", count: 26, url: "/category/cookery" },
    { name: "Food Distributors", count: 16, url: "/category/food-distributors" },
    { name: "Supermarket", count: 13, url: "/category/supermarket" },
    { name: "Organic Products", count: 6, url: "/category/organic-products" },
    { name: "Wine and Beer", count: 3, url: "/category/wine-and-beer" },
    { name: "Farmers Market", count: 2, url: "/category/farmers-market" },
  ],
  "Health & Beauty": [
    { name: "Health Care", count: 5250, url: "/category/health-care" },
    { name: "Doctors and Clinics", count: 2183, url: "/category/doctors-and-clinics" },
    { name: "Medical Equipment", count: 1519, url: "/category/medical-equipment" },
    { name: "Beauty Products", count: 660, url: "/category/beauty-products" },
    { name: "Dentists", count: 473, url: "/category/dentists" },
    { name: "Beauty Professionals", count: 340, url: "/category/beauty-professionals", featured: true },
    { name: "Fitness", count: 215, url: "/category/fitness" },
    { name: "Opticians", count: 188, url: "/category/opticians" },
    { name: "Hairdressers", count: 166, url: "/category/hairdressers" },
    { name: "Complementary Therapy", count: 156, url: "/category/complementary-therapy" },
    { name: "Pharmacies", count: 80, url: "/category/pharmacies" },
    { name: "Nursing and Care", count: 67, url: "/category/nursing-and-care" },
    { name: "Spirituality", count: 59, url: "/category/spirituality" },
    { name: "Pregnancy and Child Birth", count: 42, url: "/category/pregnancy-and-child-birth" },
    { name: "Wellness", count: 31, url: "/category/wellness" },
    { name: "Vitamins and Supplements", count: 9, url: "/category/vitamins-and-supplements" },
    { name: "Gynecologist", count: 8, url: "/category/gynecologist" },
    { name: "Mobility Aids", count: 1, url: "/category/mobility-aids" },
    { name: "Sewing and Needlework", count: 1, url: "/category/sewing-and-needlework" },
  ],
  Shopping: [
    { name: "Clothing and Accessories", count: 10807, url: "/category/clothing-and-accessories" },
    { name: "Textile", count: 9355, url: "/category/textile", featured: true },
    { name: "Electrical Goods", count: 6105, url: "/category/electrical-goods" },
    { name: "Home and Garden", count: 4801, url: "/category/home-and-garden" },
    { name: "Leather Products", count: 2349, url: "/category/leather-products" },
    { name: "Hardware Stores", count: 2251, url: "/category/hardware-stores" },
    { name: "Jewellery", count: 1213, url: "/category/jewellery" },
    { name: "General Shopping", count: 1070, url: "/category/general-shopping" },
    { name: "General Merchandise", count: 1000, url: "/category/general-merchandise" },
    { name: "Books", count: 867, url: "/category/books" },
    { name: "Kids", count: 659, url: "/category/kids" },
    { name: "Gifts", count: 620, url: "/category/gifts" },
  ],
  Legal: [
    { name: "Solicitors", count: 605, url: "/category/solicitors" },
    { name: "Lawyers", count: 390, url: "/category/lawyers" },
    { name: "Legal Services", count: 102, url: "/category/legal-services" },
    { name: "Wills and Trusts", count: 8, url: "/category/wills-and-trusts" },
  ],
  "Manufacturing & Industry": [
    { name: "Industrial Services", count: 9210, url: "/category/industrial-services" },
    { name: "Engineering", count: 3091, url: "/category/engineering", featured: true },
    { name: "Farming", count: 2019, url: "/category/farming" },
    { name: "Steel Products", count: 1476, url: "/category/steel-products" },
    { name: "Furniture Manufacturers", count: 1312, url: "/category/furniture-manufacturers" },
    { name: "Industrial Equipment", count: 1214, url: "/category/industrial-equipment" },
    { name: "Oil & Gas Companies", count: 832, url: "/category/oil-and-gas-companies" },
    { name: "Energy Suppliers", count: 799, url: "/category/energy-suppliers" },
    { name: "Water Treatment", count: 470, url: "/category/water-treatment" },
    { name: "Electrical Service", count: 356, url: "/category/electrical-service" },
    { name: "Engineers", count: 316, url: "/category/engineers" },
    { name: "Civil Engineering", count: 284, url: "/category/civil-engineering" },
  ],
  "Public & Social Services": [
    { name: "Community & Government", count: 6563, url: "/category/community-and-government" },
    { name: "Education", count: 2560, url: "/category/education", featured: true },
    { name: "Child Daycare Services", count: 2331, url: "/category/child-daycare-services" },
    { name: "Organizations", count: 1697, url: "/category/organizations" },
    { name: "Environmental Services", count: 159, url: "/category/environmental-services" },
    { name: "Business Education", count: 103, url: "/category/business-education" },
    { name: "Schools", count: 83, url: "/category/schools" },
    { name: "Public Transport", count: 73, url: "/category/public-transport" },
    { name: "Social Work Services", count: 63, url: "/category/social-work-services" },
    { name: "Universities", count: 60, url: "/category/universities" },
    { name: "Nonprofit Organizations", count: 57, url: "/category/nonprofit-organizations" },
    { name: "Religion", count: 52, url: "/category/religion" },
    { name: "Communities", count: 36, url: "/category/communities" },
    { name: "Group Homes", count: 33, url: "/category/group-homes" },
    { name: "Government Services", count: 33, url: "/category/government-services" },
    { name: "Associations", count: 28, url: "/category/associations" },
    { name: "Colleges", count: 20, url: "/category/colleges" },
    { name: "Government", count: 19, url: "/category/government" },
    { name: "Tutoring", count: 18, url: "/category/tutoring" },
    { name: "Children's Services", count: 17, url: "/category/childrens-services" },
    { name: "Sustainability", count: 11, url: "/category/sustainability" },
    { name: "Charity", count: 9, url: "/category/charity" },
    { name: "Voluntary Organisations", count: 8, url: "/category/voluntary-organisations" },
    { name: "Advice Centres", count: 7, url: "/category/advice-centres" },
    { name: "After School Programs", count: 6, url: "/category/after-school-programs" },
    { name: "Funeral Directors", count: 4, url: "/category/funeral-directors", featured: true },
    { name: "Local Authorities", count: 4, url: "/category/local-authorities" },
    { name: "Counseling Services", count: 4, url: "/category/counseling-services" },
    { name: "Youth Organizations", count: 2, url: "/category/youth-organizations" },
    { name: "Nonprofit Organizations", count: 2, url: "/category/nonprofit-organizations-2" },
    { name: "Military", count: 2, url: "/category/military" },
    { name: "Churches", count: 1, url: "/category/churches" },
    { name: "Post Offices", count: 1, url: "/category/post-offices" },
  ],
  Property: [
    { name: "Real Estate Agents", count: 2688, url: "/category/real-estate-agents" },
    { name: "Interior Design", count: 980, url: "/category/interior-design" },
    { name: "Security", count: 622, url: "/category/security" },
    { name: "Property Consultants", count: 333, url: "/category/property-consultants" },
    { name: "Property Development", count: 241, url: "/category/property-development" },
    { name: "Realtors", count: 224, url: "/category/realtors" },
    { name: "Fire Safety Equipment", count: 157, url: "/category/fire-safety-equipment" },
    { name: "Commercial Property", count: 151, url: "/category/commercial-property" },
    { name: "Renovation", count: 119, url: "/category/renovation" },
    { name: "Online Property Listings", count: 81, url: "/category/online-property-listings" },
    { name: "Property Management", count: 55, url: "/category/property-management" },
    { name: "Removals and Relocation", count: 50, url: "/category/removals-and-relocation" },
    { name: "Overseas Property", count: 45, url: "/category/overseas-property" },
    { name: "Buildings", count: 44, url: "/category/buildings" },
    { name: "Building Maintenance", count: 43, url: "/category/building-maintenance" },
    { name: "Apartment Rental", count: 38, url: "/category/apartment-rental" },
    { name: "Letting Agents", count: 36, url: "/category/letting-agents" },
    { name: "Cleaning", count: 32, url: "/category/cleaning", featured: true },
    { name: "Home Improvement", count: 24, url: "/category/home-improvement" },
    { name: "Warehouses", count: 23, url: "/category/warehouses" },
    { name: "Rental Property", count: 23, url: "/category/rental-property" },
    { name: "Vacation Rentals", count: 14, url: "/category/vacation-rentals" },
    { name: "Coworking Spaces", count: 12, url: "/category/coworking-spaces", featured: true },
    { name: "Auctions", count: 8, url: "/category/auctions" },
    { name: "Land Survey Services", count: 1, url: "/category/land-survey-services" },
    { name: "Land Measurements", count: 1, url: "/category/land-measurements" },
  ],
  "Tradesmen & Construction": [
    { name: "Chemicals", count: 4122, url: "/category/chemicals" },
    { name: "Building Materials", count: 2612, url: "/category/building-materials" },
    { name: "Construction", count: 2334, url: "/category/construction" },
    { name: "Architectural Services", count: 1275, url: "/category/architectural-services" },
    { name: "Decorators", count: 426, url: "/category/decorators" },
    { name: "Construction Services", count: 357, url: "/category/construction-services" },
    { name: "Aluminium Openings", count: 128, url: "/category/aluminium-openings" },
    { name: "Construction Equipment", count: 77, url: "/category/construction-equipment" },
    { name: "Gardeners", count: 23, url: "/category/gardeners" },
    { name: "Landscaping", count: 21, url: "/category/landscaping" },
    { name: "Plumbers", count: 17, url: "/category/plumbers" },
    { name: "Construction Training", count: 15, url: "/category/construction-training" },
    { name: "Concrete", count: 13, url: "/category/concrete" },
    { name: "Windows", count: 12, url: "/category/windows" },
    { name: "Metals", count: 11, url: "/category/metals" },
    { name: "Roofing", count: 11, url: "/category/roofing" },
    { name: "Handyman", count: 10, url: "/category/handyman" },
    { name: "Remodeling", count: 10, url: "/category/remodeling" },
    { name: "Stone", count: 9, url: "/category/stone" },
    { name: "Doors", count: 9, url: "/category/doors" },
    { name: "Exterminating and Disinfecting", count: 7, url: "/category/exterminating-and-disinfecting" },
    { name: "Paving", count: 6, url: "/category/paving" },
    { name: "Glass Manufacturing", count: 5, url: "/category/glass-manufacturing" },
    { name: "Forestry", count: 3, url: "/category/forestry" },
    { name: "Sandblasting", count: 2, url: "/category/sandblasting" },
    { name: "Fencing and Fence Materials", count: 2, url: "/category/fencing-and-fence-materials" },
    { name: "Excavators", count: 2, url: "/category/excavators" },
    {
      name: "Topographic Survey and Layout Services",
      count: 1,
      url: "/category/topographic-survey-and-layout-services",
    },
  ],
  "Transport & Motoring": [
    { name: "Vehicle Sales", count: 3320, url: "/category/vehicle-sales" },
    { name: "Car Parts and Accessories", count: 2606, url: "/category/car-parts-and-accessories" },
    { name: "Vehicle Services", count: 2271, url: "/category/vehicle-services" },
    { name: "Logistics", count: 2247, url: "/category/logistics" },
    { name: "Transport", count: 798, url: "/category/transport" },
    { name: "Marine Services", count: 596, url: "/category/marine-services" },
    { name: "Car Rental", count: 281, url: "/category/car-rental" },
    { name: "Air Travel", count: 274, url: "/category/air-travel" },
    { name: "Motorbikes", count: 171, url: "/category/motorbikes" },
    { name: "Air Transport", count: 157, url: "/category/air-transport" },
    { name: "Transportation", count: 62, url: "/category/transportation" },
    { name: "Transport Agents", count: 59, url: "/category/transport-agents" },
    { name: "Bicycles", count: 52, url: "/category/bicycles" },
    { name: "Cargo Services", count: 44, url: "/category/cargo-services" },
    { name: "Package Shipping", count: 39, url: "/category/package-shipping" },
    { name: "Courier Services", count: 30, url: "/category/courier-services" },
    { name: "Taxis", count: 22, url: "/category/taxis" },
    { name: "Shipping & Port Agent", count: 20, url: "/category/shipping-and-port-agent" },
    { name: "Haulage", count: 18, url: "/category/haulage" },
    { name: "Auto Parts- New & Used", count: 17, url: "/category/auto-parts-new-and-used" },
    { name: "Auto Insurance", count: 16, url: "/category/auto-insurance" },
    { name: "Auto Services", count: 11, url: "/category/auto-services" },
    { name: "Driving Schools", count: 11, url: "/category/driving-schools" },
    { name: "Auto Repair", count: 10, url: "/category/auto-repair" },
    { name: "Vehicle Manufacturers", count: 9, url: "/category/vehicle-manufacturers" },
    { name: "Mechanics", count: 9, url: "/category/mechanics" },
    { name: "Auto Dealers- New & Used", count: 7, url: "/category/auto-dealers-new-and-used" },
    { name: "Electric Vehicle", count: 7, url: "/category/electric-vehicle" },
    { name: "Bus Line", count: 7, url: "/category/bus-line" },
    { name: "Petrol Station", count: 6, url: "/category/petrol-station" },
    { name: "Rail Transport", count: 6, url: "/category/rail-transport" },
    { name: "Car Wash", count: 5, url: "/category/car-wash" },
    { name: "Auto Supplies", count: 3, url: "/category/auto-supplies" },
    { name: "Cruises", count: 3, url: "/category/cruises" },
    { name: "Limousines", count: 3, url: "/category/limousines" },
    { name: "Aviation", count: 3, url: "/category/aviation" },
    { name: "Ports and Harbours", count: 2, url: "/category/ports-and-harbours" },
    { name: "Boats and Boating", count: 2, url: "/category/boats-and-boating" },
    { name: "Towing Service", count: 2, url: "/category/towing-service" },
  ],
}

// Function to render categories
function renderCategories() {
  const container = document.querySelector(".main-content .container")

  // Find the page header
  const pageHeader = container.querySelector(".page-header")

  // Clear existing category sections (keep page header)
  const existingSections = container.querySelectorAll(".category-section")
  existingSections.forEach((section) => section.remove())

  // Render each category section
  Object.entries(categoriesData).forEach(([sectionTitle, categories]) => {
    const section = document.createElement("section")
    section.className = "category-section"

    const title = document.createElement("h2")
    title.className = "section-title"
    title.textContent = sectionTitle

    const grid = document.createElement("div")
    grid.className = "categories-grid"

    categories.forEach((category) => {
      const item = document.createElement("a")
      item.href = category.url
      item.className = `category-item${category.featured ? " featured" : ""}`

      const name = document.createElement("span")
      name.className = "category-name"
      name.textContent = category.name

      const count = document.createElement("span")
      count.className = "category-count"
      count.textContent = category.count.toLocaleString()

      item.appendChild(name)
      item.appendChild(count)
      grid.appendChild(item)
    })

    section.appendChild(title)
    section.appendChild(grid)
    container.appendChild(section)
  })
}

// Function to get all categories for search
function getAllCategories() {
  const allCategories = []
  Object.values(categoriesData).forEach((categories) => {
    allCategories.push(...categories)
  })
  return allCategories
}

// Function to search categories
function searchCategories(searchTerm) {
  const allCategories = getAllCategories()
  return allCategories.filter((category) => category.name.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Function to get category statistics
function getCategoryStats() {
  const allCategories = getAllCategories()
  const totalCategories = allCategories.length
  const totalListings = allCategories.reduce((sum, category) => sum + category.count, 0)
  const totalSections = Object.keys(categoriesData).length

  return {
    totalCategories,
    totalListings,
    totalSections,
    averageListingsPerCategory: Math.round(totalListings / totalCategories),
  }
}

// Function to get top categories
function getTopCategories(limit = 10) {
  const allCategories = getAllCategories()
  return allCategories.sort((a, b) => b.count - a.count).slice(0, limit)
}

// Function to get featured categories
function getFeaturedCategories() {
  const allCategories = getAllCategories()
  return allCategories.filter((category) => category.featured)
}

document.addEventListener("DOMContentLoaded", () => {
  // Render categories on page load
  renderCategories()

  // Search functionality
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.placeholder = "Search categories..."
  searchInput.className = "search-input"

  // Add search to page header
  const pageHeader = document.querySelector(".page-header")
  const searchContainer = document.createElement("div")
  searchContainer.className = "search-filter"
  searchContainer.appendChild(searchInput)
  pageHeader.appendChild(searchContainer)

  // Enhanced search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()

    if (searchTerm === "") {
      // Show all categories
      document.querySelectorAll(".category-section").forEach((section) => {
        section.style.display = "block"
        section.querySelectorAll(".category-item").forEach((item) => {
          item.style.display = "flex"
        })
      })
      return
    }

    const searchResults = searchCategories(searchTerm)

    // Hide all sections first
    document.querySelectorAll(".category-section").forEach((section) => {
      section.style.display = "none"
    })

    // Show matching categories
    searchResults.forEach((result) => {
      // Find the category item and its section
      const categoryLink = document.querySelector(`a[href="${result.url}"]`)
      if (categoryLink) {
        const section = categoryLink.closest(".category-section")
        section.style.display = "block"
        categoryLink.style.display = "flex"
        categoryLink.classList.add("highlight")
        setTimeout(() => categoryLink.classList.remove("highlight"), 1000)
      }
    })
  })

  // Category click tracking with enhanced analytics
  document.addEventListener("click", (e) => {
    if (e.target.closest(".category-item")) {
      const categoryItem = e.target.closest(".category-item")
      const categoryName = categoryItem.querySelector(".category-name").textContent
      const categoryCount = categoryItem.querySelector(".category-count").textContent
      const categoryUrl = categoryItem.getAttribute("href")

      // Enhanced tracking
      console.log("Category Analytics:", {
        name: categoryName,
        count: categoryCount,
        url: categoryUrl,
        timestamp: new Date().toISOString(),
        section: categoryItem.closest(".category-section").querySelector(".section-title").textContent,
      })

      // Add loading state
      categoryItem.style.opacity = "0.7"
      setTimeout(() => {
        categoryItem.style.opacity = "1"
      }, 500)
    }
  })

  // Back to top button
  const backToTopBtn = document.createElement("button")
  backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>'
  backToTopBtn.className = "back-to-top"
  backToTopBtn.setAttribute("aria-label", "Back to top")
  document.body.appendChild(backToTopBtn)

  // Show/hide back to top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  })

  // Back to top functionality
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Lazy loading for better performance
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "50px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply lazy loading to category sections
  setTimeout(() => {
    document.querySelectorAll(".category-section").forEach((section, index) => {
      section.style.opacity = "0"
      section.style.transform = "translateY(20px)"
      section.style.transition = `all 0.6s ease ${index * 0.1}s`
      observer.observe(section)
    })
  }, 100)

  // Add category statistics to page
  const addCategoryStats = () => {
    const stats = getCategoryStats()
    const statsContainer = document.createElement("div")
    statsContainer.className = "category-stats"
    statsContainer.innerHTML = `
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">${stats.totalCategories}</span>
          <span class="stat-label">Total Categories</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${stats.totalListings.toLocaleString()}</span>
          <span class="stat-label">Total Listings</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${stats.totalSections}</span>
          <span class="stat-label">Category Sections</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">${stats.averageListingsPerCategory}</span>
          <span class="stat-label">Avg per Category</span>
        </div>
      </div>
    `

    document.querySelector(".page-header").appendChild(statsContainer)
  }

  addCategoryStats()

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-active")
    })
  }

  // Featured categories rotation
  let currentFeaturedIndex = 0
  const rotateFeaturedCategories = () => {
    const featuredCategories = getFeaturedCategories()
    const allFeaturedElements = document.querySelectorAll(".category-item.featured")

    if (allFeaturedElements.length > 1) {
      // Remove featured class from current
      allFeaturedElements.forEach((el) => el.classList.remove("featured"))

      // Add to next one
      setTimeout(() => {
        const nextCategory = featuredCategories[currentFeaturedIndex]
        const nextElement = document.querySelector(`a[href="${nextCategory.url}"]`)
        if (nextElement) {
          nextElement.classList.add("featured")
        }
        currentFeaturedIndex = (currentFeaturedIndex + 1) % featuredCategories.length
      }, 100)
    }
  }

  // Rotate featured categories every 5 seconds
  setInterval(rotateFeaturedCategories, 5000)

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "/") {
      e.preventDefault()
      searchInput.focus()
    }

    if (e.key === "Escape") {
      searchInput.value = ""
      searchInput.dispatchEvent(new Event("input"))
      searchInput.blur()
    }
  })

  // Add print functionality
  const addPrintButton = () => {
    const printBtn = document.createElement("button")
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print Categories'
    printBtn.className = "print-btn"
    printBtn.style.cssText = `
      position: fixed;
      top: 100px;
      right: 30px;
      background: #6c757d;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      z-index: 1000;
      display: none;
    `

    printBtn.addEventListener("click", () => {
      window.print()
    })

    document.body.appendChild(printBtn)

    // Show print button on larger screens
    if (window.innerWidth > 768) {
      printBtn.style.display = "block"
    }
  }

  addPrintButton()

  // Export functions for external use
  window.BusinessListCategories = {
    getAllCategories,
    searchCategories,
    getCategoryStats,
    getTopCategories,
    getFeaturedCategories,
    categoriesData,
  }
})

// Add print styles
const printStyles = document.createElement("style")
printStyles.textContent = `
  @media print {
    .header, .back-to-top, .print-btn, .search-filter {
      display: none !important;
    }
    
    .category-item {
      break-inside: avoid;
      margin-bottom: 5px;
    }
    
    .section-title {
      color: #000 !important;
      border-bottom: 1px solid #000 !important;
    }
    
    body {
      background: white !important;
    }
  }
`
document.head.appendChild(printStyles)
