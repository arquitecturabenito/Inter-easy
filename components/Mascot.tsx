import React from 'react';

interface MascotProps {
  className?: string;
  reaction?: 'idle' | 'happy';
}

const Mascot: React.FC<MascotProps> = ({ className = '', reaction = 'idle' }) => {
  const animationClass = reaction === 'happy' 
    ? 'animate-[jump_0.5s_ease-in-out_infinite]' 
    : 'animate-[float_6s_ease-in-out_infinite]';

  return (
    <div className={`relative ${className} w-48 h-48 md:w-64 md:h-64 transition-transform duration-300 ${animationClass}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Shadow */}
        <ellipse cx="100" cy="188" rx="60" ry="8" fill="#000" fillOpacity="0.1" />

        {/* Legs */}
        <path d="M75 160 Q 75 180 65 180" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
        <path d="M125 160 Q 125 180 135 180" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />

        {/* Shoes (Sneakers) */}
        <g className="shoes">
            {/* Left Shoe */}
            <g transform="translate(30, 168) rotate(-10)">
                <path d="M0 20 Q 0 5 15 0 L 45 5 L 50 20 Z" fill="#EF4444" stroke="#1A1A1A" strokeWidth="2" />
                <path d="M0 20 L 50 20 Q 50 25 45 25 L 5 25 Q 0 25 0 20Z" fill="white" stroke="#1A1A1A" strokeWidth="2" />
                <path d="M0 10 Q 5 10 10 15" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <path d="M35 5 L 35 15 M 40 5 L 40 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </g>
            {/* Right Shoe */}
            <g transform="translate(115, 168) rotate(10)">
                <path d="M0 5 Q 35 0 50 20 L 0 20 Z" fill="#EF4444" stroke="#1A1A1A" strokeWidth="2" />
                <path d="M0 20 L 50 20 Q 50 25 45 25 L 5 25 Q 0 25 0 20Z" fill="white" stroke="#1A1A1A" strokeWidth="2" />
                <path d="M10 5 L 10 15 M 15 5 L 15 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M40 10 Q 45 10 50 15" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </g>
        </g>

        {/* Arms */}
        <path d="M50 110 Q 25 110 25 130" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
        <path d="M150 110 Q 175 110 175 130" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />

        {/* Gloves */}
        <g className="gloves">
            {/* Left Glove */}
            <g transform="translate(10, 125)">
                <path d="M5 5 Q 0 15 10 25 Q 25 25 30 15 Q 30 0 15 0 Z" fill="white" stroke="#1A1A1A" strokeWidth="2" />
                <path d="M15 5 L 15 15 M 20 5 L 20 15" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" />
            </g>
            {/* Right Glove */}
            <g transform="translate(160, 125)">
                <path d="M5 15 Q 10 25 25 25 Q 35 15 30 5 Q 20 0 5 5 Z" fill="white" stroke="#1A1A1A" strokeWidth="2" />
                <path d="M10 5 L 10 15 M 15 5 L 15 15" stroke="#1A1A1A" strokeWidth="1" opacity="0.2" />
            </g>
        </g>

        {/* Pepper Body */}
        <g className="body">
            {/* The multi-lobed pepper shape */}
            <path 
                d="M100 35 
                   C 60 35 40 45 35 85 
                   C 30 125 50 175 100 175 
                   C 150 175 170 125 165 85 
                   C 160 45 140 35 100 35 Z" 
                fill="#EF4444" 
                stroke="#1A1A1A" 
                strokeWidth="3" 
            />
            {/* Lobe detail lines */}
            <path d="M75 40 Q 85 100 75 165" stroke="#991B1B" strokeWidth="2" opacity="0.3" fill="none" />
            <path d="M125 40 Q 115 100 125 165" stroke="#991B1B" strokeWidth="2" opacity="0.3" fill="none" />
            
            {/* Glossy highlights like the image */}
            <path d="M50 60 Q 45 80 50 100" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.3" />
            <path d="M150 60 Q 155 80 150 100" stroke="white" strokeWidth="8" strokeLinecap="round" opacity="0.3" />
            <ellipse cx="80" cy="50" rx="15" ry="5" fill="white" opacity="0.2" transform="rotate(-15 80 50)" />
            <ellipse cx="120" cy="50" rx="15" ry="5" fill="white" opacity="0.2" transform="rotate(15 120 50)" />
        </g>

        {/* Stem (Detailed like the image) */}
        <g className="stem">
            <path d="M85 45 Q 100 55 115 45 L 115 40 Q 100 35 85 40 Z" fill="#166534" stroke="#1A1A1A" strokeWidth="2" />
            <path d="M92 42 Q 92 10 115 15" stroke="#4ADE80" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M92 42 Q 92 10 115 15" stroke="#166534" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Stem top cut face */}
            <ellipse cx="115" cy="15" rx="6" ry="4" fill="#166534" transform="rotate(15 115 15)" />
            <circle cx="115" cy="15" r="2" fill="#4ADE80" opacity="0.5" />
        </g>

        {/* Face */}
        <g className="face">
            {/* Blush */}
            <circle cx="65" cy="115" r="8" fill="#F87171" opacity="0.4" />
            <circle cx="135" cy="115" r="8" fill="#F87171" opacity="0.4" />
            
            {/* Glossy Anime Eyes */}
            <g className="eyes">
                <ellipse cx="80" cy="95" rx="18" ry="22" fill="#1A1A1A" />
                <circle cx="85" cy="85" r="6" fill="white" />
                <circle cx="88" cy="102" r="3" fill="white" />
                
                <ellipse cx="120" cy="95" rx="18" ry="22" fill="#1A1A1A" />
                <circle cx="115" cy="85" r="6" fill="white" />
                <circle cx="112" cy="102" r="3" fill="white" />
            </g>

            {/* Simple Smile */}
            <path d="M90 115 Q 100 125 110 115" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Eyebrows */}
            <path d="M68 68 Q 75 62 82 68" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M118 68 Q 125 62 132 68" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      </svg>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
      `}</style>
    </div>
  );
};

export default Mascot;