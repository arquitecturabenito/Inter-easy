import React from 'react';

interface MascotProps {
  className?: string;
  reaction?: 'idle' | 'happy';
}

const Mascot: React.FC<MascotProps> = ({ className = '', reaction = 'idle' }) => {
  // Determine animation class based on reaction state
  const animationClass = reaction === 'happy' 
    ? 'animate-[jump_0.5s_ease-in-out_infinite]' 
    : 'animate-[float_6s_ease-in-out_infinite]';

  return (
    <div className={`relative ${className} w-48 h-48 md:w-64 md:h-64 transition-transform duration-300 ${animationClass}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        {/* Shadow - scales with jump */}
        <ellipse cx="100" cy="180" rx="60" ry="10" fill="#000" fillOpacity="0.1" className={reaction === 'happy' ? 'animate-[shadowScale_0.5s_ease-in-out_infinite]' : "animate-[pulse_3s_ease-in-out_infinite]"} />
        
        {/* Body - Red Pepper */}
        <path d="M100 170 C 130 170 155 150 160 110 C 165 70 145 40 120 35 C 115 34 110 35 105 38 C 100 35 90 35 85 36 C 55 40 35 70 40 110 C 45 150 70 170 100 170 Z" fill="#EF4444" stroke="#7F1D1D" strokeWidth="3" />
        
        {/* Shine/Highlight */}
        <path d="M125 50 C 140 55 150 75 145 100" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
        
        {/* Stem - Green */}
        <path d="M95 38 C 95 38 90 20 100 10 C 105 15 110 25 110 38 L 95 38 Z" fill="#16A34A" stroke="#14532D" strokeWidth="3" strokeLinejoin="round" />
        <path d="M100 10 C 100 10 120 15 125 8" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />

        {/* Face - Changes expression if happy */}
        <g transform="translate(0, 10)">
            {/* Left Eye */}
            <circle cx="75" cy="90" r="12" fill="white" stroke="#7F1D1D" strokeWidth="2"/>
            <circle cx="77" cy="88" r="4" fill="black" />
            
            {/* Right Eye */}
            {reaction === 'happy' ? (
                 // Happy eyes (arc)
                 <path d="M115 90 Q 125 80 135 90" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" fill="none" />
            ) : (
                 // Winking eye
                 <path d="M115 95 Q 125 85 135 95" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" fill="none" />
            )}

            {/* Mouth - Open if happy */}
            {reaction === 'happy' ? (
                <path d="M85 115 Q 105 145 125 115" fill="#7F1D1D" stroke="#7F1D1D" strokeWidth="1" />
            ) : (
                <path d="M85 115 Q 105 135 125 115" stroke="#7F1D1D" strokeWidth="3" strokeLinecap="round" fill="none" />
            )}
            
            {/* Cheeks */}
            <circle cx="70" cy="105" r="5" fill="#FECACA" opacity="0.6" />
            <circle cx="140" cy="105" r="5" fill="#FECACA" opacity="0.6" />
        </g>

        {/* Arms */}
        {reaction === 'happy' ? (
             // Both arms up
             <g>
                <path d="M40 90 C 20 70 10 40 30 30" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                <circle cx="30" cy="30" r="10" fill="#EF4444" stroke="#7F1D1D" strokeWidth="2" />
                
                <path d="M160 90 C 180 70 190 40 170 30" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                <circle cx="170" cy="30" r="10" fill="#EF4444" stroke="#7F1D1D" strokeWidth="2" />
             </g>
        ) : (
             // Standard pose
             <g>
                <path d="M40 100 C 20 100 10 70 20 60" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                <circle cx="20" cy="60" r="10" fill="#EF4444" stroke="#7F1D1D" strokeWidth="2" />

                <path d="M160 100 C 180 100 180 130 165 135" stroke="#EF4444" strokeWidth="8" strokeLinecap="round" />
                <circle cx="165" cy="135" r="10" fill="#EF4444" stroke="#7F1D1D" strokeWidth="2" />
             </g>
        )}
      </svg>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes shadowScale {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(0.7); opacity: 0.05; }
        }
      `}</style>
    </div>
  );
};

export default Mascot;