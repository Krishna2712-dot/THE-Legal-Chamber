"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

interface TeamMember {
  _id: string;
  name: string;
  title: string;
  email: string;
  phone?: string;
  linkedin?: string;
  bio: string;
  practiceAreas: string[];
  photo?: any;
  order?: number;
  featured?: boolean;
  category?: string;
}

const CATEGORY_CONFIG = [
  {
    value: "founding",
    title: "Founding Partners",
    description: "Visionaries who established The Legal Chambers and continue to mentor every mandate.",
  },
  {
    value: "senior",
    title: "Senior Partners",
    description: "Practice leaders driving complex litigation, arbitration, and cross-border advisory.",
  },
  {
    value: "partner",
    title: "Partners",
    description: "Core partners managing client relationships, strategy, and execution.",
  },
  {
    value: "associate",
    title: "Associates",
    description: "Dynamic lawyers supporting matters end-to-end with research, drafting, and client interfacing.",
  },
  {
    value: "paralegal",
    title: "Para Legals",
    description: "Specialists who power documentation, filings, and knowledge management.",
  },
] as const;

const FALLBACK_CATEGORY = "associate";

export default function OurTeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Fetch team members from Sanity
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Add cache-busting timestamp to ensure fresh data
        const response = await fetch(`/api/team?t=${Date.now()}`, {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        const data = await response.json();
        
        if (!response.ok) {
          if (response.status === 503) {
            setError("CMS is not configured yet. Please set up Sanity CMS.");
          } else {
            setError("Failed to load team members. Please try again later.");
          }
          setTeamMembers([]);
        } else {
          setTeamMembers(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members. Please try again later.");
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();

    // Set up polling to check for updates every 5 seconds
    const intervalId = setInterval(() => {
      fetchTeamMembers();
    }, 5000);

    // Also listen for focus events to refresh when user returns to tab
    const handleFocus = () => {
      fetchTeamMembers();
    };
    window.addEventListener("focus", handleFocus);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const groupedMembers = useMemo(() => {
    return CATEGORY_CONFIG.map((category) => ({
      ...category,
      members: teamMembers.filter(
        (member) => (member.category || FALLBACK_CATEGORY) === category.value
      ),
    }));
  }, [teamMembers]);

  const sectionVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
              Our Team
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-6">
              Meet the Professionals Behind The Legal Chambers
            </h1>
            <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
              Our multidisciplinary team brings together decades of combined experience across litigation, arbitration, and advisory practices.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Category Quick Navigation - Moved to top */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#C9B59C]/50 bg-[#F9F8F6] px-6 py-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {CATEGORY_CONFIG.map((category) => (
                <a
                  key={category.value}
                  href={`#${category.value}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#C9B59C]/60 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-[#EFE9E3]"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B542F] mb-4"></div>
              <p className="text-[#3C2A21]/70">Loading team members...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-600 mb-4">{error}</p>
              <p className="text-sm text-[#3C2A21]/70">Please check your CMS configuration.</p>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#3C2A21]/70 mb-4">No team members found.</p>
              <p className="text-sm text-[#3C2A21]/50">Add team members through the admin panel.</p>
            </div>
          ) : (
            groupedMembers.map((group) => (
              <motion.section
                key={group.value}
                id={group.value}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
                className="space-y-8"
              >
                <header className="space-y-3 text-center md:text-left scroll-mt-32">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-3xl font-bold text-primary">{group.title}</h2>
                    <span className="text-sm uppercase tracking-[0.3em] text-[#3C2A21]/60">
                      {group.members.length} {group.members.length === 1 ? "Member" : "Members"}
                    </span>
                  </div>
                  <p className="text-[#3C2A21]/75 text-base max-w-3xl">{group.description}</p>
                </header>

                {group.members.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-[#C9B59C]/60 bg-[#F9F8F6] p-6 text-center text-sm text-[#3C2A21]/70">
                    Profiles coming soon. Update the “{group.title}” category in Sanity to display team members here.
                  </div>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {group.members.map((member) => (
                      <article
                        key={member._id}
                        tabIndex={0}
                        aria-label={`${member.name}, ${member.title}`}
                        className="group relative h-full rounded-3xl border border-[#C9B59C]/40 bg-[#FDFBF7] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <div className="perspective-1000 h-full">
                          <div
                            className="relative h-full min-h-[420px] transition-[transform] duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]"
                          >
                            {/* Front */}
                            <div className="absolute inset-0 backface-hidden rounded-3xl bg-[#F9F8F6] p-6 flex flex-col items-center text-center">
                              <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-[#C9B59C]/40 shadow-lg mb-5">
                                {member.photo ? (
                                  <img
                                    src={urlFor(member.photo).width(420).height(420).url()}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#C9B59C] to-[#7B542F] text-white text-4xl font-semibold">
                                    {member.name.charAt(0)}
                                  </div>
                                )}
                              </div>
                              <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                              <p className="text-sm text-[#3C2A21]/70 mt-1">{member.title}</p>
                              <div className="mt-5 space-y-2 text-sm text-[#3C2A21]/80">
                                <a
                                  href={`mailto:${member.email}`}
                                  className="flex items-center justify-center gap-2 text-primary hover:text-[#3C2A21] transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Mail className="w-4 h-4" />
                                  <span>{member.email}</span>
                                </a>
                                {member.phone && (
                                  <a
                                    href={`tel:${member.phone}`}
                                    className="flex items-center justify-center gap-2 text-primary hover:text-[#3C2A21] transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Phone className="w-4 h-4" />
                                    <span>{member.phone}</span>
                                  </a>
                                )}
                              </div>
                              <p className="mt-auto text-xs text-[#3C2A21]/60">
                                Hover or focus to view profile
                              </p>
                            </div>

                            {/* Back */}
                            <div
                              className="absolute inset-0 backface-hidden rounded-3xl bg-[#3C2A21] p-6 text-white overflow-hidden [transform:rotateY(180deg)]"
                              tabIndex={0}
                              aria-label={`Details for ${member.name}`}
                            >
                              <div className="flex flex-col h-full gap-4">
                                <div>
                                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                                  <p className="text-sm text-white/70 mt-1">{member.title}</p>
                                </div>
                                <div className="flex-1 flex flex-col min-h-0">
                                  <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">
                                    Biography
                                  </p>
                                  <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                                    <p className="text-sm leading-relaxed text-white/85">
                                      {member.bio}
                                    </p>
                                  </div>
                                </div>
                                {member.practiceAreas?.length ? (
                                  <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">
                                      Practice Areas
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                      {member.practiceAreas.map((area) => (
                                        <span
                                          key={area}
                                          className="rounded-full bg-white/10 px-3 py-1 text-xs"
                                        >
                                          {area}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ) : null}
                                {member.linkedin && (
                                  <div className="mt-auto">
                                    <a
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Linkedin className="w-4 h-4" />
                                      LinkedIn
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </motion.section>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
