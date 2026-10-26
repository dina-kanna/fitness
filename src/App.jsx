
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Workouts from "./components/Workouts";
import Progress from "./components/Progress";
import BMICalculator from "./components/BMICalculator";
import Nutrition from "./components/Nutrition";
import Goals from "./components/Goals";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Profile from "./pages/Profile";

function HomePage() {
  return (
    <main>
      <Hero />
      <Dashboard />
      <Workouts />
      <Progress />
      <BMICalculator />
      <Nutrition />
      <Goals />
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-fitness-dark text-white">
      {loading && <Loader />}

      <div
        className={`transition-opacity duration-500 ${
          loading ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
