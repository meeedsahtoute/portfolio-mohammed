"use client";

import { motion, Variants } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative w-full max-w-6xl mx-auto px-6 z-10"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
Technologies I Use          </span>
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          The technologies and tools I use to build scalable,
          high-performance applications.
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <Icon
                size={48}
                style={{ color: skill.color }}
                className="transition-all duration-500 group-hover:drop-shadow-[0_0_15px_inherit]"
              />

              <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
              </span>

              {/* Laravel Progress */}
              {skill.name === "Laravel" && (
                <div className="w-full mt-2">

                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                   
                   
                  </div>

                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                    />

                  </div>

                </div>
              )}
              {skill.name === "JavaScript" && (
  <div className="w-full mt-2">

    <div className="flex justify-between text-xs text-zinc-400 mb-1">
      
    </div>

    <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "85%" }}
        transition={{ duration: 1 }}
        className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
      />

    </div>

  </div>
)}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}