import React, { useState, useEffect } from 'react';
import { AnalysisData, QuadrantId } from '../types';
import { QUADRANTS, INITIAL_ANALYSIS_DATA } from '../constants/quadrants';
import { Edit3, Check, X, ClipboardCheck, Sparkles } from 'lucide-react';

interface AnalysisSectionProps {
  data: AnalysisData;
  onChange: (updated: AnalysisData) => void;
  onSelectQuadrant: (id: QuadrantId) => void;
  onLoadExample: () => void;
  onResetPlaceholders: () => void;
}

export const AnalysisSection: React.FC<AnalysisSectionProps> = ({
  data,
  onChange,
  onSelectQuadrant,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<AnalysisData>(data);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  // Sync internal state when external props update
  useEffect(() => {
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

  const handleFieldChange = (field: keyof AnalysisData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section id="analysis-section" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden print-border transition-colors">
        {/* Section Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#02848A] dark:text-[#38D9D6]">
                Part 3 &middot; Reflection &amp; Analysis
              </span>
              <span className="text-xs text-slate-400">&middot;</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {saveSuccess ? 'Changes Saved ✓' : 'Auto-Saved'}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-serif-editorial text-slate-900 dark:text-slate-100">
              Where does your agent sit on our two-by-two map, and what does that mean for the
              person in the loop?
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
                Edit Answers
              </button>
            )}
          </div>
        </div>

        {/* Section Body */}
        <div className="p-6 md:p-8">
          {isEditing ? (
            /* =================== EDIT MODE =================== */
            <div className="space-y-7">
              <div className="p-3.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900/60 text-xs text-teal-800 dark:text-teal-200 flex items-center justify-between">
                <span>
                  Editing answers. Click <strong>&ldquo;Save Changes&rdquo;</strong> above when finished.
                </span>
                <button
                  type="button"
                  onClick={() => setFormData(INITIAL_ANALYSIS_DATA)}
                  className="text-xs font-semibold underline hover:no-underline ml-4"
                >
                  Restore Answers
                </button>
              </div>

              {/* Question (a) */}
              <div className="space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0">
                    (a)
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Your quadrant
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Name your agent&apos;s quadrant by its exact title on the map above:{' '}
                      <em>A person leads, AI inside (top left)</em>,{' '}
                      <em>Agents run it, a person judges (top right)</em>,{' '}
                      <em>AI alone, with checks (bottom left)</em> or{' '}
                      <em>A person decides, AI alongside (bottom right)</em>.
                    </p>
                  </div>
                </div>

                {/* Quick Quadrant Selector Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-1">
                  {(
                    [
                      'top-left',
                      'top-right',
                      'bottom-left',
                      'bottom-right',
                    ] as QuadrantId[]
                  ).map((qid) => {
                    const qMeta = QUADRANTS[qid];
                    const isSelected = formData.quadrant === qid;
                    return (
                      <button
                        key={qid}
                        type="button"
                        onClick={() => {
                          onSelectQuadrant(qid);
                          setFormData((prev) => ({
                            ...prev,
                            quadrant: qid,
                          }));
                        }}
                        className={`p-3 text-left rounded-lg border text-xs font-medium transition-all ${
                          isSelected
                            ? 'border-[#02848A] bg-teal-50/70 dark:bg-teal-950/40 text-[#02848A] dark:text-[#38D9D6] ring-1 ring-[#02848A]'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <div className="font-bold">{qMeta.title}</div>
                        <div className="text-[11px] opacity-75 mt-0.5">
                          ({qid.replace('-', ' ')})
                        </div>
                      </button>
                    );
                  })}
                </div>

                <textarea
                  rows={4}
                  value={formData.questionA}
                  onChange={(e) => handleFieldChange('questionA', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A] leading-relaxed"
                />
              </div>

              {/* Question (b) */}
              <div className="space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0">
                    (b)
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      The two questions
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Justify it with the map’s two questions, using evidence from your runs. Is
                      the job work with a right answer or work with no single right answer? Is it
                      work that people and AI must do together or work that either of them can do
                      alone?
                    </p>
                  </div>
                </div>

                <textarea
                  rows={6}
                  value={formData.questionB}
                  onChange={(e) => handleFieldChange('questionB', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A] leading-relaxed"
                />
              </div>

              {/* Question (c) */}
              <div className="space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0">
                    (c)
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      The person in the loop
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Then say what this means for the human in the loop: where a person stays at the
                      gate and what they check, what your agent may do alone, and what would move it
                      to another quadrant.
                    </p>
                  </div>
                </div>

                <textarea
                  rows={6}
                  value={formData.questionC}
                  onChange={(e) => handleFieldChange('questionC', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A] leading-relaxed"
                />
              </div>

              {/* Question (d) */}
              <div className="space-y-3 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-sm shrink-0">
                    (d)
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      Your group&apos;s view
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      Last, do you agree with where your group placed its agents in class? Name
                      any of the map’s two questions you would answer differently from your
                      group, and why. About half a page is enough.
                    </p>
                  </div>
                </div>

                <textarea
                  rows={8}
                  value={formData.questionD}
                  onChange={(e) => handleFieldChange('questionD', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A] leading-relaxed"
                />
              </div>

              {/* Collaboration Log Form */}
              <div className="space-y-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-[#02848A] dark:text-[#38D9D6]" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    Collaboration Log
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    What I delegated:
                  </label>
                  <textarea
                    rows={2}
                    value={formData.delegated}
                    onChange={(e) => handleFieldChange('delegated', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    What I checked and how:
                  </label>
                  <textarea
                    rows={2}
                    value={formData.checkedAndHow}
                    onChange={(e) => handleFieldChange('checkedAndHow', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    One AI error caught:
                  </label>
                  <textarea
                    rows={3}
                    value={formData.errorCaught}
                    onChange={(e) => handleFieldChange('errorCaught', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A]"
                  />
                </div>
              </div>

              {/* Reflection Form */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#6B3B8B] dark:text-[#B388FF]" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                    Reflection
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1">
                    Evaluation, limitations observed, and future enhancements:
                  </label>
                  <textarea
                    rows={6}
                    value={formData.reflection}
                    onChange={(e) => handleFieldChange('reflection', e.target.value)}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#02848A] leading-relaxed"
                  />
                </div>
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
            <div className="space-y-8">
              {/* Question (a) */}
              <div className="space-y-2 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                    a
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Your quadrant:
                  </h3>
                </div>
                <div className="pl-8 text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {data.questionA}
                </div>
              </div>

              {/* Question (b) */}
              <div className="space-y-2 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                    b
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    The two questions:
                  </h3>
                </div>
                <div className="pl-8 text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {data.questionB}
                </div>
              </div>

              {/* Question (c) */}
              <div className="space-y-2 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                    c
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    The person in the loop:
                  </h3>
                </div>
                <div className="pl-8 text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {data.questionC}
                </div>
              </div>

              {/* Question (d) */}
              <div className="space-y-2 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-[#02848A]/10 text-[#02848A] dark:text-[#38D9D6] flex items-center justify-center font-bold text-xs">
                    d
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Your group&apos;s view:
                  </h3>
                </div>
                <div className="pl-8 text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {data.questionD}
                </div>
              </div>

              {/* Collaboration Log */}
              <div className="space-y-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-teal-50 dark:bg-teal-950/60 text-[#02848A] dark:text-[#38D9D6]">
                    <ClipboardCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif-editorial">
                    Collaboration Log
                  </h3>
                </div>

                <div className="space-y-3.5 pl-2">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      What I delegated
                    </h4>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {data.delegated}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      What I checked and how
                    </h4>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {data.checkedAndHow}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                      One AI error caught
                    </h4>
                    <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                      {data.errorCaught}
                    </p>
                  </div>
                </div>
              </div>

              {/* Reflection */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-[#6B3B8B] dark:text-[#B388FF]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-serif-editorial">
                    Reflection
                  </h3>
                </div>

                <div className="space-y-3 pl-2">
                  {data.reflection.split('\n\n').map((para, idx) => {
                    const trimmed = para.trim();
                    if (!trimmed) return null;
                    return (
                      <p
                        key={idx}
                        className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
                      >
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
