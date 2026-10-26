import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", href: "/#home", section: "home" },
  { label: "Workouts", href: "/#workouts", section: "workouts" },
  { label: "Nutrition", href: "/#nutrition", section: "nutrition" },
  { label: "Progress", href: "/#progress", section: "progress" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

function BrandIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#b7f26b] text-[#0B110E] min-[375px]:h-9 min-[375px]:w-9 sm:h-10 sm:w-10">
      <svg
        className="h-5 w-5 sm:h-6 sm:w-6"
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

function UserIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

function MenuIcon({ close = false }) {
  return (
    <svg
      className="h-5 w-5 sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {close ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M3 6h18M3 12h18M3 18h18" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isLoginActive = location.pathname === "/login";
  const isProfileActive = location.pathname === "/profile";

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (!element) return;

    const headerOffset = 76;
    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  const handleSectionNavigation = (event, href) => {
    event.preventDefault();
    closeMenu();

    const [path, hash] = href.split("#");
    const targetPath = path || "/";
    const section = hash;

    if (location.pathname !== targetPath) {
      navigate(`${targetPath}${section ? `#${section}` : ""}`);
      return;
    }

    if (section) {
      if (location.hash !== `#${section}`) {
        navigate(`${targetPath}#${section}`);
      } else {
        scrollToSection(section);
      }
    } else {
      navigate(targetPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      scrollToSection(location.hash.slice(1));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  const isSectionActive = (section) =>
    location.pathname === "/" && location.hash === `#${section}`;

  const navLinkClass = (active) =>
    `relative flex min-h-9 items-center whitespace-nowrap text-xs font-semibold transition-colors xl:text-sm ${
      active
        ? "text-[#B9F66B]"
        : "text-gray-400 hover:text-white"
    }`;

  const mobileLinkClass = (active) =>
    `flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
      active
        ? "bg-[#B9F66B]/10 text-[#B9F66B]"
        : "text-gray-300 hover:bg-white/[0.04] hover:text-[#B9F66B]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#0B110E]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-14 w-full max-w-[1920px] items-center justify-between gap-2 px-3 min-[375px]:px-4 sm:min-h-[64px] sm:px-5 md:min-h-[68px] md:px-5 lg:min-h-[72px] lg:px-8 xl:px-12 2xl:px-20"
      >
        {/* Brand */}
        <Link
          to="/#home"
          onClick={(event) => handleSectionNavigation(event, "/#home")}
          aria-label="FitTrack home"
          className="inline-flex min-w-0 shrink-0 items-center gap-1.5 min-[375px]:gap-2 sm:gap-3"
        >
          <BrandIcon />
          <div className="flex flex-col">
          <span className="whitespace-nowrap text-2xl font-extrabold tracking-tight">
                <span className="text-white">Fit</span>
                <span className="text-[#B9F66B]">track</span>
                <p className="text-xs text-gray-500">
                Your fitness journey
              </p>
              </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 min-[768px]:flex min-[768px]:gap-3 min-[900px]:gap-4 xl:gap-5 2xl:gap-7">
          {links.map((link) => {
            const active = isSectionActive(link.section);

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) =>
                  handleSectionNavigation(event, link.href)
                }
                aria-current={active ? "location" : undefined}
                className={navLinkClass(active)}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#B9F66B] transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 min-[768px]:flex min-[900px]:gap-3 xl:gap-4">
          <Link
            to="/login"
            aria-current={isLoginActive ? "page" : undefined}
            className={`whitespace-nowrap text-xs font-bold transition-colors min-[900px]:text-sm ${
              isLoginActive
                ? "text-[#B9F66B]"
                : "text-gray-300 hover:text-[#B9F66B]"
            }`}
          >
            Login
          </Link>

          <Link
            to="/profile"
            aria-current={isProfileActive ? "page" : undefined}
            className={`inline-flex min-h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-2 text-xs font-extrabold transition hover:-translate-y-0.5 min-[900px]:gap-2 min-[900px]:px-3 min-[900px]:text-sm xl:px-4 ${
              isProfileActive
                ? "bg-white text-[#0B110E]"
                : "dark-button"
            }`}
          >
            <UserIcon />
            Profile
          </Link>

          {/* Start Training Action Button */}
          <a
            href="#workouts"
            onClick={(event) => handleSectionNavigation(event, "/#workouts")}
            className="lime-button inline-flex min-h-9 items-center justify-center whitespace-nowrap rounded-xl px-3 py-2 text-xs font-extrabold transition hover:-translate-y-0.5 min-[900px]:text-sm xl:px-5"
          >
            Start training
          </a>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B110E] text-white shadow-lg transition hover:border-[#B9F66B]/40 hover:text-[#B9F66B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B9F66B] sm:h-10 sm:w-10 min-[768px]:hidden"
        >
          <MenuIcon close={open} />
        </button>
      </nav>

      {/* Mobile backdrop */}
      {open && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className="fixed inset-0 z-40 cursor-default bg-black/60 min-[768px]:hidden"
        />
      )}

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open ? "" : undefined}
        className={`fixed left-0 right-0 top-14 z-50 overflow-y-auto border-b border-white/10 bg-[#0B110E] shadow-2xl transition-all duration-300 sm:top-16 min-[768px]:hidden ${
          open
            ? "visible max-h-[calc(100dvh-3.5rem)] translate-y-0 opacity-100 sm:max-h-[calc(100dvh-4rem)]"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-[1920px] px-3 py-4 min-[375px]:px-4 sm:px-6">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const active = isSectionActive(link.section);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={(event) =>
                    handleSectionNavigation(event, link.href)
                  }
                  aria-current={active ? "location" : undefined}
                  className={mobileLinkClass(active)}
                >
                  <span>{link.label}</span>
                  <svg
                    className="h-4 w-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              );
            })}

            <div className="my-2 border-t border-white/10" />

            <Link
              to="/login"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              aria-current={isLoginActive ? "page" : undefined}
              className={mobileLinkClass(isLoginActive)}
            >
              Login
            </Link>

            <Link
              to="/profile"
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
              aria-current={isProfileActive ? "page" : undefined}
              className="dark-button mt-1 flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold"
            >
              <UserIcon />
              My Profile
            </Link>

            {/* Mobile Start Training Button */}
            <a
              href="#workouts"
              tabIndex={open ? 0 : -1}
              onClick={(event) => handleSectionNavigation(event, "/#workouts")}
              className="lime-button mt-2 flex min-h-12 items-center justify-center rounded-xl px-4 py-3 text-sm font-extrabold text-[#0B110E]"
            >
              Start training
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}