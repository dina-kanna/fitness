
import { useMemo, useState } from "react";

const meals = [
{
    id: 1,
    name: "Berry Oat Power Bowl",
    type: "BREAKFAST",
    calories: 340,
    protein: 18,
    carbs: 49,
    fats: 9,
    time: "10 min",
    tag: "Quick & Easy",
    description:
      "Creamy oats topped with fresh strawberries, blueberries, banana and chia seeds.",
    image:
      "https://www.orchidsandsweettea.com/wp-content/uploads/2022/03/Coconut-Berry-Oatmeal-Bowl-5-of-5-e1689573337507.jpg",
  },
  {
    id: 2,
    name: "Grilled Chicken Rice Bowl",
    type: "LUNCH",
    calories: 490,
    protein: 42,
    carbs: 52,
    fats: 12,
    time: "25 min",
    tag: "High Protein",
    description:
      "Juicy grilled chicken with brown rice, broccoli and colorful seasonal vegetables.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "Avocado Garden Salad",
    type: "DINNER",
    calories: 380,
    protein: 16,
    carbs: 32,
    fats: 21,
    time: "15 min",
    tag: "Fresh & Light",
    description:
      "A fresh mix of leafy greens, avocado, chickpeas, cherry tomatoes and quinoa.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "Peanut Banana Smoothie",
    type: "SNACK",
    calories: 270,
    protein: 14,
    carbs: 35,
    fats: 10,
    time: "5 min",
    tag: "Post Workout",
    description:
      "A creamy banana smoothie blended with milk, peanut butter and oats.",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "Protein Egg Toast",
    type: "BREAKFAST",
    calories: 360,
    protein: 25,
    carbs: 30,
    fats: 15,
    time: "12 min",
    tag: "Energy Boost",
    description:
      "Whole-grain toast with eggs, smashed avocado and cracked black pepper.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "Roasted Veggie Grain Bowl",
    type: "LUNCH",
    calories: 420,
    protein: 17,
    carbs: 58,
    fats: 13,
    time: "30 min",
    tag: "Plant Powered",
    description:
      "Roasted sweet potato, quinoa, chickpeas and greens with a lemon dressing.",
    image:
      "https://theviewfromgreatisland.com/wp-content/uploads/2019/01/roasted-vegetable-bliss-bowl-3937-January-05-2019-2.jpg",
  },
];

const categories = ["ALL", "BREAKFAST", "LUNCH", "DINNER", "SNACK"];

function NutritionValue({ value, label, color }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
      <p className={`text-lg font-extrabold ${color}`}>
        {value}g
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-fitness-muted">
        {label}
      </p>
    </div>
  );
}

function MealIcon({ type }) {
  const icons = {
    BREAKFAST: "☀",
    LUNCH: "◉",
    DINNER: "☾",
    SNACK: "✦",
  };

  return (
    <span aria-hidden="true" className="text-base">
      {icons[type] || "✦"}
    </span>
  );
}

export default function Nutrition() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [triedMeals, setTriedMeals] = useState([]);
  const [search, setSearch] = useState("");

  const filteredMeals = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return meals.filter((meal) => {
      const matchesCategory =
        activeCategory === "ALL" || meal.type === activeCategory;

      const searchableText =
        `${meal.name} ${meal.description} ${meal.tag} ${meal.type}`.toLowerCase();

      return (
        matchesCategory &&
        searchableText.includes(normalizedSearch)
      );
    });
  }, [activeCategory, search]);

  const nutritionTotals = useMemo(() => {
    return triedMeals.reduce(
      (totals, id) => {
        const meal = meals.find((item) => item.id === id);

        if (meal) {
          totals.calories += meal.calories;
          totals.protein += meal.protein;
          totals.carbs += meal.carbs;
          totals.fats += meal.fats;
        }

        return totals;
      },
      { calories: 0, protein: 0, carbs: 0, fats: 0 }
    );
  }, [triedMeals]);

  function toggleTried(id) {
    setTriedMeals((current) =>
      current.includes(id)
        ? current.filter((mealId) => mealId !== id)
        : [...current, id]
    );
  }

  const summaryItems = [
    {
      label: "Calories explored",
      value: nutritionTotals.calories.toLocaleString(),
      unit: "kcal",
      icon: "⚡",
      color: "text-fitness-lime",
    },
    {
      label: "Protein",
      value: nutritionTotals.protein,
      unit: "grams",
      icon: "◈",
      color: "text-sky-400",
    },
    {
      label: "Carbohydrates",
      value: nutritionTotals.carbs,
      unit: "grams",
      icon: "◉",
      color: "text-orange-400",
    },
    {
      label: "Healthy fats",
      value: nutritionTotals.fats,
      unit: "grams",
      icon: "❋",
      color: "text-violet-400",
    },
  ];

  return (
    <section
      id="nutrition"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-fitness-lime/[0.035] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fitness-lime/[0.035] blur-[120px]" />

      {/* Full-width container */}
      <div className="relative mx-auto w-full max-w-full px-4 sm:px-6 md:px-6 lg:px-10 xl:px-15 2xl:px-22">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="min-w-0">
            <p className="section-label">SMARTER NUTRITION</p>

            <h2 className="section-title mt-3">
              Eat better.{" "}
              <span className="text-fitness-lime">
                Feel stronger.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-fitness-muted sm:text-base">
              Discover delicious meal ideas to fuel your workouts, recover
              smarter and build healthier everyday habits.
            </p>
          </div>

          <div className="flex w-fit shrink-0 items-center gap-3 rounded-2xl border border-fitness-lime/20 bg-fitness-lime/[0.06] p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fitness-lime/10 text-xl text-fitness-lime">
              ✳
            </div>

            <div>
              <p className="text-xs text-fitness-muted">
                Meals explored
              </p>

              <p className="text-xl font-extrabold">
                {triedMeals.length}
                <span className="ml-1 text-sm font-medium text-fitness-muted">
                  / {meals.length}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Nutrition summary */}
        <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {summaryItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-fitness-lime/30 sm:p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-fitness-muted sm:text-sm">
                  {item.label}
                </span>

                <span className={`text-xl ${item.color}`}>
                  {item.icon}
                </span>
              </div>

              <p className="mt-4 break-words text-2xl font-extrabold tracking-tight sm:text-3xl">
                {item.value}
                <span className="ml-1.5 text-xs font-medium text-fitness-muted">
                  {item.unit}
                </span>
              </p>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={`h-full rounded-full ${item.color.replace("text-", "bg-")} transition-all duration-500`}
                  style={{
                    width: `${
                      item.label === "Calories explored"
                        ? Math.min((nutritionTotals.calories / 2000) * 100, 100)
                        : Math.min(
                            (nutritionTotals[
                              item.label === "Protein"
                                ? "protein"
                                : item.label === "Carbohydrates"
                                  ? "carbs"
                                  : "fats"
                            ] /
                              100) *
                              100,
                            100
                          )
                    }%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs leading-5 text-fitness-muted">
          Totals update when you mark meals as tried. These values represent
          selected sample meals, not your actual daily food intake.
        </p>

        {/* Search and filters */}
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div>
              <h3 className="text-lg font-extrabold sm:text-xl">
                Explore meal ideas
              </h3>

              <p className="mt-1 text-sm text-fitness-muted">
                Find something delicious for your next meal.
              </p>
            </div>

            <div className="relative w-full xl:max-w-md">
              <svg
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fitness-muted"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search meals or ingredients..."
                aria-label="Search meals"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-500 focus:border-fitness-lime/50 focus:ring-1 focus:ring-fitness-lime/20"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-xl border px-4 py-2.5 text-[10px] font-extrabold tracking-widest transition duration-200 sm:px-5 ${
                  activeCategory === category
                    ? "border-fitness-lime bg-fitness-lime text-fitness-dark"
                    : "border-white/10 bg-white/[0.025] text-gray-400 hover:border-fitness-lime/40 hover:text-fitness-lime"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
            <p className="text-sm text-fitness-muted">
              Showing{" "}
              <span className="font-bold text-white">
                {filteredMeals.length}
              </span>{" "}
              of {meals.length} meals
            </p>

            {(search || activeCategory !== "ALL") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("ALL");
                }}
                className="text-xs font-bold text-fitness-lime transition hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Meal cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          {filteredMeals.map((meal) => {
            const isTried = triedMeals.includes(meal.id);

            return (
              <article
                key={meal.id}
                className="glass-card card-hover group flex min-w-0 flex-col overflow-hidden"
              >
                {/* Meal image */}
                <div className="relative overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60 lg:h-64"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                  <span className="absolute left-4 top-4 flex items-center gap-2 rounded-lg border border-white/10 bg-fitness-dark/90 px-3 py-2 text-[10px] font-extrabold tracking-widest text-fitness-lime backdrop-blur">
                    <MealIcon type={meal.type} />
                    {meal.type}
                  </span>

                  <span className="absolute right-4 top-4 rounded-lg bg-black/65 px-3 py-2 text-[10px] font-bold text-white backdrop-blur">
                    {meal.time}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="rounded-lg bg-fitness-lime px-3 py-2 text-[10px] font-extrabold text-fitness-dark">
                      {meal.tag}
                    </span>

                    <span className="flex shrink-0 items-center gap-1.5 rounded-lg bg-black/70 px-3 py-2 text-sm font-extrabold text-white backdrop-blur">
                      <span className="text-orange-400">⚡</span>
                      {meal.calories} kcal
                    </span>
                  </div>
                </div>

                {/* Meal details */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-extrabold transition group-hover:text-fitness-lime sm:text-xl">
                    {meal.name}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-fitness-muted">
                    {meal.description}
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <NutritionValue
                      value={meal.protein}
                      label="Protein"
                      color="text-fitness-lime"
                    />

                    <NutritionValue
                      value={meal.carbs}
                      label="Carbs"
                      color="text-sky-400"
                    />

                    <NutritionValue
                      value={meal.fats}
                      label="Fat"
                      color="text-orange-400"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleTried(meal.id)}
                    aria-pressed={isTried}
                    className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-xs font-extrabold transition duration-300 ${
                      isTried
                        ? "border-fitness-lime/30 bg-fitness-lime/10 text-fitness-lime"
                        : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-fitness-lime/40 hover:bg-fitness-lime/[0.06] hover:text-fitness-lime"
                    }`}
                  >
                    {isTried ? (
                      <>
                        <svg
                          className="h-4 w-4 stroke-current"
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                        Added to tried meals
                      </>
                    ) : (
                      <>
                        <span className="text-base">+</span>
                        Mark as tried
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty search state */}
        {filteredMeals.length === 0 && (
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-14 text-center">
            <span className="text-3xl text-fitness-lime">⌕</span>

            <h3 className="mt-4 text-lg font-extrabold">
              No meals found
            </h3>

            <p className="mt-2 text-sm text-fitness-muted">
              Try another search term or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("ALL");
              }}
              className="lime-button mt-5"
            >
              Show all meals
            </button>
          </div>
        )}

        {/* Nutrition tip */}
        <div className="mt-9 flex flex-col gap-5 rounded-2xl border border-fitness-lime/15 bg-gradient-to-br from-fitness-lime/[0.07] to-transparent p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fitness-lime/10 text-2xl text-fitness-lime">
              ✦
            </div>

            <div>
              <p className="text-[10px] font-extrabold tracking-[0.2em] text-fitness-lime">
                DAILY REMINDER
              </p>

              <h3 className="mt-2 text-lg font-extrabold sm:text-xl">
                Small choices. Stronger habits.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-fitness-muted">
                Build balanced meals around foods you enjoy, drink water
                regularly and adjust portions to your individual energy needs.
              </p>
            </div>
          </div>

          <a
            href="#goals"
            className="lime-button flex shrink-0 items-center justify-center gap-2 text-center"
          >
            View my goals
            <svg
              className="h-4 w-4 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <p className="mt-4 text-xs leading-5 text-gray-500">
          Nutrition values are estimates for illustrative sample portions.
          Actual calories and macronutrients vary with ingredients, portion
          sizes and preparation methods.
        </p>
      </div>
    </section>
  );
}
