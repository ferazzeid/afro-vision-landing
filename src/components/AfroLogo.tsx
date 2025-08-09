interface AfroLogoProps {
  className?: string;
  size?: number;
}

export const AfroLogo = ({ className = "", size = 200 }: AfroLogoProps) => {
  return (
    <svg
      viewBox="0 0 800 800"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Afro (large black circle) */}
      <circle cx="400" cy="320" r="280" fill="black" />
      
      {/* Face (white oval overlapping lower part of afro) */}
      <ellipse cx="400" cy="480" rx="180" ry="220" fill="white" />
      
      {/* Sunglasses */}
      {/* Left lens */}
      <ellipse cx="340" cy="420" rx="60" ry="40" fill="black" />
      
      {/* Right lens */}
      <ellipse cx="460" cy="420" rx="60" ry="40" fill="black" />
      
      {/* Bridge between lenses */}
      <rect x="390" y="410" width="20" height="8" rx="4" fill="black" />
      
      {/* Nose */}
      <ellipse cx="400" cy="480" rx="8" ry="12" fill="black" />
      
      {/* Mouth */}
      <ellipse cx="400" cy="520" rx="20" ry="8" fill="black" />
    </svg>
  );
};