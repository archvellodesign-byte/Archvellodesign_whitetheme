export type Project = {
  slug: string;
  img: string;
  title: string;
  cat: string;
  label: string;
  location: string;
  year: string;
  scope: string;
  client: string;
  summary: string;
  details: string[];
};

export const projects: Project[] = [
  {
    slug: "meridian-grand-hotel",
    img: "/img/p1.jpg",
    title: "",
    cat: "hospitality",
    label: "Hospitality",
    location: "Dubai, UAE",
    year: "2024",
    scope: "Architecture & Interior Documentation",
    client: "Meridian Hospitality Group",
    summary:
      "A 320-key luxury hotel documented end-to-end in Revit, from concept coordination to issued-for-construction packages.",
    details: [
      "LOD 350 architectural model with fully coordinated interior fit-out zones.",
      "Tender and construction drawing sets issued across 14 packages.",
      "Clash-free coordination with MEPF and structural consultants.",
    ],
  },
  {
    slug: "northline-corporate-campus",
    img: "/img/p2.jpg",
    title: "",
    cat: "commercial",
    label: "Commercial",
    location: "London, UK",
    year: "2023",
    scope: "BIM Delivery & MEPF Coordination",
    client: "Northline Estates",
    summary:
      "A three-building workplace campus delivered on a shared BIM execution plan with weekly federated model reviews.",
    details: [
      "BEP authoring aligned to ISO 19650 information requirements.",
      "Federated model coordination across five consultant teams.",
      "As-built model handover for facility management.",
    ],
  },
  {
    slug: "civic-centre-bim-delivery",
    img: "/img/p3.jpg",
    title: "",
    cat: "bim",
    label: "BIM",
    location: "Singapore",
    year: "2024",
    scope: "Scan to BIM & Model Audit",
    client: "City Development Authority",
    summary:
      "Point-cloud survey converted into an accurate as-built model supporting a phased civic retrofit programme.",
    details: [
      "1.2 million sq ft scanned and modelled to LOD 300.",
      "Model audits against national BIM submission standards.",
      "Phasing views supporting a live, occupied refurbishment.",
    ],
  },
  {
    slug: "casa-lumiere-residence",
    img: "/img/p4.jpg",
    title: "",
    cat: "residential",
    label: "Residential",
    location: "Côte d'Azur, France",
    year: "2025",
    scope: "Documentation & 3D Visualization",
    client: "Private Client",
    summary:
      "A cliffside private residence with bespoke joinery detailing and photoreal visualization for client approvals.",
    details: [
      "Full joinery and stone-cladding detail packages.",
      "Unreal Engine walkthrough for design sign-off.",
      "Sun-path and shading studies for glazing strategy.",
    ],
  },
];

export const posts = [
  {
    slug: "iso-19650-in-practice",
    title: "ISO 19650 in practice: what actually changes on site",
    date: "12 August 2026",
    cat: "BIM",
    excerpt:
      "Information management standards look like paperwork until a clash costs six weeks. Here is how we operationalise ISO 19650 across delivery teams.",
  },
  {
    slug: "detailing-hospitality-interiors",
    title: "Detailing hospitality interiors for tender",
    date: "28 July 2026",
    cat: "Interiors",
    excerpt:
      "Hotel fit-outs live or die on the joinery package. A look at the detail hierarchy we use to keep contractors pricing the same thing.",
  },
  {
    slug: "scan-to-bim-retrofit",
    title: "Scan to BIM: retrofitting an occupied building",
    date: "09 July 2026",
    cat: "Technology",
    excerpt:
      "Registering point clouds is the easy part. The value sits in deciding what to model, at what tolerance, and for whom.",
  },
];


export const roles = [
  {
    title: "Senior BIM Coordinator",
    location: "Remote · India",
    type: "Full-time",
    text: "Lead federated model coordination for large hospitality and commercial projects.",
  },
  {
    title: "Architectural Technologist",
    location: "Remote · India",
    type: "Full-time",
    text: "Produce tender and construction packages to RIBA and AIA standards.",
  },
  {
    title: "3D Visualization Artist",
    location: "Remote · India",
    type: "Full-time",
    text: "Craft photoreal stills and walkthroughs in 3ds Max, Corona and Unreal Engine.",
  },
  {
    title: "Interior Detailer",
    location: "Remote · India",
    type: "Contract",
    text: "Detail joinery, ceilings and finishes packages for hotel and workplace interiors.",
  },
];

export const team = [
  {
    img: "/img/t2.jpg",
    name: "Harish Malik",
    role: "Founding Principal",
    email: "harishmalik@archvellodesign.com",
    text: "Leads design direction and client engagement across hospitality and civic work.",
  },
  {
    img: "/img/t2.jpg",
    name: "Shahnawaz Saifi",
    role: "Director of BIM",
    email: "shahnawazsaifi@archvellodesign.com",
    text: "Authors BEPs and runs ISO 19650 information delivery on multi-consultant projects.",
  },
  {
    img: "/img/t3.jpg",
    name: "Bushra Khan",
    role: "Head of Documentation",
    email: "bushra@archvellodesign.com",
    text: "Oversees tender and construction packages, standards and drawing QA.",
  },
  {
    img: "/img/t4.jpg",
    name: "Shuaib Malik",
    role: "Visualization Lead",
    email: "shuaibmalik@archvellodesign.com",
    text: "Directs photoreal stills, animation and real-time walkthroughs for competitions.",
  },
];

export const testimonials = [
  {
    quote:
      "They absorbed our templates and standards in a week. The packages came back reading exactly like our own drawings — only faster.",
    name: "Helena Voss",
    role: "Associate Director, India",
  },
  {
    quote:
      "Federated coordination was the calmest part of the programme. Zero rework packages on a three-building campus is unheard of for us.",
    name: "Adrian Cole",
    role: "Project Director, Dubai",
  },
  {
    quote:
      "1.2 million square feet scanned and modelled around a live civic building, delivered ahead of the handover date.",
    name: "Su-Lin Tan",
    role: "Asset Manager, China",
  },
];
