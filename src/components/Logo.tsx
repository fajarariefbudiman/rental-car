interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const dim = size === "lg" ? 96 : size === "md" ? 56 : 40;
  const textSize = size === "lg" ? "text-base" : size === "md" ? "text-xs" : "text-[10px]";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className="relative flex items-center justify-center rounded-xl bg-black"
        style={{ width: dim, height: dim }}
      >
        <span className="font-display font-black text-white" style={{ fontSize: dim * 0.45 }}>
          T<span className="text-primary">P</span>
        </span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary" />
      </div>
      {showText && (
        <span className={`mt-1 font-semibold tracking-wide ${textSize}`}>
          temanpergi.id
        </span>
      )}
    </div>
  );
};
