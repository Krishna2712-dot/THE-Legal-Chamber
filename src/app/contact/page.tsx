"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MessageSquare, MapPin, ArrowRight } from "lucide-react";

const regionalOffices = [
  "Delhi NCR",
  "Srinagar",
  "Mumbai",
  "Kolkata",
  "Hyderabad",
  "Gujarat",
  "Assam",
  "Karnataka",
];

const contactCards = [
  {
    title: "General Enquiries",
    value: "office@thelegalchambers.org",
    href: "mailto:office@thelegalchambers.org",
    icon: Mail,
    helper: "Our team replies within one business day.",
  },
  {
    title: "Contact",
    value: "+91 96627 78086",
    href: "tel:+919662778086",
    icon: Phone,
    helper: "Available Monday to Saturday, 9:30-18:30 IST.",
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
      <section className="bg-gradient-to-br from-[#EFE9E3] to-background py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7B542F] mb-1">
              Contact Us
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-[#7B542F] mb-2">
              We are within reach wherever you are
            </h1>
            <p className="text-sm text-[#3C2A21]/80 leading-relaxed">
              Schedule a consultation or meet us at our Delhi High Court office. We also serve clients across
              major Indian metros through our regional desks and on-ground associates.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-2 md:py-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Top Left - Head Office */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="rounded-xl border border-[#C9B59C]/40 bg-[#F9F8F6] p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-[#C9B59C]/20 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#7B542F]" />
                </div>
                <h2 className="text-lg font-semibold text-[#7B542F] md:text-xl">
                  Head Office - New Delhi
                </h2>
              </div>
              <div className="space-y-0.5 text-xs text-[#3C2A21]/70 mb-4">
                <p>483, Lawyers Chambers, Block-II</p>
                <p>Delhi High Court, New Delhi - 11003</p>
              </div>
              <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 mb-3">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="w-full"
                    >
                      <Link
                        href={card.href}
                        className="group relative overflow-visible rounded-lg border-2 border-[#C9B59C]/40 bg-background p-3 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:ring-2 hover:ring-[#7B542F]/30 hover:border-[#7B542F]/60 block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7B542F]/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div className="p-1 rounded-md bg-[#7B542F]/10 group-hover:bg-[#7B542F]/20 transition-colors flex-shrink-0">
                              <Icon className="w-3.5 h-3.5 text-[#7B542F]" />
                            </div>
                            <p className="text-xs font-semibold text-[#7B542F] uppercase tracking-wide">
                              {card.title}
                            </p>
                          </div>
                          <p className="text-sm font-bold text-[#3C2A21] mb-0.5 break-words">{card.value}</p>
                          <p className="text-xs text-[#3C2A21]/60 leading-snug line-clamp-2">{card.helper}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <div className="rounded-lg border border-dashed border-[#C9B59C]/60 bg-[#EFE9E3] p-2 text-xs text-[#3C2A21]/70 leading-relaxed">
                Meetings are by appointment to respect client confidentiality. Please email or call ahead to schedule a visit.
              </div>
            </motion.section>

            {/* Top Right - Regional Desks (Larger) */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: 0.1 }}
              className="rounded-xl border-2 border-[#C9B59C]/40 bg-[#F9F8F6] p-5 shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#7B542F] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Regional Desks</span>
              </h3>
              <p className="text-sm text-[#3C2A21]/70 mb-4 leading-relaxed">
                We coordinate matters through our associate network across the following cities and regional offices:
              </p>
              <div className="space-y-2.5 text-sm text-[#3C2A21]/80 mb-4">
                <p className="font-semibold text-[#7B542F] text-base mb-2">Regional Offices</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7B542F] font-semibold min-w-[70px] flex-shrink-0">Gujarat:</span>
                    <span className="leading-relaxed">408 Moneyplant Business Hub, Silver Oak University Road, S G Highway, Gota, Ahmedabad, Gujarat - 382481</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7B542F] font-semibold min-w-[70px] flex-shrink-0">Assam:</span>
                    <span className="leading-relaxed">H. No 13, Chandmari Milanpur, Near Shiv Mandir, Guwahati, Assam - 781021</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7B542F] font-semibold min-w-[70px] flex-shrink-0">Karnataka:</span>
                    <span className="leading-relaxed">11/2 Second Floor, Ranganatha Market, J.M. Road, Avenue Road Cross, Behind Indian Bank, Bangalore, Karnataka - 560002</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-[#C9B59C]/40 pt-4">
                <p className="text-sm font-semibold text-[#7B542F] uppercase tracking-wide mb-3">Other Locations</p>
                <div className="grid grid-cols-3 gap-2">
                  {regionalOffices.map((office, idx) => (
                    <motion.span
                      key={office}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="rounded-lg bg-background border border-[#C9B59C]/40 px-3 py-2 text-center text-xs text-[#3C2A21]/80 shadow-sm hover:bg-[#EFE9E3] hover:border-[#7B542F]/40 transition-all whitespace-nowrap"
                    >
                      {office}
                    </motion.span>
                  ))}
                </div>
                </div>
            </motion.section>

            {/* Bottom Left - Map */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl border border-[#C9B59C]/40 shadow-lg">
                <iframe
                  title="The Legal Chambers - Delhi High Court"
                  className="absolute inset-0 h-full w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004.3621906592034!2d77.23256357600472!3d28.609473525677327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d966d5a0db%3A0x651b19f1d812463!2sDelhi%20High%20Court%2C%20India%20Gate%2C%20New%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1765297349286!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}
