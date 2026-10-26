import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BrandIcon() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B9F66B] text-[#0B110D] shadow-[0_0_25px_rgba(185,246,107,0.2)]">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    </span>
  );
}

export default function Login() {
  const navigate = useNavigate();

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString();
    const confirmPassword = formData.get("confirmPassword")?.toString();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (isSignUp) {
      if (!name) {
        setError("Please enter your full name.");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    let existingAccounts;

    try {
      existingAccounts = JSON.parse(
        localStorage.getItem("fittrackAccounts") || "[]"
      );

      if (!Array.isArray(existingAccounts)) {
        existingAccounts = [];
      }
    } catch {
      setError("Unable to read account data. Please check browser storage.");
      return;
    }

    const normalizedEmail = email.toLowerCase();

    const existingAccount = existingAccounts.find(
      (account) => account.email?.toLowerCase() === normalizedEmail
    );

    if (isSignUp && existingAccount) {
      setError("This email is already registered. Please log in.");
      return;
    }

    if (!isSignUp && !existingAccount) {
      setError("Account not found. Please sign up first.");
      return;
    }

    if (!isSignUp && existingAccount.password !== password) {
      setError("Incorrect email or password.");
      return;
    }

    const profile = isSignUp
      ? {
          name,
          email,
          goal: "Build consistency",
          weight: "70",
          height: "175",
          joined: new Date().toLocaleDateString(),
        }
      : existingAccount.profile || {
          name: existingAccount.name || email.split("@")[0],
          email,
          goal: "Build consistency",
          weight: "70",
          height: "175",
          joined: new Date().toLocaleDateString(),
        };

    try {
      if (isSignUp) {
        existingAccounts.push({
          name,
          email,
          password,
          profile,
        });

        localStorage.setItem(
          "fittrackAccounts",
          JSON.stringify(existingAccounts)
        );
      }

      localStorage.setItem("fittrackProfile", JSON.stringify(profile));
      navigate("/profile");
    } catch {
      setError("Unable to save your account. Please check browser storage.");
    }
  }

  function switchMode(mode = !isSignUp) {
    setIsSignUp(mode);
    setShowPassword(false);
    setError("");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080D0A] px-4 pb-10 pt-24 text-white sm:px-6 sm:pt-28">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-lime-400/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/10 bg-[#101712]/90 shadow-[0_25px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl md:grid-cols-2">
        {/* Left image panel */}
        <section className="relative hidden min-h-[720px] overflow-hidden md:flex md:flex-col md:justify-between">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85"
            alt="Modern gym with workout equipment"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080D0A]/70 via-[#080D0A]/40 to-[#080D0A]" />
          <div className="absolute inset-0 bg-lime-400/[0.06] mix-blend-screen" />

          {/* Desktop brand */}
          <Link
            to="/"
            className="relative z-10 flex items-center gap-3 p-8 lg:p-10"
          >
            <BrandIcon />

            <div>
              <p className="whitespace-nowrap text-xl font-extrabold tracking-tight">
                <span className="text-white">Fit</span>
                <span className="text-[#B9F66B]">track</span>
              </p>
              <p className="text-xs text-gray-300">Your fitness journey</p>
            </div>
          </Link>

          {/* Hero content */}
          <div className="relative z-10 p-8 pb-12 lg:p-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-lime-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-300" />
              Your next chapter starts here
            </span>

            <h1 className="mt-7 max-w-lg text-5xl font-black leading-[1.08] tracking-tight lg:text-6xl">
              Become
              <br />
              stronger than
              <br />
              <span className="text-lime-300">yesterday.</span>
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-300">
              Your goals. Your pace. Your progress. Build healthy habits
              and turn small daily wins into lasting results.
            </p>

            <div className="mt-9 grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                <p className="text-2xl font-black text-lime-300">01</p>
                <p className="mt-1 text-xs text-gray-300">
                  Start your journey
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-md">
                <p className="text-2xl font-black text-lime-300">100%</p>
                <p className="mt-1 text-xs text-gray-300">Focus on you</p>
              </div>
            </div>

            <p className="mt-9 text-xs font-medium tracking-wide text-gray-400">
              CONSISTENCY OVER PERFECTION.
            </p>
          </div>
        </section>

        {/* Login and signup panel */}
        <section className="flex min-w-0 items-center justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
          <div className="w-full max-w-md">
            {/* Mobile brand */}
            <Link
              to="/"
              className="mb-8 flex items-center gap-3 md:hidden"
            >
              <BrandIcon />

              <div>
                <p className="text-lg font-black">
                  <span className="text-white">Fit</span>
                  <span className="text-lime-300">track</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Your fitness journey
                </p>
              </div>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-lime-300"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-300">
                {isSignUp ? "Join the movement" : "Welcome back"}
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {isSignUp ? (
                  <>
                    Create your
                    <br />
                    <span className="text-lime-300">account.</span>
                  </>
                ) : (
                  <>
                    Your journey
                    <br />
                    <span className="text-lime-300">continues.</span>
                  </>
                )}
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                {isSignUp
                  ? "Set up your account and take the first step toward a stronger you."
                  : "Sign in to track your workouts and keep moving toward your goals."}
              </p>
            </div>

            {/* Login / signup tabs */}
            <div className="mt-7 grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-black/30 p-1.5">
              <button
                type="button"
                onClick={() => switchMode(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  !isSignUp
                    ? "bg-lime-300 text-[#101610] shadow-[0_4px_20px_rgba(190,242,100,0.12)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => switchMode(true)}
                className={`rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
                  isSignUp
                    ? "bg-lime-300 text-[#101610] shadow-[0_4px_20px_rgba(190,242,100,0.12)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form
              key={isSignUp ? "signup" : "login"}
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              {isSignUp && (
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-200"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Alex Johnson"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300/70 focus:bg-lime-300/[0.04] focus:ring-4 focus:ring-lime-300/10"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300/70 focus:bg-lime-300/[0.04] focus:ring-4 focus:ring-lime-300/10"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-200"
                  >
                    Password
                  </label>

                  {isSignUp && (
                    <span className="text-[11px] text-gray-500">
                      6 characters minimum
                    </span>
                  )}
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={
                      isSignUp ? "new-password" : "current-password"
                    }
                    placeholder={
                      isSignUp
                        ? "Create a strong password"
                        : "Enter your password"
                    }
                    minLength={isSignUp ? 6 : undefined}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 pr-16 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300/70 focus:bg-lime-300/[0.04] focus:ring-4 focus:ring-lime-300/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-lime-300 transition hover:text-lime-200"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-gray-200"
                  >
                    Confirm password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Enter your password again"
                    minLength={6}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-300/70 focus:bg-lime-300/[0.04] focus:ring-4 focus:ring-lime-300/10"
                  />
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="text-gray-500">
                    Good to see you again.
                  </span>
                  <span className="font-semibold text-lime-300">
                    Stay consistent
                  </span>
                </div>
              )}

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm leading-5 text-red-300"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-lime-300 px-5 py-4 text-sm font-black text-[#101610] shadow-[0_8px_30px_rgba(190,242,100,0.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_12px_35px_rgba(190,242,100,0.2)] active:translate-y-0"
              >
                {isSignUp ? "Create my account" : "Login to FitTrack"}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-600">
                Your fitness era
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-gray-400">
              {isSignUp ? "Already have an account?" : "New to FitTrack?"}{" "}
              <button
                type="button"
                onClick={switchMode}
                className="font-bold text-lime-300 transition hover:text-lime-200 hover:underline"
              >
                {isSignUp ? "Login instead" : "Join for free"}
              </button>
            </p>

            <p className="mt-6 text-center text-[11px] leading-5 text-gray-600">
              Demo mode: account data is saved in this browser.
              <br />
              Use a secure backend for production authentication.
            </p>
          </div>
        </section>
      </div>

      <p className="relative mt-6 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-gray-600">
        Train smart · Stay consistent · Keep growing
      </p>
    </main>
  );
}