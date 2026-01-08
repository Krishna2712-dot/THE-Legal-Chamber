"use client";
import { motion } from "framer-motion";
import {
  Building2,
  Scale,
  Home,
  Heart,
  Briefcase,
  Lightbulb,
  Receipt,
  Banknote,
  Shield,
  Gavel,
  ShoppingCart,
  Leaf,
  Rocket,
  Globe,
  HandHeart,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate & Commercial Law",
    icon: Building2,
    summary: "Comprehensive support for corporate transactions, governance, and strategic investments.",
    items: [
      "Company Formation & Structuring",
      "Shareholders' Agreements & Joint Ventures",
      "Mergers & Acquisitions (M&A) - Domestic & Cross-border",
      "Private Equity & Venture Capital",
      "Corporate Due Diligence & Legal Audits",
      "Corporate Governance & Board Advisory",
      "Foreign Direct Investment (FDI) & FEMA Compliance",
      "Commercial Contracts & Business Advisory",
      "Business Transfer & Asset Purchase Agreements",
      "Franchising & Distribution Agreements",
    ],
  },
  {
    title: "Litigation & Dispute Resolution",
    icon: Scale,
    summary: "Strategic advocacy focused on outcomes in the courtroom and at the negotiation table.",
    items: [
      "Civil & Commercial Litigation",
      "Criminal Litigation",
      "Arbitration & Mediation",
      "Consumer Disputes",
      "Recovery Suits & Execution Proceedings",
      "White Collar Crimes & Economic Offences",
      "Writ Petitions & Constitutional Matters",
    ],
  },
  {
    title: "Real Estate & Property Law",
    icon: Home,
    summary: "Due diligence and transaction support for developers, investors, and homeowners.",
    items: [
      "Property Due Diligence",
      "Sale, Purchase & Lease Transactions",
      "Title Verification & Mutation",
      "Landlord-Tenant Disputes",
      "RERA Compliance",
      "Construction & Development Agreements",
    ],
  },
  {
    title: "Family & Personal Laws",
    icon: Heart,
    summary: "Compassionate counsel for sensitive personal and family matters.",
    items: [
      "Marriage, Divorce & Maintenance",
      "Child Custody & Adoption",
      "Domestic Violence Matters",
      "Wills, Trusts & Inheritance",
      "Personal Laws: Hindu, Muslim, Christian",
    ],
  },
  {
    title: "Labour & Employment Law",
    icon: Briefcase,
    summary: "Building compliant people processes and resolving workplace disputes.",
    items: [
      "Employment Contracts & HR Policies",
      "Industrial Disputes & Termination Matters",
      "Labour Law Compliance & Audits",
      "Employee Benefits & Compensation",
      "POSH (Sexual Harassment) Policies & Training",
    ],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    icon: Lightbulb,
    summary: "Protecting and enforcing innovation, brand identity, and creative works.",
    items: [
      "Trademark Registration & Protection",
      "Copyrights & Designs",
      "Patents & Licensing",
      "IP Infringement & Enforcement",
      "Technology Transfer & Confidentiality Agreements",
    ],
  },
  {
    title: "Taxation (Direct & Indirect)",
    icon: Receipt,
    summary: "Trusted guidance through complex tax structures and regulatory filings.",
    items: [
      "Income Tax Advisory & Litigation",
      "GST Compliance & Appeals",
      "TDS / TCS Matters",
      "Tax Planning & Structuring",
      "Representation before Tax Authorities",
    ],
  },
  {
    title: "Banking & Finance",
    icon: Banknote,
    summary: "Advising lenders and borrowers across financing, restructuring, and recovery.",
    items: [
      "Loan Documentation & Security Creation",
      "Debt Recovery & Insolvency (IBC)",
      "Financial Restructuring",
      "NBFC & FinTech Regulations",
      "Regulatory Approvals & Compliance",
    ],
  },
  {
    title: "Cyber & Technology Law",
    icon: Shield,
    summary: "Safeguarding digital assets, data governance, and emerging tech ventures.",
    items: [
      "Data Protection & Privacy Compliance",
      "Cybercrime Litigation",
      "IT Contracts & Software Licensing",
      "E-Commerce Regulations",
      "Digital Signature & Electronic Evidence",
    ],
  },
  {
    title: "Criminal Law",
    icon: Gavel,
    summary: "Robust defence and prosecution strategy for trial and appellate proceedings.",
    items: [
      "Anticipatory & Regular Bail",
      "Trial & Appeal Representation",
      "Economic Offences / White Collar Crimes",
      "NDPS & Cybercrime Cases",
      "Cheque Bounce / 138 NI Act Matters",
    ],
  },
  {
    title: "Consumer & Civil Law",
    icon: ShoppingCart,
    summary: "Resolving civil claims and consumer disputes with clarity and speed.",
    items: [
      "Consumer Protection Complaints",
      "Deficiency in Service & Product Liability",
      "Civil Suits for Recovery / Injunction",
      "Rent Control Matters",
    ],
  },
  {
    title: "Environment & Regulatory Compliance",
    icon: Leaf,
    summary: "Guiding stakeholders through environmental approvals and ESG obligations.",
    items: [
      "Environmental Clearances & Permissions",
      "Pollution Control Board Compliance",
      "Energy & Infrastructure Projects",
      "Public Interest Litigations (PILs)",
    ],
  },
  {
    title: "Startups & MSMEs Advisory",
    icon: Rocket,
    summary: "Partnering with founders and MSMEs on growth, compliance, and fundraising.",
    items: [
      "Business Incorporation & Licensing",
      "Founder Agreements & Shareholding",
      "Compliance Management",
      "Fundraising & Investment Structuring",
      "Legal Documentation & Policy Drafting",
      "ESOPs & Cap Table Management",
      "IP Registration & Brand Protection",
      "Employment & Consultancy Contracts",
      "VC / Angel / Seed Funding Legal Support",
      "Regulatory & Tax Compliance",
    ],
  },
  {
    title: "International & Cross-Border Matters",
    icon: Globe,
    summary: "Cross-border legal solutions for multi-jurisdictional businesses and individuals.",
    items: [
      "International Arbitration & Dispute Resolution",
      "Cross-border Mergers & Transactions",
      "Foreign Collaboration & Joint Ventures",
      "Overseas Investment (ODI) & FEMA Compliance",
      "Immigration, Citizenship & Visa Advisory",
      "International Family Disputes & Divorce",
      "International Taxation & Transfer Pricing",
      "Trade & Customs Law",
      "Extradition & Mutual Legal Assistance Matters",
    ],
  },
  {
    title: "Pro Bono & Legal Aid",
    icon: HandHeart,
    summary: "Championing access to justice through community initiatives and advocacy.",
    items: [
      "Access to Justice Programs",
      "Community Legal Awareness",
      "NGO & Social Sector Advisory",
      "Free Legal Aid for Underprivileged Clients",
      "Public Interest Litigation (PILs)",
      "Community Outreach & Social Justice Initiatives",
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

export default function PracticeAreasPage() {
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
              Practice Areas
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-6">
              Integrated Legal Expertise Across Industries
            </h1>
            <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
              From corporate transactions to high-stakes litigation and advisory mandates, The Legal Chambers
              offers end-to-end representation through multidisciplinary teams that align legal strategy with
              your commercial objectives.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.article
                  key={area.title}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-2xl border border-[#C9B59C]/40 bg-[#F9F8F6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-[#7B542F]/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B542F]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-[#C9B59C]/20 group-hover:bg-[#7B542F]/10 transition-colors">
                        <Icon className="w-6 h-6 text-[#7B542F]" />
                      </div>
                      <h2 className="text-xl font-semibold text-[#7B542F] md:text-2xl flex-1">
                        {area.title}
                      </h2>
                    </div>
                    <p className="text-sm text-[#3C2A21]/70 md:text-base mb-4 leading-relaxed">
                      {area.summary}
                    </p>
                    <ul className="mt-auto space-y-2.5 text-sm text-[#3C2A21]/80">
                      {area.items.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7B542F]" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                      {area.items.length > 5 && (
                        <li className="text-xs text-[#7B542F] font-medium pt-1">
                          +{area.items.length - 5} more services
                        </li>
                      )}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
