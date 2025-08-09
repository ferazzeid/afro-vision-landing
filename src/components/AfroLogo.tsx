interface AfroLogoProps {
  className?: string;
  size?: number;
}

export const AfroLogo = ({ className = "", size = 200 }: AfroLogoProps) => {
  return (
    <img
      src="/lovable-uploads/0e7d8df9-6447-4ce8-b919-a65fce53fe5a.png"
      alt="Socially Famous afro face icon"
      width={size}
      height={size}
      className={className}
    />
  );
};
