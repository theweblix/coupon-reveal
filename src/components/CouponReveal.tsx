import { useState } from "react";

interface CouponRevealProps {
  code?: string;
  label?: string;
  onClick?: () => void;
}

export function CouponReveal({
  code = "SAVE25D5",
  label = "Show Coupon",
  onClick,
}: CouponRevealProps) {
  const [copied, setCopied] = useState(false);
  const lastTwo = code.slice(-2);
  const lastOne = code.slice(-1);
  const dots = "•".repeat(Math.max(code.length - 2, 4));


  const handleClick = () => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
    onClick?.();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group relative flex h-16 w-full max-w-md items-center overflow-hidden rounded-full border-2 border-dashed border-border bg-white pr-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] transition-all duration-500 hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.35)]"
    >
      {/* Coupon code underneath */}
      <div className="ml-auto flex items-center pl-4">
        <span className="font-mono text-lg font-semibold tracking-[0.2em] text-slate-800 select-none">
          <span className="transition-opacity duration-300 group-hover:opacity-0">
            {dots}
            {lastOne}
          </span>
          <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {lastTwo}
          </span>
        </span>
      </div>


      {/* Sliding blue overlay */}
      <div className="absolute inset-y-0 left-0 w-[72%] overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-blue-700 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-3 group-hover:shadow-[0_8px_24px_-6px_rgba(37,99,235,0.5)]">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-base font-semibold tracking-wide text-white">
            {copied ? "Copied!" : label}
          </span>
        </div>
        {/* Glossy shine */}
        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-full group-hover:opacity-100" />
      </div>
    </button>
  );
}
