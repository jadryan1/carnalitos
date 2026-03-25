import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-4 px-8 py-3.5 rounded-full font-sans font-bold transition-all duration-300 shadow-sm",
          variant === "primary" &&
            "bg-[#E31E24] text-white hover:scale-105 hover:shadow-[0_8px_24px_rgba(227,30,36,0.3)] border border-transparent",
          variant === "secondary" &&
            "bg-white/90 border border-black/5 backdrop-blur-[24px] text-[#1A1A1A] hover:scale-[1.03] hover:border-[#E31E24]",
          variant === "outline" && "bg-transparent border border-black/20 text-[#1A1A1A] hover:bg-black/5 hover:border-black/30",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {variant === "primary" && (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
