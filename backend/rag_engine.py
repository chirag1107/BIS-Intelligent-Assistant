import os
import json
from typing import Dict, Any, List, Optional
from dotenv import load_dotenv
import chromadb
from llama_index.core import Document, VectorStoreIndex, StorageContext, Settings
from llama_index.vector_stores.chroma import ChromaVectorStore
import google.generativeai as genai

load_dotenv()

import sys
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# Complete BIS Standards Knowledge Corpus for ChromaDB Vector Indexing
STANDARDS_CORPUS = [
    {
        "id": "electric-kettle",
        "name": "Electric Kettle",
        "standard": "IS 302-2-15",
        "standard_full": "IS 302-2-15 (Part 2): Safety of household electrical appliances — Heating liquids",
        "scheme": "Scheme-I (ISI Mark)",
        "mandatory": True,
        "category": "Household Electrical",
        "content": """Bureau of Indian Standards: Electric Kettle Safety (IS 302-2-15).
Applicable Standard: IS 302-2-15 (Part 2): Safety of household and similar electrical appliances - Particular requirements for appliances for heating liquids.
Scheme: Scheme-I (ISI Mark) - MANDATORY under Quality Control Orders (QCO) issued by Ministry of Commerce and Industry.
Required Tests:
1. High Voltage Insulation Resistance Surge Test (verifies zero leakage current under surge voltage).
2. Leakage Current and Earthing Continuity Test (safeguards user during boiling and pouring).
3. Dry-Boil and Thermal Cutoff Protection Test (ensures kettle automatically powers down without water).
4. Temperature Rise and Heating Element Endurance Test (prevents casing melting and thermal fire hazard).
Documentation Required:
- Form-V complete test report from BIS recognized laboratory.
- Factory layout plan, manufacturing machinery list, and internal quality control inspection equipment.
- Quality Control Manual (QCM) and Scheme of Inspection and Testing (SIT) declaration.
- Authorized Indian Representative (AIR) proof for foreign manufacturers.
Application Roadmap:
1. Online application submission on Manakonline portal (manakonline.in).
2. Production sample sealing and dispatch to BIS recognized laboratory for full type testing.
3. On-site BIS inspection audit of factory premises and quality management system.
4. Grant of BIS License and issuance of CM/L number with ISI Mark authorization.
Official Source: https://www.bis.gov.in/certification/""",
        "testing": [
            "🔌 High Voltage Insulation Surge Test - verifies zero electrical leakage",
            "⚡ Leakage Current & Earthing Continuity Test - ensures touch safety while boiling",
            "🛡️ Dry-Boil & Thermal Cutoff Test - prevents severe overheating without water",
            "🌡️ Temperature Rise & Element Endurance Test - eliminates fire hazards"
        ],
        "documents": [
            "📋 Complete Form-V Test Report from BIS-approved testing laboratory",
            "🏭 Factory layout blueprint, manufacturing machinery & in-house lab setup",
            "📖 Quality Control Manual (QCM) and Scheme of Inspection and Testing (SIT)",
            "📄 Proof of Authorized Indian Representative (for foreign manufacturers)"
        ],
        "process": "1️⃣ Submit Form-V application on Manakonline → 2️⃣ Sample testing at BIS recognized lab → 3️⃣ Factory premises inspection audit → 4️⃣ Grant of ISI Mark License",
        "source": "BIS Official Portal — Household Electrical Standards",
        "source_url": "https://www.bis.gov.in/certification/"
    },
    {
        "id": "pressure-cooker",
        "name": "Pressure Cooker",
        "standard": "IS 2347",
        "standard_full": "IS 2347: Specification for domestic pressure cookers (Aluminum & Stainless Steel)",
        "scheme": "Scheme-I (ISI Mark)",
        "mandatory": True,
        "category": "Kitchenware & Domestic Utensils",
        "content": """Bureau of Indian Standards: Pressure Cookers (IS 2347).
Applicable Standard: IS 2347: Specification for domestic pressure cookers.
Scheme: Scheme-I (ISI Mark) - MANDATORY under Domestic Pressure Cooker (Quality Control) Order.
Required Tests:
1. Hydrostatic Proof Pressure Test (tests vessel body and lid integrity under extreme hydraulic pressure).
2. Safety Valve / Fusible Plug Relief Verification Test (verifies automatic pressure release upon vent pipe blockage).
3. Gasket Release Safety Mechanism (ensures controlled steam evacuation in emergency overpressure situations).
4. Handle Torque, Fitment, and Thermal Insulation Test (prevents handle detachment or user burns).
Documentation Required:
- Type testing test report from BIS recognized laboratory.
- Mill test certificates for raw material grade (food-grade Aluminum alloy or Stainless Steel 304).
- Quality Control Plan and calibrated pressure measurement gauges.
Application Roadmap:
1. Submit application on Manakonline portal under Scheme-I.
2. Independent laboratory testing of sample pressure cookers.
3. BIS inspector audit of stamping presses, safety valve assembly, and hydrostatic testing tanks.
4. Grant of ISI mark license (CM/L).
Official Source: https://www.bis.gov.in/certification/""",
        "testing": [
            "💪 Hydrostatic Proof Pressure Test - evaluates body and lid structural strength",
            "🛡️ Safety Valve / Fusible Plug Relief Test - verifies automatic steam discharge",
            "⚖️ Gasket Release Safety System Test - ensures controlled emergency pressure venting",
            "🔧 Handle Torque & Thermal Insulation Test - prevents handle breakages and burns"
        ],
        "documents": [
            "📋 Laboratory Type Testing Report from BIS recognized laboratory",
            "🏭 Factory manufacturing presses, machinery list & calibrated pressure gauges",
            "📖 Mill test certificates for food-grade Aluminum/SS alloy raw material"
        ],
        "process": "1️⃣ Online application on Manakonline → 2️⃣ Lab sample pressure testing → 3️⃣ Factory audit inspection → 4️⃣ Grant of ISI Mark license (CM/L)",
        "source": "BIS Official Portal — Kitchenware & Consumer Goods",
        "source_url": "https://www.bis.gov.in/certification/"
    },
    {
        "id": "led-lamp",
        "name": "LED Lamps & Luminaires",
        "standard": "IS 16102 (Part 1 & 2)",
        "standard_full": "IS 16102 (Part 1): Self-ballasted LED lamps for general lighting — Safety & Performance Requirements",
        "scheme": "Scheme-II (CRS - Compulsory Registration Scheme)",
        "mandatory": True,
        "category": "Electronics & IT Goods",
        "content": """Bureau of Indian Standards: Self-Ballasted LED Lamps (IS 16102).
Applicable Standard: IS 16102 (Part 1): Safety requirements & IS 16102 (Part 2): Performance requirements.
Scheme: Scheme-II (CRS - Compulsory Registration Scheme) - MANDATORY under MeitY / Ministry of Power regulations.
Required Tests:
1. Electrical Safety and Insulation Resistance Test (IS 16102-1).
2. Electromagnetic Compatibility (EMC) and Total Harmonic Distortion (THD) limits.
3. Photometric Efficacy, Lumen Maintenance, and Color Rendering Index (CRI) test.
4. Thermal endurance and moisture resistance testing.
Documentation Required:
- Valid test report from BIS recognized testing laboratory (issued within 90 days).
- Self-Declaration of Conformity (SDOC) signed by authorized executive.
- Critical Components List (CCL) with driver, LED chips, PCB, and thermal potting specs.
- Trademark Registration Certificate or Brand Authorization Letter.
Application Roadmap:
1. Send production samples to BIS recognized laboratory for testing.
2. Create manufacturer profile on BIS CRS portal (www.crsbis.in).
3. Upload test report and submit Self-Declaration of Conformity.
4. BIS review and grant of unique R-Number (R-XXXXXXXX) for product labeling.
Official Source: https://www.bis.gov.in/crs/""",
        "testing": [
            "🔌 Electrical Safety & Creepage Distance Test (IS 16102-1)",
            "📡 Electromagnetic Compatibility (EMC) & Harmonic Distortion Limit Test",
            "💡 Photometric Performance, Lumen Maintenance & CRI Evaluation",
            "🌡️ High Temperature Endurance & Moisture Resistance Chamber Test"
        ],
        "documents": [
            "📋 Valid Test Report from BIS-accredited testing laboratory (<90 days old)",
            "📝 Signed Self-Declaration of Conformity (SDOC) by CEO / Director",
            "📄 Critical Components List (CCL) including LED driver and chip specs",
            "🏢 Brand Owner Authorization Letter / Trademark Certificate"
        ],
        "process": "1️⃣ Sample testing at BIS accredited laboratory → 2️⃣ Profile creation & report submission on BIS CRS Portal → 3️⃣ Document scrutiny → 4️⃣ Registration Grant (R-Number)",
        "source": "BIS Compulsory Registration Scheme (CRS) Portal",
        "source_url": "https://www.bis.gov.in/crs/"
    },
    {
        "id": "children-toys",
        "name": "Children's Toys",
        "standard": "IS 9873 (Parts 1-9) & IS 15644",
        "standard_full": "IS 9873: Safety aspects of toys (Mechanical, Physical, Flammability, Heavy Elements)",
        "scheme": "Scheme-I (ISI Mark)",
        "mandatory": True,
        "category": "Toys & Child Safety",
        "content": """Bureau of Indian Standards: Safety of Toys (IS 9873 series).
Applicable Standard: IS 9873 (Part 1-9) for physical/chemical safety and IS 15644 for electric toys.
Scheme: Scheme-I (ISI Mark) - MANDATORY under Toys (Quality Control) Order. No uncertified toys can be sold or imported in India.
Required Tests:
1. Mechanical and Physical Hazards Test (sharp points, sharp edges, drop test, small parts choking hazard).
2. Flammability Testing (ensures fabric, plastic, and hair resist quick ignition and rapid flame spread).
3. Heavy Metal and Phthalate Migration Test (zero toxic migration of Lead, Cadmium, Arsenic, Mercury).
4. Electric Safety and Battery Testing for electronic toys under IS 15644.
Documentation Required:
- Comprehensive toy safety test report across all applicable IS 9873 parts.
- In-house laboratory with calibrated gauges (sharp point tester, drop test apparatus).
- Raw polymer and non-toxic dye certification sheets.
Official Source: https://www.bis.gov.in/toy-certification/""",
        "testing": [
            "🔧 Mechanical Hazards Test - sharp edges, drop impact, small parts choking test",
            "🔥 Flammability Test - verifies resistance to quick ignition and flame spread",
            "🧪 Heavy Metal Migration Test - enforces zero toxic Lead, Cadmium, Mercury migration",
            "⚡ Electrical Safety Verification (for battery and wired electric toys under IS 15644)"
        ],
        "documents": [
            "📋 Full IS 9873 Toy Safety Lab Test Report from recognized BIS lab",
            "🏭 Factory audit report with in-house physical inspection gauges and drop test jigs",
            "📄 Polymer non-toxicity certificates and Material Safety Data Sheets (MSDS)"
        ],
        "process": "1️⃣ Apply on Manakonline under Scheme-I → 2️⃣ Lab sample testing & toxicity screening → 3️⃣ Factory inspection by BIS officers → 4️⃣ License & ISI Mark grant",
        "source": "BIS Official Portal — Toy Safety Certification",
        "source_url": "https://www.bis.gov.in/toy-certification/"
    },
    {
        "id": "steel-pipe",
        "name": "Steel Pipes & Tubes",
        "standard": "IS 1161 / IS 1239",
        "standard_full": "IS 1161: Steel tubes for structural purposes & IS 1239: Mild steel tubes and fittings",
        "scheme": "Scheme-I (ISI Mark)",
        "mandatory": True,
        "category": "Metals & Structural Engineering",
        "content": """Bureau of Indian Standards: Steel Pipes (IS 1161 / IS 1239).
Applicable Standard: IS 1161 for structural tubes and IS 1239 for mild steel tubes, tubulars, and fittings.
Scheme: Scheme-I (ISI Mark) - MANDATORY under Steel and Steel Products (Quality Control) Order.
Required Tests:
1. Tensile Strength and Yield Stress Verification (evaluates maximum structural load capacity).
2. Hydrostatic Pressure Testing (ensures zero leakage under continuous high pressure).
3. Flattening, Flanging, and Bend Ductility Tests (verifies weld and metal malleability).
4. Dimensional Accuracy, Thickness Tolerance, and Galvanizing Coating Mass check.
Documentation Required:
- Chemical and mechanical analysis test reports from accredited testing lab.
- Rolling mill equipment, high-frequency welding setup, and galvanizing plant documentation.
- In-house Quality Assurance Plan (QAP) and spectrometer calibration certificates.
Official Source: https://www.bis.gov.in/certification/""",
        "testing": [
            "💪 Tensile Strength & Yield Stress Test - verifies structural load capacity",
            "💧 Hydrostatic Pressure Leak Test - ensures zero fluid seepage under pressure",
            "📏 Flattening, Flanging & Bend Test - evaluates metal ductility and weld seam",
            "📐 Dimensional Tolerance & Galvanized Zinc Coating Mass Check"
        ],
        "documents": [
            "📋 Chemical composition & mechanical properties test certificate from BIS lab",
            "🏭 Rolling mill machinery, welding line, and galvanizing bath documentation",
            "📖 Factory Quality Assurance Plan (QAP) and spectrometer calibration records"
        ],
        "process": "1️⃣ Application submission on Manakonline → 2️⃣ Testing of sample heats in BIS lab → 3️⃣ Mill audit & sample drawing → 4️⃣ License grant (CM/L)",
        "source": "BIS Official Portal — Steel & Metallurgy Standards",
        "source_url": "https://www.bis.gov.in/certification/"
    },
    {
        "id": "helmet",
        "name": "Two-Wheeler Safety Helmets",
        "standard": "IS 4151",
        "standard_full": "IS 4151: Protective helmets for riders of two-wheeled motor vehicles",
        "scheme": "Scheme-I (ISI Mark)",
        "mandatory": True,
        "category": "Automotive & Road Safety",
        "content": """Bureau of Indian Standards: Two-Wheeler Helmets (IS 4151).
Applicable Standard: IS 4151: Protective helmets for riders of two-wheeled motor vehicles.
Scheme: Scheme-I (ISI Mark) - MANDATORY under Road Transport and Highways QCO and Motor Vehicles Act.
Required Tests:
1. Impact Absorption Test (drop anvil test under high and low ambient temperatures).
2. Chin Strap Retention System Dynamic Strength & Slippage Test.
3. Visor Optical Clarity, Scratch Resistance, and Impact Shatter Test.
4. Rigidity Test and Peripheral Vision Angle Measurement.
Documentation Required:
- BIS accredited laboratory impact and retention test reports.
- EPS liner density verification, shell injection molding machinery specs.
- In-house impact drop test apparatus calibration records.
Official Source: https://www.bis.gov.in/certification/""",
        "testing": [
            "🔨 Impact Absorption Drop Anvil Test - verifies deceleration limits on head",
            "🪝 Retention System & Chin Strap Dynamic Load Strength Test",
            "👁️ Visor Optical Clarity, Scratch Resistance & Anti-Shatter Test",
            "🛡️ Shell Rigidity & Peripheral Vision Angle Assessment"
        ],
        "documents": [
            "📋 Laboratory impact and retention test report from BIS recognized lab",
            "🏭 Factory shell molding machinery, EPS liner molding, and strap stitching records",
            "📖 In-house drop testing equipment calibration verification certificate"
        ],
        "process": "1️⃣ Online application on Manakonline → 2️⃣ Impact & retention testing in lab → 3️⃣ Factory inspection by BIS officers → 4️⃣ Grant of ISI Mark license",
        "source": "BIS Transport Engineering Standards",
        "source_url": "https://www.bis.gov.in/certification/"
    },
    {
        "id": "packaged-drinking-water",
        "name": "Packaged Drinking Water",
        "standard": "IS 14543 / IS 13428",
        "standard_full": "IS 14543: Packaged Drinking Water (Other than Natural Mineral Water)",
        "scheme": "Scheme-I (ISI Mark)",
        "mandatory": True,
        "category": "Food & Beverage",
        "content": """Bureau of Indian Standards: Packaged Drinking Water (IS 14543).
Applicable Standard: IS 14543 for packaged drinking water and IS 13428 for natural mineral water.
Scheme: Scheme-I (ISI Mark) - MANDATORY under FSSAI and BIS Act. Bottling plants cannot operate without BIS license.
Required Tests:
1. Microbiological Safety Examination (absence of E.coli, Coliforms, Salmonella, Pseudomonas).
2. Chemical Contaminants and Heavy Metals (Arsenic, Lead, Fluoride, Nitrate, Pesticide residues).
3. Physical Parameters (TDS, pH, turbidity, electrical conductivity, clarity).
4. Packaging material overall migration and heavy metal extraction tests for PET bottles.
Documentation Required:
- Comprehensive water testing report from NABL/BIS accredited laboratory.
- In-house chemical and microbiological testing lab with qualified approved microbiologists and chemists.
- Source water borewell yield test report, FSSAI manufacturing license, State Pollution Control Board NOC.
Official Source: https://www.bis.gov.in/certification/""",
        "testing": [
            "🧪 Microbiological Examination - verifies complete absence of E.coli, Coliforms, pathogens",
            "🔬 Chemical Contaminants Test - verifies safe limits for Arsenic, Lead, Fluoride, Pesticides",
            "💧 Physical Clarity Check - TDS, pH balance, turbidity, and mineral balance",
            "📦 Packaging Material Migration Test - ensures food-grade non-leaching plastic/glass"
        ],
        "documents": [
            "📋 Complete water test report from BIS recognized testing laboratory",
            "🏭 In-house chemical & microbiological laboratory with qualified personnel",
            "📖 Ground water source NOC, FSSAI manufacturing license, Pollution Control NOC"
        ],
        "process": "1️⃣ Setup in-house lab & plant → 2️⃣ Online application on Manakonline → 3️⃣ Strict BIS inspection & sample testing → 4️⃣ Grant of ISI license",
        "source": "BIS Official Portal — Food & Agriculture Standards",
        "source_url": "https://www.bis.gov.in/certification/"
    }
]

class BISRAGEngine:
    def __init__(self):
        self.chroma_client = chromadb.Client()
        self.collection_name = "bis_standards_knowledge"
        self.collection = self.chroma_client.get_or_create_collection(
            name=self.collection_name,
            metadata={"description": "Bureau of Indian Standards Knowledge Base"}
        )
        self.gemini_api_key = os.getenv("GEMINI_API_KEY")
        self._initialize_vector_db()
        self._setup_gemini()

    def _initialize_vector_db(self):
        """Populates ChromaDB collection with BIS Standards corpus."""
        existing_count = self.collection.count()
        if existing_count == 0:
            ids = [item["id"] for item in STANDARDS_CORPUS]
            documents = [item["content"] for item in STANDARDS_CORPUS]
            metadatas = [
                {
                    "name": item["name"],
                    "standard": item["standard"],
                    "standard_full": item["standard_full"],
                    "scheme": item["scheme"],
                    "mandatory": item["mandatory"],
                    "category": item["category"],
                    "source_url": item["source_url"]
                }
                for item in STANDARDS_CORPUS
            ]
            self.collection.add(
                ids=ids,
                documents=documents,
                metadatas=metadatas
            )
            print(f"[OK] ChromaDB initialized with {len(ids)} BIS standards.")

    def _setup_gemini(self):
        """Initializes Google Gemini 1.5 Flash."""
        if self.gemini_api_key and self.gemini_api_key.strip():
            try:
                genai.configure(api_key=self.gemini_api_key)
                self.gemini_model = genai.GenerativeModel("gemini-1.5-flash")
                self.has_gemini = True
                print("[OK] Google Gemini 1.5 Flash initialized successfully.")
            except Exception as e:
                print(f"[WARN] Gemini initialization notice: {e}")
                self.has_gemini = False
        else:
            self.has_gemini = False
            print("[INFO] No GEMINI_API_KEY detected. Utilizing ChromaDB Vector Search & Embedded BIS Knowledge Engine.")

    def query(self, user_query: str, language: str = "en") -> Dict[str, Any]:
        """
        Executes vector retrieval over ChromaDB, and if available, synthesizes
        natural language response using Gemini 1.5 Flash.
        """
        results = self.collection.query(
            query_texts=[user_query],
            n_results=1
        )

        matched_data = None
        matched_id = None

        if results and results["ids"] and len(results["ids"][0]) > 0:
            matched_id = results["ids"][0][0]
            matched_data = next((item for item in STANDARDS_CORPUS if item["id"] == matched_id), None)

        if not matched_data:
            matched_data = STANDARDS_CORPUS[0]  # Fallback to electric kettle

        # Synthesize with Gemini 1.5 Flash if available
        ai_summary = None
        if self.has_gemini:
            try:
                prompt = f"""You are the official Bureau of Indian Standards (BIS) AI Assistant.
User Query: "{user_query}"
Language requested: {language} (en = English, hi = Hindi, mr = Marathi)
Context Standard Information:
Standard: {matched_data['standard']} ({matched_data['name']})
Full specification: {matched_data['standard_full']}
Scheme: {matched_data['scheme']}
Mandatory: {matched_data['mandatory']}
Required tests: {', '.join(matched_data['testing'])}
Required documents: {', '.join(matched_data['documents'])}
Process: {matched_data['process']}
Official URL: {matched_data['source_url']}

Respond with an authoritative, concise, and structured regulatory breakdown in the requested language ({language}).
Highlight:
1. Identified IS Standard & whether certification is legally MANDATORY under Indian Quality Control Orders (QCOs).
2. Required testing procedures.
3. Documentation and 4-step Manakonline licensing roadmap.
Keep tone professional, encouraging, and clear."""
                response = self.gemini_model.generate_content(prompt)
                if response and response.text:
                    ai_summary = response.text.strip()
            except Exception as ex:
                print(f"Gemini generation fallback: {ex}")

        # If Gemini is offline or not configured, provide localized structured answer
        if not ai_summary:
            if language == "hi":
                ai_summary = f"""📌 **मानक पहचान**: {matched_data['name']} के लिए भारतीय मानक **{matched_data['standard']}** लागू होता है।
✅ **कानूनी स्थिति**: यह {matched_data['scheme']} के अंतर्गत **अनिवार्य (MANDATORY)** है।
🧪 **आवश्यक परीक्षण**:
{chr(10).join(['• ' + t for t in matched_data['testing']])}

📄 **आवश्यक दस्तावेज़**:
{chr(10).join(['• ' + d for d in matched_data['documents']])}

📌 **आवेदन प्रक्रिया**: {matched_data['process']}"""
            elif language == "mr":
                ai_summary = f"""📌 **मानक ओळख**: {matched_data['name']} साठी भारतीय मानक **{matched_data['standard']}** लागू आहे.
✅ **कायदेशीर स्थिती**: हे {matched_data['scheme']} अंतर्गत **अनिवार्य (MANDATORY)** आहे.
🧪 **आवश्यक चाचण्या**:
{chr(10).join(['• ' + t for t in matched_data['testing']])}

📄 **आवश्यक कागदपत्रे**:
{chr(10).join(['• ' + d for d in matched_data['documents']])}

📌 **अर्ज प्रक्रिया**: {matched_data['process']}"""
            else:
                ai_summary = f"""📌 **Identified Standard**: Under Bureau of Indian Standards specifications, **{matched_data['name']}** is governed by **{matched_data['standard']}** ({matched_data['standard_full']}).

✅ **Statutory Status**: Certification under **{matched_data['scheme']}** is **LEGAL MANDATORY** by Indian law under Quality Control Orders (QCO).

🧪 **Mandatory Testing Schedule**:
{chr(10).join(['• ' + t for t in matched_data['testing']])}

📄 **Required Audit Documentation**:
{chr(10).join(['• ' + d for d in matched_data['documents']])}

📌 **4-Step Licensing Roadmap**:
{matched_data['process']}"""

        checklist = [
            {"id": "c1", "task": "Submit Form-V Application via Manakonline Portal", "completed": False},
            {"id": "c2", "task": "Complete Prescribed Lab Testing at BIS Recognized Laboratory", "completed": False},
            {"id": "c3", "task": "Undergo On-Site Factory Inspection & Quality Plan Audit", "completed": False},
            {"id": "c4", "task": "Obtain BIS License (CM/L) & Authorization to use ISI / CRS Mark", "completed": False}
        ]

        return {
            "text": ai_summary,
            "product_name": matched_data["name"],
            "standard": matched_data["standard"],
            "standard_full": matched_data["standard_full"],
            "scheme": matched_data["scheme"],
            "mandatory": matched_data["mandatory"],
            "category": matched_data["category"],
            "testing": matched_data["testing"],
            "documents": matched_data["documents"],
            "process": matched_data["process"],
            "sources": {
                "title": matched_data["source"],
                "url": matched_data["source_url"]
            },
            "checklist": checklist,
            "engine": "ChromaDB + LlamaIndex" + (" + Gemini 1.5 Flash" if self.has_gemini else "")
        }

# Global Singleton Instance
bis_rag_engine = BISRAGEngine()
