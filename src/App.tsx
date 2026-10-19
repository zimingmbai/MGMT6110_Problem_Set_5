import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AgentCardSection } from './components/AgentCardSection';
import { TwoByTwoMapSection } from './components/TwoByTwoMapSection';
import { AnalysisSection } from './components/AnalysisSection';
import { MarkdownModal } from './components/MarkdownModal';
import {
  AgentCardData,
  AnalysisData,
  QuadrantId,
} from './types';
import {
  INITIAL_AGENT_CARD_DATA,
  EMPTY_PLACEHOLDER_AGENT_CARD_DATA,
  INITIAL_ANALYSIS_DATA,
  EMPTY_PLACEHOLDER_ANALYSIS_DATA,
  QUADRANTS,
} from './constants/quadrants';
import { ZapierScreenshotsSection } from './components/ZapierScreenshotsSection';
import { generateMarkdownReport } from './utils/exportUtils';
import { exportToPdf } from './utils/pdfExport';
import { CheckCircle2 } from 'lucide-react';

const STORAGE_KEY_CARD = 'zapier_agent_assignment_card_v2';
const STORAGE_KEY_ANALYSIS = 'zapier_agent_assignment_analysis_v3';
const STORAGE_KEY_THEME = 'zapier_agent_assignment_theme_v1';
const STORAGE_KEY_SCREENSHOTS = 'zapier_agent_assignment_screenshots_v1';

export default function App() {
  // Theme state: defaults to false (Light Mode) unless explicitly saved as 'dark'
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
      if (savedTheme) return savedTheme === 'dark';
      return false; // Default to Light Mode matching course slides
    }
    return false;
  });

  // Apply or remove dark mode class to html element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem(STORAGE_KEY_THEME, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(STORAGE_KEY_THEME, 'light');
    }
  }, [isDarkMode]);

  // Agent Card state
  const [agentCard, setAgentCard] = useState<AgentCardData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_CARD);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          return { ...INITIAL_AGENT_CARD_DATA, ...parsed };
        } catch {
          // ignore error
        }
      }
    }
    return INITIAL_AGENT_CARD_DATA;
  });

  // Analysis / Reflection state
  const [analysis, setAnalysis] = useState<AnalysisData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_ANALYSIS);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (!parsed.questionD || parsed.questionD.trim().startsWith('[')) {
            parsed.questionD = INITIAL_ANALYSIS_DATA.questionD;
          }
          return { ...INITIAL_ANALYSIS_DATA, ...parsed };
        } catch {
          // ignore error
        }
      }
    }
    return INITIAL_ANALYSIS_DATA;
  });

  const [lastSaved, setLastSaved] = useState<string>('Saved just now');
  const [isMarkdownModalOpen, setIsMarkdownModalOpen] = useState<boolean>(false);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Screenshots state for Part 4
  const [screenshots, setScreenshots] = useState<{
    screenshot2?: string;
    screenshot3?: string;
    caption2?: string;
    caption3?: string;
  }>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY_SCREENSHOTS);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore error
        }
      }
    }
    return {};
  });

  // Auto-save changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_CARD, JSON.stringify(agentCard));
    localStorage.setItem(STORAGE_KEY_ANALYSIS, JSON.stringify(analysis));
    localStorage.setItem(STORAGE_KEY_SCREENSHOTS, JSON.stringify(screenshots));
    const now = new Date();
    setLastSaved(`Saved at ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
  }, [agentCard, analysis, screenshots]);

  // Handle quadrant selection on the 2x2 map -> syncs question (a) directly
  const handleSelectQuadrant = (qid: QuadrantId) => {
    const meta = QUADRANTS[qid];
    setAnalysis((prev) => ({
      ...prev,
      quadrant: qid,
      questionA: meta.positionLabel,
    }));
  };

  const handleResetToPlaceholders = () => {
    if (window.confirm('Reset all fields to template placeholders? You can reload the example anytime.')) {
      setAgentCard(EMPTY_PLACEHOLDER_AGENT_CARD_DATA);
      setAnalysis(EMPTY_PLACEHOLDER_ANALYSIS_DATA);
    }
  };

  const handleLoadExample = () => {
    setAgentCard(INITIAL_AGENT_CARD_DATA);
    setAnalysis(INITIAL_ANALYSIS_DATA);
  };

  const handleExportPdf = async () => {
    setIsExportingPdf(true);
    setToastMessage('Preparing your PDF export...');
    try {
      await exportToPdf('submission-root', 'MGMT6110_Problem_Set_5_Report.pdf');
      setToastMessage('PDF downloaded successfully!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch {
      setToastMessage('Opening browser print fallback...');
      window.print();
      setTimeout(() => setToastMessage(null), 3000);
    } finally {
      setIsExportingPdf(false);
    }
  };

  const markdownDraft = generateMarkdownReport(agentCard, analysis);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1118] text-slate-900 dark:text-slate-100 flex flex-col transition-colors selection:bg-[#02848A]/20">
      {/* Top Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onOpenMarkdownModal={() => setIsMarkdownModalOpen(true)}
        onExportPdf={handleExportPdf}
        isExportingPdf={isExportingPdf}
      />

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2.5 rounded-lg shadow-lg flex items-center gap-2 text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-teal-400 dark:text-teal-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main
        id="submission-root"
        className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 md:py-10 space-y-10 md:space-y-12"
      >
        {/* Section 1: The Agent Card (Streamlined default view with Edit button) */}
        <AgentCardSection
          data={agentCard}
          onChange={setAgentCard}
          onResetPlaceholders={() => setAgentCard(EMPTY_PLACEHOLDER_AGENT_CARD_DATA)}
          onLoadExample={() => setAgentCard(INITIAL_AGENT_CARD_DATA)}
          lastSavedText={lastSaved}
        />

        {/* Section 2: The Two-by-Two Map (Middle Section - Pixel replica of image) */}
        <TwoByTwoMapSection
          selectedQuadrant={analysis.quadrant}
          onSelectQuadrant={handleSelectQuadrant}
        />

        {/* Section 3: Reflection & Analysis */}
        <AnalysisSection
          data={analysis}
          onChange={setAnalysis}
          onSelectQuadrant={handleSelectQuadrant}
          onLoadExample={() => setAnalysis(INITIAL_ANALYSIS_DATA)}
          onResetPlaceholders={() => setAnalysis(EMPTY_PLACEHOLDER_ANALYSIS_DATA)}
        />

        {/* Section 4: Zapier Screenshots (Flow, Tricky Case, Fix) */}
        <ZapierScreenshotsSection
          screenshot2={screenshots.screenshot2}
          screenshot3={screenshots.screenshot3}
          caption2={screenshots.caption2}
          caption3={screenshots.caption3}
          onUpdateScreenshot2={(img, cap) =>
            setScreenshots((prev) => ({
              ...prev,
              screenshot2: img,
              caption2: cap,
            }))
          }
          onUpdateScreenshot3={(img, cap) =>
            setScreenshots((prev) => ({
              ...prev,
              screenshot3: img,
              caption3: cap,
            }))
          }
        />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 no-print transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-xs text-slate-500 dark:text-slate-400">
          <span>MGMT6110 Problem Set 5</span>
        </div>
      </footer>

      {/* Markdown Inspection & Export Modal */}
      <MarkdownModal
        isOpen={isMarkdownModalOpen}
        onClose={() => setIsMarkdownModalOpen(false)}
        markdownContent={markdownDraft}
      />
    </div>
  );
}
