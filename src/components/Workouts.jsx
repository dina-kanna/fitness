
import { useMemo, useState } from "react";

const workouts = [
  {
    id: 1,
    name: "Morning Run Challenge",
    category: "Running",
    duration: 35,
    level: "Beginner",
    calories: 300,
    progress: 60,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    color: "text-orange-400",
  },
  {
    id: 2,
    name: "Power Lifting",
    category: "Weight Training",
    duration: 50,
    level: "Advanced",
    calories: 420,
    progress: 35,
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    color: "text-sky-400",
  },
  {
    id: 3,
    name: "Core & Balance",
    category: "Pilates",
    duration: 30,
    level: "Intermediate",
    calories: 180,
    progress: 85,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    color: "text-purple-400",
  },
  {
    id: 4,
    name: "Explosive Circuit",
    category: "Circuit Training",
    duration: 25,
    level: "Advanced",
    calories: 360,
    progress: 45,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    color: "text-rose-400",
  },
];

const filters = [
  "All",
  "Running",
  "Weight Training",
  "Pilates",
  "Circuit Training",
];

const icons = {
  Running: (
    <svg
      className="h-[18px] w-[18px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="15" cy="5" r="2" />
      <path d="m13 8-3 4 4 3 2 5" />
      <path d="m10 12-5 1-2 4" />
      <path d="m13 9 4 2 3 4" />
      <path d="m14 15-5 4H5" />
    </svg>
  ),

  "Weight Training": (
    <svg
      className="h-[18px] w-[18px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 6.5v11" />
      <path d="M3 9v6" />
      <path d="M10 9v6" />
      <path d="M17.5 6.5v11" />
      <path d="M14 9v6" />
      <path d="M21 9v6" />
      <path d="M3 12h18" />
    </svg>
  ),

  Pilates: (
    <svg
      className="h-[18px] w-[18px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5l-5 3" />
      <path d="m12 12 5 3" />
      <path d="m7 15-3 5" />
      <path d="m17 15 3 5" />
      <path d="M5 21h14" />
    </svg>
  ),

  "Circuit Training": (
    <svg
      className="h-[18px] w-[18px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h8l-1 8 11-12h-8l1-8Z" />
    </svg>
  ),
};

function ClockIcon() {
  return (
    <svg
      className="h-3 w-4 shrink-0 stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.5-1-2.5-1-4 0-2 2-4 3-5 0 3 2 5 4 7a6 6 0 1 1-10 0c0 2 1.5 3 1.5 4.5Z" />
    </svg>
  );
}

export default function Workouts() {
  const [filter, setFilter] = useState("All");
  const [completed, setCompleted] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState(null);

  const filteredWorkouts = useMemo(
    () =>
      workouts.filter(
        (workout) =>
          filter === "All" || workout.category === filter
      ),
    [filter]
  );

  const completedCount = completed.length;

  const totalCalories = completed.reduce((total, id) => {
    const workout = workouts.find((item) => item.id === id);
    return total + (workout?.calories ?? 0);
  }, 0);

  function toggleWorkout(workout) {
    const wasCompleted = completed.includes(workout.id);

    setCompleted((previous) =>
      wasCompleted
        ? previous.filter((id) => id !== workout.id)
        : [...previous, workout.id]
    );

    setActiveWorkout({
      ...workout,
      justCompleted: !wasCompleted,
    });
  }

  return (
    <section
      id="workouts"
      className="relative w-full overflow-hidden bg-[#141D17] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-fitness-lime/[0.035] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-fitness-lime/[0.035] blur-[120px]" />

      {/* Full-width responsive content */}
      <div className="relative mx-auto w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-22">
        {/* Section header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <p className="section-label">YOUR NEXT CHALLENGE</p>

            <h2 className="section-title mt-3">
              Discover your workout
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-fitness-muted sm:text-base">
              Explore fresh training routines, build strength, improve
              endurance, and find a workout that matches your goals.
            </p>
          </div>

          <a
            href="#progress"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-fitness-lime/20 bg-fitness-lime/[0.05] px-4 py-3 text-sm font-bold text-fitness-lime transition hover:bg-fitness-lime/10"
          >
            View progress
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>

        {/* Workout summary */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div className="glass-card flex items-center gap-4 p-4 sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10 text-fitness-lime">
              <svg
                className="h-6 w-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6.5 6.5v11" />
                <path d="M3 9v6" />
                <path d="M10 9v6" />
                <path d="M17.5 6.5v11" />
                <path d="M14 9v6" />
                <path d="M21 9v6" />
                <path d="M3 12h18" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-fitness-muted">
                Available workouts
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                {workouts.length}
              </p>
            </div>
          </div>

          <div className="glass-card flex items-center gap-4 p-4 sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10 text-fitness-lime">
              <svg
                className="h-6 w-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-fitness-muted">
                Completed workouts
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                {completedCount}
                <span className="ml-2 text-sm font-medium text-fitness-muted">
                  / {workouts.length}
                </span>
              </p>
            </div>
          </div>

          <div className="glass-card flex items-center gap-4 p-4 sm:p-5 sm:col-span-2 xl:col-span-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
              <svg
                className="h-6 w-6 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.5-1-2.5-1-4 0-2 2-4 3-5 0 3 2 5 4 7a6 6 0 1 1-10 0c0 2 1.5 3 1.5 4.5Z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-fitness-muted">
                Estimated calories
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                {totalCalories.toLocaleString()}
                <span className="ml-2 text-xs font-medium text-fitness-muted">
                  kcal completed
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Workout category filters */}
        <div className="mt-8">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-white">
              Browse by category
            </h3>

            <p className="text-xs text-fitness-muted">
              Showing {filteredWorkouts.length}{" "}
              {filteredWorkouts.length === 1 ? "workout" : "workouts"}
            </p>
          </div>

          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-3">
            {filters.map((item) => {
              const selected = filter === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={selected}
                  className={`shrink-0 rounded-xl px-4 py-3 text-sm font-bold transition sm:px-5 ${
                    selected
                      ? "bg-fitness-lime text-fitness-dark shadow-lg shadow-fitness-lime/10"
                      : "border border-white/10 bg-white/[0.03] text-gray-400 hover:border-fitness-lime/30 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Workout cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredWorkouts.map((workout, index) => {
            const isCompleted = completed.includes(workout.id);

            return (
              <article
                key={workout.id}
                className="glass-card card-hover flex min-w-0 flex-col overflow-hidden transition duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="group relative h-52 overflow-hidden sm:h-56 xl:h-48 2xl:h-56">
                  <img
                    src={workout.image}
                    alt={`${workout.name} workout`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101915]/80 via-transparent to-[#101915]/20" />

                  <span className="absolute left-3 top-3 max-w-[65%] rounded-lg border border-white/10 bg-[#101915]/90 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                    {workout.category}
                  </span>

                  <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-[#101915]/90 px-3 py-2 text-xs font-bold text-fitness-lime backdrop-blur">
                    {workout.level}
                  </span>

                  {isCompleted && (
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg bg-fitness-lime px-3 py-2 text-xs font-extrabold text-fitness-dark">
                      <span aria-hidden="true">✓</span>
                      Completed
                    </span>
                  )}
                </div>

                {/* Workout details */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 shrink-0 ${workout.color}`}
                    >
                      {icons[workout.category]}
                    </span>

                    <h3 className="text-base font-extrabold leading-6 sm:text-lg">
                      {workout.name}
                    </h3>
                  </div>

                  {/* Workout metadata */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-fitness-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon />
                      {workout.duration} min
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <FlameIcon />
                      {workout.calories} kcal
                    </span>
                  </div>

                  {/* Sample progress */}
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                      <span className="text-fitness-muted">
                        Sample progress
                      </span>

                      <span className="font-bold text-fitness-lime">
                        {workout.progress}%
                      </span>
                    </div>

                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-white/10"
                      role="progressbar"
                      aria-label={`${workout.name} sample progress`}
                      aria-valuenow={workout.progress}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-fitness-lime transition-all duration-700"
                        style={{ width: `${workout.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Button stays at the bottom of each card */}
                  <button
                    type="button"
                    onClick={() => toggleWorkout(workout)}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-extrabold transition ${
                      isCompleted
                        ? "border border-fitness-lime/20 bg-fitness-lime/10 text-fitness-lime hover:bg-fitness-lime/15"
                        : "bg-fitness-lime text-fitness-dark hover:brightness-110"
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <span aria-hidden="true">✓</span>
                        Completed
                      </>
                    ) : (
                      <>
                        Start workout
                        <span aria-hidden="true">→</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty state for future category additions */}
        {filteredWorkouts.length === 0 && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-12 text-center">
            <h3 className="text-lg font-extrabold">
              No workouts found
            </h3>
            <p className="mt-2 text-sm text-fitness-muted">
              Try selecting a different category.
            </p>

            <button
              type="button"
              onClick={() => setFilter("All")}
              className="mt-5 rounded-xl bg-fitness-lime px-5 py-3 text-sm font-bold text-fitness-dark transition hover:brightness-110"
            >
              Show all workouts
            </button>
          </div>
        )}

        {/* Workout status message */}
        {activeWorkout && (
          <div
            aria-live="polite"
            className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-fitness-lime/20 bg-fitness-lime/[0.06] p-4 sm:flex-row sm:items-center sm:p-5"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10 text-lg text-fitness-lime">
                {activeWorkout.justCompleted ? "✓" : "↺"}
              </span>

              <div>
                <p className="text-sm font-bold text-fitness-lime">
                  {activeWorkout.justCompleted
                    ? "Workout marked complete"
                    : "Workout removed from completed"}
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  {activeWorkout.name} · {activeWorkout.duration} minutes ·{" "}
                  {activeWorkout.calories} estimated kcal
                </p>

                <p className="mt-1 text-xs leading-5 text-fitness-muted">
                  Workout completion is stored in the current React session.
                  Calories are estimates, not measured values.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveWorkout(null)}
              className="w-full shrink-0 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-gray-300 transition hover:bg-white/[0.06] sm:w-auto"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Bottom call to action */}
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <h3 className="text-base font-extrabold sm:text-lg">
              Small steps. Stronger habits.
            </h3>
            <p className="mt-1 text-sm leading-6 text-fitness-muted">
              Choose a routine, stay consistent, and track your progress.
            </p>
          </div>

          <a
            href="#goals"
            className="inline-flex w-fit shrink-0 items-center justify-center gap-2 rounded-xl bg-fitness-lime px-5 py-3 text-sm font-extrabold text-fitness-dark transition hover:brightness-110"
          >
            View your goals
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
