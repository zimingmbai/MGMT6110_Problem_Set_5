import React from 'react';
import { Moon, Sun, Download, FileText, Loader2 } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenMarkdownModal: () => void;
  onExportPdf: () => void;
  isExportingPdf: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  onOpenMarkdownModal,
  onExportPdf,
  isExportingPdf,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single line, display face) */}
        <a
          href="#"
          className="text-lg md:text-xl font-bold font-serif-editorial text-[#0D3838] dark:text-teal-200 tracking-tight whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>MGMT6110 Problem Set 5</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#agent-card"
            className="hover:text-[#02848A] dark:hover:text-[#38D9D6] transition-colors whitespace-nowrap shrink-0"
          >
            Agent Card
          </a>
          <a
            href="#two-by-two-map"
            className="hover:text-[#02848A] dark:hover:text-[#38D9D6] transition-colors whitespace-nowrap shrink-0"
          >
            2x2 Map
          </a>
          <a
            href="#analysis-section"
            className="hover:text-[#02848A] dark:hover:text-[#38D9D6] transition-colors whitespace-nowrap shrink-0"
          >
            Reflection &amp; Analysis
          </a>
          <a
            href="#screenshots-section"
            className="hover:text-[#02848A] dark:hover:text-[#38D9D6] transition-colors whitespace-nowrap shrink-0"
          >
            Screenshots
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Export, Print PDF & Theme Toggle) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle color theme"
          >
            {isDarkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-600" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          {/* Markdown Modal */}
          <button
            type="button"
            onClick={onOpenMarkdownModal}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5 whitespace-nowrap"
            title="Preview and export markdown for GitHub repository"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Markdown</span>
          </button>

          {/* Export PDF Button */}
          <button
            type="button"
            onClick={onExportPdf}
            disabled={isExportingPdf}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-[#02848A] hover:bg-[#02848A]/90 disabled:opacity-75 text-white transition-colors flex items-center gap-1.5 shadow-xs whitespace-nowrap cursor-pointer"
            title="Download formatted submission as PDF document"
          >
            {isExportingPdf ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Exporting...</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
