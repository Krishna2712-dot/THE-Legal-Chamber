"use client";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Lightbulb,
  Briefcase,
  CalendarDays,
  BookOpenCheck,
  Mail,
  ArrowRight,
} from "lucide-react";

const heroHighlights = [
  { label: "Paid & Unpaid Internships", detail: "8–12 week cohorts | hybrid" },
  { label: "Training & Development", detail: "Courtroom, research, drafting" },
  { label: "Mentorship Culture", detail: "Partner-led learning pods" },
];

const internshipTracks = [
  {
    title: "Litigation & Disputes Internship",
    duration: "8–12 weeks · Delhi HQ",
    focusAreas: [
      "Briefing for High Courts, Tribunals & Appellate forums",
      "Case law research & strategy notes",
      "Court visits, drafting of pleadings & affidavits",
    ],
  },
  {
    title: "Corporate & Transactions Internship",
    duration: "6–10 weeks · Hybrid",
    focusAreas: [
      "Deal documentation, closing checklists, DD support",
      "Company law, FEMA, FDI advisory",
      "Client communication, board note preparation",
    ],
  },
  {
    title: "Policy, Research & Thought Leadership",
    duration: "Flexible · Remote friendly",
    focusAreas: [
      "White papers, articles, podcasts & webinars",
      "Legislative tracking and impact assessments",
      "Knowledge management & practice playbooks",
    ],
  },
];

const learningModules = [
  {
    title: "Induction & Immersion",
    description:
      "First week covers chambers tour, knowledge repositories, confidentiality and professional ethics, plus tooling (Notion, CLM stack, research databases).",
  },
  {
    title: "Mentor Pods",
    description:
      "Each intern or trainee is mapped to a partner + senior associate pod for weekly reviews, feedback loops, and courtroom shadowing or client call exposure.",
  },
  {
    title: "Workshops & Clinics",
    description:
      "Friday learning clinics on drafting, negotiation, forensic tech, compliance audits, and client management with visiting counsels and industry leaders.",
  },
  {
    title: "Performance Showcase",
    description:
      "Capstone presentation or memo evaluated by the practice leadership. Exceptional performers receive PPO consideration or return-offers.",
  },
];

const culturePillars = [
  {
    title: "Structured Mentorship",
    detail: "Partner-led feedback, goal sheets, and fortnightly reviews ensure every stint is purposeful.",
  },
  {
    title: "Real Responsibility",
    detail: "Interns assist on live matters, draft support briefs, and accompany seniors to client meetings.",
  },
  {
    title: "Learning Stipend & Resources",
    detail: "Access to research databases, curated reading, and limited stipends for top-performing interns.",
  },
  {
    title: "Well-being & Community",
    detail: "Open-door policy, peer circles, pro-bono drives, and weekend knowledge cafes keep morale high.",
  },
];

const applicationSteps = [
  {
    title: "Share Your Interest",
    detail: "Email your CV, a short cover note, and recent writing sample to careers@thelegalchambers.org.",
  },
  {
    title: "Screening & Interview",
    detail:
      "Selected applicants receive a brief problem statement followed by a virtual interaction with the practice lead.",
  },
  {
    title: "Offer & Onboarding",
    detail:
      "Accepted candidates receive an offer letter outlining cohort dates, expectations, and confidentiality norms.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#EFE9E3] to-background py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-4">Careers</p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Build Your Legal Career With The Legal Chambers
            </h1>
            <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
              We mentor ambitious students, young lawyers, and professionals who want to experience the rigor of a
              full-service chamber—across litigation, corporate advisory, policy, and research mandates.
            </p>
          </motion.header>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {heroHighlights.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-[#C9B59C]/60 bg-white/80 px-4 py-5 shadow-sm backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">{item.label}</p>
                <p className="mt-2 text-[#3C2A21]/80 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Opportunities */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9B59C]/20 px-4 py-1 text-sm font-semibold text-primary">
              <GraduationCap className="w-4 h-4" />
              Internship Opportunities
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-primary">Choose the track that suits your ambition</h2>
            <p className="mt-3 text-[#3C2A21]/75">
              Each cohort receives structured mentorship, live matter exposure, courtroom immersion, and weekly learning goals.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {internshipTracks.map((track, idx) => (
              <motion.article
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-2xl border border-[#C9B59C]/50 bg-[#FDFBF7] p-6 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B542F]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary">{track.title}</h3>
                  <p className="mt-1 text-sm text-[#3C2A21]/70">{track.duration}</p>
                  <ul className="mt-5 space-y-2 text-sm text-[#3C2A21]/75">
                    {track.focusAreas.map((point) => (
                      <li key={point} className="flex gap-2">
                        <BookOpenCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Development */}
      <section className="py-16 md:py-20 bg-[#EFE9E3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-semibold text-primary">
              <Users className="w-4 h-4" />
              Training & Development
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-primary">A structured journey from day one</h2>
            <p className="mt-3 text-[#3C2A21]/80">
              We combine immersive courtroom exposure with research, policy, and client-facing responsibilities so you grow as a
              well-rounded professional.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {learningModules.map((module, idx) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-[#C9B59C]/50 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                </div>
                <p className="text-sm text-[#3C2A21]/75 leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at TLC */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C9B59C]/20 px-4 py-1 text-sm font-semibold text-primary">
              <Briefcase className="w-4 h-4" />
              Life at The Legal Chambers
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-primary">More than just internships</h2>
            <p className="mt-3 text-[#3C2A21]/75">
              We believe meaningful work thrives when people feel supported. Explore our pillars that shape an inclusive, high-trust work culture.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {culturePillars.map((pillar, idx) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-2xl border border-[#C9B59C]/50 bg-[#F9F8F6] p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-primary">{pillar.title}</h3>
                <p className="mt-2 text-sm text-[#3C2A21]/75 leading-relaxed">{pillar.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-20 bg-[#EFE9E3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-sm font-semibold text-primary">
              <CalendarDays className="w-4 h-4" />
              Application Process
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-primary">How to apply</h2>
            <p className="mt-3 text-[#3C2A21]/75">
              Cohorts open every quarter. We review applications on a rolling basis, so apply early for your preferred slot.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {applicationSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative rounded-2xl border border-[#C9B59C]/50 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between text-primary mb-4">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <span className="text-sm font-bold">{idx + 1}</span>
                </div>
                <p className="text-sm text-[#3C2A21]/75 leading-relaxed">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="rounded-3xl bg-primary text-white px-8 py-12 shadow-xl"
          >
            <div className="space-y-4 text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-white/80">Join Us</p>
              <h2 className="text-3xl font-semibold">Apply for internships, training, or lateral opportunities</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                We welcome applications from final-year law students, recent graduates, lateral hires, and professionals keen on short-term research
                residencies. If you thrive on accountability, curiosity, and client impact, we would love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href="mailto:careers@thelegalchambers.org"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-primary font-semibold hover:bg-white/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  careers@thelegalchambers.org
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                  Explore contact options
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
