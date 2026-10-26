
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const defaultProfile = {
  name: "Fitness Member",
  email: "member@example.com",
  goal: "Build consistency",
  weight: "70",
  height: "175",
  joined: "Today",
};

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(defaultProfile);
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("fittrackProfile");
      if (stored) {
        setProfile({ ...defaultProfile, ...JSON.parse(stored) });
      }
    } catch {
      setProfile(defaultProfile);
    }
  }, []);

  function handleChange(event) {
    setProfile((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setSaved(false);
  }

  function handleSave(event) {
    event.preventDefault();
    localStorage.setItem("fittrackProfile", JSON.stringify(profile));
    setEditing(false);
    setSaved(true);
  }

  function handleLogout() {
    localStorage.removeItem("fittrackProfile");
    navigate("/login");
  }

  const bmi =
    Number(profile.weight) > 0 && Number(profile.height) > 0
      ? (
          Number(profile.weight) /
          (Number(profile.height) / 100) ** 2
        ).toFixed(1)
      : "--";

  return (
    <main className="min-h-screen bg-fitness-dark px-4 py-10 text-white sm:px-6 lg:py-14">
      <div className="mx-auto max-w-9xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fitness-lime">
              Member account
            </p>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl">
              My Profile
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Manage your personal information and fitness goals.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-fitness-lime hover:text-fitness-lime"
          >
            ← Back to home
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          <section className="rounded-3xl border border-white/10 bg-[#151f19] p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-fitness-lime/30 bg-fitness-lime text-3xl font-black text-fitness-dark">
                {(profile.name || "F").trim().charAt(0).toUpperCase()}
              </div>

              <h2 className="mt-5 text-2xl font-extrabold">
                {profile.name || "Fitness Member"}
              </h2>
              <p className="mt-1 break-all text-sm text-gray-400">
                {profile.email}
              </p>

              <span className="mt-4 rounded-full border border-fitness-lime/20 bg-fitness-lime/10 px-4 py-2 text-xs font-bold text-fitness-lime">
                FITTRACK MEMBER
              </span>
            </div>

            <div className="my-7 border-t border-white/10" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Member since</span>
                <span className="font-semibold">{profile.joined}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Fitness goal</span>
                <span className="text-right font-semibold">
                  {profile.goal}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-8 w-full rounded-xl border border-red-400/20 px-4 py-3 font-semibold text-red-300 transition hover:bg-red-400/10"
            >
              Log out
            </button>
          </section>

          <div className="space-y-6">
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "Weight", value: `${profile.weight || "--"} kg` },
                { label: "Height", value: `${profile.height || "--"} cm` },
                { label: "BMI", value: bmi },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-[#151f19] p-5"
                >
                  <p className="text-sm text-gray-400">{stat.label}</p>
                  <p className="mt-3 text-2xl font-black text-fitness-lime">
                    {stat.value}
                  </p>
                </div>
              ))}
            </section>

            <section className="rounded-3xl border border-white/10 bg-[#151f19] p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-extrabold">
                    Personal information
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Update your profile details.
                  </p>
                </div>

                {!editing && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditing(true);
                      setSaved(false);
                    }}
                    className="rounded-xl bg-fitness-lime px-4 py-2.5 text-sm font-bold text-fitness-dark transition hover:brightness-95"
                  >
                    Edit profile
                  </button>
                )}
              </div>

              {saved && (
                <p
                  role="status"
                  className="mb-5 rounded-xl border border-fitness-lime/20 bg-fitness-lime/10 p-3 text-sm text-fitness-lime"
                >
                  Profile updated successfully.
                </p>
              )}

              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!editing}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-fitness-lime disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <div>
                  <label
                    htmlFor="profileEmail"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    Email address
                  </label>
                  <input
                    id="profileEmail"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!editing}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-fitness-lime disabled:cursor-not-allowed disabled:opacity-70"
                  />
                </div>

                <div>
                  <label
                    htmlFor="goal"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    Fitness goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={profile.goal}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full rounded-xl border border-white/10 bg-[#101915] px-4 py-3 text-white outline-none transition focus:border-fitness-lime disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <option>Build consistency</option>
                    <option>Lose weight</option>
                    <option>Build muscle</option>
                    <option>Improve endurance</option>
                    <option>Stay healthy</option>
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="weight"
                      className="mb-2 block text-sm font-semibold text-gray-300"
                    >
                      Weight (kg)
                    </label>
                    <input
                      id="weight"
                      name="weight"
                      type="number"
                      min="1"
                      max="500"
                      value={profile.weight}
                      onChange={handleChange}
                      disabled={!editing}
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-fitness-lime disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="height"
                      className="mb-2 block text-sm font-semibold text-gray-300"
                    >
                      Height (cm)
                    </label>
                    <input
                      id="height"
                      name="height"
                      type="number"
                      min="1"
                      max="300"
                      value={profile.height}
                      onChange={handleChange}
                      disabled={!editing}
                      required
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-fitness-lime disabled:cursor-not-allowed disabled:opacity-70"
                    />
                  </div>
                </div>

                {editing && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      className="lime-button flex-1"
                    >
                      Save changes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const stored = localStorage.getItem("fittrackProfile");
                        setProfile(
                          stored
                            ? { ...defaultProfile, ...JSON.parse(stored) }
                            : defaultProfile
                        );
                        setEditing(false);
                        setSaved(false);
                      }}
                      className="flex-1 rounded-xl border border-white/10 px-4 py-3 font-semibold text-gray-300 transition hover:bg-white/5"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </section>

            <Link
              to="/#workouts"
              className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#151f19] p-5 transition hover:border-fitness-lime/40"
            >
              <div>
                <h3 className="font-bold">Continue your fitness journey</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Explore workouts and keep building healthy habits.
                </p>
              </div>
              <span className="text-xl text-fitness-lime" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
