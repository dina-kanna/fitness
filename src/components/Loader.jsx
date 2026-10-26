
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const interval = 20;
    const step = (100 / duration) * interval;

    const timer = window.setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + step, 100);

        if (next >= 100) {
          window.clearInterval(timer);
        }

        return next;
      });
    }, interval);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0b110e] text-white">
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-[#b9f66b]/[0.07] blur-[100px]" />

      {/* Animated fitness icon */}
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-r-[#b9f66b]/30 border-t-[#b9f66b]" />

        <div className="absolute inset-3 animate-[spin_2s_linear_infinite_reverse] rounded-full border-2 border-transparent border-b-[#b9f66b]/50 border-l-[#b9f66b]" />

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b9f66b] text-[#101915] shadow-[0_0_35px_rgba(185,246,107,0.25)]">
          <svg
            className="h-9 w-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
      </div>

      <h1 className="mt-8 text-3xl font-black tracking-tight">
        fit<span className="text-[#b9f66b]">track</span>
      </h1>

      <p className="mt-3 text-sm tracking-wide text-gray-400">
        Your journey. Your progress. Your strength.
      </p>

      {/* Progress percentage */}
      <div className="mt-9 w-64 max-w-[80vw]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Loading
          </span>

          <span className="text-sm font-bold tabular-nums text-[#b9f66b]">
            {Math.round(progress)}%
          </span>
        </div>

        <div
          className="h-1.5 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-label="Page loading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full rounded-full bg-[#b9f66b] shadow-[0_0_12px_rgba(185,246,107,0.6)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
        Getting you ready
      </p>
    </div>
  );
}
