export interface ServiceItem {
  id: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  complianceBadge: string;
  badgeColor: string;
  image: string;
  hotspot3D: {
    title: string;
    description: string;
    coordinates: [number, number, number]; // [x, y, z] for 3D placement
  };
  features: string[];
  cocIncluded: boolean;
  idealFor: string;
}

export const COMPANY_INFO = {
  name: "RDT We Do It All",
  slogan: "Complete Domestic Solutions. Certified Excellence. One Trusted Team.",
  address: "7 Octopus Arm, Richards Bay, KwaZulu-Natal, 3900, South Africa",
  locationName: "Richards Bay & Zululand",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=RDT%20we%20do%20it%20all&query_place_id=ChIJs71ewngl-h4R5hg8dn1YqfY",
  contacts: {
    tania: {
      name: "Dr. Tania Snyman",
      title: "Client Relations & Bookings",
      phone: "+27 79 529 5572",
      phoneDisplay: "079 529 5572",
      whatsappNumber: "27795295572"
    },
    rudi: {
      name: "Rudi Snyman",
      title: "Technical Lead & On-Site Operations",
      phone: "+27 82 418 2687",
      phoneDisplay: "082 418 2687",
      whatsappNumber: "27824182687"
    }
  },
  operatingHours: "Monday – Friday: 07:00 – 17:30 | Saturday: 08:00 – 13:00 | 24/7 Emergency Callout",
  serviceAreas: [
    "Meerensee",
    "Birdswood",
    "Arboretum",
    "Veldenvlei",
    "Brackenham",
    "Wildenweide",
    "Aquadene",
    "Empangeni",
    "Esikhawini",
    "Mtunzini",
    "Zululand Coast"
  ]
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "electrical",
    name: "Electric Work — Domestic (Including COC)",
    shortName: "Electrical & COC",
    category: "Electrical Engineering",
    tagline: "Certified SANS 10142-1 Domestic Electrical Work with Official Certificate of Compliance",
    description: "From complete residential rewiring to distribution board (DB) upgrades and fault diagnostics, we ensure your home operates at peak electrical safety. Legally certified Electrical Certificates of Compliance (COC) issued for property sales, transfers, and insurance verification.",
    complianceBadge: "SANS 10142-1 Certified",
    badgeColor: "amber",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "Main DB & Electrical Hub",
      description: "Certified distribution board, surge arrestors, rewiring, and official SANS electrical COC.",
      coordinates: [-1.8, 0.4, 0.8]
    },
    features: [
      "Official Electrical Certificate of Compliance (COC) for transfers & insurance",
      "Distribution Board (DB) replacement, neatening & surge protection",
      "Fault finding, power tripping diagnosis & earth leakage repairs",
      "LED downlight installations, domestic wiring & plug circuits",
      "Solar inverter and generator sub-distribution board prep"
    ],
    cocIncluded: true,
    idealFor: "Home sales, insurance compliance, power tripping fixes & new renovations."
  },
  {
    id: "lpg-gas",
    name: "LPG Domestic Gas Installations & COC",
    shortName: "LPG Domestic Gas",
    category: "Gas Systems",
    tagline: "LPGSA Registered Installer for Gas Geysers, Hobs, Lines & Mandatory Gas COCs",
    description: "Beat electricity tariff hikes and load-shedding with safe, compliant domestic LPG gas installations. Certified with the Liquefied Petroleum Gas Safety Association of South Africa (LPGSA), we install gas geysers, gas cooking hobs, manifolds, and issue legal gas COCs.",
    complianceBadge: "LPGSA Registered Installer",
    badgeColor: "cyan",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "LPG Gas System & Geyser",
      description: "LPGSA-certified copper piping, multi-bottle regulators, gas geysers & mandatory Gas COC.",
      coordinates: [1.9, 0.2, -0.6]
    },
    features: [
      "Registered LPGSA installer issuing legal domestic Gas COCs",
      "Gas geyser installation for instant, continuous hot water off-grid",
      "Gas hob, stove & oven installations and regulator setups",
      "Rigorous pipeline pressure testing & leak safety inspections",
      "Dual-bottle changeover manifold installations & protective cages"
    ],
    cocIncluded: true,
    idealFor: "Homeowners switching from Eskom geysers to gas for massive savings & load-shedding immunity."
  },
  {
    id: "solar-energy",
    name: "Solar Energy & Battery Backup Systems",
    shortName: "Solar Energy",
    category: "Renewable Power",
    tagline: "High-Efficiency Monocrystalline Solar PV, Hybrid Inverters & LiFePO4 Battery Storage",
    description: "Eliminate load-shedding anxiety and slash municipal electricity bills. We engineer custom domestic solar setups matching your household loads, featuring Tier-1 monocrystalline panels, top hybrid inverters (Sunsynk/Deye), and long-life Lithium Iron Phosphate batteries.",
    complianceBadge: "Load-Shedding Stage 6 Ready",
    badgeColor: "amber",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "Rooftop Solar PV Array",
      description: "High-efficiency Tier-1 panels angled for maximum Zululand sun exposure with hybrid inverter tie-in.",
      coordinates: [0, 1.8, 0]
    },
    features: [
      "Custom load calculation & system sizing tailored to your appliances",
      "Tier-1 monocrystalline PV modules with 25-year performance warranty",
      "Hybrid smart inverters with seamless 10ms power switchover",
      "High-cycle LiFePO4 lithium batteries (6000+ cycles)",
      "Full electrical integration with certified DB tie-in"
    ],
    cocIncluded: true,
    idealFor: "Families wanting uninterrupted power for fridges, lights, WiFi, and air conditioners 24/7."
  },
  {
    id: "construction",
    name: "Construction — Roofs, Ceilings & House Revamping",
    shortName: "Construction & Revamping",
    category: "Building & Renovations",
    tagline: "Roof Repairs, Waterproofing, Ceilings, Drywall Divisions & Modern House Revamps",
    description: "Transform your living space with master craftsmanship. Whether you need structural roof repairs, waterproofing against coastal storms, new ceiling installations (Rhino board/PVC), or adding modern interior drywall divisions, we bring your vision to life.",
    complianceBadge: "Master Craftsmanship",
    badgeColor: "emerald",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "Roof & Ceiling Engineering",
      description: "Truss reinforcement, modern ceiling installations, coastal waterproofing & drywall divisions.",
      coordinates: [0.8, 1.1, 0.4]
    },
    features: [
      "Roof repairs, truss structural reinforcement & tile replacements",
      "Coastal waterproofing & storm flashings designed for Richards Bay climate",
      "Ceiling replacement & installations (plastered Rhino board, PVC, insulated)",
      "Interior room divisions, dry-walling, stud partitions & modern revamps",
      "Complete home renovations, exterior paving & patio extensions"
    ],
    cocIncluded: false,
    idealFor: "Homeowners expanding rooms, fixing sagging/leaking ceilings, or completely modernizing."
  },
  {
    id: "plumbing",
    name: "Fixing of Pipes & Drainage",
    shortName: "Plumbing & Drainage",
    category: "Plumbing Engineering",
    tagline: "Burst Pipes, Leak Detection, High-Pressure Drain Unblocking & Sanitary Repairs",
    description: "Rapid, dependable plumbing solutions to protect your home from water damage. We handle burst pipes, hidden leak tracing, drain unblocking, geyser valve replacements, pressure balancing, and complete kitchen and bathroom plumbing repairs.",
    complianceBadge: "PIRB / SABS Compliant",
    badgeColor: "blue",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "Plumbing & Drainage Network",
      description: "High-pressure pipework, leak detection, drain clearing, and pressure-reducing valve manifolds.",
      coordinates: [-1.2, -0.4, -0.5]
    },
    features: [
      "Rapid response burst pipe repairs (copper, HDPE, PEX systems)",
      "High-pressure water jetting & mechanical drain clearing",
      "Leak detection and damp investigation behind walls and floors",
      "Geyser temperature & pressure relief valve (TP valve) replacements",
      "Bathroom, kitchen & scullery sanitary ware plumbing"
    ],
    cocIncluded: false,
    idealFor: "Emergency leaks, blocked drains, low water pressure, and bathroom renovations."
  },
  {
    id: "security",
    name: "House Security & Alarm Installations",
    shortName: "Alarms & Smart Security",
    category: "Electronic Security",
    tagline: "Smart Domestic Alarm Systems, Wireless PIR Motion Sensors & Remote Phone Alerts",
    description: "Protect your family with intelligent perimeter and indoor security systems. We install premium alarm systems (Paradox, IDS) featuring passives, pet-friendly outdoor beams, loud sirens, and smartphone integration for instant mobile alarm alerts anywhere.",
    complianceBadge: "24/7 Home Shield",
    badgeColor: "rose",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "House Security & Alarm Hub",
      description: "Smart Paradox/IDS control panel, outdoor wireless beams, passive infrared sensors & mobile link.",
      coordinates: [0, 0.3, 1.4]
    },
    features: [
      "State-of-the-art Paradox and IDS alarm panel installations",
      "Outdoor perimeter beams and wireless pet-friendly PIR sensors",
      "Instant smartphone push notifications & remote arm/disarm capabilities",
      "CCTV camera integration for remote driveway and garden viewing",
      "Battery backup system to keep alarms running during load-shedding"
    ],
    cocIncluded: false,
    idealFor: "Residential homes, gated communities, holiday houses, and perimeter early-warning protection."
  },
  {
    id: "electric-fence",
    name: "Electric Fences & Perimeter Security",
    shortName: "Electric Fencing",
    category: "Perimeter Protection",
    tagline: "Nemtek Wall-Top & Free-Standing Electric Fencing with Compliance Certification",
    description: "The ultimate frontline deterrent for South African homes. We supply, erect, repair, and certify high-voltage multi-strand electric fences using industry-leading Nemtek energizers, anti-tamper sirens, heavy-duty earth spikes, and legal Electric Fence System COCs.",
    complianceBadge: "Electric Fence COC Certified",
    badgeColor: "amber",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    hotspot3D: {
      title: "Perimeter High-Voltage Fence",
      description: "Nemtek wall-top electric fencing, high-voltage energizers, anti-cut loop sensors & COC sign-off.",
      coordinates: [2.2, 0.6, 1.2]
    },
    features: [
      "Wall-top bracket and free-standing multi-strand security fencing",
      "Nemtek high-voltage energizers with tamper detection & siren output",
      "Dedicated battery backup keeping fence live during power outages",
      "Electric Fence System Certificate of Compliance (EFC COC) issuance",
      "Routine line servicing, tensioning, insulator replacements & vegetation clearing"
    ],
    cocIncluded: true,
    idealFor: "Boundary wall security, estate homes, commercial perimeters, and property compliance transfers."
  }
];

export const FREQUENT_QUESTIONS = [
  {
    question: "Why do I need an Electrical Certificate of Compliance (COC) in South Africa?",
    answer: "Under South African law (Occupational Health and Safety Act & SANS 10142-1), an Electrical COC is mandatory whenever you sell a property. Furthermore, South African insurance companies will reject fire or damage claims if work was performed without a valid COC issued by a certified contractor like RDT."
  },
  {
    question: "Can an RDT solar system keep my home running during Stage 6 load-shedding?",
    answer: "Yes, absolutely! We configure our hybrid inverters (such as Sunsynk and Deye) with dedicated LiFePO4 lithium batteries so that your critical circuits (refrigerators, lights, WiFi routers, TV, home office, and security systems) experience zero downtime when the grid fails."
  },
  {
    question: "Is a Certificate of Compliance required for domestic LPG gas?",
    answer: "Yes. The Pressure Equipment Regulations mandate that any gas installation (gas geysers, gas hobs, fireplaces) must have a legal Gas Certificate of Compliance issued by an LPGSA Registered Installer. Without this, your home insurance policy may be null and void in the event of fire."
  },
  {
    question: "Do you handle roof waterproofing and ceiling damage caused by coastal rain in Richards Bay?",
    answer: "Yes, coastal Zululand weather is tough on roofs and ceilings. We repair damaged trusses, install heavy-duty coastal waterproofing flashings, and replace sagging or water-damaged ceilings with modern Rhino board or moisture-resistant PVC ceilings."
  },
  {
    question: "How quickly can Rudi and the team respond to an emergency burst pipe or power failure?",
    answer: "Because we are locally based right here at 7 Octopus Arm in Richards Bay, our response time for local areas like Meerensee, Birdswood, and Arboretum is rapid. For urgent emergencies, contact Rudi directly on 082 418 2687."
  }
];
