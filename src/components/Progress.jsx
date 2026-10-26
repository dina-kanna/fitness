
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const activity = [
  { day: "Mon", calories: 320, weight: 72.4 },
  { day: "Tue", calories: 450, weight: 72.2 },
  { day: "Wed", calories: 280, weight: 72.3 },
  { day: "Thu", calories: 520, weight: 72.0 },
  { day: "Fri", calories: 410, weight: 71.9 },
  { day: "Sat", calories: 620, weight: 71.8 },
  { day: "Sun", calories: 380, weight: 71.7 },
];

const consistency = [
  { name: "Completed", value: 72 },
  { name: "Remaining", value: 28 },
];

const stats = [
  {
    label: "Workout sessions",
    value: "18",
    note: "This month",
    icon: (
      <svg
        className="h-[19px] w-[19px] stroke-current text-fitness-lime"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Goal completion",
    value: "72%",
    note: "Monthly target",
    icon: (
      <svg
        className="h-[19px] w-[19px] stroke-current text-fitness-lime"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "Personal bests",
    value: "06",
    note: "Achievements",
    icon: (
      <svg
        className="h-[19px] w-[19px] stroke-current text-fitness-lime"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

const tooltipStyle = {
  background: "#19231D",
  border: "1px solid #37443A",
  borderRadius: 12,
  color: "#fff",
};

const axisTick = {
  fill: "#9CA3AF",
  fontSize: 12,
};

function ChartHeading({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-base font-extrabold sm:text-lg">{title}</h3>
      <p className="mt-1 text-xs leading-5 text-fitness-muted">
        {subtitle}
      </p>
    </div>
  );
}

export default function Progress() {
  return (
    <section
      id="progress"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-fitness-lime/[0.035] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fitness-lime/[0.035] blur-[120px]" />

      {/* Full-width responsive container */}
      <div className="relative mx-auto w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24">
        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 lg:mb-10 lg:flex-row lg:items-end">
          <div>
            <p className="section-label">YOUR GROWTH</p>

            <h2 className="section-title mt-3">
              Progress, made visible.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-fitness-muted sm:text-base">
              See your consistency at a glance. Every session is a step
              toward a stronger, healthier you.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl border border-fitness-lime/20 bg-fitness-lime/[0.06] px-4 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-fitness-lime/10 text-xl text-fitness-lime">
              ✦
            </span>
            <div>
              <p className="text-xs text-fitness-muted">
                Weekly activity
              </p>
              <p className="text-sm font-extrabold">
                {activity.reduce((sum, day) => sum + day.calories, 0).toLocaleString()} kcal
              </p>
            </div>
          </div>
        </div>

        {/* Statistics cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="glass-card card-hover min-w-0 p-5 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-fitness-muted">
                  {stat.label}
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10">
                  {stat.icon}
                </span>
              </div>

              <p className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-fitness-muted">
                {stat.note}
              </p>
            </article>
          ))}
        </div>

        {/* Main chart grid */}
        <div className="mt-5 grid grid-cols-1 items-stretch gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,1fr)]">
          {/* Calories chart */}
          <article className="glass-card min-w-0 p-4 sm:p-6 lg:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <ChartHeading
                title="Calories burned"
                subtitle="Daily estimated activity · kcal"
              />

              <div className="flex items-center gap-2 rounded-lg border border-fitness-lime/15 bg-fitness-lime/[0.05] px-3 py-2 text-xs font-bold text-fitness-lime">
                <svg
                  className="h-[15px] w-[15px] stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                Weekly view
              </div>
            </div>

            <div
              className="mt-6 h-[240px] w-full sm:h-[290px] lg:h-[320px]"
              role="img"
              aria-label="Area chart showing estimated daily calories burned from Monday to Sunday"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={activity}
                  margin={{ top: 10, right: 8, left: -18, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="progressCalorieFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#B9F66B"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="100%"
                        stopColor="#B9F66B"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#ffffff10"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="day"
                    tick={axisTick}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />

                  <YAxis
                    width={42}
                    tick={{ ...axisTick, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={6}
                  />

                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value) => [`${value} kcal`, "Calories"]}
                    labelStyle={{ color: "#B9F66B", marginBottom: 4 }}
                  />

                  <Area
                    type="monotone"
                    dataKey="calories"
                    name="Calories"
                    stroke="#B9F66B"
                    strokeWidth={3}
                    fill="url(#progressCalorieFill)"
                    activeDot={{
                      r: 5,
                      fill: "#B9F66B",
                      stroke: "#19231D",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-3 sm:grid-cols-3">
              <div>
                <p className="text-xs text-fitness-muted">Weekly total</p>
                <p className="mt-1 text-lg font-extrabold text-fitness-lime">
                  {activity.reduce((sum, day) => sum + day.calories, 0).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-xs text-fitness-muted">Daily average</p>
                <p className="mt-1 text-lg font-extrabold">
                  {Math.round(
                    activity.reduce((sum, day) => sum + day.calories, 0) /
                      activity.length
                  )}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs text-fitness-muted">Most active day</p>
                <p className="mt-1 text-lg font-extrabold">
                  {activity.reduce((best, day) =>
                    day.calories > best.calories ? day : best
                  ).day}
                </p>
              </div>
            </div>
          </article>

          {/* Weekly consistency */}
          <article className="glass-card flex min-w-0 flex-col p-4 sm:p-6 lg:p-7">
            <ChartHeading
              title="Weekly consistency"
              subtitle="Illustrative completion rate"
            />

            <div
              className="relative mt-3 h-[220px] w-full sm:h-[250px]"
              role="img"
              aria-label="Donut chart showing 72 percent completed and 28 percent remaining"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={consistency}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="65%"
                    outerRadius="84%"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                    paddingAngle={3}
                  >
                    <Cell fill="#B9F66B" />
                    <Cell fill="#2B392E" />
                  </Pie>

                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-4xl font-extrabold">72%</p>
                <p className="mt-1 text-xs text-fitness-muted">
                  Completed
                </p>
              </div>
            </div>

            <div className="mt-2 space-y-4">
              {consistency.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="flex items-center gap-2 text-gray-300">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        item.name === "Completed"
                          ? "bg-fitness-lime"
                          : "bg-[#2B392E]"
                      }`}
                    />
                    {item.name}
                  </span>

                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-fitness-lime/10 bg-fitness-lime/[0.06] p-4">
              <p className="text-sm font-bold text-fitness-lime">
                One step at a time
              </p>
              <p className="mt-2 text-xs leading-5 text-fitness-muted">
                Keep building your routine. Consistency matters more than
                perfection.
              </p>
            </div>
          </article>
        </div>

        {/* Weight trend */}
        <article className="mt-5 glass-card min-w-0 p-4 sm:p-6 lg:p-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <ChartHeading
              title="Weight trend"
              subtitle="Sample weekly measurements · kg"
            />

            <div className="flex w-fit items-center gap-2 rounded-lg border border-sky-400/15 bg-sky-400/[0.05] px-3 py-2 text-xs font-bold text-sky-400">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Weekly overview
            </div>
          </div>

          <div
            className="mt-6 h-[230px] w-full sm:h-[280px] lg:h-[320px]"
            role="img"
            aria-label="Area chart showing sample weight measurements throughout the week"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={activity}
                margin={{ top: 10, right: 8, left: -12, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="progressWeightFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#60A5FA"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="100%"
                      stopColor="#60A5FA"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="#ffffff10"
                  vertical={false}
                />

                <XAxis
                  dataKey="day"
                  tick={axisTick}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />

                <YAxis
                  domain={["dataMin - 0.5", "dataMax + 0.5"]}
                  tick={{ ...axisTick, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={45}
                  tickFormatter={(value) => `${value.toFixed(1)}`}
                />

                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [`${value} kg`, "Weight"]}
                  labelStyle={{ color: "#60A5FA", marginBottom: 4 }}
                />

                <Area
                  type="monotone"
                  dataKey="weight"
                  name="Weight"
                  stroke="#60A5FA"
                  fill="url(#progressWeightFill)"
                  strokeWidth={3}
                  activeDot={{
                    r: 5,
                    fill: "#60A5FA",
                    stroke: "#19231D",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="mt-3 border-t border-white/[0.07] pt-3 text-xs leading-5 text-gray-500">
            Sample data for demonstration only. No actual measurements are
            stored. Weight naturally fluctuates, so consider longer-term
            trends rather than individual readings.
          </p>
        </article>

        {/* Footer note */}
        <p className="mt-5 text-center text-xs leading-5 text-fitness-muted">
          Your progress is personal. Use these illustrative charts as a
          design preview, and replace sample values with your own tracked
          activity when data storage is implemented.
        </p>
      </div>
    </section>
  );
}
