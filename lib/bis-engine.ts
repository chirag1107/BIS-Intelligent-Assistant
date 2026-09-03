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

export function generateBotResponse(query: string, lang: Language = "en"): BotSearchResult {
  const match = findBestStandard(query);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  if (!match) {
    return {
      text: t.no_info,
      sources: {
        title: "BIS Official Website (bis.gov.in)",
        url: "https://bis.gov.in"
      },
      checklist: null,
      standardData: null
    };
  }

  const checklist = [
    { id: "step-1", text: `${t.step} 1: ${t.apply}`, completed: false },
    { id: "step-2", text: `${t.step} 2: ${t.test}`, completed: false },
    { id: "step-3", text: `${t.step} 3: ${t.inspect}`, completed: false },
    { id: "step-4", text: `${t.step} 4: ${t.license}`, completed: false }
  ];

  return {
    text: match.summary,
    sources: {
      title: match.source,
      url: match.source_url
    },
    checklist,
    standardData: match
  };
}
