"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Newspaper, Camera, PenTool, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

const resourceTabs = [
  {
    id: "judgements",
    label: "Noted Judgements",
    icon: BookOpen,
    description:
      "Landmark decisions and precedent-setting matters handled or closely followed by our teams.",
  },
  {
    id: "news",
    label: "News Reports",
    icon: Newspaper,
    description:
      "Coverage of The Legal Chambers in national media and updates on regulatory developments.",
  },
  {
    id: "media",
    label: "Media",
    icon: Camera,
    description:
      "Video explainers, panel discussions, and social highlights from our practitioners.",
  },
  {
    id: "blogs",
    label: "Blogs",
    icon: PenTool,
    description:
      "Perspectives and thought leadership authored by our advocates and sector specialists.",
  },
];

interface ResourceEntry {
  _id: string;
  title: string;
  summary: string;
  link?: string;
  image?: any;
  mediaType?: string;
  slug?: { current: string };
  publishedAt?: string;
  judgementDate?: string;
  author?: string;
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState(resourceTabs[0]);
  const [entries, setEntries] = useState<ResourceEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint = `/api/resources/${activeTab.id}?t=${Date.now()}`;
        const response = await fetch(endpoint, {
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
          },
        });
        const data = await response.json();
        
        if (!response.ok) {
          // Check if it's a configuration error
          if (response.status === 503 && data.error) {
            setError(
              "CMS is not configured yet. Please set up Sanity CMS. See README_CMS.md for instructions."
            );
          } else {
            throw new Error(data.error || `Failed to fetch ${activeTab.id}`);
          }
          setEntries([]);
        } else {
          // Handle both array response and object with items
          setEntries(Array.isArray(data) ? data : data.items || []);
        }
      } catch (err) {
        console.error(`Error fetching ${activeTab.id}:`, err);
        setError(`Failed to load ${activeTab.label}. Please try again later.`);
        setEntries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up polling to check for updates every 10 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);

    // Also listen for focus events to refresh when user returns to tab
    const handleFocus = () => {
      fetchData();
    };
    window.addEventListener("focus", handleFocus);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
    };
  }, [activeTab.id, activeTab.label]);

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
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#7B542F] mb-6">
              Insights, Updates & Thought Leadership
            </h1>
            <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
              Stay informed with curated legal updates, case notes, and multimedia explainers created by The Legal Chambers.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {resourceTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab.id === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-[#7B542F] bg-[#7B542F] text-white shadow-lg shadow-[#7B542F]/30"
                      : "border-[#C9B59C]/40 bg-[#F9F8F6] text-[#3C2A21] hover:border-[#7B542F]/60 hover:bg-[#EFE9E3]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#7B542F]"}`} />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.section
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-[#C9B59C]/40 bg-[#F9F8F6] p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                {(() => {
                  const Icon = activeTab.icon;
                  return (
                    <div className="p-2 rounded-lg bg-[#C9B59C]/20">
                      <Icon className="w-5 h-5 text-[#7B542F]" />
                    </div>
                  );
                })()}
                <p className="text-base text-[#3C2A21]/80 md:text-lg leading-relaxed">
                  {activeTab.description}
                </p>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#7B542F]"></div>
                  <p className="mt-4 text-[#3C2A21]/70">Loading {activeTab.label}...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-red-600">{error}</p>
                </div>
              ) : entries.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-[#3C2A21]/70">No {activeTab.label.toLowerCase()} available yet.</p>
                </div>
              ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {entries.map((entry, idx) => {
                    // Determine the detail page link based on content type
                    let entryLink = "#";
                    if (activeTab.id === "blogs" && entry.slug?.current) {
                      entryLink = `/resources/blogs/${entry.slug.current}`;
                    } else if (activeTab.id === "media") {
                      entryLink = `/resources/media/${entry._id}`;
                    } else if (activeTab.id === "judgements") {
                      entryLink = `/resources/judgements/${entry._id}`;
                    } else if (activeTab.id === "news") {
                      entryLink = entry.link || "#";
                    } else {
                      entryLink = entry.link || "#";
                    }

                    // Handle image URL for all content types
                    let displayImageUrl: string | null = null;
                    if (entry.image) {
                      try {
                        displayImageUrl = urlFor(entry.image).width(400).height(250).url();
                      } catch (e) {
                        console.error("Error generating image URL:", e);
                      }
                    }
                    
                    return (
                  <motion.article
                        key={entry._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="group flex h-full flex-col justify-between rounded-xl bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-[#7B542F]/20"
                  >
                        {displayImageUrl && (
                          <div className="mb-4 rounded-lg overflow-hidden">
                            <img
                              src={displayImageUrl}
                              alt={entry.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                    <div>
                      <h3 className="text-lg font-semibold text-[#7B542F] mb-3">{entry.title}</h3>
                          <p className="text-sm leading-relaxed text-[#3C2A21]/70 mb-2">{entry.summary}</p>
                          {entry.author && (
                            <p className="text-xs text-[#3C2A21]/50 mt-2">By {entry.author}</p>
                          )}
                          {(() => {
                            const date = entry.publishedAt || entry.judgementDate;
                            return date ? (
                              <p className="text-xs text-[#3C2A21]/50">
                                {new Date(date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </p>
                            ) : null;
                          })()}
                          {activeTab.id === "media" && entry.mediaType && (
                            <p className="text-xs text-[#7B542F] mt-2 font-medium">
                              {entry.mediaType.charAt(0).toUpperCase() + entry.mediaType.slice(1)}
                            </p>
                          )}
                    </div>
                    <div className="mt-6">
                      <Link
                            href={entryLink}
                            target={activeTab.id === "news" && entry.link ? "_blank" : "_self"}
                            rel={activeTab.id === "news" && entry.link ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B542F] hover:text-[#3C2A21] transition-colors group-hover:gap-3"
                      >
                            {activeTab.id === "news" && entry.link ? "Read more" : "View details"}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                    );
                  })}
              </div>
              )}
            </motion.section>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
