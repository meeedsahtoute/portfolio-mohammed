"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowDown, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center w-full px-6 pt-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center z-10 w-full max-w-5xl">
        
        {/* Profile Image with Neon Glow */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full neon-border"></div>
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#050505] bg-[#0a0a0a] z-10 shadow-[0_0_40px_rgba(157,0,255,0.4)]">
            <Image
              src="/profile.jpg"
              alt="Mohammed Assahtout"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Text Introduction */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-medium text-zinc-300">
            Hello World, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2 pb-2">
            <span className="text-gradient drop-shadow-[0_0_15px_rgba(0,243,255,0.5)]">
              Mohammed Assahtout
            </span>
          </h1>
          
          <div className="text-2xl md:text-4xl font-semibold h-12 text-zinc-100">
            <span className="mr-2">&gt;</span>
            <Typewriter
words={[
'Laravel Developer',
'PHP Backend Developer',
'MySQL Database Builder',
'Modern Web Application Developer'
]}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent border-2 border-neon-blue rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-2">
              View Work
              <FiArrowDown className="transition-transform group-hover:translate-y-1" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#9d00ff] to-[#ff00ea] rounded-full overflow-hidden hover:scale-105 hover:shadow-[0_0_30px_rgba(157,0,255,0.6)]"
          >
            <span className="relative flex items-center gap-2">
              Contact Me
              <FiMail className="transition-transform group-hover:scale-110" />
            </span>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-zinc-500"
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <FiArrowDown size={20} />
      </motion.div>
    </section>
  );
}
