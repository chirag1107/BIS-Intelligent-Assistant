export type Language = "en" | "hi" | "mr";

export interface BISStandard {
  id: string;
  name: string;
  keywords: string[];
  standard: string;
  standard_full: string;
  scheme: string;
  mandatory: boolean;
  certification_status: string;
  certification_simple: string;
  summary: string;
  testing: string[];
  testing_simple: string;
  documents: string[];
  process: string;
  source: string;
  source_url: string;
  category?: string;
}

export interface ChatMessage {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: string;
  sources?: {
    title: string;
    url: string;
  } | null;
  checklist?: Array<{
    id: string;
    text: string;
    completed: boolean;
  }> | null;
  standardData?: BISStandard | null;
}

export interface ChatSession {
  id: string;
  title: string;
  preview: string;
  date: string;
  messages: ChatMessage[];
  createdAt: number;
}

export interface TranslationStrings {
  product_identified: string;
  applicable_standard: string;
  certification: string;
  testing_requirements: string;
  documents_required: string;
  process: string;
  source: string;
  disclaimer: string;
  compliance_checklist: string;
  step: string;
  apply: string;
  test: string;
  inspect: string;
  license: string;
  no_info: string;
  summary: string;
  cert_required: string;
  cert_not_required: string;
  placeholder: string;
  ask_heading: string;
  ask_subheading: string;
  new_chat: string;
  no_chats: string;
  start_convo: string;
  copy: string;
  copied: string;
  view_source: string;
  sih_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  get_started: string;
  why_bis: string;
  how_it_works: string;
}
