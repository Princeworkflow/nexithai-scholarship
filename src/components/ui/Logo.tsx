import { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  iconOnly?: boolean;
}

export const Logo = ({ className = "", iconOnly = false, ...props }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} {...props}>
      {/* Icon Mark */}
      <div className="w-[38px] h-[38px] rounded-[10px] bg-primary flex items-center justify-center shrink-0">
        <span className="text-white font-black text-2xl -skew-x-[12deg] tracking-tighter mt-0.5">N</span>
      </div>
      
      {/* Wordmark */}
      {!iconOnly && (
        <div className="flex items-start font-black text-[30px] leading-none">
          <span className="text-foreground tracking-tight">Nexith</span>
          <span className="text-primary relative ml-0.5">
            Ai
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] absolute -top-1 -right-[14px]">
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};
