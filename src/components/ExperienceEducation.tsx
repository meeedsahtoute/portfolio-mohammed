"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 relative w-full max-w-6xl mx-auto px-6 z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-neon-blue/20 flex items-center justify-center text-neon-blue border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
              <FiBriefcase size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-blue before:via-white/20 before:to-transparent">
            {/* Experience Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#050505] bg-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.8)] absolute left-3 md:left-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
              
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 glass-panel rounded-2xl ml-auto md:ml-0 md:mr-auto transition-all duration-300 hover:-translate-y-1 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
                </div>
                <h4 className="text-neon-blue font-medium mb-4">STE RIF SHIPPINGS SARL</h4>
                <p className="text-zinc-400 text-sm">
                  Completed web development tasks using HTML, CSS, PHP, and MySQL. Gained hands-on experience in building structured, scalable database-driven web applications.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300">Nador, Morocco</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center text-neon-purple border border-neon-purple/30 shadow-[0_0_15px_rgba(157,0,255,0.3)]">
              <FiBookOpen size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
              Education
            </h2>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-neon-purple before:via-white/20 before:to-transparent">
            {/* Education Item 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#050505] bg-neon-purple shadow-[0_0_10px_rgba(157,0,255,0.8)] absolute left-3 md:left-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
              
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 glass-panel rounded-2xl ml-auto md:ml-0 md:mr-auto transition-all duration-300 hover:-translate-y-1 hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(157,0,255,0.15)]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">Digital Development (Web Full Stack)</h3>
                </div>
                <h4 className="text-neon-purple font-medium mb-4">OFPPT</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Focused on modern web technologies, full stack architectures, and software engineering principles.
                </p>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple">2023 - 2025</span>
              </div>
            </motion.div>

            {/* Education Item 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-[#050505] bg-neon-purple shadow-[0_0_10px_rgba(157,0,255,0.8)] absolute left-3 md:left-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform"></div>
              
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 glass-panel rounded-2xl md:ml-auto transition-all duration-300 hover:-translate-y-1 hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(157,0,255,0.15)]">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">Web Development Training</h3>
                </div>
                <h4 className="text-neon-purple font-medium mb-4">Centre Atlantique Formation</h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Specialized training in advanced web development frameworks and industry best practices.
                </p>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple">2025 - 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
