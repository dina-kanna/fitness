import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const weeklyData = [
  { 
    day: "Mon", 
    fullName: "Monday", 
    minutes: 38, 
    steps: "8,420", 
    stepPercent: 84, 
    calories: "460", 
    caloriePercent: 65, 
    heartRate: "132", 
    hrZone: "Zone 2 · aerobic" 
  },
  { 
    day: "Tue", 
    fullName: "Tuesday", 
    minutes: 48, 
    steps: "9,100", 
    stepPercent: 91, 
    calories: "580", 
    caloriePercent: 82, 
    heartRate: "140", 
    hrZone: "Zone 3 · cardio" 
  },
  { 
    day: "Wed", 
    fullName: "Wednesday", 
    minutes: 36, 
    steps: "7,500", 
    stepPercent: 75, 
    calories: "410", 
    caloriePercent: 58, 
    heartRate: "128", 
    hrZone: "Zone 2 · aerobic" 
  },
  { 
    day: "Thu", 
    fullName: "Thursday", 
    minutes: 55, 
    steps: "10,500", 
    stepPercent: 100, 
    calories: "650", 
    caloriePercent: 92, 
    heartRate: "145", 
    hrZone: "Zone 4 · peak" 
  },
  { 
    day: "Fri", 
    fullName: "Friday", 
    minutes: 40, 
    steps: "8,100", 
    stepPercent: 81, 
    calories: "490", 
    caloriePercent: 70, 
    heartRate: "130", 
    hrZone: "Zone 2 · aerobic" 
  },
  { 
    day: "Sat", 
    fullName: "Saturday", 
    minutes: 68, 
    steps: "12,800", 
    stepPercent: 100, 
    calories: "780", 
    caloriePercent: 100, 
    heartRate: "152", 
    hrZone: "Zone 4 · peak" 
  },
  { 
    day: "Sun", 
    fullName: "Sunday", 
    minutes: 22, 
    steps: "4,364", 
    stepPercent: 43, 
    calories: "285", 
    caloriePercent: 40, 
    heartRate: "115", 
    hrZone: "Zone 1 · recovery" 
  },
];

export default function Dashboard() {
  const [selectedDay, setSelectedDay] = useState(weeklyData[0]); // Default to Monday

  const totalMinutes = weeklyData.reduce((acc, d) => acc + d.minutes, 0);
  const totalStepsNum = 60784; 
  const totalCaloriesNum = 3975; 

  const durationPercent = Math.round((selectedDay.minutes / 60) * 100);

  return (
    <section
      id="dashboard"
      className="relative w-full overflow-hidden bg-[#0D0F12] py-12 text-zinc-100 sm:py-16 lg:py-20"
    >
      {/* Background neon ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-lime-400/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Day Selector Navigation Tabs */}
        <div className="mb-8 grid grid-cols-7 gap-2 overflow-x-auto pb-2">
          {weeklyData.map((item) => {
            const isSelected = selectedDay.day === item.day;
            return (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item)}
                className={`flex flex-col items-center justify-center rounded-2xl py-3 px-2 transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-lime-400 text-zinc-950 border-lime-400 font-bold shadow-lg shadow-lime-400/20"
                    : "bg-[#16191E] text-zinc-400 hover:bg-[#1E2229] hover:text-zinc-200 border-zinc-800"
                }`}
              >
                <span className="text-[10px] font-semibold tracking-wider uppercase opacity-80">
                  {item.day}
                </span>
                <span className="mt-0.5 text-xs font-bold sm:text-sm">
                  {item.day}
                </span>
                {isSelected && (
                  <span className="mt-1 h-1 w-1 rounded-full bg-zinc-950" />
                )}
              </button>
            );
          })}
        </div>

        {/* Top 4 Metrics Cards Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Daily Steps */}
          <article className="rounded-3xl bg-[#16191E] p-6 shadow-xl border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Daily steps
                </span>
                <svg className="h-5 w-5 stroke-current text-lime-400" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M4 16v-2.38C4 11.5 5 9.5 7 8s3-3 3-5c0 1-2 3-2 5s2 3 4 4.5V16" />
                  <path d="M12 16v-2.38C12 11.5 13 9.5 15 8s3-3 3-5c0 1-2 3-2 5s2 3 4 4.5V16" />
                </svg>
              </div>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {selectedDay.steps}
              </h3>
            </div>
            <div className="mt-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-lime-400 transition-all duration-500"
                  style={{ width: `${selectedDay.stepPercent}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-zinc-400">
                {selectedDay.stepPercent}% of 10,000
              </p>
            </div>
          </article>

          {/* Card 2: Calories Burned */}
          <article className="rounded-3xl bg-[#16191E] p-6 shadow-xl border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Calories burned
                </span>
                <svg className="h-5 w-5 stroke-current text-orange-400" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.229 1-3 1 1 1.5 2 1.5 2.5z" />
                </svg>
              </div>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {selectedDay.calories}
              </h3>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-zinc-400">
              Workout calories for {selectedDay.day}. The week total is <span className="font-semibold text-lime-400">{totalCaloriesNum.toLocaleString()} kcal</span>.
            </p>
          </article>

          {/* Card 3: Workout Duration */}
          <article className="rounded-3xl bg-[#16191E] p-6 shadow-xl border border-zinc-800/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-semibold tracking-wider uppercase">
                  Workout duration
                </span>
                <svg className="h-5 w-5 stroke-current text-sky-400" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {selectedDay.minutes}
                </h3>
                <span className="text-base font-bold text-zinc-400">min</span>
              </div>
            </div>
            <div className="mt-6">
              <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-sky-400 transition-all duration-500"
                  style={{ width: `${Math.min(durationPercent, 100)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-zinc-400">
                {durationPercent}% of a 60-minute target
              </p>
            </div>
          </article>

          {/* Card 4: Heart Rate */}
          <article className="rounded-3xl bg-gradient-to-br from-zinc-900 to-[#1A1D24] p-6 shadow-xl border border-zinc-800 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-zinc-400">
                <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">
                  Heart rate
                </span>
                <svg className="h-5 w-5 stroke-current text-rose-400" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {selectedDay.heartRate}
                </h3>
                <span className="text-sm font-medium text-zinc-400">bpm</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative h-1.5 w-full rounded-full bg-zinc-800">
                <div className="absolute -top-1 h-3.5 w-3.5 rounded-full bg-lime-400 shadow" style={{ left: "65%" }} />
              </div>
              <p className="mt-3 text-xs font-medium text-lime-400">
                {selectedDay.hrZone}
              </p>
            </div>
          </article>

        </div>

        {/* Weekly Activity Chart Section */}
        <div className="mt-6 rounded-3xl bg-[#16191E] p-6 sm:p-8 shadow-xl border border-zinc-800/80">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-black tracking-tight text-white">Weekly activity</h3>
              <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                Minutes trained each day. The selected day is highlighted.
              </p>
            </div>

            <div className="text-xs font-semibold text-zinc-300 bg-zinc-800/80 border border-zinc-700/50 px-3.5 py-2 rounded-xl w-fit">
              {totalStepsNum.toLocaleString()} steps · {totalCaloriesNum.toLocaleString()} kcal
            </div>
          </div>

          <div className="mt-8 h-[240px] w-full sm:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barCategoryGap="20%"
                onClick={(e) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    setSelectedDay(e.activePayload[0].payload);
                  }
                }}
              >
                <CartesianGrid stroke="#22262E" vertical={false} />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />
                <Tooltip
                  cursor={{ fill: "rgba(255,255,255,0.03)" }}
                  contentStyle={{
                    background: "#0D0F12",
                    border: "1px solid #272B33",
                    borderRadius: 12,
                    color: "#fff",
                    fontSize: 12,
                  }}
                  formatter={(value) => [`${value} min`, "Active duration"]}
                  labelStyle={{ color: "#a3e635", marginBottom: 2 }}
                />
                <Bar
                  dataKey="minutes"
                  radius={[8, 8, 0, 0]}
                  maxBarSize={50}
                  style={{ cursor: "pointer" }}
                >
                  {weeklyData.map((entry) => (
                    <Cell
                      key={`cell-${entry.day}`}
                      fill={selectedDay.day === entry.day ? "#a3e635" : "#2A323D"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}