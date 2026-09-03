import { BISStandard, Language, TranslationStrings } from "@/types";

export const BIS_KNOWLEDGE: Record<string, BISStandard> = {
  "electric kettle": {
    id: "electric-kettle",
    name: "Electric Kettle",
    keywords: ["electric kettle", "kettle", "water boiler", "electric jug", "water kettle", "electric water heater"],
    standard: "IS 302-2-15",
    standard_full: "IS 302-2-15 (Part 2): Safety of household electrical appliances — Heating liquids",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "You must get BIS certification. It is compulsory by Indian law under Quality Control Orders.",
    testing: [
      "🔌 High Voltage Insulation Test - verifies electricity will not leak under surge",
      "⚡ Leakage Current & Earthing Test - ensures safety during touch and liquid boiling",
      "🛡️ Dry-Boil & Overload Protection Test - guarantees safety if turned on without water",
      "🌡️ Temperature Rise & Thermal Cutoff Test - prevents severe overheating and fire hazards"
    ],
    testing_simple: "Your electric kettle must pass 4 certified safety tests at a BIS-recognized testing laboratory.",
    documents: [
      "📋 Full test report from a BIS-approved laboratory (Form-V)",
      "🏭 Factory layout blueprint, manufacturing machinery list & in-house lab setup",
      "📖 Quality Control Manual (QCM) & Scheme of Inspection and Testing (SIT) declaration",
      "📄 Proof of authorized Indian representative (for foreign manufacturers)"
    ],
    process: "1️⃣ Submit Form-V application on Manakonline → 2️⃣ Send production samples for lab testing → 3️⃣ On-site BIS factory inspection → 4️⃣ License & ISI Mark grant",
    source: "BIS Official Portal — Household Electrical Standards",
    source_url: "https://bis.gov.in/certification/",
    summary: "If you manufacture or import electric kettles in India, you MUST obtain a BIS ISI Mark license. You must test samples, complete factory audit, and apply on Manakonline.",
    category: "Household Electronics"
  },
  "pressure cooker": {
    id: "pressure-cooker",
    name: "Pressure Cooker",
    keywords: ["pressure cooker", "cooker", "domestic pressure cooker", "aluminum cooker", "stainless steel cooker"],
    standard: "IS 2347",
    standard_full: "IS 2347: Specification for domestic pressure cookers (Aluminum & Stainless Steel)",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "You must get BIS ISI Mark certification. Compulsory under Pressure Cookers (Quality Control) Order.",
    testing: [
      "💪 Hydrostatic Proof Pressure Test - tests body and lid against extreme steam pressure",
      "🛡️ Safety Valve / Fusible Plug Relief Test - verifies automatic steam release on overpressure",
      "⚖️ Gasket Release Safety Test - ensures controlled gasket ejection under emergency pressure",
      "🔧 Component Fitment & Handle Torque Test - ensures handles stay secure and insulate heat"
    ],
    testing_simple: "Your pressure cooker must pass 4 rigorous safety and mechanical pressure tests at a BIS-approved lab.",
    documents: [
      "📋 Complete Type Testing Report from BIS recognized laboratory",
      "🏭 Factory manufacturing machinery, stamping presses & inspection equipment list",
      "📖 Quality Control Plan and raw material mill test certificates (Aluminum/SS grade)"
    ],
    process: "1️⃣ Online application on Manakonline → 2️⃣ Sample testing in BIS lab → 3️⃣ BIS factory audit → 4️⃣ Grant of ISI Mark license (CM/L)",
    source: "BIS Official Portal — Kitchenware & Consumer Goods",
    source_url: "https://bis.gov.in/certification/",
    summary: "Domestic pressure cookers must strictly comply with IS 2347 with certified safety valves and pressure resistance before commercial sale.",
    category: "Domestic Utensils & Appliances"
  },
  "led lamp": {
    id: "led-lamp",
    name: "LED Lamp / Light",
    keywords: ["led lamp", "led bulb", "led light", "lighting", "self-ballasted led", "led tube", "downlight"],
    standard: "IS 16102 (Part 1 & 2)",
    standard_full: "IS 16102 (Part 1): Self-ballasted LED lamps for general lighting — Safety & Performance Requirements",
    scheme: "Scheme-II (CRS - Compulsory Registration Scheme)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "You must register your LED lamps with BIS under the Compulsory Registration Scheme (CRS).",
    testing: [
      "🔌 Electrical Safety & Insulation Resistance Test (IS 16102-1)",
      "📡 Electromagnetic Compatibility (EMC) & Harmonic Current Emissions",
      "💡 Photometric Performance, Lumen Efficacy & Color Rendering Index (CRI) Test",
      "🌡️ Temperature Endurance & Moisture Resistance Testing"
    ],
    testing_simple: "Your LED products must pass safety, electrical emissions, and photometric performance tests.",
    documents: [
      "📋 Valid Test Report from a BIS-accredited testing laboratory (within 90 days)",
      "📝 Self-Declaration of Conformity (SDOC) signed by CEO / Authorized Signatory",
      "📄 Product Technical Specification Sheet & Critical Components List (CCL)",
      "🏢 Brand authorization letter / Trademark Certificate"
    ],
    process: "1️⃣ Lab testing of product sample → 2️⃣ Create profile & upload report on BIS CRS Portal → 3️⃣ Document scrutiny → 4️⃣ Receive R-Number registration grant",
    source: "BIS Compulsory Registration Scheme (CRS) Portal",
    source_url: "https://bis.gov.in/crs/",
    summary: "LED lamps fall under mandatory CRS registration. Products receive a unique R-number (Registration Number) to be printed on packaging.",
    category: "Electronics & IT Goods"
  },
  "children toys": {
    id: "children-toys",
    name: "Children's Toys",
    keywords: ["toy", "toys", "children toy", "doll", "plastic toy", "wooden toy", "electronic toy", "infant toy", "ride-on"],
    standard: "IS 9873 (Parts 1-9) & IS 15644",
    standard_full: "IS 9873: Safety aspects related to mechanical, physical, flammability, and heavy element migration in toys",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "BIS ISI Mark certification is strictly mandatory for all electric and non-electric toys under the Toys (Quality Control) Order.",
    testing: [
      "🔧 Mechanical & Physical Hazards Test - checks sharp edges, small parts choking hazards, drop impact",
      "🔥 Flammability Testing - ensures materials resist flame ignition and fast burning",
      "🧪 Heavy Metal & Phthalate Migration Test - verifies zero toxic chemicals (Lead, Cadmium, Mercury)",
      "⚡ Electrical Safety Testing (for electronic/battery operated toys under IS 15644)"
    ],
    testing_simple: "Your toys must pass comprehensive physical safety, flammability, non-toxicity, and drop impact tests.",
    documents: [
      "📋 Complete Toy Safety Test Report (IS 9873 series) from BIS lab",
      "🏭 Factory inspection report and internal quality testing lab with calibrated gauges",
      "📄 Material safety data sheets (MSDS) and raw polymer/colorant non-toxicity certificates"
    ],
    process: "1️⃣ Apply online on Manakonline (Scheme I) → 2️⃣ In-factory sample sealing & lab test → 3️⃣ Factory inspection by BIS officer → 4️⃣ ISI Mark license issued",
    source: "BIS Official Portal — Toy Safety Certification",
    source_url: "https://bis.gov.in/toy-certification/",
    summary: "All toys sold or imported into India must bear the BIS ISI Mark. Uncertified toys cannot be sold or cleared through customs.",
    category: "Toys & Child Safety"
  },
  "steel pipe": {
    id: "steel-pipe",
    name: "Steel Pipes & Tubes",
    keywords: ["steel pipe", "steel tube", "pipes", "hollow section", "gi pipe", "structural steel", "erw pipe"],
    standard: "IS 1161 / IS 1239",
    standard_full: "IS 1161: Steel tubes for structural purposes & IS 1239: Mild steel tubes, tubulars and other fittings",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "You must get BIS ISI Mark certification. Compulsory under Steel and Steel Products Quality Control Order.",
    testing: [
      "💪 Tensile Strength & Yield Stress Verification - tests structural load capacity",
      "💧 Hydrostatic Pressure Testing - tests seamless and welded seam leak tightness",
      "📏 Flattening, Flanging & Bend Test - evaluates ductility and weld integrity",
      "📐 Wall Thickness & Dimensional Precision Tolerance Audit"
    ],
    testing_simple: "Steel pipes must pass 4 mechanical strength, pressure tolerance, and metallurgical tests.",
    documents: [
      "📋 Laboratory test certificate of chemical analysis & mechanical properties",
      "🏭 Mill rolling equipment, furnace and galvanizing setup documentation",
      "📖 In-house Quality Assurance Plan (QAP) and calibration certificates"
    ],
    process: "1️⃣ Apply on Manakonline portal → 2️⃣ Testing of sample heats in BIS lab → 3️⃣ Mill audit & sample drawing → 4️⃣ License grant (CM/L)",
    source: "BIS Official Portal — Steel & Metallurgy Standards",
    source_url: "https://bis.gov.in/certification/",
    summary: "Steel pipes used in structural, plumbing, and industrial piping require ISI Mark compliance under mandatory ministry QCOs.",
    category: "Metals & Structural Engineering"
  },
  "solar panel": {
    id: "solar-panel",
    name: "Solar PV Modules",
    keywords: ["solar panel", "solar module", "photovoltaic", "pv module", "solar cell", "solar power"],
    standard: "IS 14286 / IS/IEC 61730",
    standard_full: "IS 14286: Design qualification and type approval of crystalline silicon terrestrial PV modules",
    scheme: "Scheme-II (CRS - Compulsory Registration)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "Compulsory registration with BIS is mandatory under the Solar Photovoltaics Quality Control Order.",
    testing: [
      "☀️ Thermal Cycling & Damp Heat Stress Test - checks durability in harsh climates",
      "⚡ Wet Leakage Current & Dielectric Voltage Withstand Test - prevents electrocution",
      "🔨 Mechanical Load & Hail Impact Resistance Test - ensures physical durability against storms",
      "💡 Maximum Power Determination & PID (Potential Induced Degradation) Test"
    ],
    testing_simple: "Solar modules must undergo climate stress, electrical insulation, and impact testing.",
    documents: [
      "📋 Complete Type Test Report from MNRE/BIS authorized testing lab",
      "📝 Bill of Materials (BOM) declaration with manufacturer details of EVA, backsheet, solar cells",
      "📄 Trademark registration & ISO 9001 quality certificate"
    ],
    process: "1️⃣ Comprehensive test at BIS/MNRE accredited lab → 2️⃣ Apply on BIS CRS portal → 3️⃣ Scrutiny & Approval → 4️⃣ Registration Number (R-XXXXXXX)",
    source: "BIS CRS Portal — Solar Photovoltaics Division",
    source_url: "https://bis.gov.in/crs/",
    summary: "Solar modules for domestic or utility installation in India must have BIS CRS registration and be listed on the ALMM list.",
    category: "Renewable Energy & Power"
  },
  "packaged drinking water": {
    id: "packaged-drinking-water",
    name: "Packaged Drinking Water",
    keywords: ["packaged drinking water", "mineral water", "bottled water", "water bottle", "purified water", "drinking water"],
    standard: "IS 14543 / IS 13428",
    standard_full: "IS 14543: Packaged Drinking Water (Other than Packaged Natural Mineral Water)",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "Packaged drinking water requires compulsory BIS ISI certification before setting up a bottling plant.",
    testing: [
      "🧪 Microbiological Examination - tests for absence of E.coli, Coliforms, Salmonella",
      "🔬 Chemical Contaminant & Heavy Metal Analysis (Lead, Arsenic, Fluoride, Pesticides)",
      "💧 Physical Parameters (TDS, pH, turbidity, color and odor checks)",
      "📦 Packaging Material Testing - migration limits and food grade container tests"
    ],
    testing_simple: "Water must undergo chemical purity, microbiological sterility, and toxic chemical absence tests.",
    documents: [
      "📋 Comprehensive test report from approved NABL/BIS lab",
      "🏭 In-house microbiological and chemical testing lab with qualified chemists/microbiologists",
      "📖 Source water yield test report, FSSAI license, pollution control board NOC"
    ],
    process: "1️⃣ Setup in-house lab & plant → 2️⃣ Apply on Manakonline → 3️⃣ Strict BIS inspection & sample testing → 4️⃣ ISI License grant",
    source: "BIS Official Portal — Food & Agriculture Products",
    source_url: "https://bis.gov.in/certification/",
    summary: "Selling packaged drinking water without BIS ISI certification is a criminal offense under FSSAI and BIS statutory regulations.",
    category: "Food & Beverage"
  },
  "helmet": {
    id: "helmet",
    name: "Two-Wheeler Rider Helmet",
    keywords: ["helmet", "motorcycle helmet", "two wheeler helmet", "biker helmet", "protective headgear"],
    standard: "IS 4151",
    standard_full: "IS 4151: Protective helmets for riders of two-wheeled motor vehicles — Specification",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    certification_status: "MANDATORY",
    certification_simple: "Mandatory under Helmet Quality Control Order and Motor Vehicles Act. Non-ISI helmets are illegal in India.",
    testing: [
      "🔨 Impact Absorption Test with drop anvil at various ambient temperatures",
      "🪝 Retention System & Dynamic Chin Strap Strength Test",
      "👁️ Visor Optical Clarity, Scratch Resistance & Shatter Proofing Test",
      "🛡️ Rigidity & Peripheral Vision Angle Assessment"
    ],
    testing_simple: "Helmets must pass impact deceleration, strap retention strength, and optical visor clarity tests.",
    documents: [
      "📋 BIS approved laboratory impact and retention test report",
      "🏭 Factory shell molding, EPS liner density calibration and strap stitching audit report",
      "📖 Routine quality testing apparatus verification certificate"
    ],
    process: "1️⃣ Apply on Manakonline → 2️⃣ Laboratory impact testing → 3️⃣ Factory verification → 4️⃣ ISI Mark Grant",
    source: "BIS Transport Engineering Standards",
    source_url: "https://bis.gov.in/certification/",
    summary: "Only helmets bearing the official BIS ISI mark and maximum weight within prescribed limits can be manufactured or sold in India.",
    category: "Automotive & Road Safety"
  }
};

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    product_identified: "🔍 Identified Standard",
    applicable_standard: "📋 Applicable BIS Standard",
    certification: "✅ Regulatory Requirement",
    testing_requirements: "🧪 Required Testing Procedures",
    documents_required: "📄 Required Documentation",
    process: "📌 4-Step Application Roadmap",
    source: "📎 Official BIS Reference",
    disclaimer: "⚠️ Disclaimer: This is AI-generated guidance based on official Bureau of Indian Standards (BIS) documents. Always verify regulatory specifics on manakonline.in before manufacturing or importing.",
    compliance_checklist: "✅ Interactive Compliance Action Plan",
    step: "Step",
    apply: "Submit Online Application via Manakonline",
    test: "Product Sample Testing at BIS Lab",
    inspect: "On-site Factory Inspection Audit",
    license: "Grant of License & ISI / CRS Registration",
    no_info: "I couldn't find a direct BIS standard match for this specific product in the offline index. Please describe the product in detail or visit the official BIS portal at bis.gov.in.",
    summary: "📌 Summary & Legal Status",
    cert_required: "MANDATORY CERTIFICATION",
    cert_not_required: "VOLUNTARY / NOT MANDATORY",
    placeholder: "Describe your product or standard (e.g. Electric Kettle, LED Lamp, Pressure Cooker)...",
    ask_heading: "Ask about Indian Standards (BIS)",
    ask_subheading: "Describe any product or requirement. The AI instantly identifies Indian Standards (IS), mandatory certification schemes, lab tests, and compliance checklists.",
    new_chat: "New Chat",
    no_chats: "No previous chats",
    start_convo: "Start a new conversation to get started!",
    copy: "Copy Details",
    copied: "Copied!",
    view_source: "View Official Source",
    sih_badge: "SIH 2026 — Smart India Hackathon",
    hero_title: "BIS Intelligent Assistant",
    hero_subtitle: "AI-Powered Companion for Indian Standards & BIS Certification",
    hero_description: "Navigate BIS standards, ISI mark certifications, Compulsory Registration Scheme (CRS), laboratory testing protocols, and compliance requirements through intuitive conversation.",
    get_started: "Get Started Now",
    why_bis: "Why BIS Intelligent Assistant?",
    how_it_works: "How It Works"
  },
  hi: {
    product_identified: "🔍 पहचाना गया मानक",
    applicable_standard: "📋 लागू BIS मानक",
    certification: "✅ प्रमाणन आवश्यकता",
    testing_requirements: "🧪 आवश्यक परीक्षण प्रक्रियाएं",
    documents_required: "📄 आवश्यक दस्तावेज़",
    process: "📌 4-चरणीय आवेदन प्रक्रिया",
    source: "📎 आधिकारिक BIS संदर्भ",
    disclaimer: "⚠️ अस्वीकरण: यह आधिकारिक भारतीय मानक ब्यूरो (BIS) स्रोतों पर आधारित AI मार्गदर्शन है। विनिर्माण या आयात करने से पहले manakonline.in से नियमों की पुष्टि करें।",
    compliance_checklist: "✅ इंटरैक्टिव अनुपालन कार्य योजना",
    step: "चरण",
    apply: "Manakonline पर ऑनलाइन आवेदन जमा करें",
    test: "BIS प्रयोगशाला में उत्पाद परीक्षण",
    inspect: "कारखाना निरीक्षण और ऑडिट",
    license: "लाइसेंस और ISI / CRS मार्क प्राप्त करें",
    no_info: "मुझे इस उत्पाद के लिए सीधा BIS मानक नहीं मिला। कृपया उत्पाद का अधिक विस्तार से वर्णन करें या आधिकारिक BIS पोर्टल bis.gov.in पर देखें।",
    summary: "📌 त्वरित सारांश एवं कानूनी स्थिति",
    cert_required: "अनिवार्य प्रमाणन (MANDATORY)",
    cert_not_required: "स्वैच्छिक / अनिवार्य नहीं",
    placeholder: "अपने उत्पाद या मानक का वर्णन करें (उदा. इलेक्ट्रिक केतली, एलईडी लैंप, प्रेशर कुकर)...",
    ask_heading: "BIS भारतीय मानकों के बारे में पूछें",
    ask_subheading: "किसी भी उत्पाद या आवश्यकता का वर्णन करें। AI तुरंत लागू मानकों, परीक्षण प्रक्रियाओं और अनुपालन चेकलिस्ट की पहचान करेगा।",
    new_chat: "नई चैट",
    no_chats: "कोई पिछली चैट नहीं",
    start_convo: "शुरू करने के लिए एक नई बातचीत प्रारंभ करें!",
    copy: "कॉपी करें",
    copied: "कॉपी हो गया!",
    view_source: "आधिकारिक स्रोत देखें",
    sih_badge: "SIH 2026 — स्मार्ट इंडिया हैकथॉन",
    hero_title: "BIS इंटेलिजेंट असिस्टेंट",
    hero_subtitle: "भारतीय मानकों और BIS प्रमाणन के लिए AI-संचालित मार्गदर्शक",
    hero_description: "सरल बातचीत के माध्यम से BIS मानकों, ISI मार्क प्रमाणन, CRS योजना, प्रयोगशाला परीक्षण प्रक्रियाओं और अनुपालन आवश्यकताओं को समझें।",
    get_started: "अभी शुरू करें",
    why_bis: "BIS इंटेलिजेंट असिस्टेंट क्यों?",
    how_it_works: "यह कैसे काम करता है"
  },
  mr: {
    product_identified: "🔍 ओळखलेले मानक",
    applicable_standard: "📋 लागू BIS मानक",
    certification: "✅ प्रमाणन आवश्यकता",
    testing_requirements: "🧪 आवश्यक चाचणी प्रक्रिया",
    documents_required: "📄 आवश्यक कागदपत्रे",
    process: "📌 4-टप्प्यांची अर्ज प्रक्रिया",
    source: "📎 अधिकृत BIS संदर्भ",
    disclaimer: "⚠️ अस्वीकरण: हे अधिकृत भारतीय मानक ब्युरो (BIS) स्रोतांवर आधारित AI मार्गदर्शन आहे. उत्पादन किंवा आयात करण्यापूर्वी manakonline.in वर नियमांची पडताळणी करा.",
    compliance_checklist: "✅ परस्परसंवादी अनुपालन कृती योजना",
    step: "टप्पा",
    apply: "Manakonline वर ऑनलाइन अर्ज सादर करा",
    test: "BIS मान्यताप्राप्त प्रयोगशाळेत चाचणी",
    inspect: "कारखाना प्रत्यक्ष तपासणी व ऑडिट",
    license: "परवाना आणि ISI / CRS नोंदणी मिळवा",
    no_info: "मला या उत्पादनासाठी थेट BIS मानक सापडले नाही. कृपया उत्पादनाचे अधिक तपशीलवार वर्णन करा किंवा अधिकृत BIS पोर्टल bis.gov.in ला भेट द्या.",
    summary: "📌 संक्षिप्त सारांश आणि कायदेशीर स्थिती",
    cert_required: "अनिवार्य प्रमाणन (MANDATORY)",
    cert_not_required: "ऐच्छिक / अनिवार्य नाही",
    placeholder: "आपल्या उत्पादनाचे किंवा मानकांचे वर्णन करा (उदा. इलेक्ट्रिक किटली, एलईडी दिवा, प्रेशर कुकर)...",
    ask_heading: "BIS भारतीय मानकांबद्दल विचारा",
    ask_subheading: "कोणत्याही उत्पादनाचे किंवा आवश्यकतेचे वर्णन करा. AI त्वरित लागू मानके, चाचणी पद्धती आणि अनुपालन चेकलिस्ट शोधून देईल.",
    new_chat: "नवीन संभाषण",
    no_chats: "कोणतेही मागील संभाषण नाही",
    start_convo: "सुरू करण्यासाठी नवीन संभाषण सुरू करा!",
    copy: "माहिती कॉपी करा",
    copied: "कॉपी केले!",
    view_source: "अधिकृत स्रोत पहा",
    sih_badge: "SIH 2026 — स्मार्ट इंडिया हॅकाथॉन",
    hero_title: "BIS इंटेलिजंट असिस्टंट",
    hero_subtitle: "भारतीय मानके आणि BIS प्रमाणपत्रासाठी AI-मार्गदर्शक",
    hero_description: "साध्या संभाषणातून BIS मानके, ISI मार्क प्रमाणपत्र, CRS योजना, प्रयोगशाळा चाचणी पद्धती आणि नियमांची माहिती मिळवा.",
    get_started: "आता सुरुवात करा",
    why_bis: "BIS इंटेलिजंट असिस्टंट का वापरावे?",
    how_it_works: "हे कसे कार्य करते"
  }
};

export const QUICK_PROMPTS = [
  {
    icon: "Plug",
    title: "Electric Kettle",
    query: "I want to manufacture an electric kettle in India. What BIS requirements and standards do I need to follow?",
    standard: "IS 302-2-15"
  },
  {
    icon: "Utensils",
    title: "Pressure Cooker",
    query: "What are the mandatory BIS standards, testing procedures, and documents needed for domestic pressure cookers?",
    standard: "IS 2347"
  },
  {
    icon: "Lightbulb",
    title: "LED Lamps & Bulbs",
    query: "I want to import or manufacture LED lamps. What BIS CRS certification and test reports are required?",
    standard: "IS 16102"
  },
  {
    icon: "Gamepad2",
    title: "Children's Toys",
    query: "What BIS ISI mark safety standards apply for manufacturing children's toys in India?",
    standard: "IS 9873"
  },
  {
    icon: "Pipette",
    title: "Packaged Water",
    query: "What BIS standards and in-house laboratory setup are mandatory for setting up a packaged drinking water plant?",
    standard: "IS 14543"
  },
  {
    icon: "HardHat",
    title: "Rider Helmets",
    query: "What BIS IS 4151 testing requirements apply for two-wheeler protective helmets?",
    standard: "IS 4151"
  },
  {
    icon: "Building2",
    title: "Steel Pipes & Tubes",
    query: "I want to manufacture steel pipes for structural purposes. What BIS requirements apply?",
    standard: "IS 1161"
  },
  {
    icon: "Sun",
    title: "Solar PV Modules",
    query: "What BIS CRS registration and test parameters are required for solar photovoltaic modules?",
    standard: "IS 14286"
  }
];
