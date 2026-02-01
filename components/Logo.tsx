import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  subtitle?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', subtitle = 'Green Trade' }) => {
  const textColor = variant === 'dark' ? 'text-deep-green' : 'text-cream';
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative shrink-0">
        {/* Globe with Green Arrow and Blue Swoosh */}
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* White Background for Globe to ensure visibility on all backgrounds */}
            <circle cx="50" cy="50" r="44" fill="white" />
            
            {/* Continents (Americas approximation) */}
            <path d="M42 22C46 22 52 25 50 32C48 38 38 36 40 42C42 48 50 46 52 54C54 62 48 68 44 64C40 60 38 54 38 50C38 46 32 42 34 36C36 30 38 22 42 22Z" fill="#16A34A" />
            <path d="M60 28C64 28 68 32 64 36C60 40 56 36 60 28Z" fill="#16A34A" />

            {/* Green Arrow (Top) - Wrapping around top-right */}
            <path d="M12 50 C 12 28 30 10 52 10 C 68 10 82 18 90 30 L 80 32 L 98 42 L 98 22 L 92 26 C 84 14 68 4 50 4 C 24 4 4 24 4 50 L 12 50 Z" fill="#16A34A" />
            
            {/* Highlight on green arrow */}
            <path d="M25 20 C 35 12 50 10 65 14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

            {/* Blue Swoosh (Bottom) - Wrapping around bottom */}
            <path d="M8 55 C 10 80 32 96 58 96 C 75 96 88 88 94 75 L 86 70 C 80 80 70 88 58 88 C 38 88 20 75 16 55 L 8 55 Z" fill="#2563EB" />
            
            {/* Speed lines in blue swoosh (Simulating the cutouts in reference) */}
            <path d="M22 72 C 37 87 57 92 75 82" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <path d="M32 84 C 42 90 52 90 62 87" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-serif text-2xl tracking-tight ${textColor}`}>
          Inter<span className="text-electric-blue italic">EASY</span>
        </span>
        <span className={`font-sans text-[10px] font-bold tracking-widest uppercase ${variant === 'dark' ? 'text-fresh-green' : 'text-white/80'}`}>
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Logo;