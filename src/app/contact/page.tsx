"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";

const regionalOffices = [
  "Srinagar",
  "Gujarat",
  "Mumbai",
  "Kolkata",
  "Guwahati, Assam",
  "Hyderabad",
  "Bangalore",
];

const contactCards = [
  {
    title: "General Enquiries",
    value: "support@thelegalchambers.org",
    href: "mailto:support@thelegalchambers.org",
    icon: Mail,
    helper: "Our team replies within one business day.",
  },
  {
    title: "Client Services",
    value: "+91 96627 78086",
    href: "tel:+919662778086",
    icon: Phone,
    helper: "Available Monday to Saturday, 9:30-18:30 IST.",
  },
  {
    title: "Press & Collaboration",
    value: "press@thelegalchambers.org",
    href: "mailto:press@thelegalchambers.org",
    icon: MessageSquare,
    helper: "For speaking engagements and media requests.",
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

export default function ContactPage() {
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
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-6">
              We are within reach wherever you are
            </h1>
            <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
              Schedule a consultation or meet us at our Defence Colony head office. We also serve clients across
              major Indian metros through our regional desks and on-ground associates.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column - Head Office */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="rounded-2xl border border-[#C9B59C]/40 bg-[#F9F8F6] p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                  <MapPin className="w-6 h-6 text-[#7B542F]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#7B542F] md:text-3xl">
                  Head Office - New Delhi
                </h2>
              </div>
              <div className="space-y-2 text-base text-[#3C2A21]/70 mb-8">
                <p>K Block, Defence Colony</p>
                <p>New Delhi, India</p>
                <p>Pin: 110024</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                    >
                      <Link
                        href={card.href}
                        className="group relative overflow-hidden rounded-xl border border-[#C9B59C]/40 bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-[#7B542F]/30"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7B542F]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-2">
                            <Icon className="w-4 h-4 text-[#7B542F]" />
                            <p className="text-xs font-semibold text-[#7B542F] uppercase tracking-wide">
                              {card.title}
                            </p>
                          </div>
                          <p className="text-lg font-semibold text-[#3C2A21]">{card.value}</p>
                          <p className="mt-2 text-xs text-[#3C2A21]/60">{card.helper}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-8 rounded-xl border border-dashed border-[#C9B59C]/60 bg-[#EFE9E3] p-4 text-sm text-[#3C2A21]/70 leading-relaxed">
                Meetings are by appointment to respect client confidentiality. Please email or call ahead to schedule a visit.
              </div>
            </motion.section>

            {/* Right Column - Map & Regional Offices */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[#C9B59C]/40 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B542F]/10 to-[#7B542F]/30" />
                <iframe
                  title="The Legal Chambers Map"
                  className="absolute inset-0 h-full w-full opacity-90"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.315738408692!2d77.23093975!3d28.5627402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e0f3be53bb%3A0x816ec88680ea46bd!2sDefence%20Colony%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1731324000000!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="rounded-2xl border border-[#C9B59C]/40 bg-[#F9F8F6] p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#7B542F] mb-2">Regional Desks</h3>
                <p className="text-sm text-[#3C2A21]/70 mb-4">
                  We coordinate matters through our associate network across the following cities:
                </p>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {regionalOffices.map((office, idx) => (
                    <motion.span
                      key={office}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="rounded-full bg-background border border-[#C9B59C]/40 px-3 py-2 text-center text-sm text-[#3C2A21]/80 shadow-sm hover:bg-[#EFE9E3] transition-colors"
                    >
                      {office}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-[#C9B59C]/20 border border-[#C9B59C]/40 px-4 py-3 text-xs text-[#3C2A21]/70 leading-relaxed">
                  For cross-border assistance, we maintain alliances with correspondent firms in the UK, Singapore, and the Middle East.
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}
