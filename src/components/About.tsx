"use client";

import { motion } from "framer-motion";
import { FiCode, FiMapPin, FiUser } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 relative w-full max-w-6xl mx-auto px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background ambient light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                About Me
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light">
              I am a passionate <span className="text-neon-blue font-medium">Full Stack Web Developer</span> with more than 3 years of experience in building modern, scalable web applications. I thrive at the complex intersection of design and logic, crafting beautiful digital experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 mt-6 border-t border-white/10">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-pink border border-white/10">
                  <FiUser size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Age</p>
                  <p className="font-medium text-white">22 Years Old</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue border border-white/10">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Location</p>
                  <p className="font-medium text-white">Nador, Morocco</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-zinc-300 sm:col-span-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple border border-white/10">
                  <FiCode size={24} />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">Experience</p>
                  <p className="font-medium text-white">3+ Years Building Web Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative z-10 flex justify-center">
            {/* Abstract visual representation instead of repeating the photo */}
            <div className="w-full aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-9xl text-white/5 group-hover:scale-110 transition-transform duration-700">
                &lt;/&gt;
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
