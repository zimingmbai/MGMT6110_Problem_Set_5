import React from 'react';
import { QuadrantId } from '../types';
import { QUADRANTS } from '../constants/quadrants';
import {
  TopLeftIcon,
  TopRightIcon,
  BottomLeftIcon,
  BottomRightIcon,
} from './QuadrantIcons';
import { Check, Compass } from 'lucide-react';

interface TwoByTwoMapSectionProps {
  selectedQuadrant: QuadrantId;
  onSelectQuadrant: (id: QuadrantId) => void;
}

export const TwoByTwoMapSection: React.FC<TwoByTwoMapSectionProps> = ({
  selectedQuadrant,
  onSelectQuadrant,
}) => {
  const activeMeta = QUADRANTS[selectedQuadrant];

  return (
    <section id="two-by-two-map" className="scroll-mt-20">
      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 md:p-10 print-border">
        {/* Section Title & Subtitle mirroring the original image */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2 no-print">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#02848A] dark:text-[#38D9D6]">
              Part 2 &middot; Interactive Framework
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif-editorial text-[#0D3838] dark:text-teal-100 tracking-tight">
            Our two-by-two map
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Team, this is the map from our Week 7 lesson. Tap the quadrant where you think
            your agent sits, and the page marks it on the map and in the table below. Nothing
            is saved, so please try more than one before you write Q1.
          </p>
        </div>

        {/* The 2x2 Grid Layout */}
        <div className="w-full overflow-x-auto pb-4">
          <div className="min-w-[680px] grid grid-cols-12 gap-3 md:gap-4 items-stretch">
            {/* Top Row: Empty spacer for row header + 2 Dark Navy Column Headers */}
            <div className="col-span-3"></div>
            <div className="col-span-4 md:col-span-4 bg-[#1D3B53] dark:bg-[#152B3C] text-white py-3 px-3 text-center rounded-lg shadow-xs flex items-center justify-center">
              <span className="text-xs md:text-sm font-bold tracking-tight">
                Work with a right answer
              </span>
            </div>
            <div className="col-span-5 md:col-span-5 bg-[#1D3B53] dark:bg-[#152B3C] text-white py-3 px-3 text-center rounded-lg shadow-xs flex items-center justify-center">
              <span className="text-xs md:text-sm font-bold tracking-tight">
                Work with no single right answer
              </span>
            </div>

            {/* Row 1: "Work that people and AI must do together" */}
            <div className="col-span-3 bg-[#EDF3F8] dark:bg-slate-800/80 text-[#1D3B53] dark:text-slate-200 p-4 rounded-xl flex items-center justify-center text-center border border-slate-200/60 dark:border-slate-700">
              <span className="text-xs md:text-sm font-bold leading-snug">
                Work that people and AI must do together
              </span>
            </div>

            {/* Quadrant 1 (Top Left): "A person leads, AI inside" */}
            <button
              type="button"
              onClick={() => onSelectQuadrant('top-left')}
              className={`col-span-4 md:col-span-4 p-5 md:p-6 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center relative cursor-pointer group ${
                selectedQuadrant === 'top-left'
                  ? 'bg-[#FCF6FD] dark:bg-[#2B1B36] ring-2 ring-[#6B3B8B] dark:ring-[#B388FF] border-[#6B3B8B] shadow-md'
                  : 'bg-[#FCF8FD] dark:bg-slate-800/50 border-[#E5DEEB] dark:border-purple-900/40 hover:border-[#6B3B8B]/60 hover:shadow-xs'
              }`}
            >
              {selectedQuadrant === 'top-left' && (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#6B3B8B] text-white text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                  <Check className="w-3 h-3" /> Selected
                </div>
              )}
              <div className="mb-3 transition-transform group-hover:scale-105 duration-200">
                <TopLeftIcon />
              </div>
              <h3 className="text-base md:text-lg font-bold font-serif-editorial text-[#371D50] dark:text-purple-200 mb-1">
                A person leads, AI inside
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                The person leads and AI works inside.
              </p>
            </button>

            {/* Quadrant 2 (Top Right): "Agents run it, a person judges" - Default Selection */}
            <button
              type="button"
              onClick={() => onSelectQuadrant('top-right')}
              className={`col-span-5 md:col-span-5 p-5 md:p-6 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center relative cursor-pointer group ${
                selectedQuadrant === 'top-right'
                  ? 'bg-[#F4F9FB] dark:bg-[#132A33] ring-2 ring-[#02848A] dark:ring-[#38D9D6] border-[#02848A] shadow-md'
                  : 'bg-[#F4F9FB] dark:bg-slate-800/50 border-[#02848A]/40 dark:border-teal-700/60 hover:border-[#02848A] hover:shadow-xs'
              }`}
            >
              {selectedQuadrant === 'top-right' ? (
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#02848A] text-white text-[11px] font-bold flex items-center gap-1.5 shadow-xs">
                  <Check className="w-3.5 h-3.5" />
                  <span>My Agent &middot; Selected</span>
                </div>
              ) : (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950/80 text-[#02848A] dark:text-teal-300 text-[10px] font-semibold flex items-center gap-1">
                  <span>My Agent&apos;s Quadrant</span>
                </div>
              )}
              <div className="mb-3 transition-transform group-hover:scale-105 duration-200">
                <TopRightIcon />
              </div>
              <h3 className="text-base md:text-lg font-bold font-serif-editorial text-[#0F3D4A] dark:text-teal-200 mb-1">
                Agents run it, a person judges
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                Agents run the process and a person judges inside it.
              </p>
            </button>

            {/* Row 2: "Work that either of them can do alone" */}
            <div className="col-span-3 bg-[#EDF3F8] dark:bg-slate-800/80 text-[#1D3B53] dark:text-slate-200 p-4 rounded-xl flex items-center justify-center text-center border border-slate-200/60 dark:border-slate-700">
              <span className="text-xs md:text-sm font-bold leading-snug">
                Work that either of them can do alone
              </span>
            </div>

            {/* Quadrant 3 (Bottom Left): "AI alone, with checks" */}
            <button
              type="button"
              onClick={() => onSelectQuadrant('bottom-left')}
              className={`col-span-4 md:col-span-4 p-5 md:p-6 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center relative cursor-pointer group ${
                selectedQuadrant === 'bottom-left'
                  ? 'bg-[#F4F9FB] dark:bg-[#132A33] ring-2 ring-[#02848A] dark:ring-[#38D9D6] border-[#02848A] shadow-md'
                  : 'bg-[#F4F9FB] dark:bg-slate-800/50 border-[#D4E8EE] dark:border-teal-900/40 hover:border-[#02848A]/60 hover:shadow-xs'
              }`}
            >
              {selectedQuadrant === 'bottom-left' && (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#02848A] text-white text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                  <Check className="w-3 h-3" /> Selected
                </div>
              )}
              <div className="mb-3 transition-transform group-hover:scale-105 duration-200">
                <BottomLeftIcon />
              </div>
              <h3 className="text-base md:text-lg font-bold font-serif-editorial text-[#0F3D4A] dark:text-teal-200 mb-1">
                AI alone, with checks
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                AI does it, with spot checks.
              </p>
            </button>

            {/* Quadrant 4 (Bottom Right): "A person decides, AI alongside" */}
            <button
              type="button"
              onClick={() => onSelectQuadrant('bottom-right')}
              className={`col-span-5 md:col-span-5 p-5 md:p-6 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center relative cursor-pointer group ${
                selectedQuadrant === 'bottom-right'
                  ? 'bg-[#FCF6FD] dark:bg-[#2B1B36] ring-2 ring-[#6B3B8B] dark:ring-[#B388FF] border-[#6B3B8B] shadow-md'
                  : 'bg-[#FCF8FD] dark:bg-slate-800/50 border-[#E5DEEB] dark:border-purple-900/40 hover:border-[#6B3B8B]/60 hover:shadow-xs'
              }`}
            >
              {selectedQuadrant === 'bottom-right' && (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#6B3B8B] text-white text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                  <Check className="w-3 h-3" /> Selected
                </div>
              )}
              <div className="mb-3 transition-transform group-hover:scale-105 duration-200">
                <BottomRightIcon />
              </div>
              <h3 className="text-base md:text-lg font-bold font-serif-editorial text-[#371D50] dark:text-purple-200 mb-1">
                A person decides, AI alongside
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-normal">
                A person decides with AI alongside.
              </p>
            </button>
          </div>
        </div>

        {/* Real-time Status Card below the 2x2 Map */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-500/10 text-[#02848A] dark:text-[#38D9D6]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {selectedQuadrant === 'top-right'
                  ? "My Agent's Placement (Default Selection)"
                  : 'Selected Quadrant for Testing'}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-2">
                <span>{activeMeta.positionLabel}</span>
                {selectedQuadrant === 'top-right' && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-100 dark:bg-teal-950/80 text-[#02848A] dark:text-[#38D9D6]">
                    Agent Default ✓
                  </span>
                )}
                <span className="text-xs font-normal text-slate-500">
                  ({activeMeta.answerLabel} &middot; {activeMeta.collaborationLabel})
                </span>
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 self-end sm:self-center">
            &larr; Tap any quadrant to test and sync Question (a)
          </div>
        </div>
      </div>
    </section>
  );
};
