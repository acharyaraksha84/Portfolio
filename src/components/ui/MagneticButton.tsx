import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  target,
  rel,
}: MagneticButtonProps) {
  const { ref, springX, springY, onMouseMove, onMouseLeave } = useMagnetic(0.22);

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-white text-bg hover:bg-white/90",
    secondary:
      "border border-border text-white hover:border-border-hover hover:bg-white/[0.03]",
    ghost: "text-text-muted hover:text-white",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as never}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </Component>
  );
}
