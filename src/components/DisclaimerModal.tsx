"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface DisclaimerModalProps {
  onAgree: () => void;
}

export default function DisclaimerModal({ onAgree }: DisclaimerModalProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const agreeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and initial focus
  useEffect(() => {
    if (isVisible) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
      // Focus on checkbox initially
      const timer = setTimeout(() => {
        agreeButtonRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    }
  }, [isVisible]);

  const handleAgree = () => {
    if (isChecked) {
      setIsVisible(false);
      // Small delay for animation
      setTimeout(() => {
        onAgree();
        document.body.style.overflow = "unset";
      }, 300);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isChecked) {
      handleAgree();
    }
    // Prevent ESC from closing (must agree)
    if (e.key === "Escape") {
      e.preventDefault();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          aria-describedby="disclaimer-content"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-[#F9F8F6] rounded-2xl shadow-2xl overflow-hidden"
            onKeyDown={handleKeyDown}
          >
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8 lg:p-10">
              <div className="space-y-6">
                <h2
                  id="disclaimer-title"
                  className="text-2xl md:text-3xl font-bold text-[#7B542F]"
                >
                  Disclaimer – The Legal Chambers
                </h2>

                <div
                  id="disclaimer-content"
                  className="space-y-4 text-sm md:text-base leading-relaxed text-[#3C2A21]"
                >
                  <div>
                    <p className="font-semibold text-[#7B542F] mb-2">User Acknowledgement</p>
                    <p>
                      The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By proceeding further and clicking on the &quot;AGREE&quot; button herein below, I acknowledge that I of my own accord wish to know more about The Legal Chambers for my own information and use. I further acknowledge that there has been no solicitation, invitation or inducement of any kind whatsoever from The Legal Chambers or any of its members to create an Attorney-Client relationship through this website. I further acknowledge having read and understood the Disclaimer below.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#7B542F] mb-2">Disclaimer</p>
                    <p>
                      This website (www.thelegalchambers.org) is a resource for informational purposes only and is intended, but not promised or guaranteed, to be correct, complete, and up-to-date. The Legal Chambers does not warrant that the information contained on this website is accurate or complete, and hereby disclaims any and all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or any other cause.
                    </p>
                    <p className="mt-3">
                      The Legal Chambers further assumes no liability for the interpretation and/or use of the information contained on this website, nor does it offer a warranty of any kind, either expressed or implied.
                    </p>
                    <p className="mt-3">
                      This website is not intended to be a source of advertising or solicitation and the contents of the website should not be construed as legal advice. The reader should not consider this information to be an invitation for a lawyer-client relationship and should not rely on information provided herein. Further, the reader should always seek the advice of competent counsel licensed to practice in the relevant country/state. Transmission, receipt or use of this website does not constitute or create a lawyer-client relationship. No recipients of content from this website should act, or refrain from acting, based upon any or all of the contents of this site.
                    </p>
                    <p className="mt-3">
                      Furthermore, the owner of this website does not wish to represent anyone desiring representation based solely upon viewing this website or in a country/state where this website fails to comply with all laws and ethical rules of that state. Finally, the reader is warned that the use of Internet e-mail for confidential or sensitive information is susceptible to risks of lack of confidentiality associated with sending email over the Internet.
                    </p>
                  </div>
                </div>

                {/* Checkbox and Button */}
                <div className="pt-4 border-t border-[#C9B59C]/40">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-[#C9B59C] text-[#7B542F] focus:ring-2 focus:ring-[#7B542F] focus:ring-offset-2 cursor-pointer"
                      aria-label="I have read the disclaimer and agree to it"
                    />
                    <span className="text-sm md:text-base text-[#3C2A21] leading-relaxed">
                      I have read the disclaimer &amp; agree to it
                    </span>
                  </label>

                  <button
                    ref={agreeButtonRef}
                    onClick={handleAgree}
                    disabled={!isChecked}
                    className={`mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-base font-semibold transition-all duration-200 ${
                      isChecked
                        ? "bg-[#7B542F] text-white hover:bg-[#7B542F]/90 shadow-lg shadow-[#7B542F]/30 cursor-pointer"
                        : "bg-[#C9B59C]/40 text-[#3C2A21]/50 cursor-not-allowed"
                    }`}
                    aria-label="Agree to disclaimer and proceed to website"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    AGREE
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

