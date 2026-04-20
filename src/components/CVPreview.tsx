"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiX } from "react-icons/fi";

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVPreview({ isOpen, onClose }: CVPreviewProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true); // Reset loading state when opened
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose} // Click outside to close
        >
          {/* Subtle background particles / motion */}
          <motion.div 
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,243,255,0.05)_0%,_transparent_60%)] z-0 pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // Anti-gravity floating effect
            whileHover={{ y: -5 }}
            className="relative w-full max-w-5xl h-[85vh] sm:h-[90vh] bg-[#0a0a0a]/90 border border-cyan-500/30 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,243,255,0.15)] backdrop-blur-xl z-10"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:px-6 border-b border-white/10 bg-white/5 relative overflow-hidden">
              {/* Neon edge glow on header */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
              
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                Curriculum Vitae
              </h3>
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 text-sm font-medium text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                >
                  <FiDownload className="text-cyan-400" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 transition-all duration-300 hover:text-white hover:bg-red-500/20 hover:border-red-500/50 border border-transparent rounded-lg"
                  aria-label="Close modal"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Viewer */}
            <div className="flex-1 w-full bg-zinc-950/80 relative overflow-hidden flex items-center justify-center">
              {/* Loading State */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center z-20 bg-zinc-950/90 backdrop-blur-sm"
                  >
                    <div className="flex flex-col items-center gap-5">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-0 border-4 border-blue-500 border-b-transparent rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
                      </div>
                      <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase animate-pulse">Loading Document</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <iframe
                src="/cv.pdf#view=FitH"
                className="w-full h-full border-none z-10 relative bg-transparent"
                title="CV Preview"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
