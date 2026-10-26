export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-28 lg:pt-32"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-fitness-lime/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-fitness-lime/[0.04] blur-[120px]" />

      {/* Main container grid */}
      <div className="relative mx-auto grid w-full max-w-[1920px] items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10 xl:gap-16 xl:px-16 2xl:gap-20 2xl:px-24">
        
        {/* Left Content Area */}
        <div className="reveal relative z-10 w-full">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-fitness-lime/20 bg-fitness-lime/[0.08] px-3 py-2">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-fitness-lime" />
            <span className="text-xs font-bold tracking-wide text-fitness-lime sm:text-sm">
              YOUR FITNESS JOURNEY STARTS HERE
            </span>
          </div>

          <h1 className="max-w-full text-4xl font-extrabold leading-[1.08] tracking-[-1.5px] sm:text-5xl sm:tracking-[-2px] md:text-6xl xl:text-7xl 2xl:text-[84px]">
            Measure
            <br />
            the work. <span className="text-fitness-lime">Feel the</span>
            <br />
            change.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            FitTrack keeps workouts, meals, and weekly momentum in one place. Log a session, read the charts, and keep each goal tied to a number you can actually move.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#workouts"
              className="lime-button flex items-center justify-center gap-2"
            >
              Start workouts
              <svg
                className="h-[18px] w-[18px] stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a
              href="#progress"
              className="dark-button flex items-center justify-center gap-2"
            >
              View progress
            </a>
          </div>
        </div>

        {/* Right Dashboard Interactive Preview Component */}
        <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none">
          
          {/* Top Quick Category Selection Cards */}
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-[#121A15] p-3 transition hover:border-fitness-lime/40">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-fitness-lime/10 text-fitness-lime mb-2">
                ⚡
              </span>
              <p className="font-extrabold text-white text-sm">Cardio</p>
              <p className="text-[11px] text-gray-400">Engine</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121A15] p-3 transition hover:border-fitness-lime/40">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-fitness-lime/10 text-fitness-lime mb-2">
                🏋️
              </span>
              <p className="font-extrabold text-white text-sm">Strength Training</p>
              <p className="text-[11px] text-gray-400">Muscle</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121A15] p-3 transition hover:border-fitness-lime/40">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 mb-2">
                🧘
              </span>
              <p className="font-extrabold text-white text-sm">Yoga</p>
              <p className="text-[11px] text-gray-400">Mobility</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121A15] p-3 transition hover:border-fitness-lime/40">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 mb-2">
                🔥
              </span>
              <p className="font-extrabold text-white text-sm">HIIT</p>
              <p className="text-[11px] text-gray-400">Conditioning</p>
            </div>
          </div>

          {/* Main Dashboard Preview Card Container */}
          <div className="rounded-[24px] border border-white/10 bg-[#0E1511] p-5 shadow-2xl sm:p-6">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-semibold text-gray-400">Today · Mon</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-fitness-lime/10 px-2.5 py-0.5 text-[10px] font-bold text-fitness-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-fitness-lime animate-pulse" />
                LIVE
              </span>
            </div>

            {/* Metrics Grid */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              {/* Steps Subcard */}
              <div className="rounded-2xl border border-white/5 bg-[#121A15] p-4">
                <p className="text-[11px] font-bold tracking-wider text-gray-400">STEPS</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">8,420</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full border-2 border-fitness-lime flex items-center justify-center text-[10px] font-bold text-fitness-lime">
                    84%
                  </div>
                  <p className="text-xs text-gray-400">of 10,000 daily goal</p>
                </div>
              </div>

              {/* Heart Rate Subcard */}
              <div className="rounded-2xl border border-white/5 bg-[#121A15] p-4">
                <p className="text-[11px] font-bold tracking-wider text-gray-400">HEART RATE</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  132 <span className="text-sm font-normal text-gray-400">bpm</span>
                </p>
                <div className="mt-3">
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full w-[70%]" />
                  </div>
                  <p className="mt-1.5 text-[11px] text-gray-400">Zone 2 · aerobic</p>
                </div>
              </div>

            </div>

            {/* Weekly Activity Bar Chart Preview */}
            <div className="mt-5 rounded-2xl border border-white/5 bg-[#121A15] p-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-gray-300">Week minutes</p>
                <p className="text-xs font-bold text-fitness-lime">307 min</p>
              </div>

              <div className="grid grid-cols-7 gap-2 items-end h-16">
                <div className="bg-fitness-lime rounded-t-lg h-full flex flex-col justify-end items-center pb-1 text-[9px] font-bold text-[#0B110E]">MO</div>
                <div className="bg-white/10 rounded-t-lg h-3/5 flex flex-col justify-end items-center pb-1 text-[9px] font-semibold text-gray-400">TU</div>
                <div className="bg-white/10 rounded-t-lg h-2/5 flex flex-col justify-end items-center pb-1 text-[9px] font-semibold text-gray-400">WE</div>
                <div className="bg-white/10 rounded-t-lg h-4/5 flex flex-col justify-end items-center pb-1 text-[9px] font-semibold text-gray-400">TH</div>
                <div className="bg-white/10 rounded-t-lg h-3/5 flex flex-col justify-end items-center pb-1 text-[9px] font-semibold text-gray-400">FR</div>
                <div className="bg-white/10 rounded-t-lg h-full flex flex-col justify-end items-center pb-1 text-[9px] font-semibold text-gray-400">SA</div>
                <div className="bg-white/10 rounded-t-lg h-1/4 flex flex-col justify-end items-center pb-1 text-[9px] font-semibold text-gray-400">SU</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}