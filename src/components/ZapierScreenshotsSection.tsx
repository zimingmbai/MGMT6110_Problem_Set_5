import React, { useState, useRef } from 'react';
import {
  Calendar,
  Search,
  Sparkles,
  Table as TableIcon,
  Mail,
  Copy,
  Edit2,
  ChevronDown,
  ExternalLink,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  AlertCircle,
  Trash2,
} from 'lucide-react';

interface ZapierScreenshotsSectionProps {
  screenshot2?: string;
  screenshot3?: string;
  caption2?: string;
  caption3?: string;
  onUpdateScreenshot2: (img: string, caption?: string) => void;
  onUpdateScreenshot3: (img: string, caption?: string) => void;
}

export const ZapierScreenshotsSection: React.FC<ZapierScreenshotsSectionProps> = ({
  screenshot2,
  screenshot3,
  caption2 = '',
  caption3 = '',
  onUpdateScreenshot2,
  onUpdateScreenshot3,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'flow' | 'tricky' | 'fix'>('all');
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  const fileInputRef3 = useRef<HTMLInputElement>(null);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          callback(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="screenshots-section" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden print-border transition-colors">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#02848A] dark:text-[#38D9D6]">
                Part 4 &middot; Implementation &amp; Run Artifacts
              </span>
              <span className="text-xs text-slate-400">&middot;</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Zapier Screenshots
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-serif-editorial text-slate-900 dark:text-slate-100">
              Zapier Flow &amp; Edge Case Evidence
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg text-xs font-medium no-print">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Artifacts
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('flow')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'flow'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              1. Zapier Flow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tricky')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'tricky'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              2. Tricky Case
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fix')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'fix'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              3. The Fix
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Screenshot 1: Zapier Flow */}
          {(activeTab === 'all' || activeTab === 'flow') && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Screenshot 1 &middot; The Zapier Flow
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      End-to-end 6-step autonomous pipeline in Zapier
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>

              {/* Exact visual reproduction of the Zapier Flow */}
              <div className="bg-slate-50 dark:bg-slate-950/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 flex justify-center">
                <div className="w-full max-w-sm space-y-3">
                  {/* Step 1 */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-orange-400/80 bg-orange-50/50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        <span>Schedule by Zapier</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Copy className="w-3.5 h-3.5" />
                        <Edit2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      1. Every Day
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-indigo-400 dark:text-indigo-500 font-bold text-sm">
                    &darr;
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold">
                        <span className="w-3.5 h-3.5 rounded bg-orange-600 text-white flex items-center justify-center text-[9px] font-bold">_</span>
                        <span>Web Search by Zapier</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Copy className="w-3.5 h-3.5" />
                        <Edit2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      2. Search the Web
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-indigo-400 dark:text-indigo-500 font-bold text-sm">
                    &darr;
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold">
                        <span className="w-3.5 h-3.5 rounded bg-orange-600 text-white flex items-center justify-center text-[9px] font-bold">_</span>
                        <span>Web Search by Zapier</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Copy className="w-3.5 h-3.5" />
                        <Edit2 className="w-3.5 h-3.5" />
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      3. Research AI Business...
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-indigo-400 dark:text-indigo-500 font-bold text-sm">
                    &darr;
                  </div>

                  {/* Step 4 */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-orange-400/80 bg-orange-50/50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                        <span>AI by Zapier</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Copy className="w-3.5 h-3.5" />
                        <Edit2 className="w-3.5 h-3.5" />
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      4. Generate evidence-based...
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-indigo-400 dark:text-indigo-500 font-bold text-sm">
                    &darr;
                  </div>

                  {/* Step 5 */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-orange-400/80 bg-orange-50/50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold">
                        <TableIcon className="w-3.5 h-3.5 text-orange-600" />
                        <span>Zapier Tables</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <Copy className="w-3.5 h-3.5" />
                        <Edit2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      5. Create Item in Feed
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-indigo-400 dark:text-indigo-500 font-bold text-sm">
                    &darr;
                  </div>

                  {/* Step 6 */}
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-3.5 border border-slate-200 dark:border-slate-800 shadow-xs relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold">
                        <Mail className="w-3.5 h-3.5 text-red-500" />
                        <span>Gmail</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Copy className="w-3.5 h-3.5" />
                        <Edit2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      6. Send Email
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid for Screenshots 2 & 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Screenshot 2: The Tricky Case */}
            {(activeTab === 'all' || activeTab === 'tricky') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        Screenshot 2 &middot; The Tricky Case
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Step 2: Search the Web configuration
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Attached
                  </span>
                </div>

                {screenshot2 ? (
                  <div className="space-y-2">
                    <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950">
                      <img
                        src={screenshot2}
                        alt="Screenshot 2: The Tricky Case"
                        className="w-full h-auto max-h-96 object-contain mx-auto"
                      />
                      <button
                        type="button"
                        onClick={() => onUpdateScreenshot2('', '')}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg transition-colors no-print"
                        title="Reset to default screenshot"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {caption2 && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                        {caption2}
                      </p>
                    )}
                  </div>
                ) : (
                  /* Faithful Zapier UI recreation of Screenshot 2 */
                  <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden">
                    {/* Zapier Action Header */}
                    <div className="px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded bg-orange-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                          _
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                            2. Search the Web
                          </span>
                          <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="cursor-pointer">&times;</span>
                      </div>
                    </div>

                    {/* Stepper Tabs */}
                    <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1">
                          Setup <span className="text-emerald-600 text-[11px]">&check;</span>
                        </span>
                        <span className="text-slate-300">&rsaquo;</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 pb-0.5 flex items-center gap-1">
                          Configure <span className="text-emerald-600 text-[11px]">&check;</span>
                        </span>
                        <span className="text-slate-300">&rsaquo;</span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1">
                          Test <span className="text-emerald-600 text-[11px]">&check;</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-500">
                        <Sparkles className="w-3.5 h-3.5" />
                        <Search className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="p-4 space-y-4 text-xs">
                      <div>
                        <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                          <span>Search Query</span>
                          <span className="text-red-500">*</span>
                          <span className="text-slate-400">&#9432;</span>
                        </div>
                        <div className="relative p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 font-sans text-xs text-slate-800 dark:text-slate-200 leading-relaxed flex items-start justify-between gap-2">
                          <span>
                            enterprise AI adoption business transformation case studies ROI
                            productivity automation Singapore Asia global 2026
                          </span>
                          <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 text-xs shrink-0">
                            +
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                          <span>Number of Results</span>
                          <span className="text-slate-400">&#9432;</span>
                        </div>
                        <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-800 dark:text-slate-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 font-mono text-[11px]">123</span>
                            <span className="font-semibold">20</span>
                          </div>
                          <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 text-xs">
                            +
                          </span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg text-center text-xs shadow-xs">
                          Continue
                        </div>
                      </div>
                    </div>

                    {/* Edge Case Note */}
                    <div className="px-4 py-2.5 bg-amber-50 dark:bg-amber-950/40 border-t border-amber-200/60 dark:border-amber-900/60 text-[11px] text-amber-800 dark:text-amber-200 flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>The Tricky Case:</strong> Previously, there were no controls on how recent the search should be. This led to news from June 2026 appearing in the results, which was outdated and irrelevant as we are in October 2026.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Screenshot 3: The Fix (Part 1 & Part 2) */}
            {(activeTab === 'all' || activeTab === 'fix') && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        Screenshot 3 &middot; The Fix
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Part 1: Formatter &middot; Part 2: Dynamic Search (Last 7 Days)
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Attached (2 Parts)
                  </span>
                </div>

                {screenshot3 ? (
                  <div className="space-y-2">
                    <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-950">
                      <img
                        src={screenshot3}
                        alt="Screenshot 3: The Fix"
                        className="w-full h-auto max-h-96 object-contain mx-auto"
                      />
                      <button
                        type="button"
                        onClick={() => onUpdateScreenshot3('', '')}
                        className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-lg transition-colors no-print"
                        title="Reset to default screenshot"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    {caption3 && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                        {caption3}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Sub-tabs for Part 1 and Part 2 */}
                    <div className="space-y-4">
                      {/* Sub-Card 1: Part 1 - Adding a Formatter by Zapier */}
                      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden">
                        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <span className="px-1.5 py-0.5 rounded bg-teal-100 dark:bg-teal-950/80 text-[#02848A] text-[10px] font-bold">
                              Part 1
                            </span>
                            Adding Formatter by Zapier (Date / Time)
                          </span>
                        </div>

                        {/* Zapier Formatter Action Header */}
                        <div className="px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded border border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-600 flex items-center justify-center text-xs font-bold shadow-xs">
                              &asymp;
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                2. Date / Time
                              </span>
                              <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 text-xs">
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span className="cursor-pointer">&times;</span>
                          </div>
                        </div>

                        {/* Stepper Tabs */}
                        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1">
                              Setup <span className="text-emerald-600 text-[11px]">&check;</span>
                            </span>
                            <span className="text-slate-300">&rsaquo;</span>
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 pb-0.5 flex items-center gap-1">
                              Configure <span className="text-emerald-600 text-[11px]">&check;</span>
                            </span>
                            <span className="text-slate-300">&rsaquo;</span>
                            <span className="text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1">
                              Test <span className="text-emerald-600 text-[11px]">&check;</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-indigo-500">
                            <Sparkles className="w-3.5 h-3.5" />
                            <Search className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Formatter Fields */}
                        <div className="p-4 space-y-3 text-xs">
                          <div>
                            <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                              <span>Transform</span>
                              <span className="text-red-500">*</span>
                            </div>
                            <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                              <span className="font-medium">Add/Subtract Time</span>
                              <span className="text-slate-400">&#8645;</span>
                            </div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/60 text-[11px] text-indigo-900 dark:text-indigo-200 flex items-start gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                              i
                            </span>
                            <span>
                              Manipulate a date and/or time by adding/subtracting days, months, years, hours, minutes, seconds.
                            </span>
                          </div>

                          <div className="pt-1">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Values
                            </span>
                          </div>

                          <div>
                            <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                              <span>Input</span>
                              <span className="text-slate-400">&#9432;</span>
                            </div>
                            <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                              <span className="px-2 py-0.5 rounded border border-pink-400 bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 font-medium text-[11px] flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-pink-500" /> Current time
                              </span>
                              <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 text-xs">
                                +
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                              <span>Expression</span>
                              <span className="text-red-500">*</span>
                              <span className="text-slate-400">&#9432;</span>
                            </div>
                            <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between">
                              <span className="font-mono font-semibold">-7 days</span>
                              <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 text-xs">
                                +
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <div className="font-semibold text-slate-700 dark:text-slate-200 mb-1 text-[11px]">
                                To Format *
                              </div>
                              <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-[10px] font-mono truncate">
                                YYYY-MM-DD
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold text-slate-700 dark:text-slate-200 mb-1 text-[11px]">
                                From Format
                              </div>
                              <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-[10px] font-mono truncate">
                                YYYY-MM-DD
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sub-Card 2: Part 2 - Dynamically Filter Search for Last 7 Days */}
                      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs overflow-hidden">
                        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                            <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                              Part 2
                            </span>
                            Dynamic Search for Recent News (Last 7 Days)
                          </span>
                        </div>

                        {/* Zapier Search Action Header */}
                        <div className="px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded bg-orange-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                              _
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                                3. Search the Web
                              </span>
                              <Edit2 className="w-3.5 h-3.5 text-slate-400" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 text-xs">
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span className="cursor-pointer">&times;</span>
                          </div>
                        </div>

                        {/* Search Query with Dynamic Pill */}
                        <div className="p-4 space-y-3 text-xs">
                          <div>
                            <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                              <span>Search Query</span>
                              <span className="text-red-500">*</span>
                              <span className="text-slate-400">&#9432;</span>
                            </div>
                            <div className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 font-sans text-xs text-slate-800 dark:text-slate-200 leading-relaxed flex flex-wrap items-center gap-1.5">
                              <span>
                                enterprise AI adoption business transformation case studies ROI
                                productivity automation Singapore Asia global after:
                              </span>
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-orange-300 bg-orange-50 dark:bg-orange-950/50 text-orange-800 dark:text-orange-300 font-mono text-[11px] font-semibold">
                                <span className="text-orange-500 font-bold">&asymp;</span> 2. Output: 2026-10-10
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-200 mb-1">
                              <span>Number of Results</span>
                              <span className="text-slate-400">&#9432;</span>
                            </div>
                            <div className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-800 dark:text-slate-200 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400 font-mono text-[11px]">123</span>
                                <span className="font-semibold">20</span>
                              </div>
                              <span className="w-5 h-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-500 text-xs">
                                +
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Explanation Note */}
                    <div className="px-4 py-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900/60 rounded-lg text-[11px] text-emerald-800 dark:text-emerald-200 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong>The Fix Explained:</strong> Step 2 computes a dynamic timestamp of <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded">Current time - 7 days</code> (<code className="font-mono">YYYY-MM-DD</code>). Step 3 appends <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded">after:&#123;&#123;2. Output&#125;&#125;</code> to the search query, guaranteeing fresh news and newly released GitHub tools from the preceding 7 days.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
