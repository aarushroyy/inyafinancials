import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AY 2026-27 Income Tax Return Filing | Inya Financials',
  description:
    'A detailed guide on AY 2026-27 income tax return filing, transitional rules, timelines, compliance checks, and why professional tax guidance matters.',
};

const keyDates = [
  { date: '31 July 2026', note: 'Salaried individuals, pensioners, and non-audit taxpayers filing ITR-1 or ITR-2' },
  { date: '31 August 2026', note: 'Non-audit business and professional taxpayers filing ITR-3 or ITR-4' },
  { date: '31 October 2026', note: 'Tax audit cases' },
  { date: '30 November 2026', note: 'Transfer pricing cases' },
  { date: '31 December 2026', note: 'Belated returns' },
  { date: '31 March 2027', note: 'Revised returns' },
];

const transitionalPoints = [
  'Existing deductions under Chapter VI-A continue to apply subject to prescribed conditions.',
  'House property, HRA, and housing loan deductions continue under the existing framework.',
  'The existing tax regime selection provisions remain applicable.',
  'Current ITR forms continue to be used.',
];

const aisItems = [
  'Interest income',
  'Dividend receipts',
  'Securities transactions',
  'Mutual fund investments and redemptions',
  'Property transactions',
  'High-value financial activities',
  'Tax deducted at source (TDS)',
];

const commonIssues = [
  'Incorrect reporting by banks or financial institutions',
  'Duplicate entries',
  'Mismatch between Form 26AS and AIS',
  'Unreported capital gains',
  'Incorrect TDS mapping',
  'Missing exemptions or deductions',
];

const advisoryAreas = [
  'Selection of the correct ITR form',
  'Tax regime evaluation',
  'Verification of AIS and TDS information',
  'Capital gains and foreign reporting review',
  'Reducing future litigation risk',
];

const checklist = [
  'Form 16 and salary records',
  'Interest certificates from banks and financial institutions',
  'Capital gains statements and broker reports',
  'AIS and Form 26AS verification',
  'Investment proofs and deduction documents',
  'Housing loan certificates',
  'Self-assessment tax payment details',
  'Tax regime evaluation',
  'Verification of correct ITR form selection',
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="space-y-3">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#1D4B45]/10 bg-[#EAF5F2] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1D4B45]">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-2xl font-semibold tracking-tight text-[#163632] md:text-3xl font-acidBold">
        {title}
      </h2>
      {description ? <p className="max-w-3xl text-base leading-7 text-[#35524F] md:text-lg">{description}</p> : null}
    </div>
  );
}

export default function InsightArticlePage() {
  return (
    <div className="min-h-screen bg-[#F5FBFA] text-[#163632]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(29,75,69,0.14),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(143,191,183,0.18),_transparent_26%),linear-gradient(180deg,_#F9FCFB_0%,_#F5FBFA_42%,_#FFFFFF_100%)]" />

      <main className="relative mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10 lg:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D4E4E1] pb-6">
          <Link href="/" className="text-lg font-semibold tracking-[0.18em] text-[#1D4B45] font-acid">
            INYA FINANCIALS
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#35524F] transition-colors hover:text-[#1D4B45]">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_360px] lg:items-start">
          <article className="space-y-8">
            <section className="overflow-hidden rounded-[32px] border border-[#D9E7E4] bg-white shadow-[0_24px_80px_rgba(18,61,56,0.08)]">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                  <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#35524F]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF5F2] px-3 py-1.5 text-[#1D4B45]">
                      <CalendarDays className="h-4 w-4" />
                      AY 2026-27
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F2F7F6] px-3 py-1.5">
                      <Clock3 className="h-4 w-4" />
                      Income Tax Filing Guide
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[#153531] md:text-5xl lg:text-6xl font-acidBold">
                      AY 2026-27 Income Tax Return Filing: Why Professional Tax Guidance Matters More Than Ever
                    </h1>
                    <p className="max-w-3xl text-lg leading-8 text-[#35524F] md:text-xl">
                      The current filing season is not just a routine compliance exercise. New legislation discussions,
                      tighter reporting, and stronger data matching mean accuracy, review, and professional judgment matter more than ever.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://wa.link/2857n1"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1D4B45] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#163632]"
                    >
                      Speak with INYA
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1D4B45]/20 bg-white px-5 py-3 text-sm font-semibold text-[#1D4B45] transition-colors hover:border-[#1D4B45]/35 hover:bg-[#F2F7F6]"
                    >
                      Explore services
                    </Link>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-[#1D4B45] px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(143,191,183,0.3),_transparent_26%)]" />
                  <div className="relative space-y-5">
                    <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                          <Sparkles className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-white/70">Why it matters</p>
                          <p className="mt-1 text-lg font-semibold">Accuracy now protects your future.</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-white/80">
                        The tax portal, AIS, and data matching systems can surface mismatches quickly. A careful review reduces notices and avoids preventable issues later.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/60">Primary focus</p>
                        <p className="mt-2 text-base font-medium">Compliance with clarity, not just filing on time.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/60">Best outcome</p>
                        <p className="mt-2 text-base font-medium">Correct disclosures, valid forms, and fewer future disputes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8">
              <SectionTitle
                eyebrow="Overview"
                title="The filing season has become a review exercise, not a formality"
                description="Return filing should not be treated as a simple data-entry task. It now requires careful evaluation of income disclosures, tax positions, deductions, and long-term implications."
              />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-[#F2F7F6] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4B45]">Key message</p>
                  <p className="mt-3 text-base leading-7 text-[#35524F]">
                    Professional guidance from Chartered Accountants and tax advisors helps ensure compliance while minimizing the risk of future disputes.
                  </p>
                </div>
                <div className="rounded-3xl border border-[#D9E7E4] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4B45]">Practical takeaway</p>
                  <p className="mt-3 text-base leading-7 text-[#35524F]">
                    Timely filing is important, but accurate filing is the real objective. The return becomes part of your financial record across loans, assessments, and other reviews.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8" id="transitional-position">
              <SectionTitle
                eyebrow="Transitional Position"
                title="For AY 2026-27, the Income Tax Act, 1961 continues to apply"
                description="A common misconception this year is that the new Income Tax Act, 2025 applies to the current return filing cycle. For income earned during FY 2025-26, the existing law still governs the filing process."
              />

              <div className="grid gap-4 md:grid-cols-2">
                {transitionalPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-[#D9E7E4] bg-[#FBFCFC] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1D4B45]" />
                    <p className="text-base leading-7 text-[#35524F]">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8" id="timelines">
              <SectionTitle
                eyebrow="Important Dates"
                title="Filing timelines for AY 2026-27"
                description="Delays can affect planning flexibility and may also trigger interest, fees, and restrictions on certain benefits."
              />

              <div className="grid gap-4 md:grid-cols-2">
                {keyDates.map((item) => (
                  <div key={item.date} className="rounded-3xl border border-[#D9E7E4] bg-[#F9FCFB] p-5">
                    <p className="text-2xl font-semibold tracking-tight text-[#1D4B45] font-acidBold">{item.date}</p>
                    <p className="mt-2 text-base leading-7 text-[#35524F]">{item.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8" id="data-entry">
              <SectionTitle
                eyebrow="Data Review"
                title="Filing an ITR is no longer a mere data-entry exercise"
                description="The Income Tax Department now has a stronger information collection and analytics framework. That makes portal data useful, but not automatically correct."
              />

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-[#F2F7F6] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4B45]">AIS and TIS can capture</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {aisItems.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/70 bg-white px-4 py-3 text-sm font-medium text-[#35524F] shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-[#D9E7E4] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4B45]">Common issues we see</p>
                  <div className="mt-4 space-y-3">
                    {commonIssues.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl bg-[#FBFCFC] p-4">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1D4B45]" />
                        <p className="text-base leading-7 text-[#35524F]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#35524F]">
                    Accepting portal data without independent verification can create future compliance issues. A professional review helps catch those problems early.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8" id="professional-value">
              <SectionTitle
                eyebrow="Professional Value"
                title="Where Chartered Accountants and tax professionals add the most value"
                description="A return today reflects far more than annual income disclosure. It creates a financial profile that may later be reviewed during assessments, loan applications, visas, funding exercises, and other regulatory checks."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {advisoryAreas.map((item) => (
                  <div key={item} className="rounded-3xl border border-[#D9E7E4] bg-[#FBFCFC] p-5">
                    <FileText className="h-6 w-6 text-[#1D4B45]" />
                    <h3 className="mt-4 text-lg font-semibold text-[#163632] font-acidMedium">{item}</h3>
                    <p className="mt-2 text-base leading-7 text-[#35524F]">
                      Professional review helps taxpayers choose the right approach and document their position correctly.
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 rounded-3xl bg-[#1D4B45] p-5 text-white md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">What a review does</p>
                  <p className="mt-3 text-lg leading-8 text-white/90">
                    It reconciles information, validates form choice, evaluates deductions, and helps reduce the chance of notices later.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">What it prevents</p>
                  <p className="mt-3 text-lg leading-8 text-white/90">
                    Preventive review is usually less expensive than responding to automated mismatch notices after filing.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8" id="checklist">
              <SectionTitle
                eyebrow="Pre-Filing Checklist"
                title="What to verify before you submit your return"
                description="A complete checklist reduces the chance of missing information and helps you file with confidence."
              />

              <div className="grid gap-3 md:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#D9E7E4] bg-[#F9FCFB] p-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#EAF5F2] text-sm font-semibold text-[#1D4B45]">
                      ✓
                    </div>
                    <p className="text-base leading-7 text-[#35524F]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)] sm:p-8" id="conclusion">
              <SectionTitle
                eyebrow="Conclusion"
                title="Accurate filing is about long-term tax efficiency, not just deadlines"
                description="The AY 2026-27 filing season should be viewed as a disciplined compliance exercise. Technology may simplify data collection, but professional judgment is still essential."
              />

              <div className="space-y-4 text-base leading-8 text-[#35524F] md:text-lg">
                <p>
                  The role of a Chartered Accountant extends beyond preparation of returns. It includes interpretation of tax provisions, evaluation of tax positions, identification of risks, and ensuring that compliance aligns with the taxpayer&apos;s overall financial objectives.
                </p>
                <p>
                  Accurate filing is not only about meeting deadlines; it is about building long-term tax efficiency and minimizing future exposure.
                </p>
              </div>

              <div className="rounded-3xl border border-[#1D4B45]/12 bg-[#EAF5F2] p-5 text-[#35524F]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1D4B45]">Disclaimer</p>
                <p className="mt-3 text-base leading-7">
                  This article is intended for general informational purposes only and should not be construed as legal, tax, accounting, or professional advice. Tax laws and regulations may change, and readers should seek guidance from INYA or their own advisor based on their specific facts and circumstances.
                </p>
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-6 lg:space-y-6">
            <div className="space-y-5 rounded-[28px] border border-[#D9E7E4] bg-white p-6 shadow-[0_20px_70px_rgba(18,61,56,0.05)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF5F2] text-[#1D4B45]">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#35524F]">Quick guide</p>
                  <p className="mt-1 text-lg font-semibold text-[#163632]">Navigate the article</p>
                </div>
              </div>

              <div className="space-y-2 text-sm font-medium text-[#35524F]">
                <a href="#transitional-position" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[#F2F7F6] hover:text-[#1D4B45]">
                  Transitional position
                </a>
                <a href="#timelines" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[#F2F7F6] hover:text-[#1D4B45]">
                  Filing timelines
                </a>
                <a href="#data-entry" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[#F2F7F6] hover:text-[#1D4B45]">
                  Data review and AIS
                </a>
                <a href="#professional-value" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[#F2F7F6] hover:text-[#1D4B45]">
                  Professional value
                </a>
                <a href="#checklist" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[#F2F7F6] hover:text-[#1D4B45]">
                  Pre-filing checklist
                </a>
                <a href="#conclusion" className="block rounded-2xl px-4 py-3 transition-colors hover:bg-[#F2F7F6] hover:text-[#1D4B45]">
                  Conclusion and disclaimer
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#1D4B45]/12 bg-[#1D4B45] p-6 text-white shadow-[0_20px_70px_rgba(18,61,56,0.1)]">
              <p className="text-xs uppercase tracking-[0.22em] text-white/65">Need help filing?</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight font-acidBold">Get a review before you submit</h3>
              <p className="mt-3 text-base leading-7 text-white/85">
                If you want this article tailored into a service page or want a filing review, we can shape the content around your tax position and compliance needs.
              </p>
              <div className="mt-5 space-y-3">
                <Link
                  href="https://wa.link/2857n1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1D4B45] transition-colors hover:bg-[#EAF5F2]"
                >
                  Contact INYA
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Return to home
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}