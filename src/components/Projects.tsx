"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative w-full max-w-6xl mx-auto px-6 z-10 flex flex-col items-center justify-center min-h-[60vh]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-neon-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            My Work
          </span>
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto text-xl font-light leading-relaxed">
          I build scalable web applications and open-source tools. 
          All my code is available on my GitHub profile. Check it out below!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-8 items-center justify-center relative z-10 w-full max-w-2xl"
      >
        {/* Button 1: View My Projects */}
        <a
          href="https://github.com/meeedsahtoute?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full sm:w-auto flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-transparent rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-1"
        >
          {/* Neon Border Glow effect */}
          <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink group-hover:bg-[length:200%_200%] animate-gradient-xy transition-all duration-500 shadow-[0_0_20px_rgba(0,243,255,0.4)] group-hover:shadow-[0_0_40px_rgba(157,0,255,0.6)]">
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-[14px]"></div>
          </div>
          
          <span className="relative z-10 flex items-center gap-3 text-lg font-semibold tracking-wide text-zinc-100 group-hover:text-white">
            <FiExternalLink className="text-neon-blue group-hover:scale-110 transition-transform" />
            View My Projects
          </span>
        </a>

        {/* Button 2: Explore My GitHub */}
        <a
          href="https://github.com/meeedsahtoute"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full sm:w-auto flex items-center justify-center px-10 py-5 font-bold text-[#050505] transition-all duration-300 bg-white rounded-2xl overflow-hidden hover:scale-105 hover:-translate-y-1 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] border border-white"
        >
          {/* Glass highlight overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div>
          
          <span className="relative z-10 flex items-center gap-3 text-lg font-bold tracking-wide">
            <FiGithub className="group-hover:rotate-12 transition-transform" />
            Explore My GitHub
          </span>
        </a>
      </motion.div>
    </section>
  );
}
