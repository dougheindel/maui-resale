import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
    ExternalLink,
    ArrowUpRight,
    Check,
    AlertCircle,
} from "lucide-react";

const hrcSearch =
    "https://www.redweek.com/resort/P6386-hyatt-vacation-club-at-kaanapali-beach/timeshare-resales?type=resales&available_type=by_week&start_week=week_25&end_week=week_35&unit_type_id=574&use=Annual&ownership_type=Deeded&bedrooms=2&sleeps=6&sort=week";

const naneaSearch =
    "https://www.redweek.com/resort/P6462-the-westin-nanea-ocean-villas/timeshare-resales?type=resales&available_type=by_week&unit_type_id=223&use=Annual&ownership_type=Deeded&bedrooms=1&sleeps=4";

const hrcComps = [
    {
        label: "Week 27 · 2BR · Ocean View",
        price: "$45,000",
        meta: "Annual · Deeded · $4,200 maint.",
        id: "R747727",
        href: "https://www.redweek.com/posting/R747727",
    },
    {
        label: "Week 29 · 2BR · Ocean View",
        price: "$40,000",
        meta: "Annual · Deeded · $4,343 maint.",
        id: "R1526872",
        href: "https://www.redweek.com/posting/R1526872",
        direct: true,
    },
    {
        label: "Week 29 · 2BR · Oceanfront",
        price: "$64,500",
        meta: "Annual · Deeded · $1,873 maint.",
        id: "R1326347",
        href: "https://www.redweek.com/posting/R1326347",
        note: "Oceanfront, so not apples-to-apples.",
    },
];

const naneaComps = [
    {
        label: "1BR · High Season · Resort View",
        price: "$10,000",
        meta: "Annual · Deeded · $1,997 maint.",
        id: "R1477628",
        href: "https://www.redweek.com/posting/R1477628",
        direct: true,
    },
    {
        label: "1BR · High Season · View unspecified",
        price: "$5,000",
        meta: "Annual · Deeded · $1,700 maint.",
        id: "R1522626",
        href: "https://www.redweek.com/posting/R1522626",
    },
];

function ExternalButton({ href, children = "View listing" }) {
    return (
        <a
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
            <ArrowUpRight size={15} />
        </a>
    );
}

function CompCard({ comp }) {
    return (
        <article
            className={`relative flex h-full flex-col rounded-2xl border p-5 ${
                comp.direct
                    ? "border-zinc-300 bg-zinc-50"
                    : "border-zinc-200 bg-white"
            }`}
        >
            {comp.direct && (
                <div className="absolute -right-2 -top-3 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm">
                    <Check size={12} />
                    closest direct comp
                </div>
            )}

            <div className="flex flex-1 items-start justify-between gap-4">
                <div className="min-w-0">
                    <h3 className="text-base font-semibold text-zinc-900">
                        {comp.label}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                        {comp.meta}
                    </p>

                    {comp.note && (
                        <p className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
                            <AlertCircle size={14} />
                            {comp.note}
                        </p>
                    )}
                </div>

                <div className="shrink-0 text-xl font-semibold tracking-tight text-zinc-900">
                    {comp.price}
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-200 pt-4">
                <span className="text-xs text-zinc-400">
                    RedWeek posting {comp.id}
                </span>

                <ExternalButton href={comp.href} />
            </div>
        </article>
    );
}

function App() {
    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">

                {/* HERO */}
                <section className="mb-12">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        Maui resale review
                    </div>

                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                        Maui timeshare valuations.
                    </h1>

                    <div className="mt-8 h-px bg-zinc-200" />
                </section>

                {/* SUMMARY */}
                <section className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="w-full rounded-2xl border border-zinc-200 bg-zinc-950 p-6 text-white sm:p-7">
                        <span className="text-sm font-medium text-zinc-400">
                            Working gross value
                        </span>

                        <strong className="mt-2 block text-4xl font-semibold tracking-tight sm:text-5xl">
                            ~$180k
                        </strong>

                        <small className="mt-3 block text-sm leading-6 text-zinc-400">
                            Hyatt: 4 weeks × ~$40k
                            <br />
                            Westin: 2 weeks × ~$10k
                        </small>
                    </div>

                    <div className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
                        <span className="text-sm font-medium text-zinc-500">
                            Annual maintenance
                        </span>

                        <strong className="mt-2 block text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
                            ~$22k
                        </strong>

                        <small className="mt-3 block text-sm leading-6 text-zinc-500">
                            Hyatt: ~$18k
                            <br />
                            Westin: ~$4k
                        </small>
                    </div>
                </section>

                {/* OWNERSHIP / VALUATION */}
                <section className="mb-16">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                            Ownership & valuation
                        </h2>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-zinc-200">
                        <table className="w-full min-w-[800px] text-sm">
                            <thead>
                                <tr className="border-b border-zinc-200 bg-zinc-50 text-left">
                                    <th className="px-5 py-4 font-medium text-zinc-500">
                                        Ownership
                                    </th>
                                    <th className="px-5 py-4 font-medium text-zinc-500">
                                        Weeks
                                    </th>
                                    <th className="px-5 py-4 font-medium text-zinc-500">
                                        Count
                                    </th>
                                    <th className="px-5 py-4 font-medium text-zinc-500">
                                        Benchmark
                                    </th>
                                    <th className="px-5 py-4 font-medium text-zinc-500">
                                        Annual maintenance
                                    </th>
                                    <th className="px-5 py-4 font-medium text-zinc-500">
                                        Gross benchmark
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b border-zinc-100">
                                    <td className="px-5 py-5">
                                        <strong>Hyatt</strong>
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        29 + 30
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        2 timeshares
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        ~$40,000 / week
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        ~$18,000 / year
                                    </td>
                                    <td className="px-5 py-5">
                                        <strong>~$160,000*</strong>
                                    </td>
                                </tr>

                                <tr className="border-b border-zinc-100">
                                    <td className="px-5 py-5">
                                        <strong>Westin</strong>
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        29 + 30
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        1 timeshare
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        ~$10,000 / week
                                    </td>
                                    <td className="px-5 py-5 text-zinc-600">
                                        ~$4,000 / year
                                    </td>
                                    <td className="px-5 py-5">
                                        <strong>~$20,000</strong>
                                    </td>
                                </tr>

                                <tr className="bg-zinc-50">
                                    <td className="px-5 py-5">
                                        <strong>Total</strong>
                                    </td>
                                    <td className="px-5 py-5">
                                        <strong>6 weeks</strong>
                                    </td>
                                    <td className="px-5 py-5">
                                        <strong>3 timeshares</strong>
                                    </td>
                                    <td className="px-5 py-5 text-zinc-500">
                                        —
                                    </td>
                                    <td className="px-5 py-5">
                                        <strong>~$22,000 / year</strong>
                                    </td>
                                    <td className="px-5 py-5">
                                        <strong>~$180,000*</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* HYATT */}
                <section className="mb-16">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                Hyatt Vacation Club at Ka'anapali Beach
                            </h2>
                        </div>

                        <a
                            href={hrcSearch}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900"
                        >
                            HRC filtered search
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {hrcComps.map((comp) => (
                            <CompCard key={comp.id} comp={comp} />
                        ))}
                    </div>
                </section>

                {/* WESTIN */}
                <section className="mb-16">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                The Westin Nanea Ocean Villas
                            </h2>
                        </div>

                        <a
                            href={naneaSearch}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900"
                        >
                            Nanea filtered search
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {naneaComps.map((comp) => (
                            <CompCard key={comp.id} comp={comp} />
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);
