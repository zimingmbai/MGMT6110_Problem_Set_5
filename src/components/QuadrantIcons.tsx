import React from 'react';

interface IconProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Top-Left: "A person leads, AI inside"
 * Outer oval: Purple, Inner oval: Teal
 */
export const TopLeftIcon: React.FC<IconProps> = ({ className = 'h-10 w-24', width = 96, height = 44 }) => {
  return (
    <svg
      viewBox="0 0 96 44"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer oval: Purple */}
      <ellipse cx="48" cy="22" rx="36" ry="17" stroke="#6B3B8B" strokeWidth="2.8" />
      {/* Inner oval: Teal */}
      <ellipse cx="48" cy="22" rx="17" ry="8" stroke="#02848A" strokeWidth="2.8" />
    </svg>
  );
};

/**
 * Top-Right: "Agents run it, a person judges"
 * Outer oval: Teal, Inner oval: Purple
 */
export const TopRightIcon: React.FC<IconProps> = ({ className = 'h-10 w-24', width = 96, height = 44 }) => {
  return (
    <svg
      viewBox="0 0 96 44"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer oval: Teal */}
      <ellipse cx="48" cy="22" rx="36" ry="17" stroke="#02848A" strokeWidth="2.8" />
      {/* Inner oval: Purple */}
      <ellipse cx="48" cy="22" rx="17" ry="8" stroke="#6B3B8B" strokeWidth="2.8" />
    </svg>
  );
};

/**
 * Bottom-Left: "AI alone, with checks"
 * Single oval: Teal
 */
export const BottomLeftIcon: React.FC<IconProps> = ({ className = 'h-10 w-24', width = 96, height = 44 }) => {
  return (
    <svg
      viewBox="0 0 96 44"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Single oval: Teal */}
      <ellipse cx="48" cy="22" rx="27" ry="14" stroke="#02848A" strokeWidth="2.8" />
    </svg>
  );
};

/**
 * Bottom-Right: "A person decides, AI alongside"
 * Two overlapping horizontally shifted ovals: Left Purple, Right Teal
 */
export const BottomRightIcon: React.FC<IconProps> = ({ className = 'h-10 w-24', width = 96, height = 44 }) => {
  return (
    <svg
      viewBox="0 0 96 44"
      width={width}
      height={height}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left oval: Purple */}
      <ellipse cx="38" cy="22" rx="26" ry="14" stroke="#6B3B8B" strokeWidth="2.8" />
      {/* Right oval: Teal */}
      <ellipse cx="58" cy="22" rx="26" ry="14" stroke="#02848A" strokeWidth="2.8" />
    </svg>
  );
};
