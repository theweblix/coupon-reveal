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
  const maskedCode = "•".repeat(Math.max(code.length - 2, 4)) + code.slice(-2);


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
      className="group relative flex h-16 w-full max-w-md items-center overflow-hidden rounded-full border-2 border-dashed border-border bg-card pr-6 shadow-[var(--shadow-coupon)] transition-all duration-500 hover:shadow-[var(--shadow-coupon-hover)]"
    >
      {/* Coupon code underneath */}
      <div className="absolute inset-y-0 right-6 z-0 flex items-center">
        <span className="select-none font-mono text-lg font-semibold tracking-[0.2em] text-foreground">
          {maskedCode}
        </span>
      </div>


      {/* Sliding blue overlay */}
      <div className="absolute inset-y-0 left-0 z-10 w-[calc(100%-2.35rem)] overflow-hidden rounded-full bg-[image:var(--gradient-coupon)] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-x-5 group-hover:shadow-[var(--shadow-coupon-blue)]">
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-base font-semibold tracking-wide text-primary-foreground">
            {copied ? "Copied!" : label}
          </span>
        </div>
        {/* Glossy shine */}
        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-[image:var(--gradient-coupon-shine)] opacity-0 transition-all duration-700 ease-out group-hover:left-full group-hover:opacity-100" />
      </div>
    </button>
  );
}
