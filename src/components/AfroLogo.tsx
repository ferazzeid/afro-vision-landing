interface AfroLogoProps {
  className?: string;
  size?: number;
}

// Minimalist afro face icon, pure black & white, transparent background.
// ViewBox: 0 0 800 800
export const AfroLogo = ({ className = "", size = 200 }: AfroLogoProps) => {
  return (
    <svg
      viewBox="0 0 800 800"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Socially Famous afro face icon"
      role="img"
    >
      {/* Afro (large black circle) */}
      <circle cx="400" cy="360" r="340" fill="black" />

      {/* Face base (white oval) */}
      <ellipse cx="400" cy="520" rx="220" ry="240" fill="white" />

      {/* Hairline notch (black overlay creating a concave dip at the top of the face) */}
      <path
        d="M260 460
           C320 430, 360 410, 400 410
           C440 410, 480 430, 540 460
           L540 340 L260 340 Z"
        fill="black"
      />

      {/* Sunglasses - large aviator-style lenses */}
      <ellipse cx="330" cy="460" rx="110" ry="80" fill="black" />
      <ellipse cx="470" cy="460" rx="110" ry="80" fill="black" />
      {/* Bridge between lenses */}
      <rect x="390" y="448" width="20" height="10" rx="5" fill="black" />

      {/* Nose (simple geometric) */}
      <path
        d="M380 520
           C390 510, 410 510, 420 520
           C410 528, 390 528, 380 520 Z"
        fill="black"
      />

      {/* Mouth (upper lip + lower shadow) */}
      <rect x="340" y="560" width="120" height="18" rx="9" fill="black" />
      <ellipse cx="400" cy="590" rx="90" ry="18" fill="black" />
    </svg>
  );
};
