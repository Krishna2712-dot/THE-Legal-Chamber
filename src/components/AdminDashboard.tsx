"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Newspaper,
  Camera,
  PenTool,
  BookOpen,
  LogOut,
  ExternalLink,
  Plus,
  Settings,
  BarChart3,
  FileText,
  CheckCircle2,
  AlertCircle,
  Users,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    news: 0,
    media: 0,
    blogs: 0,
    judgements: 0,
    team: 0,
  });
  const [isConfigured, setIsConfigured] = useState(true);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [newsRes, mediaRes, blogsRes, judgementsRes, teamRes] = await Promise.all([
          fetch("/api/resources/news").catch(() => null),
          fetch("/api/resources/media").catch(() => null),
          fetch("/api/resources/blogs").catch(() => null),
          fetch("/api/resources/judgements").catch(() => null),
          fetch("/api/team").catch(() => null),
        ]);

        if (newsRes?.ok) {
          const news = await newsRes.json();
          setStats((prev) => ({ ...prev, news: Array.isArray(news) ? news.length : 0 }));
        }
        if (mediaRes?.ok) {
          const media = await mediaRes.json();
          setStats((prev) => ({ ...prev, media: Array.isArray(media) ? media.length : 0 }));
        }
        if (blogsRes?.ok) {
          const blogs = await blogsRes.json();
          setStats((prev) => ({ ...prev, blogs: Array.isArray(blogs) ? blogs.length : 0 }));
        }
        if (judgementsRes?.ok) {
          const judgements = await judgementsRes.json();
          setStats((prev) => ({ ...prev, judgements: Array.isArray(judgements) ? judgements.length : 0 }));
        }
        if (teamRes?.ok) {
          const team = await teamRes.json();
          setStats((prev) => ({ ...prev, team: Array.isArray(team) ? team.length : 0 }));
        }

        // Check if CMS is configured
        if (newsRes?.status === 503 || mediaRes?.status === 503 || teamRes?.status === 503) {
          setIsConfigured(false);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const menuItems = [
    {
      title: "News Reports",
      icon: Newspaper,
      href: "/admin/studio",
      description: "Manage news articles and links",
      color: "bg-blue-500",
      count: stats.news,
    },
    {
      title: "Media",
      icon: Camera,
      href: "/admin/studio",
      description: "Upload and manage images and videos",
      color: "bg-purple-500",
      count: stats.media,
    },
    {
      title: "Blogs",
      icon: PenTool,
      href: "/admin/studio",
      description: "Create and edit blog posts",
      color: "bg-green-500",
      count: stats.blogs,
    },
    {
      title: "Noted Judgements",
      icon: BookOpen,
      href: "/admin/studio",
      description: "Manage legal judgements and cases",
      color: "bg-orange-500",
      count: stats.judgements,
    },
    {
      title: "Team Members",
      icon: Users,
      href: "/admin/studio",
      description: "Add, edit, or remove team members",
      color: "bg-indigo-500",
      count: stats.team,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#7B542F] mb-4"></div>
          <div className="text-[#7B542F]">Loading dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#7B542F]">Admin Dashboard</h1>
            <p className="text-[#3C2A21]/70 mt-1">Manage your website content</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="/resources"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C9B59C]/40 text-[#7B542F] hover:bg-[#EFE9E3] transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Resources
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7B542F] text-white hover:bg-[#7B542F]/90 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* Configuration Status */}
        {!isConfigured && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl border border-yellow-300 bg-yellow-50"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">CMS Not Configured</h3>
                <p className="text-sm text-yellow-700">
                  Please set up your Sanity CMS by adding environment variables. See SETUP_INSTRUCTIONS.md for details.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 rounded-xl border border-[#C9B59C]/40 bg-[#F9F8F6]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${item.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold text-[#7B542F]">{item.count}</span>
                </div>
                <p className="text-sm text-[#3C2A21]/70 font-medium">{item.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block p-6 rounded-xl border border-[#C9B59C]/40 bg-[#F9F8F6] hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${item.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#7B542F] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#3C2A21]/70 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#3C2A21]/50">{item.count} items</span>
                    <Plus className="w-4 h-4 text-[#7B542F] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Sanity Studio Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl border border-[#C9B59C]/40 bg-gradient-to-br from-[#F9F8F6] to-[#EFE9E3]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-[#7B542F]" />
              <h2 className="text-xl font-semibold text-[#7B542F]">Content Management</h2>
            </div>
            <p className="text-[#3C2A21]/70 mb-4">
              Use Sanity Studio to create, edit, and manage all your content. The studio provides a user-friendly interface for content editing.
            </p>
            <Link
              href="/admin/studio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7B542F] text-white hover:bg-[#7B542F]/90 transition-colors font-semibold"
            >
              <Plus className="w-5 h-5" />
              Open Sanity Studio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-xl border border-[#C9B59C]/40 bg-gradient-to-br from-[#F9F8F6] to-[#EFE9E3]"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#7B542F]" />
              <h2 className="text-xl font-semibold text-[#7B542F]">Quick Links</h2>
            </div>
            <div className="space-y-3">
              <Link
                href="/resources"
                target="_blank"
                className="flex items-center gap-2 text-[#7B542F] hover:text-[#3C2A21] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Resources Page
              </Link>
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 text-[#7B542F] hover:text-[#3C2A21] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Homepage
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

