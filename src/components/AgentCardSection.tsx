import React, { useState } from 'react';
import { AgentCardData } from '../types';
import { Edit3, Check, X, RotateCcw, ShieldAlert, Cpu, Clock, Terminal, Eye, Sparkles } from 'lucide-react';
import { INITIAL_AGENT_CARD_DATA, EMPTY_PLACEHOLDER_AGENT_CARD_DATA } from '../constants/quadrants';

interface AgentCardSectionProps {
  data: AgentCardData;
  onChange: (updated: AgentCardData) => void;
  onResetPlaceholders: () => void;
  onLoadExample: () => void;
  lastSavedText: string;
}

export const AgentCardSection: React.FC<AgentCardSectionProps> = ({
  data,
  onChange,
  onResetPlaceholders,
  onLoadExample,
  lastSavedText,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<AgentCardData>(data);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Sync formData whenever external data changes
  React.useEffect(() => {
    setFormData(data);
  }, [data]);

  const handleSave = () => {
    onChange(formData);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  const handleFieldChange = (field: keyof AgentCardData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="agent-card" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden print-border transition-colors">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#02848A] dark:text-[#38D9D6]">
                Part 1 &middot; Agent Specification
              </span>
              <span className="text-xs text-slate-400">&middot;</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {saveSuccess ? 'Changes Saved ✓' : lastSavedText}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-serif-editorial text-slate-900 dark:text-slate-100">
              My agent card &nbsp;|&nbsp;{' '}
              <span className="text-[#02848A] dark:text-[#38D9D6]">
                {data.agentName || 'AI Business & Productivity Intelligence'}
              </span>{' '}
              &nbsp;|&nbsp; finished{' '}
              <span className="text-slate-600 dark:text-slate-300 font-normal text-lg md:text-xl">
                {data.finishedDateTime || '17 October 2026, 7:35 PM SGT'}
              </span>
            </h2>
          </div>

          {/* Action Button: Edit / Save Controls */}
          <div className="flex items-center gap-2 no-print">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
                >
                  <X className="w-3.5 h-3.5" />
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#02848A] hover:bg-[#02848A]/90 text-white transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#02848A] dark:text-[#38D9D6]" />
                Edit Card
              </button>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {isEditing ? (
            /* =================== EDIT MODE =================== */
            <div className="space-y-6">
              <div className="p-3.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-xs text-teal-800 dark:text-teal-200 flex items-center justify-between">
                <span>Editing Agent Card. Click <strong>&ldquo;Save Changes&rdquo;</strong> above when finished.</span>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(INITIAL_AGENT_CARD_DATA);
                  }}
                  className="text-xs font-semibold underline hover:no-underline ml-4"
                >
                  Restore Zapier Template
                </button>
              </div>

              {/* Title & Date Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={formData.agentName}
                    onChange={(e) => handleFieldChange('agentName', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Finished Date &amp; Time
                  </label>
                  <input
                    type="text"
                    value={formData.finishedDateTime}
                    onChange={(e) => handleFieldChange('finishedDateTime', e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                  />
                </div>
              </div>

              {/* 1. The job */}
              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">
                  1. The job: [WHAT IT DOES, AND FOR WHOM, BY ROLE]
                </label>
                <textarea
                  rows={3}
                  value={formData.job}
                  onChange={(e) => handleFieldChange('job', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                />
              </div>

              {/* 2. The trigger */}
              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">
                  2. The trigger: [WHAT STARTS A RUN]
                </label>
                <input
                  type="text"
                  value={formData.trigger}
                  onChange={(e) => handleFieldChange('trigger', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                />
              </div>

              {/* 3. The tools */}
              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">
                  3. The tools: [EACH APP AND ACTION IT CAN USE]
                </label>
                <textarea
                  rows={6}
                  value={formData.tools}
                  onChange={(e) => handleFieldChange('tools', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A] font-mono text-xs leading-relaxed"
                />
              </div>

              {/* 4. It must never */}
              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">
                  4. It must never: [ONE THING, AND THE SETTING THAT STOPS IT]
                </label>
                <textarea
                  rows={2}
                  value={formData.mustNever}
                  onChange={(e) => handleFieldChange('mustNever', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                />
              </div>

              {/* 5. Where a person checks */}
              <div>
                <label className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">
                  5. Where a person checks: [WHO READS THE OUTPUT, AND WHEN]
                </label>
                <textarea
                  rows={2}
                  value={formData.humanCheck}
                  onChange={(e) => handleFieldChange('humanCheck', e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#02848A] hover:bg-[#02848A]/90 text-white transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Check className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          ) : (
            /* =================== STREAMLINED PRESENTATION MODE =================== */
            <div className="space-y-6">
              {/* 1. The Job */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    The job:
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {data.job}
                  </p>
                </div>
              </div>

              {/* 2. The Trigger */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    The trigger:
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {data.trigger}
                  </p>
                </div>
              </div>

              {/* 3. The Tools */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    The tools:
                  </h3>
                  <div className="mt-2 bg-slate-50 dark:bg-slate-800/60 rounded-lg p-3.5 border border-slate-200/80 dark:border-slate-800">
                    <ul className="space-y-1.5 text-xs text-slate-800 dark:text-slate-200">
                      {data.tools.split('\n').map((line, idx) => {
                        const trimmed = line.trim();
                        if (!trimmed) return null;
                        return (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#02848A] dark:text-[#38D9D6] font-bold">&bull;</span>
                            <span className="leading-relaxed">{trimmed.replace(/^-\s*/, '')}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. It Must Never */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    It must never:
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {data.mustNever}
                  </p>
                </div>
              </div>

              {/* 5. Where a Person Checks */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-[#6B3B8B] dark:text-purple-300 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Where a person checks:
                  </h3>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {data.humanCheck}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
