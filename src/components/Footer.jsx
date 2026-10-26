
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Workouts", href: "#workouts" },
  { label: "Progress Tracker", href: "#progress" },
  { label: "Nutrition Plans", href: "#nutrition" },
  { label: "BMI Calculator", href: "#bmi" },
  { label: "My Goals", href: "#goals" },
];

const contactDetails = [
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    title: "Email us",
    detail: "fit.track@gmail.com",
    href: "mailto:fit.track@gmail.com",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    title: "Call us",
    detail: "+91 98765 43216",
    href: "tel:+919876543216",
  },
  {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    title: "Our location",
    detail: "Salem, Tamil Nadu, India",
    href: "https://www.google.com/maps/search/?api=1&query=Salem%2C%20Tamil%20Nadu%2C%20India",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.4 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    ),
  },
];

function FooterBrandIcon() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B9F66B] text-[#101915] shadow-lg shadow-[#B9F66B]/10">
      <svg
        className="h-6 w-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
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

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#0A100C] text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B9F66B]/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#B9F66B]/[0.03] blur-[120px]" />

      {/* Full-width content */}
      <div className="relative mx-auto w-full max-w-full px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16 xl:px-16 2xl:px-24">

        {/* Call to action */}
        <div className="mb-12 flex w-full flex-col gap-5 rounded-3xl border border-[#B9F66B]/20 bg-gradient-to-br from-[#B9F66B]/[0.10] to-transparent p-5 sm:p-7 md:flex-row md:items-center md:justify-between md:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.22em] text-[#B9F66B]">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              Ready to feel your best?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-fitness-muted sm:text-base">
              Build consistent habits, track your progress and celebrate every
              step toward a healthier you.
            </p>
          </div>

          <a
            href="#goals"
            className="lime-button flex shrink-0 items-center justify-center gap-2 text-center"
          >
            Explore your goals
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

        {/* Footer columns */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr] lg:gap-10 xl:grid-cols-[1.3fr_0.8fr_1.15fr] xl:gap-16">

          {/* Brand */}
          <div className="min-w-0">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
              aria-label="FitTrack home"
            >
              <FooterBrandIcon />

              {/* fit white, track light green */}
              <span className="whitespace-nowrap text-2xl font-extrabold tracking-tight">
                <span className="text-white">Fit</span>
                <span className="text-[#B9F66B]">track</span>
                <p className="text-xs text-gray-500">
                Your fitness journey
              </p>
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-fitness-muted">
              More than a fitness tracker. Your daily companion for movement,
              mindful nutrition and long-lasting healthy habits.
            </p>

            {/* Social media */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-[#B9F66B]/40 hover:bg-[#B9F66B]/10 hover:text-[#B9F66B]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#B9F66B]" />
              <span className="text-xs text-gray-400">
                Your fitness journey, every day
              </span>
            </div>
          </div>

          {/* Explore links */}
          <div className="min-w-0">
            <h3 className="text-sm font-extrabold uppercase tracking-widest">
              Explore
            </h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-fitness-muted transition-colors duration-200 hover:text-[#B9F66B]"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gray-600 transition-colors group-hover:bg-[#B9F66B]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and support */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-extrabold uppercase tracking-widest">
              Contact & support
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-6 text-fitness-muted">
              Have a question or suggestion? Get in touch with us.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactDetails.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.href}
                  target={
                    contact.title === "Our location" ? "_blank" : undefined
                  }
                  rel={
                    contact.title === "Our location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition duration-300 hover:border-[#B9F66B]/25 hover:bg-[#B9F66B]/[0.04]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B9F66B]/10 text-[#B9F66B] transition group-hover:bg-[#B9F66B] group-hover:text-[#101915]">
                    {contact.icon}
                  </span>

                  <span className="min-w-0 pt-0.5">
                    <span className="block text-xs text-fitness-muted">
                      {contact.title}
                    </span>

                    <span className="mt-1 block break-words text-sm font-semibold text-gray-200 transition group-hover:text-[#B9F66B]">
                      {contact.detail}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Support hours */}
            <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-[#B9F66B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>

                <h4 className="text-sm font-bold">Support hours</h4>
              </div>

              <div className="mt-4 space-y-3 text-xs text-fitness-muted">
                <div className="flex flex-wrap justify-between gap-2">
                  <span>Monday – Friday</span>
                  <span className="text-gray-300">9 AM – 6 PM</span>
                </div>

                <div className="flex flex-wrap justify-between gap-2">
                  <span>Saturday</span>
                  <span className="text-gray-300">10 AM – 6 PM</span>
                </div>

                <div className="flex flex-wrap justify-between gap-2">
                  <span>Sunday</span>
                  <span className="text-gray-300">10 AM – 1 PM</span>
                </div>

                <p className="border-t border-white/[0.06] pt-3 text-[10px] text-gray-500">
                  India Standard Time (IST)
                </p>
              </div>
            </div>

            <a
              href="mailto:fit.track@gmail.com?subject=FitTrack%20Support"
              className="lime-button mt-5 flex w-full items-center justify-center gap-2 text-center"
            >
              Contact support
              <svg
                className="h-4 w-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-gray-500">
            © {new Date().getFullYear()} FitTrack. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-xs text-gray-400 transition hover:text-[#B9F66B]"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 transition hover:border-[#B9F66B]/30">
              ↑
            </span>
          </a>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Made for healthier habits
            <svg
              className="h-3.5 w-3.5 fill-current text-rose-400"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
}
