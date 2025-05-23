import React from 'react';

const FinCopilotLogo: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({ size = 48, color = "#222", style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    
    <rect x="2" y="2" width="44" height="44" rx="12" fill={color} />
    
    <rect x="13" y="13" width="4" height="10" rx="2" fill="#fff" />
    <rect x="22" y="13" width="4" height="14" rx="2" fill="#fff" />
    <rect x="31" y="13" width="4" height="10" rx="2" fill="#fff" />
    
    <path
      d="M16 30c2.5 4 13.5 4 16 0"
      stroke="#fff"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default FinCopilotLogo;