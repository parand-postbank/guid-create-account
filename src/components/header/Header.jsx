import { useState } from "react";

function Header({ children }) {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#sharayet", label: "شرایط افتتاح" },
    { href: "#madarek", label: "مدارک لازم" },
    { href: "#maraherl", label: "مراحل ثبت‌نام" },
    { href: "#soalat", label: "سوالات متداول" },
  ];

  return (
    <header
      dir="rtl"
      className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* برند */}
        <a href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-sm ring-1 ring-black/5">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 10l9-7 9 7" />
              <path d="M5 10v10h14V10" />
              <path d="M9 20v-6h6v6" />
            </svg>
          </span>

          <div className="leading-tight">
            <div className="text-sm font-extrabold text-slate-900 dark:text-slate-50">
              افتتاح حساب پست‌بانک
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              راهنمای سریع + ثبت درخواست آنلاین
            </div>
          </div>
        </a>

        {/* منوی دسکتاپ */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* سمت چپ (اکشن‌ها) */}
        <div className="flex items-center gap-2">
          {/* جستجو (دسکتاپ) */}
          <div className="hidden md:block">
            <div className="relative">
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 21l-4.3-4.3" />
                <circle cx="11" cy="11" r="7" />
              </svg>
              <input
                className="h-10 w-64 rounded-2xl border border-slate-200 bg-white pr-9 pl-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus:border-emerald-500/60 dark:focus:ring-emerald-500/10"
                placeholder="جستجو در راهنما..."
              />
            </div>
          </div>

          {/* دکمه اصلی */}
          <a
            href="#darkhast"
            className="hidden items-center justify-center rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-extrabold text-white shadow-sm ring-1 ring-black/5 hover:bg-emerald-700 md:inline-flex"
          >
            شروع افتتاح حساب
          </a>

          {/* منوی موبایل */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 md:hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-900"
            aria-label="باز و بسته کردن منو"
            aria-expanded={open}
          >
            {!open ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* پنل موبایل */}
      <div className={open ? "md:hidden" : "hidden md:hidden"}>
        <div className="mx-auto max-w-7xl space-y-2 px-4 pb-4 sm:px-6 lg:px-8">
          {/* سرچ موبایل */}
          <div className="relative">
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 21l-4.3-4.3" />
              <circle cx="11" cy="11" r="7" />
            </svg>
            <input
              className="h-10 w-full rounded-2xl border border-slate-200 bg-white pr-9 pl-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:focus:border-emerald-500/60 dark:focus:ring-emerald-500/10"
              placeholder="جستجو..."
            />
          </div>

          <nav className="grid gap-1 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#darkhast"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-3 py-2 text-sm font-extrabold text-white hover:bg-emerald-700"
            >
              شروع افتتاح حساب
            </a>
          </nav>

          {/* نوار اطلاع کوتاه */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-100">
            <span className="font-extrabold">نکته:</span> برای تکمیل فرایند،
            اطلاعات هویتی و شماره تماس معتبر لازم است.
          </div>
        </div>
      </div>

      {/* محتوای صفحه زیر هدر */}
      <div>{children}</div>
    </header>
  );
}

export default Header;
