"use client";

import { useState, useEffect } from "react";
import DisclaimerModal from "./DisclaimerModal";

const STORAGE_KEY = "legal-chambers-disclaimer-agreed";

export default function DisclaimerProvider({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const hasAgreed = localStorage.getItem(STORAGE_KEY) === "true";
    
    if (!hasAgreed) {
      setShowModal(true);
    }
    
    setIsLoading(false);
  }, []);

  const handleAgree = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setShowModal(false);
  };

  // Show loading state or nothing while checking
  if (isLoading) {
    return null; // Or a loading spinner if preferred
  }

  return (
    <>
      {showModal && <DisclaimerModal onAgree={handleAgree} />}
      <div style={{ display: showModal ? "none" : "block" }}>
        {children}
      </div>
    </>
  );
}

