"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2 rounded-md font-medium transition shadow-sm";
  const styles =
    variant === "primary"
      ? `${base} bg-[var(--primary)] text-white border border-[var(--paper-border)] hover:opacity-95`
      : `${base} bg-transparent dark:bg-white/[0.05] border border-[var(--paper-border)] text-[var(--fg)] hover:bg-[var(--section-alt-bg)] dark:hover:bg-white/[0.08]`;

  return (
    <button {...props} className={`${styles} ${props.className ?? ""}`}>
      {children}
    </button>
  );
}
