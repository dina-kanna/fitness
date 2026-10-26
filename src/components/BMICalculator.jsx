
import { useState } from "react";

export default function BMICalculator() {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculateBMI(event) {
    event.preventDefault();

    const h = Number(height);
    const w = Number(weight);

    if (
      height.trim() === "" ||
      weight.trim() === "" ||
      !Number.isFinite(h) ||
      !Number.isFinite(w) ||
      h < 80 ||
      h > 250 ||
      w < 10 ||
      w > 500
    ) {
      setError(
        "Enter a height between 80–250 cm and weight between 10–500 kg."
      );
      setResult(null);
      return;
    }

    const bmi = w / (h / 100) ** 2;

    let category;
    let advice;
    let color;

    if (bmi < 18.5) {
      category = "Underweight";
      advice =
        "Consider discussing your nutrition and weight with a healthcare professional.";
      color = "text-sky-400";
    } else if (bmi < 25) {
      category = "Healthy weight";
      advice =
        "This is within the standard adult BMI healthy-weight range.";
      color = "text-fitness-lime";
    } else if (bmi < 30) {
      category = "Overweight";
      advice =
        "Consider sustainable activity and nutrition habits tailored to your needs.";
      color = "text-orange-400";
    } else {
      category = "Obesity range";
      advice =
        "A healthcare professional can help interpret your BMI and discuss appropriate next steps.";
      color = "text-rose-400";
    }

    setError("");
    setResult({
      bmi: bmi.toFixed(1),
      category,
      advice,
      color,
    });
  }

  function reset() {
    setHeight("170");
    setWeight("70");
    setResult(null);
    setError("");
  }

  const bmiRanges = [
    {
      range: "Below 18.5",
      label: "Underweight",
      color: "bg-sky-400",
      textColor: "text-sky-400",
    },
    {
      range: "18.5 – 24.9",
      label: "Healthy weight",
      color: "bg-fitness-lime",
      textColor: "text-fitness-lime",
    },
    {
      range: "25.0 – 29.9",
      label: "Overweight",
      color: "bg-orange-400",
      textColor: "text-orange-400",
    },
    {
      range: "30.0 and above",
      label: "Obesity range",
      color: "bg-rose-400",
      textColor: "text-rose-400",
    },
  ];

  return (
    <section
      id="bmi"
      className="relative w-full overflow-hidden bg-[#141D17] py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-fitness-lime/[0.04] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-fitness-lime/[0.035] blur-[120px]" />

      {/* Full-width responsive container */}
      <div className="relative mx-auto grid w-full max-w-full grid-cols-1 items-start gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 xl:gap-16 xl:px-16 2xl:gap-24 2xl:px-24">
        {/* Left column: Information */}
        <div className="min-w-0 lg:sticky lg:top-28">
          <p className="section-label">KNOW YOUR NUMBERS</p>

          <h2 className="section-title mt-3">
            Understand your body.
            <br />
            <span className="text-fitness-lime">
              Set your direction.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-fitness-muted sm:text-base">
            Calculate your Body Mass Index using your height and weight.
            Use it as a starting point for understanding your health, not as
            a complete measure of fitness.
          </p>

          {/* BMI categories */}
          <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="font-extrabold sm:text-lg">
                Adult BMI reference
              </h3>

              <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-fitness-muted">
                kg/m²
              </span>
            </div>

            <div className="space-y-1">
              {bmiRanges.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-xl px-3 py-4 transition hover:bg-white/[0.025] sm:px-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.color}`}
                    />

                    <span className="text-xs text-fitness-muted sm:text-sm">
                      {item.range}
                    </span>
                  </div>

                  <span
                    className={`text-right text-xs font-bold sm:text-sm ${item.textColor}`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Information card */}
          <div className="mt-5 flex items-start gap-4 rounded-2xl border border-fitness-lime/15 bg-fitness-lime/[0.045] p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10 text-lg text-fitness-lime">
              ✦
            </span>

            <div>
              <h3 className="font-bold">
                Progress over perfection
              </h3>

              <p className="mt-2 text-sm leading-6 text-fitness-muted">
                BMI is one screening measure. Fitness, strength, nutrition,
                medical history and other health indicators also matter.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Calculator */}
        <div className="min-w-0">
          <div className="glass-card overflow-hidden p-5 sm:p-7 lg:p-8 xl:p-9">
            {/* Calculator heading */}
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10 text-fitness-lime">
                <svg
                  className="h-6 w-6 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="8" y1="6" x2="16" y2="6" />
                  <path d="M16 14v4" />
                  <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
                </svg>
              </span>

              <div className="min-w-0">
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  BMI calculator
                </h3>

                <p className="mt-1 text-xs text-fitness-muted sm:text-sm">
                  Enter your measurements below
                </p>
              </div>
            </div>

            {/* Calculator form */}
            <form onSubmit={calculateBMI} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="bmi-height"
                  className="mb-2.5 block text-sm font-semibold"
                >
                  Height <span className="text-fitness-muted">(cm)</span>
                </label>

                <div className="relative">
                  <input
                    id="bmi-height"
                    type="number"
                    min="80"
                    max="250"
                    step="0.1"
                    required
                    value={height}
                    onChange={(event) => {
                      setHeight(event.target.value);
                      setError("");
                      setResult(null);
                    }}
                    placeholder="e.g. 170"
                    aria-describedby="bmi-height-help"
                    className="w-full rounded-xl border border-white/10 bg-[#101915] px-4 py-4 pr-16 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-fitness-lime/60 focus:ring-1 focus:ring-fitness-lime/20"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-fitness-muted">
                    cm
                  </span>
                </div>

                <p
                  id="bmi-height-help"
                  className="mt-2 text-xs text-fitness-muted"
                >
                  Valid range: 80–250 cm
                </p>
              </div>

              <div>
                <label
                  htmlFor="bmi-weight"
                  className="mb-2.5 block text-sm font-semibold"
                >
                  Weight <span className="text-fitness-muted">(kg)</span>
                </label>

                <div className="relative">
                  <input
                    id="bmi-weight"
                    type="number"
                    min="10"
                    max="500"
                    step="0.1"
                    required
                    value={weight}
                    onChange={(event) => {
                      setWeight(event.target.value);
                      setError("");
                      setResult(null);
                    }}
                    placeholder="e.g. 70"
                    aria-describedby="bmi-weight-help"
                    className="w-full rounded-xl border border-white/10 bg-[#101915] px-4 py-4 pr-16 text-base text-white outline-none transition placeholder:text-gray-600 focus:border-fitness-lime/60 focus:ring-1 focus:ring-fitness-lime/20"
                  />

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-fitness-muted">
                    kg
                  </span>
                </div>

                <p
                  id="bmi-weight-help"
                  className="mt-2 text-xs text-fitness-muted"
                >
                  Valid range: 10–500 kg
                </p>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-rose-400/20 bg-rose-400/[0.06] p-3 text-sm leading-6 text-rose-400"
                >
                  {error}
                </p>
              )}

              {/* Action buttons */}
              <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                <button
                  type="submit"
                  className="lime-button flex flex-1 items-center justify-center gap-2 text-center"
                >
                  Calculate BMI

                  <svg
                    className="h-[17px] w-[17px] stroke-current"
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
                </button>

                <button
                  type="button"
                  onClick={reset}
                  className="dark-button flex items-center justify-center gap-2 px-5 py-3"
                  aria-label="Reset calculator"
                  title="Reset calculator"
                >
                  <svg
                    className="h-[17px] w-[17px] stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                  </svg>

                  <span className="text-xs font-bold sm:hidden">
                    Reset
                  </span>
                </button>
              </div>
            </form>

            {/* BMI result */}
            {result && (
              <div
                aria-live="polite"
                className="mt-7 rounded-2xl border border-fitness-lime/20 bg-fitness-lime/[0.05] p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-fitness-lime">
                      Your estimated BMI
                    </p>

                    <p className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
                      {result.bmi}
                    </p>

                    <p className={`mt-3 text-base font-extrabold ${result.color}`}>
                      {result.category}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-fitness-lime/20 bg-fitness-lime/10 text-fitness-lime">
                    <svg
                      className="h-6 w-6 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 3v18M3 12h18" />
                    </svg>
                  </div>
                </div>

                {/* BMI scale */}
                <div className="mt-6">
                  <div className="flex h-2.5 overflow-hidden rounded-full">
                    <div className="w-[18.5%] bg-sky-400" />
                    <div className="w-[25%] bg-fitness-lime" />
                    <div className="w-[25%] bg-orange-400" />
                    <div className="flex-1 bg-rose-400" />
                  </div>

                  <div className="mt-2 flex justify-between gap-2 text-[9px] text-fitness-muted sm:text-[10px]">
                    <span>Underweight</span>
                    <span>Healthy</span>
                    <span>Overweight</span>
                    <span>Obesity</span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-fitness-muted">
                  {result.advice}
                </p>
              </div>
            )}

            {/* Disclaimer */}
            <p className="mt-6 text-xs leading-6 text-gray-500">
              Adult screening reference only. BMI does not directly measure
              body fat or distinguish muscle from fat. Adult categories are
              not suitable for children or teens, and BMI alone cannot
              diagnose a health condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
