interface AfroLogoProps {
  className?: string;
  size?: number;
}

export const AfroLogo = ({ className = "", size = 200 }: AfroLogoProps) => {
  return (
    <img
      src="/lovable-uploads/8fb2bd42-d6c9-43cf-b1c4-06d7a053c098.png"
      alt="Socially Famous afro face icon"
      width={size}
      height={size}
      className={className}
    />
  );
};
