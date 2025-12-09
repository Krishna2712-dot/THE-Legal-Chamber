"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface ShareButtonProps {
  url: string;
  title?: string;
}

export default function ShareButton({ url, title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;

    // Try Web Share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Share this page",
          url: fullUrl,
        });
        return;
      } catch (err) {
        // User cancelled or error occurred, fall back to copy
      }
    }

    // Fallback to copy to clipboard
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = fullUrl;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#7B542F] text-white hover:bg-[#5f4125] transition-colors shadow-md hover:shadow-lg"
      aria-label="Share this page"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          <span className="text-sm font-semibold">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          <span className="text-sm font-semibold">Share</span>
        </>
      )}
    </button>
  );
}


