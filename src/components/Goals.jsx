
import { useState } from "react";

const initialGoals = [
  {
    id: 1,
    title: "Walk 10,000 steps",
    detail: "Daily movement target",
    progress: 84,
    icon: "steps",
  },
  {
    id: 2,
    title: "Complete 4 workouts",
    detail: "Weekly training target",
    progress: 75,
    icon: "workout",
  },
  {
    id: 3,
    title: "Drink 2.5L of water",
    detail: "Daily hydration target",
    progress: 60,
    icon: "water",
  },
  {
    id: 4,
    title: "Sleep 8 hours",
    detail: "Daily recovery target",
    progress: 90,
    icon: "sleep",
  },
];

function GoalIcon({ type = "target" }) {
  const commonProps = {
    className: "h-[23px] w-[23px] stroke-current",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "steps":
      return (
        <svg {...commonProps}>
          <path d="M4 16v-2.38C4 11.5 5 9.5 7 8s3-3 3-5" />
          <path d="M12 16v-2.38C12 11.5 13 9.5 15 8s3-3 3-5" />
          <path d="M2 20h20" />
        </svg>
      );

    case "workout":
      return (
        <svg {...commonProps}>
          <path d="M6.5 6.5h11v11h-11z" />
          <path d="M2 10v4M22 10v4M6.5 12h11" />
        </svg>
      );

    case "water":
      return (
        <svg {...commonProps}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );

    case "sleep":
      return (
        <svg {...commonProps}>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
  }
}

function CheckIcon() {
  return (
    <svg
      className="h-[21px] w-[21px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg
      className="h-[17px] w-[17px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      className="h-[18px] w-[18px] stroke-current"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function Goals() {
  const [goals, setGoals] = useState(initialGoals);
  const [newGoal, setNewGoal] = useState("");
  const [error, setError] = useState("");

  function addGoal(event) {
    event.preventDefault();

    const title = newGoal.trim();

    if (!title) {
      setError("Please enter a goal name.");
      return;
    }

    setGoals((previous) => [
      ...previous,
      {
        id: Date.now(),
        title,
        detail: "Personal goal",
        progress: 0,
        icon: "target",
      },
    ]);

    setNewGoal("");
    setError("");
  }

  function toggleGoal(id) {
    setGoals((previous) =>
      previous.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              progress: goal.progress === 100 ? 0 : 100,
            }
          : goal
      )
    );
  }

  function removeGoal(id) {
    setGoals((previous) =>
      previous.filter((goal) => goal.id !== id)
    );
  }

  const completed = goals.filter(
    (goal) => goal.progress === 100
  ).length;

  const overallProgress = goals.length
    ? Math.round(
        goals.reduce((sum, goal) => sum + goal.progress, 0) /
          goals.length
      )
    : 0;

  return (
    <section
      id="goals"
      className="relative w-full overflow-hidden bg-[#141D17] py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-fitness-lime/[0.035] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fitness-lime/[0.035] blur-[120px]" />

      {/* Full-width responsive container */}
      <div className="relative mx-auto w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <p className="section-label">SMALL WINS ADD UP</p>

            <h2 className="section-title mt-3">
              Goals that keep you going.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-fitness-muted sm:text-base">
              Set your intentions, celebrate progress, and keep moving
              forward. Turn small actions into lasting habits.
            </p>
          </div>

          {/* Overall progress card */}
          <div className="flex w-full items-center gap-4 rounded-2xl border border-fitness-lime/20 bg-fitness-lime/[0.06] p-5 sm:w-auto sm:min-w-[240px]">
            <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center">
              <svg
                className="h-full w-full -rotate-90"
                viewBox="0 0 80 80"
                aria-hidden="true"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-white/10"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${(overallProgress / 100) * 201.06} 201.06`}
                  className="text-fitness-lime transition-all duration-700"
                />
              </svg>

              <span className="absolute text-sm font-extrabold text-fitness-lime">
                {overallProgress}%
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-xs text-fitness-muted">
                Overall progress
              </p>

              <p className="mt-1 text-lg font-extrabold sm:text-xl">
                Keep it up!
              </p>

              <p className="mt-1 text-xs text-fitness-muted">
                {completed} of {goals.length} goals completed
              </p>
            </div>
          </div>
        </div>

        {/* Goals and creation panel */}
        <div className="mt-9 grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)] 2xl:gap-8">
          {/* Goals list */}
          <div className="min-w-0">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold sm:text-xl">
                Your goals
              </h3>

              <span className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-fitness-muted">
                {goals.length} total
              </span>
            </div>

            {goals.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
                {goals.map((goal) => {
                  const done = goal.progress === 100;

                  return (
                    <article
                      key={goal.id}
                      className="glass-card card-hover min-w-0 p-5 sm:p-6"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${
                            done
                              ? "bg-fitness-lime text-fitness-dark"
                              : "bg-fitness-lime/10 text-fitness-lime"
                          }`}
                        >
                          <GoalIcon type={goal.icon} />
                        </span>

                        <div className="min-w-0 flex-1 pt-0.5">
                          <h4
                            className={`break-words text-sm font-extrabold sm:text-base ${
                              done ? "text-fitness-lime" : "text-white"
                            }`}
                          >
                            {goal.title}
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-fitness-muted">
                            {goal.detail}
                          </p>
                        </div>

                        <div className="flex shrink-0 items-center gap-1">
                          <button
                            type="button"
                            onClick={() => toggleGoal(goal.id)}
                            aria-label={
                              done
                                ? `Mark ${goal.title} incomplete`
                                : `Complete ${goal.title}`
                            }
                            aria-pressed={done}
                            title={done ? "Mark incomplete" : "Complete goal"}
                            className={`rounded-xl p-2 transition ${
                              done
                                ? "bg-fitness-lime text-fitness-dark"
                                : "border border-white/10 text-gray-400 hover:border-fitness-lime hover:text-fitness-lime"
                            }`}
                          >
                            <CheckIcon />
                          </button>

                          <button
                            type="button"
                            onClick={() => removeGoal(goal.id)}
                            aria-label={`Delete ${goal.title}`}
                            title="Delete goal"
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-rose-400/10 hover:text-rose-400"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>

                      {/* Goal progress */}
                      <div className="mt-6">
                        <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                          <span className="text-fitness-muted">
                            Completion
                          </span>

                          <span className="font-extrabold text-fitness-lime">
                            {goal.progress}%
                          </span>
                        </div>

                        <div
                          className="h-2 overflow-hidden rounded-full bg-white/10"
                          role="progressbar"
                          aria-valuenow={goal.progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${goal.title} progress`}
                        >
                          <div
                            className="h-full rounded-full bg-fitness-lime transition-all duration-700"
                            style={{ width: `${goal.progress}%` }}
                          />
                        </div>

                        <p className="mt-3 text-xs text-fitness-muted">
                          {done
                            ? "Goal completed — great work!"
                            : "Keep going. Every step counts."}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-12 text-center">
                <span className="text-3xl text-fitness-lime">✦</span>

                <h4 className="mt-3 font-extrabold">
                  Ready for a fresh start?
                </h4>

                <p className="mt-2 text-sm text-fitness-muted">
                  Add your first personal goal using the form.
                </p>
              </div>
            )}
          </div>

          {/* Create goal panel */}
          <aside className="glass-card h-fit min-w-0 p-5 sm:p-7 xl:sticky xl:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fitness-lime/10 text-fitness-lime">
              <GoalIcon />
            </div>

            <h3 className="mt-5 text-xl font-extrabold sm:text-2xl">
              Create a new goal
            </h3>

            <p className="mt-2 text-sm leading-6 text-fitness-muted">
              Make it personal. Every meaningful change starts with a clear
              intention.
            </p>

            <form onSubmit={addGoal} className="mt-6">
              <label
                htmlFor="new-goal"
                className="mb-2 block text-sm font-semibold"
              >
                Goal name
              </label>

              <input
                id="new-goal"
                type="text"
                maxLength={100}
                required
                value={newGoal}
                onChange={(event) => {
                  setNewGoal(event.target.value);
                  if (error) setError("");
                }}
                placeholder="e.g. Run 5 km this week"
                className="w-full rounded-xl border border-white/10 bg-[#101915] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-fitness-lime focus:ring-1 focus:ring-fitness-lime/20"
              />

              {error && (
                <p role="alert" className="mt-2 text-xs text-rose-400">
                  {error}
                </p>
              )}

              <p className="mt-2 text-right text-xs text-fitness-muted">
                {newGoal.length}/100 characters
              </p>

              <button
                type="submit"
                className="lime-button mt-3 flex w-full items-center justify-center gap-2"
              >
                <PlusIcon />
                Add my goal
              </button>
            </form>

            {/* Encouragement card */}
            <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <div className="flex items-center gap-2">
                <span className="text-fitness-lime">✦</span>
                <p className="text-sm font-bold">Remember</p>
              </div>

              <p className="mt-2 text-xs leading-5 text-fitness-muted">
                Progress should support your well-being. Adjust goals to fit
                your schedule, experience and recovery needs.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-fitness-lime/[0.05] p-4">
              <div>
                <p className="text-xs text-fitness-muted">
                  Goals completed
                </p>
                <p className="mt-1 text-xl font-extrabold text-fitness-lime">
                  {completed}/{goals.length}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xs text-fitness-muted">
                  Overall completion
                </p>
                <p className="mt-1 text-xl font-extrabold">
                  {overallProgress}%
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
