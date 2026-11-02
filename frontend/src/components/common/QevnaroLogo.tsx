import React from 'react';

/**
 * Official Qevnaro mark, vector-traced from the brand artwork.
 * ViewBox 0 0 117 107: hexagonal "Q" (navy #0c1d48) + electric-blue chevron (#3175fe).
 * Wordmark: Montserrat ExtraBold, wide tracking, cap-height ≈ 0.37 × mark height.
 */
export const QEVNARO_NAVY_PATH =
  "M 0,32.1 L 0,74.2 L 54.9,106.9 L 76.2,93.5 L 64.9,81.1 L 54.4,86.5 L 17.8,64.9 L 17.1,42.4 L 54.5,20 L 93.4,42.9 L 93.4,63.8 L 70.9,78 L 93.5,103.5 L 116.8,103.8 L 98.3,81.7 L 109.9,74.4 L 109.9,31.8 L 54.8,0 Z";
export const QEVNARO_CHEVRON_PATH =
  "M 25.5,60 L 60.5,40.1 L 85.1,68 L 70.5,76.5 L 57.2,62.8 L 40.9,71 Z";

export const BRAND_NAVY = '#0c1d48';
export const BRAND_BLUE = '#3175fe';
export const MARK_RATIO = 117 / 107;

interface QevnaroLogoMarkProps {
  className?: string;
  /** Height of the mark in px (width follows the artwork's aspect ratio). */
  height?: number;
  qColor?: string;
  chevronColor?: string;
}

export const QevnaroLogoMark: React.FC<QevnaroLogoMarkProps> = ({
  className = '',
  height = 40,
  qColor = BRAND_NAVY,
  chevronColor = BRAND_BLUE,
}) => (
  <svg
    width={height * MARK_RATIO}
    height={height}
    viewBox="0 0 117 107"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d={QEVNARO_NAVY_PATH} fill={qColor} />
    <path d={QEVNARO_CHEVRON_PATH} fill={chevronColor} />
  </svg>
);

interface QevnaroLogoProps {
  className?: string;
  /** Mark height in px; the wordmark scales from it so the lockup matches the brand artwork. */
  markSize?: number;
  /** "dark" = sits on a dark background (light Q + wordmark); "light" = official navy. */
  tone?: 'light' | 'dark';
}

export const QevnaroLogo: React.FC<QevnaroLogoProps> = ({ className = '', markSize = 40, tone = 'dark' }) => {
  const ink = tone === 'dark' ? '#F4F5F7' : BRAND_NAVY;
  return (
    <div className={`inline-flex select-none items-center ${className}`} style={{ gap: markSize * 0.19 }}>
      <QevnaroLogoMark height={markSize} qColor={ink} />
      <span
        style={{
          fontFamily: "'Montserrat', 'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: markSize * 0.53,
          letterSpacing: '0.035em',
          lineHeight: 1,
          color: ink,
        }}
      >
        QEVNARO
      </span>
    </div>
  );
};

export default QevnaroLogo;
