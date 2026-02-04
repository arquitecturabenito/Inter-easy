import React from 'react';

interface VegetableIconProps {
  name: string;
  className?: string;
}

const VegetableIcon: React.FC<VegetableIconProps> = ({ name, className = "" }) => {
  const renderIcon = () => {
    switch (name) {
      case 'tomato':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8Z" fill="#F87171" stroke="#991B1B" />
            <path d="M14 8V4m-3 4 1.5-3m4.5 3-1.5-3" stroke="#166534" strokeWidth="2" />
          </g>
        );
      case 'cucumber':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12c0-2 10-6 22-2 2 1 3 6 1 9-5 4-18 2-23-7Z" fill="#22C55E" stroke="#14532D" />
            <circle cx="10" cy="12" r="0.5" fill="white" stroke="none" />
            <circle cx="16" cy="11" r="0.5" fill="white" stroke="none" />
            <circle cx="20" cy="14" r="0.5" fill="white" stroke="none" />
          </g>
        );
      case 'zucchini':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 16c0-3 12-8 23-4 1 2 2 8-1 10-10 3-20 0-22-6Z" fill="#14532D" stroke="#064E3B" />
            <path d="M26 13c1-1 3-1 4-1l-1 4" fill="#064E3B" stroke="#064E3B" />
          </g>
        );
      case 'redPepper':
      case 'greenPepper':
      case 'yellowPepper':
      case 'orangePepper':
        const pepperColor = name.startsWith('red') ? '#EF4444' : name.startsWith('green') ? '#16A34A' : name.startsWith('yellow') ? '#FACC15' : '#FB923C';
        const pepperStroke = name.startsWith('red') ? '#991B1B' : name.startsWith('green') ? '#14532D' : name.startsWith('yellow') ? '#A16207' : '#9A3412';
        return (
          <g stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Lobed bell pepper shape */}
            <path 
              d="M8 11C8 8.5 10.5 7 13 7C14.5 7 16 8 16 8C16 8 17.5 7 19 7C21.5 7 24 8.5 24 11V18C24 21 21.5 23 19 23C17.5 23 16 22 16 22C16 22 14.5 23 13 23C10.5 23 8 21 8 18V11Z" 
              fill={pepperColor} 
              stroke={pepperStroke} 
              strokeWidth="1.5"
            />
            {/* Vertical lobe indentation lines */}
            <path d="M13 7V23" stroke={pepperStroke} strokeWidth="0.8" opacity="0.3" />
            <path d="M19 7V23" stroke={pepperStroke} strokeWidth="0.8" opacity="0.3" />
            <path d="M16 8V22" stroke={pepperStroke} strokeWidth="1" opacity="0.2" />
            
            {/* Stem */}
            <path d="M14 7V4C14 3.5 14.5 3 16 3C17.5 3 18 3.5 18 4V7" fill="#166534" stroke="#14532D" strokeWidth="1.5" />
            
            {/* Highlights */}
            <path d="M10 11C10 10 11 9 12 9" stroke="white" strokeWidth="1" opacity="0.4" />
          </g>
        );
      case 'eggplant':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 12c0-5 4-7 8-7s10 6 10 12-4 10-8 10-10-4-10-15Z" fill="#581C87" stroke="#2E1065" />
            <path d="M14 5l2 4 4-2" fill="#166534" stroke="#14532D" />
          </g>
        );
      case 'carrot':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8l20 18-6 4L2 12l4-4Z" fill="#FB923C" stroke="#9A3412" />
            <path d="M6 8L3 4m4 4l1-4m-3 4l-4 2" stroke="#16A34A" strokeWidth="2" />
          </g>
        );
      case 'parsnip':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8l20 18-6 4L2 12l4-4Z" fill="#FEFCE8" stroke="#A16207" />
            <path d="M6 8L3 4m4 4l1-4" stroke="#166534" strokeWidth="2" />
          </g>
        );
      case 'sweetPotato':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 16c0-4 10-8 22-2 2 2 3 6 1 10-8 4-18 2-23-8Z" fill="#7C2D12" stroke="#451A03" />
            <path d="M26 14s-2 4-6 6" stroke="white" strokeWidth="0.5" opacity="0.3" />
          </g>
        );
      case 'artichoke':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 26c-5 0-9-5-9-10 0-4 4-8 9-8s9 4 9 8c0 5-4 10-9 10Z" fill="#166534" stroke="#064E3B" />
            <path d="M10 16c2-1 10-1 12 0m-12 4c2-1 10-1 12 0" stroke="#BBF7D0" strokeWidth="1" opacity="0.4" />
            <path d="M16 8V4m0 22v4" stroke="#166534" strokeWidth="3" />
          </g>
        );
      case 'potato':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 14c0-4 6-7 12-7s10 4 10 8-4 9-10 9-12-3-12-10Z" fill="#D97706" stroke="#78350F" />
            <circle cx="12" cy="12" r="0.8" fill="#78350F" />
            <circle cx="20" cy="16" r="0.8" fill="#78350F" />
          </g>
        );
      case 'onion':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 26c-5 0-9-5-9-10 0-6 4-11 9-11s9 5 9 11c0 5-4 10-9 10Z" fill="#FED7AA" stroke="#9A3412" />
            <path d="M16 5V2m-3 3l-1-2" stroke="#9A3412" strokeWidth="1" />
          </g>
        );
      case 'broccoli':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 26h4V18h-4v8Z" fill="#BBF7D0" stroke="#166534" strokeWidth="2" />
            <circle cx="12" cy="14" r="5" fill="#166534" stroke="#064E3B" />
            <circle cx="20" cy="14" r="5" fill="#166534" stroke="#064E3B" />
            <circle cx="16" cy="10" r="6" fill="#166534" stroke="#064E3B" />
          </g>
        );
      case 'cauliflower':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 22c-2-2-4-8 0-12s12-4 16 0 2 10 0 12-12 4-16 0Z" fill="#166534" stroke="#064E3B" />
            <path d="M12 14c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4Z" fill="white" stroke="#D1D5DB" />
            <circle cx="14" cy="13" r="1.5" fill="white" stroke="#D1D5DB" />
            <circle cx="18" cy="15" r="1.5" fill="white" stroke="#D1D5DB" />
          </g>
        );
      case 'corn':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 24s-4-6-4-12 4-10 4-10 4 4 4 10-4 12-4 12Z" fill="#FACC15" stroke="#A16207" />
            <path d="M10 12c0 8 1 12 2 12s2-4 2-12" fill="none" stroke="#166534" strokeWidth="2" />
          </g>
        );
      case 'leek':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 28h4V18h-4v10Z" fill="#F9FAFB" stroke="#9CA3AF" />
            <path d="M14 18l-3-12h10l-3 12" fill="#16A34A" stroke="#14532D" />
          </g>
        );
      case 'daikon':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 6l4 2-4 20-4-2L14 6Z" fill="#F9FAFB" stroke="#9CA3AF" />
            <path d="M15 7l-2-4m4 4l2-3" stroke="#166534" strokeWidth="2" />
          </g>
        );
      case 'beetroot':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 26c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9Z" fill="#991B1B" stroke="#450A0A" />
            <path d="M14 8l-2-5m4 5l2-5" stroke="#166534" strokeWidth="2" />
          </g>
        );
      case 'pumpkin':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 26c-6 0-10-4-10-9s4-9 10-9 10 4 10 9-4 9-10 9Z" fill="#F97316" stroke="#9A3412" />
            <path d="M13 8c1 4 1 14 0 18m6-18c-1 4-1 14 0 18" stroke="#9A3412" opacity="0.4" />
            <path d="M16 8V4h3" stroke="#166534" strokeWidth="2" />
          </g>
        );
      case 'celery':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 28l1-14m3 14l-1-14m5 14l-2-14" stroke="#16A34A" strokeWidth="2" />
            <path d="M11 12c1-2 4-2 5 0m2 0c1-2 4-2 5 0" fill="#BBF7D0" stroke="#166534" />
          </g>
        );
      case 'fennel':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 26c-4 0-7-4-7-8s3-8 7-8 7 4 7 8-3 8-7 8Z" fill="#F0FDF4" stroke="#D1D5DB" />
            <path d="M13 12l-2-8m6 8l2-8" stroke="#16A34A" />
            <path d="M10 5l3 2m4-2l-3 2" stroke="#166534" />
          </g>
        );
      case 'kale': // Col rizada: Very curly/wavy leaves, dark green
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 26c-4 0-7-4-7-8s2-12 7-12 7 8 7 12-3 8-7 8Z" fill="#064E3B" stroke="#064E3B" />
            <path d="M16 6v18m-4-14l4 1m4-4l-4 1" stroke="#22C55E" strokeWidth="0.8" opacity="0.6" />
            {/* Curly edge simulation */}
            <path d="M10 12q-2-2 0-4t2 2m8-2q2-2 0-4t-2 2m4 8q2-2 0-4t-2 2" stroke="#064E3B" strokeWidth="1" />
            <path d="M9 18q-3 0-3-3t3-3m14 0q3 0 3 3t-3 3" stroke="#064E3B" strokeWidth="1" />
          </g>
        );
      case 'spinach': // Espinacas: Dark green, spade/smooth heart shaped leaves
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 24c-5 0-10-4-10-10s4-10 10-10 10 4 10 10-5 10-10 10Z" fill="#14532D" stroke="#064E3B" />
            <path d="M16 6v18" stroke="#BBF7D0" strokeWidth="1" opacity="0.4" />
            <path d="M16 10l-4 2m8-2l4 2m-8 6l-5 2m10-2l5 2" stroke="#BBF7D0" strokeWidth="0.5" opacity="0.3" />
            <path d="M16 24v4" stroke="#14532D" strokeWidth="3" />
          </g>
        );
      case 'chard':
      case 'lettuce':
      case 'cabbages':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 24c-5 0-9-3-9-8s4-12 9-12 9 7 9 12-4 8-9 8Z" fill="#166534" stroke="#064E3B" />
            <path d="M16 4v20m-4-14l4 1m4-4l-4 1" stroke="#BBF7D0" strokeWidth="0.5" opacity="0.5" />
          </g>
        );
      case 'romanesco':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 24c-6 0-10-4-10-9s4-9 10-9 10 4 10 9-4 9-10 9Z" fill="#22C55E" stroke="#14532D" />
            <path d="M16 6l-2 3m4-3l2 3m-4 4l-3 2m6-2l3 2" stroke="#14532D" strokeWidth="1" />
          </g>
        );
      default:
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <circle cx="16" cy="16" r="10" fill="#BBF7D0" stroke="#166534" />
          </g>
        );
    }
  };

  return (
    <svg viewBox="0 0 32 32" className={`w-full h-full ${className}`}>
      {renderIcon()}
    </svg>
  );
};

export default VegetableIcon;