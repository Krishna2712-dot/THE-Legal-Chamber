"use client";
import { motion } from "framer-motion";
import { Building2, Rocket, Landmark } from "lucide-react";

const clientSegments = [
  {
    title: "Our Clients",
    icon: Building2,
    description:
      "Long-standing partnerships across industries, from strategic enterprises and emerging businesses to institutional and public bodies.",
    logos: [
      { name: "Aahana Stays Collective", sector: "Hospitality & Co-Living" },
      { name: "Keshav Nivas Realty", sector: "Sustainable Housing" },
      { name: "Rudra Buildcon India Pvt. Ltd.", sector: "Infrastructure & EPC" },
      { name: "Veda Mobility Labs", sector: "EV Logistics" },
      { name: "Nirali Life Sciences", sector: "HealthTech" },
      { name: "Prithvi LedgerTech", sector: "FinTech" },
      { name: "Akriti Media Studio", sector: "Media & IP" },
      { name: "Sahyog State Utilities Forum", sector: "Energy & Infrastructure" },
      { name: "Shraddha Relief Alliance", sector: "Non-Profit" },
      { name: "Nagarika Urban Development Authority", sector: "Urban Planning" },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EFE9E3] to-background py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#7B542F] mb-4">
              Clients & Retainers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-6">
              Trusted by Industry Leaders & Retained Advisors
            </h1>
            <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
              We partner with clients across industries—offering proactive guidance, responsive representation,
              and retainership programs that keep counsel accessible for both families and enterprises.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {clientSegments.map((segment) => {
              const Icon = segment.icon;
              return (
                <motion.section
                  key={segment.title}
                  variants={cardVariants}
                  className="rounded-2xl border border-[#C9B59C]/40 bg-[#F9F8F6] p-8 shadow-sm"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between mb-8">
                    <div className="flex items-start gap-4">
                      {Icon && (
                        <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                          <Icon className="w-6 h-6 text-[#7B542F]" />
                        </div>
                      )}
                      <div className="max-w-xl">
                        <h2 className="text-2xl font-semibold text-[#7B542F] md:text-3xl mb-3">
                          {segment.title}
                        </h2>
                        {segment.description && (
                          <p className="text-base leading-relaxed text-[#3C2A21]/70">
                            {segment.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {segment.logos.map((logo, idx) => (
                      <motion.div
                        key={logo.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="group relative overflow-hidden rounded-xl border border-[#C9B59C]/40 bg-[#3C2A21] p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-[#7B542F]/50"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7B542F]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <p className="text-lg font-semibold mb-2">{logo.name}</p>
                          <p className="text-sm text-white/70">{logo.sector}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Retain Our Services */}
      <section className="py-16 md:py-20 bg-[#EFE9E3] border-t border-[#C9B59C]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white px-8 py-10 shadow-lg border border-[#C9B59C]/50"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#7B542F] mb-4 text-center">
              Retain Our Services
            </p>
            <h2 className="text-3xl font-semibold text-center text-[#7B542F] mb-6">
              Annual Legal Advisory Plan
            </h2>
            <p className="text-base text-[#3C2A21]/80 leading-relaxed mb-6">
              At The Legal Chambers, we believe that everyone should have access to Justice and reliable legal guidance without fear of commercials. To facilitate this, we offer an Annual Legal Advisory Plan that allows individuals and families to retain our services for ongoing legal support throughout the year.
            </p>
            <div className="space-y-4 text-sm text-[#3C2A21]/80">
              <p>
                For an annual fee of <span className="font-semibold text-[#7B542F]">₹2,000</span>, individual clients who retain us under this plan are entitled to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Up to 10 legal consultations per year (in person or virtual)</li>
                <li>One complimentary legal notice drafting and sending</li>
              </ul>
              <p className="pt-2">
                This retainership arrangement enables clients to seek timely and preventive legal advice in matters such as property, tenancy, consumer issues, employment, family law, and personal documentation. Our objective is to help clients make informed legal decisions and manage their matters efficiently.
              </p>
              <p>
                For companies, startups, and SMEs, our retainership services and plans are customized based on the nature, scale, and continuity of their legal requirements.
              </p>
              <p className="text-xs text-[#3C2A21]/70 border-t border-dashed border-[#C9B59C]/60 pt-4">
                Disclaimer: This plan is a professional retainership arrangement intended to provide ongoing legal advisory support. It does not constitute solicitation, advertisement, or a guarantee of outcomes. All services are rendered strictly in accordance with the Bar Council of India Rules governing advocates’ conduct and professional ethics.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
