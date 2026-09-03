import { BISStandard, Language } from "@/types";
import { BIS_KNOWLEDGE, TRANSLATIONS } from "./bis-data";

export interface BotSearchResult {
  text: string;
  sources: { title: string; url: string } | null;
  checklist: Array<{ id: string; text: string; completed: boolean }> | null;
  standardData: BISStandard | null;
}

export function findBestStandard(query: string): BISStandard | null {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return null;

  // 1. Direct standard number check (e.g. "IS 302", "302", "IS 2347", "16102")
  for (const key of Object.keys(BIS_KNOWLEDGE)) {
    const item = BIS_KNOWLEDGE[key];
    const stdDigits = item.standard.replace(/[^0-9]/g, "");
    const queryDigits = cleanQuery.replace(/[^0-9]/g, "");
    if (queryDigits && stdDigits && queryDigits.length >= 3 && stdDigits.includes(queryDigits)) {
      return item;
    }
  }

  // 2. Exact match in keywords or name
  for (const key of Object.keys(BIS_KNOWLEDGE)) {
    const item = BIS_KNOWLEDGE[key];
    if (cleanQuery.includes(key.toLowerCase()) || cleanQuery.includes(item.name.toLowerCase())) {
      return item;
    }
    for (const kw of item.keywords) {
      if (cleanQuery.includes(kw.toLowerCase())) {
        return item;
      }
    }
  }

  // 3. Multi-word partial matching
  for (const key of Object.keys(BIS_KNOWLEDGE)) {
    const item = BIS_KNOWLEDGE[key];
    const words = key.split(" ");
    for (const word of words) {
      if (word.length >= 4 && cleanQuery.includes(word.toLowerCase())) {
        return item;
      }
    }
  }

  // 4. Hindi & Marathi transliteration keyword matching
  const indicAliases: Record<string, string> = {
    "केतली": "electric kettle",
    "कैटल": "electric kettle",
    "किटली": "electric kettle",
    "कुकर": "pressure cooker",
    "कुकर्स": "pressure cooker",
    "दिवा": "led lamp",
    "बल्ब": "led lamp",
    "लाइट": "led lamp",
    "खेळणी": "children toys",
    "खिलौने": "children toys",
    "खिलौना": "children toys",
    "पाईप": "steel pipe",
    "पाइप": "steel pipe",
    "सौर": "solar panel",
    "सोलर": "solar panel",
    "पाणी": "packaged drinking water",
    "पानी": "packaged drinking water",
    "हेल्मेट": "helmet",
    "हेलमेट": "helmet"
  };

  for (const [alias, mappedKey] of Object.entries(indicAliases)) {
    if (cleanQuery.includes(alias)) {
      return BIS_KNOWLEDGE[mappedKey] || null;
    }
  }

  return null;
}

export function isBisRelated(query: string): boolean {
  const clean = query.toLowerCase().trim();
  if (!clean) return false;

  // 1. Check if it matches any standard in knowledge base
  if (findBestStandard(query)) return true;

  // 2. BIS core regulatory & certification terminology
  const bisKeywords = [
    "bis",
    "isi",
    "crs",
    "qco",
    "standard",
    "standards",
    "is:",
    "is ",
    "is-",
    "manak",
    "manakonline",
    "hallmark",
    "hallmarking",
    "fmcs",
    "certification",
    "certify",
    "certified",
    "licence",
    "license",
    "laboratory",
    "lab test",
    "testing",
    "test report",
    "compliance",
    "inspection",
    "factory audit",
    "scheme",
    "quality control",
    "statutory",
    "conformity",
    "bureau of indian standards",
    "cm/l",
    "form-v",
    "sit",
    "qcm",
    "dpiit",
    "quality order",
    "nabl",
    "mark",
    "product safety",
    // Hindi & Marathi keywords
    "मानक",
    "भारतीय मानक",
    "प्रमाणन",
    "लाइसेंस",
    "परिक्षण",
    "प्रयोगशाळा",
    "चाचणी",
    "हॉलमार्क",
    "गुणवत्ता",
    "नियमावली",
    "कायदेशीर",
  ];

  for (const kw of bisKeywords) {
    if (clean.includes(kw)) return true;
  }

  // 3. Known industrial products & manufacturing sectors regulated by BIS
  const productKeywords = [
    "kettle",
    "cooker",
    "lamp",
    "bulb",
    "led",
    "toy",
    "toys",
    "helmet",
    "water",
    "pipe",
    "pipes",
    "steel",
    "cement",
    "cable",
    "cables",
    "wire",
    "wires",
    "solar",
    "photovoltaic",
    "battery",
    "batteries",
    "charger",
    "refrigerator",
    "fridge",
    "ac",
    "air conditioner",
    "heater",
    "geyser",
    "iron",
    "press",
    "plywood",
    "glass",
    "shoe",
    "shoes",
    "footwear",
    "extinguisher",
    "cylinder",
    "lpg",
    "gold",
    "jewellery",
    "silver",
    "food",
    "oil",
    "sanitizer",
    "mask",
    "plug",
    "socket",
    "switch",
    "appliance",
    "appliances",
    "motor",
    "pump",
    "leather",
    "textile",
    "cotton",
    "plastic",
    "electronics",
    "electrical",
    "chemical",
    "fertilizer",
    "medical",
    "transformer",
    "pressure vessel",
    "manufacture",
    "manufacturing",
    "manufacturer",
    "importer",
    "importing",
    "export to india",
  ];

  for (const prod of productKeywords) {
    if (clean.includes(prod)) return true;
  }

  return false;
}

export function generateBotResponse(query: string, lang: Language = "en"): BotSearchResult {
  const clean = query.trim();

  // 1. Strict Filter: If query is NOT related to BIS, return polite out-of-scope notification
  if (!isBisRelated(clean)) {
    let outOfScopeMessage = "";
    if (lang === "hi") {
      outOfScopeMessage = `⚠️ **(I think this question is not related to BIS / मुझे लगता है कि यह प्रश्न BIS से संबंधित नहीं है)**

मैं विशेष रूप से **भारतीय मानक ब्यूरो (Bureau of Indian Standards - BIS)**, भारतीय मानकों (IS), ISI मार्क प्रमाणन, CRS योजना, प्रयोगशाला परीक्षण protocols और वैधानिक गुणवत्ता नियंत्रण आदेशों (QCO) के लिए तैयार किया गया AI सहायक हूँ।

💡 **कृपया BIS या भारतीय मानकों से संबंधित प्रश्न पूछें**, जैसे:
• *"इलेक्ट्रिक केतली के लिए कौन सा BIS मानक लागू होता है?"*
• *"प्रेशर कुकर के लिए अनिवार्य ISI मार्क की आवश्यकताएं क्या हैं?"*
• *"LED लैंप के लिए CRS प्रमाणन कैसे प्राप्त करें?"*
• *"खिलौनों के लिए BIS परीक्षण प्रक्रिया क्या है?"*`;
    } else if (lang === "mr") {
      outOfScopeMessage = `⚠️ **(I think this question is not related to BIS / मला वाटते की हा प्रश्न BIS शी संबंधित नाही)**

मी विशेषतः **भारतीय मानक ब्युरो (Bureau of Indian Standards - BIS)**, भारतीय मानके (IS), ISI मार्क प्रमाणपत्र, CRS नोंदणी, प्रयोगशाळा चाचणी आणि वैधानिक नियमांच्या सल्ल्यासाठी तयार केलेला AI सहाय्यक आहे.

💡 **कृपया BIS किंवा भारतीय मानकांशी संबंधित प्रश्न विचारा**, उदा:
• *"इलेक्ट्रिक किटलीसाठी कोणते भारतीय मानक (IS) लागू आहे?"*
• *"प्रेशर कुकरसाठी ISI मार्क कसा मिळवायचा?"*
• *"LED दिव्यांसाठी CRS प्रमाणपत्र कसे घ्यावे?"*
• *"मुलांच्या खेळण्यांसाठी BIS चाचणी प्रक्रिया काय आहे?"*`;
    } else {
      outOfScopeMessage = `⚠️ **(I think this question is not related to BIS)**

I am an AI regulatory assistant specifically engineered for the **Bureau of Indian Standards (BIS)**, Indian Standards (IS), ISI Mark certification, Compulsory Registration Scheme (CRS), laboratory testing protocols, and statutory Quality Control Orders (QCO).

💡 **Please ask a question related to Indian Standards or BIS compliance**, such as:
• *"What BIS standard applies to manufacturing electric kettles in India?"*
• *"What are the mandatory testing and documentation requirements for domestic pressure cookers?"*
• *"How do I register LED lamps under the Compulsory Registration Scheme (CRS)?"*
• *"What safety tests are mandatory for children's toys under IS 9873?"*`;
    }

    return {
      text: outOfScopeMessage,
      sources: null,
      checklist: null,
      standardData: null,
    };
  }

  // 2. Query IS related to BIS: Provide high-detail breakdown ("detailing me dena chahiye")
  const match = findBestStandard(query);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (match) {
    let detailedText = "";

    if (lang === "hi") {
      detailedText = `📌 **पहचाना गया भारतीय मानक एवं आधिकारिक दायरा**:
• **उत्पाद**: ${match.name}
• **लागू भारतीय मानक**: **${match.standard}**
• **मानक का पूर्ण शीर्षक**: ${match.standard_full}
• **उद्योग श्रेणी**: ${match.category}

⚖️ **वैधानिक कानूनी स्थिति और प्रमाणन योजना**:
• **प्रमाणन योजना**: **${match.scheme}**
• **कानूनी अनिवार्यता**: **अनिवार्य प्रमाणन (MANDATORY)** - वाणिज्य एवं उद्योग मंत्रालय द्वारा जारी गुणवत्ता नियंत्रण आदेश (QCO) के तहत भारत में इसका निर्माण, आयात या विक्रय बिना वैध BIS लाइसेंस (ISI / CRS मार्क) के कानूनन अपराध है (BIS अधिनियम, 2016 के तहत दंडनीय)।

🧪 **अनिवार्य प्रयोगशाला परीक्षण प्रक्रियाएं (Laboratory Tests)**:
${match.testing.map((item) => "• " + item).join("\n")}

📄 **फैक्ट्री ऑडिट और अनिवार्य दस्तावेज़ (Audit Documentation)**:
${match.documents.map((item) => "• " + item).join("\n")}

🚀 **मानकऑनलाइन (Manakonline) 4-चरणीय आवेदन रोडमैप**:
${match.process}

📎 **सत्यापन संदर्भ**: ${match.source} (${match.source_url})`;
    } else if (lang === "mr") {
      detailedText = `📌 **ओळखलेले भारतीय मानक आणि अधिकृत व्याप्ती**:
• **उत्पादन**: ${match.name}
• **लागू भारतीय मानक**: **${match.standard}**
• **मानकाचे पूर्ण शीर्षक**: ${match.standard_full}
• **उद्योग वर्गवारी**: ${match.category}

⚖️ **कायदेशीर स्थिती आणि प्रमाणपत्र योजना**:
• **प्रमाणपत्र योजना**: **${match.scheme}**
• **कायदेशीर अनिवार्यता**: **अनिवार्य प्रमाणपत्र (MANDATORY)** - गुणवत्ता नियंत्रण आदेश (QCO) अंतर्गत वैध BIS परवान्याशिवाय भारतात हे उत्पादन तयार करणे, आयात करणे किंवा विकणे गुन्हा आहे (BIS कायदा, 2016).

🧪 **अनिवार्य प्रयोगशाळा चाचण्या (Laboratory Tests)**:
${match.testing.map((item) => "• " + item).join("\n")}

📄 **फॅक्टरी ऑडिट आणि आवश्यक कागदपत्रे (Audit Documentation)**:
${match.documents.map((item) => "• " + item).join("\n")}

🚀 **मानकऑनलाइन (Manakonline) ४-टप्प्यांची परवाना प्रक्रिया**:
${match.process}

📎 **अधिकृत संदर्भ**: ${match.source} (${match.source_url})`;
    } else {
      detailedText = `📌 **Identified Indian Standard & Statutory Scope**:
• **Product Name**: ${match.name}
• **Governing Indian Standard**: **${match.standard}**
• **Official Specification**: ${match.standard_full}
• **Industrial Category**: ${match.category}

⚖️ **Statutory Legal Status & Certification Scheme**:
• **Certification Scheme**: **${match.scheme}**
• **Statutory Mandate**: **LEGAL MANDATORY CERTIFICATION** under Quality Control Orders (QCO) issued by the Ministry of Commerce & Industry / DPIIT. Manufacturing, importing, distributing, or selling this product without a valid BIS license (CM/L or CRS registration number) is a cognizable legal offense under the BIS Act, 2016.

🧪 **Mandatory Laboratory Testing Protocols**:
${match.testing.map((item) => "• " + item).join("\n")}

📄 **Mandatory Audit Documentation Required for BIS Inspection**:
${match.documents.map((item) => "• " + item).join("\n")}

🚀 **4-Step Manakonline Licensing Roadmap**:
${match.process}

📎 **Official Verification Source**: ${match.source} (${match.source_url})`;
    }

    const checklist = [
      { id: "step-1", text: `${t.step} 1: ${t.apply}`, completed: false },
      { id: "step-2", text: `${t.step} 2: ${t.test}`, completed: false },
      { id: "step-3", text: `${t.step} 3: ${t.inspect}`, completed: false },
      { id: "step-4", text: `${t.step} 4: ${t.license}`, completed: false },
    ];

    return {
      text: detailedText,
      sources: {
        title: match.source,
        url: match.source_url,
      },
      checklist,
      standardData: match,
    };
  }

  // 3. BIS-related general inquiry (e.g., "What is BIS?", "How to get ISI mark?", "What is QCO?")
  const generalText =
    lang === "hi"
      ? `📌 **भारतीय मानक ब्यूरो (BIS) मार्गदर्शिका**:

भारतीय मानक ब्यूरो (BIS) भारत का राष्ट्रीय मानक निकाय है जो BIS अधिनियम, 2016 के तहत संचालित होता है।

🏛️ **प्रमुख प्रमाणन योजनाएं (Certification Schemes)**:
1. **Scheme-I (ISI Mark)**: घरेलू निर्माताओं और विदेशी निर्माताओं (FMCS) के लिए गुणवत्ता और सुरक्षा का सबसे प्रतिष्ठित मानक।
2. **Scheme-II (CRS - Compulsory Registration Scheme)**: इलेक्ट्रॉनिक और सूचना प्रौद्योगिकी उत्पादों (LED, मोबाइल, लैपटॉप, टीवी) के लिए स्व-घोषणा आधारित अनिवार्य योजना।
3. **Scheme-IV (हॉलमार्किंग)**: सोने और चांदी के आभूषणों के लिए अनिवार्य शुद्धता प्रमाणन।

📋 **गुणवत्ता नियंत्रण आदेश (QCOs)**:
केंद्र सरकार विभिन्न मंत्रालयों के माध्यम से QCO जारी करती है जिसके तहत अधिसूचित उत्पादों के लिए BIS प्रमाणन कानूनी रूप से अनिवार्य हो जाता है।

🌐 **ऑनलाइन आवेदन पोर्टल**:
सभी नए आवेदन, नवीनीकरण और लैब टेस्ट रिपोर्ट **मानकऑनलाइन (manakonline.in)** पोर्टल के माध्यम से डिजिटल रूप से संसाधित किए जाते हैं।`
      : lang === "mr"
      ? `📌 **भारतीय मानक ब्युरो (BIS) माहिती व मार्गदर्शिका**:

भारतीय मानक ब्युरो (BIS) ही भारत सरकारची राष्ट्रीय मानकीकरण संस्था आहे जी BIS कायदा, २०१६ अंतर्गत कार्य करते.

🏛️ **प्रमुख प्रमाणपत्र योजना (Certification Schemes)**:
१. **Scheme-I (ISI Mark)**: स्थानिक आणि परदेशी उत्पादकांसाठी (FMCS) उच्च गुणवत्ता आणि सुरक्षेचा अधिकृत ISI मार्क.
२. **Scheme-II (CRS)**: इलेक्ट्रॉनिक्स आणि आयटी उत्पादनांसाठी (LED दिवे, लॅपटॉप, मोबाईल) अनिवार्य नोंदणी योजना.
३. **Scheme-IV (हॉलमार्किंग)**: सोन्या-चांदीच्या दागिन्यांसाठी शुद्धता प्रमाणपत्र.

📋 **गुणवत्ता नियंत्रण आदेश (QCOs)**:
भारत सरकार QCO द्वारे अनेक उत्पादनांसाठी BIS प्रमाणपत्र अनिवार्य करते.

🌐 **अधिकृत पोर्टल**:
सर्व अर्ज आणि नमुने तपासणी **मानकऑनलाइन (manakonline.in)** पोर्टलद्वारे केली जाते.`
      : `📌 **Bureau of Indian Standards (BIS) Comprehensive Guidance**:

The Bureau of Indian Standards (BIS) is the National Standards Body of India established under the **BIS Act, 2016**, responsible for the harmonious development of standardization, marking, and quality certification of goods.

🏛️ **Primary BIS Conformity Schemes**:
1. **Scheme-I (ISI Mark)**: For domestic manufacturers and Foreign Manufacturers Certification Scheme (FMCS). Involves factory inspection audits, laboratory type-testing, and grant of CM/L license number.
2. **Scheme-II (Compulsory Registration Scheme - CRS)**: Governs electronics, IT, and solar goods (LEDs, laptops, adapters, smartphones). Requires safety testing at BIS-recognized labs followed by self-declaration of conformity.
3. **Scheme-IV (Hallmarking)**: Mandatory certification of gold and silver jewelry with unique 6-digit HUID (Hallmark Unique Identification).

⚖️ **Quality Control Orders (QCOs)**:
The Ministry of Commerce and Industry / DPIIT issues statutory QCOs that make BIS certification mandatory. Manufacturing or selling non-certified goods carries severe legal penalties.

🌐 **Official Licensing Portal**:
Manufacturers apply online via **Manakonline (manakonline.in)** with complete Form-V submissions and NABL/BIS lab test reports.`;

  return {
    text: generalText,
    sources: {
      title: "BIS Official Portal (manakonline.in)",
      url: "https://www.manakonline.in",
    },
    checklist: [
      { id: "gen-1", text: "Identify applicable Indian Standard (IS Code)", completed: false },
      { id: "gen-2", text: "Review relevant Quality Control Order (QCO) mandate", completed: false },
      { id: "gen-3", text: "Submit digital application on Manakonline portal", completed: false },
      { id: "gen-4", text: "Complete testing & obtain BIS CM/L License Number", completed: false },
    ],
    standardData: null,
  };
}

