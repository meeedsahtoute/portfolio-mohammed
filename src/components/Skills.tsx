"use client";

import { Variants, motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiPhp, 
  SiLaravel, SiReact, SiNextdotjs, SiMysql, 
  SiGit, SiGithub 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
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
    transition: { type: "spring", stiffness: 100 }
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative w-full max-w-6xl mx-auto px-6 z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            Tech Arsenal
          </span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          The technologies and tools I use to build scalable, high-performance applications.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-panel rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300"
            style={{ 
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <skill.icon 
              size={48} 
              className="transition-all duration-500 group-hover:drop-shadow-[0_0_15px_inherit]"
              style={{ color: skill.color, filter: `drop-shadow(0 0 1px ${skill.color})` }} 
            />
            <span className="text-zinc-300 font-medium tracking-wide group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
