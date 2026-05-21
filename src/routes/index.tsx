import { createFileRoute } from "@tanstack/react-router";
import { CouponReveal } from "@/components/CouponReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-16">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Exclusive offer
          </h1>
          <p className="text-sm text-slate-500">
            Click to reveal & copy your discount code.
          </p>
        </div>
        <CouponReveal code="SUMMERD5" />
        <CouponReveal code="WELCOME10" label="Get Coupon" />
      </div>
    </main>
  );
}
