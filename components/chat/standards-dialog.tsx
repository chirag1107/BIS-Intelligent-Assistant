"use client";

import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  BookOpen,
  Plug,
  Utensils,
  Lightbulb,
  Gamepad2,
  HardHat,
  Pipette,
  Building2,
  Sun,
  ShieldCheck,
  ArrowRight,
  X,
} from "lucide-react";

interface StandardsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectPrompt: (query: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Plug,
  Utensils,
  Lightbulb,
  Gamepad2,
  HardHat,
  Pipette,
  Building2,
  Sun,
};

const CATEGORIES = [
  "All",
  "Household Electrical",
  "Kitchen Utensils",
  "Electronics & CRS",
  "Toys & Child Safety",
  "Automotive & Safety",
  "Food & Water",
  "Metals & Energy",
];

const EXTENDED_STANDARDS = [
  {
    id: "electric-kettle",
    title: "Electric Kettle",
    standard: "IS 302-2-15",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    category: "Household Electrical",
    icon: "Plug",
    color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800",
    description: "High-voltage surge insulation, earthing continuity, and dry-boil thermal safety tests.",
    query: "I want to manufacture an electric kettle in India. What BIS requirements and standards do I need to follow?",
  },
  {
    id: "pressure-cooker",
    title: "Pressure Cooker",
    standard: "IS 2347",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    category: "Kitchen Utensils",
    icon: "Utensils",
    color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
    description: "Hydrostatic proof pressure resistance, safety valve relief, and gasket safety release.",
    query: "What are the mandatory BIS standards, testing procedures, and documents needed for domestic pressure cookers?",
  },
  {
    id: "led-lamp",
    title: "LED Lamps & Luminaires",
    standard: "IS 16102",
    scheme: "Scheme-II (CRS)",
    mandatory: true,
    category: "Electronics & CRS",
    icon: "Lightbulb",
    color: "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800",
    description: "Photometric efficacy, lumen maintenance, EMC limits, and Self-Declaration of Conformity.",
    query: "I want to import or manufacture LED lamps. What BIS CRS certification and test reports are required?",
  },
  {
    id: "children-toys",
    title: "Children's Toys",
    standard: "IS 9873 / IS 15644",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    category: "Toys & Child Safety",
    icon: "Gamepad2",
    color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800",
    description: "Physical sharp edges, drop impact test, flammability, and zero toxic heavy metal migration.",
    query: "What BIS ISI mark safety standards apply for manufacturing children's toys in India?",
  },
  {
    id: "helmet",
    title: "Two-Wheeler Safety Helmets",
    standard: "IS 4151",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    category: "Automotive & Safety",
    icon: "HardHat",
    color: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800",
    description: "Drop anvil impact absorption, chin strap retention strength, and optical visor clarity.",
    query: "What BIS IS 4151 testing requirements apply for two-wheeler protective helmets?",
  },
  {
    id: "packaged-water",
    title: "Packaged Drinking Water",
    standard: "IS 14543 / IS 13428",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    category: "Food & Water",
    icon: "Pipette",
    color: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800",
    description: "Microbiological examination, pesticide residue screening, and in-house laboratory setup.",
    query: "What BIS standards and in-house laboratory setup are mandatory for setting up a packaged drinking water plant?",
  },
  {
    id: "steel-pipe",
    title: "Steel Pipes & Tubes",
    standard: "IS 1161 / IS 1239",
    scheme: "Scheme-I (ISI Mark)",
    mandatory: true,
    category: "Metals & Energy",
    icon: "Building2",
    color: "text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700",
    description: "Tensile structural strength, hydrostatic pressure leak test, and galvanizing coating mass.",
    query: "I want to manufacture steel pipes for structural purposes. What BIS requirements apply?",
  },
  {
    id: "solar-pv",
    title: "Solar PV Modules",
    standard: "IS 14286",
    scheme: "Scheme-II (CRS)",
    mandatory: true,
    category: "Metals & Energy",
    icon: "Sun",
    color: "text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
    description: "Photovoltaic thermal cycling, damp heat endurance, and electrical insulation resistance.",
    query: "What BIS CRS registration and test parameters are required for solar photovoltaic modules?",
  },
];

export function StandardsDialog({
  open,
  onOpenChange,
  onSelectPrompt,
}: StandardsDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStandards = useMemo(() => {
    return EXTENDED_STANDARDS.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.standard.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSelect = (query: string) => {
    onSelectPrompt(query);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[92vw] h-[82vh] max-h-[680px] p-0 !gap-0 !flex !flex-col overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-2xl sm:rounded-3xl z-50">
        {/* Header with Search & Filters */}
        <div className="px-5 sm:px-7 pt-5 pb-3.5 bg-gradient-to-b from-blue-50/70 via-slate-50/40 to-transparent dark:from-slate-800/60 dark:to-transparent border-b border-slate-200/80 dark:border-slate-800 flex-shrink-0">
          <DialogHeader className="space-y-1">
            <div className="flex items-center gap-3 pr-8">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-bis-navy via-[#1e4480] to-blue-700 text-white flex items-center justify-center shadow-md shadow-bis-navy/20 flex-shrink-0">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-bis-saffron" />
              </div>
              <div className="min-w-0">
                <DialogTitle className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="truncate">Indian Standards Directory & Inquiries</span>
                  <Badge variant="outline" className="text-[10px] font-bold text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 flex-shrink-0 hidden sm:inline-flex">
                    500+ Standards
                  </Badge>
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  Search products or click any standard below to launch an instant AI compliance analysis
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Prominent Search Bar (Well-Proportioned & High-Contrast) */}
          <div className="mt-3.5 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product (e.g. Electric Kettle, Pressure Cooker) or IS Code (e.g. IS 2347)..."
              className="w-full h-10 pl-10 pr-9 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-950/50 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Smooth Scrollable) */}
          <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-bis-navy dark:bg-blue-600 text-white shadow-xs"
                    : "bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Standards Grid with dedicated scroll area */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 pb-12">
          {filteredStandards.length === 0 ? (
            <div className="py-14 text-center text-slate-400">
              <Search className="w-9 h-9 mx-auto mb-3 opacity-40 text-slate-400" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                No matching Indian Standards found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for &quot;kettle&quot;, &quot;cooker&quot;, &quot;lamp&quot;, &quot;toys&quot;, or &quot;helmet&quot;.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {filteredStandards.map((item) => {
                const Icon = ICON_MAP[item.icon] || Plug;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelect(item.query)}
                    className="group relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200/80 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-left flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.color}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider block">
                              {item.category}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-bis-navy dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h4>
                          </div>
                        </div>

                        <Badge
                          variant="outline"
                          className="font-mono text-[10px] font-bold border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {item.standard}
                        </Badge>
                      </div>

                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/90 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{item.scheme}</span>
                      </span>

                      <span className="font-bold text-xs text-bis-navy dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Analyze</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
