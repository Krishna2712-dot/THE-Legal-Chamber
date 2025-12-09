"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, Users, Target, Eye, ArrowRight } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#EFE9E3] to-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#7B542F] mb-6">
              About The Legal Chambers
            </h1>
            <p className="text-lg md:text-xl text-[#3C2A21]/80 max-w-3xl mx-auto leading-relaxed">
              Delivering comprehensive, strategic legal solutions with precision, integrity, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                  <Scale className="w-6 h-6 text-[#7B542F]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#7B542F]">
                  Who We Are
                </h2>
              </div>
              <div className="space-y-4 text-[#3C2A21] leading-7 max-w-[65ch]">
                <p className="text-[1.05rem]">
                  We are a multidisciplinary, PAN-India law firm committed to delivering comprehensive, strategic, and ethically grounded legal solutions. Built on the belief that the law must serve both justice and human dignity, our firm approaches every matter with depth, clarity, and a holistic understanding of its social and economic implications. Our practice spans litigation, dispute resolution, regulatory compliance, drafting, advisory, and specialized legal domains—serving individuals, businesses, institutions, and emerging sectors with equal dedication.
                </p>
                <p className="text-[1.05rem]">
                  What distinguishes our firm is our philosophy: that effective legal practice must integrate human values with professional excellence. We engage with each brief not merely as a legal challenge, but as a responsibility to secure outcomes that are sustainable, fair, and aligned with the broader good. Our team combines rigorous legal acumen with a compassionate, solution-oriented mindset, ensuring that every client receives attentive, high-quality representation. From complex disputes to preventive legal strategies, we work proactively, transparently, and with a long-term vision. Driven by integrity, innovation, and a commitment to accessible justice, we strive to create a legal ecosystem where expertise meets empathy—and where no rightful claim is overlooked because of circumstance or lack of resources.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#C9B59C]/30 to-[#EFE9E3] flex items-center justify-center">
                <Scale className="w-24 h-24 text-[#7B542F]/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-20 bg-[#EFE9E3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="hidden md:block order-2">
              <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#C9B59C]/30 to-background flex items-center justify-center">
                <Users className="w-24 h-24 text-[#7B542F]/40" />
              </div>
            </div>
            <div className="order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                  <Users className="w-6 h-6 text-[#7B542F]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#7B542F]">
                  Why Us
                </h2>
              </div>
              <div className="space-y-4 text-[#3C2A21] leading-7 max-w-[65ch]">
                <p className="text-[1.05rem]">
                  Our firm stands apart through a philosophy rooted in Integral Humanism—an approach that views every legal matter through a holistic, responsible, and human-centric lens. This means offering strategic counsel that balances legal precision with ethical clarity, practical realities, and long-term sustainability. We understand that individuals and institutions thrive when their legal foundations are strong, compliant, and socially conscious, and we deliver solutions designed to support that vision across all sectors and jurisdictions.
                </p>
                <p className="text-[1.05rem]">
                  At the same time, we remain deeply committed to the belief that no person should be left at the whims and fancies of fate merely for want of resources to pursue justice. This balance—combining high-end capability with an unwavering commitment to fairness—defines who we are and drives us to provide legal services that are commercially sound, socially relevant, and fundamentally just.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                <Users className="w-6 h-6 text-[#7B542F]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#7B542F]">
                Founders
              </h2>
            </div>
            <div className="max-w-[65ch] text-[#3C2A21] leading-7">
              <p className="text-[1.05rem] mb-4">
                The firm&apos;s diverse practice encompasses litigation, arbitration, advisory, and transactional work across all major sectors and jurisdictions in India.
              </p>
              <p className="text-[1.05rem]">
                Our founding partners bring decades of combined experience in corporate law, litigation, and dispute resolution, establishing The Legal Chambers as a trusted advisor to businesses and individuals nationwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-20 bg-[#EFE9E3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                <Target className="w-6 h-6 text-[#7B542F]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#7B542F]">
                Our Commitment
              </h2>
            </div>
            <div className="max-w-[65ch] space-y-4 text-[#3C2A21] leading-7">
              <p className="text-[1.05rem]">
                The team of The Legal Chambers believes that every individual across the world should get legal services and in this spirit we are committed to social responsibility not only rendering our legal service to all the person but also by rendering “pro bono” legal services and supporting social responsibility initiatives.
              </p>
              <p className="text-[1.05rem]">
                Our professionals are trained to anticipate challenges, mitigate risks, and develop forward-looking solutions. Every client engagement is treated with the confidentiality, diligence, and responsiveness that corporate decision-makers expect from a trusted legal partner.
              </p>
              <p className="text-[1.05rem]">
                With associate offices and representations across major Indian jurisdictions, The Legal Chambers offers consistent, high-quality support wherever our clients operate. We have the capacity to manage multi-jurisdictional litigation and cross-border advisory through a well-established network of legal correspondents and domain specialists.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#C9B59C]/20">
                  <Eye className="w-6 h-6 text-[#7B542F]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#7B542F]">
                  Our Vision
                </h2>
              </div>
              <div className="space-y-4 text-[#3C2A21] leading-7 max-w-[65ch]">
                <p className="text-[1.05rem]">
                  To be recognized among India&apos;s leading law firms — one that sets standards in professionalism, precision, and integrity. We aspire to build enduring partnerships with clients based on trust, excellence, and a shared commitment to success.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#C9B59C]/30 to-[#EFE9E3] flex items-center justify-center">
                <Eye className="w-24 h-24 text-[#7B542F]/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#7B542F] to-[#3C2A21] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Talk to Our Experts
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Ready to discuss your legal needs? Our team is here to provide strategic counsel tailored to your objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-[#7B542F] font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
