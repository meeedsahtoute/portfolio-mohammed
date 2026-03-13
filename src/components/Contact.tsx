"use client";

import { motion } from "framer-motion";
import {
  FiGithub,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiSend,
  FiLinkedin,
} from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/meeedsahtoute",
    color:
      "hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    url: "https://www.instagram.com/mohammed.webdev",
    color:
      "hover:text-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.8)]",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=meeedsahtoute@gmail.com",
    color:
      "hover:text-[#EA4335] hover:border-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.8)]",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/mohammed-assahtout-5530223b7/",
    color:
      "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.8)]",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative w-full max-w-4xl mx-auto px-6 z-10"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Let's Build Something
        </h2>

        {/* Text */}
        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          I'm currently looking for new opportunities. Whether you have a
          question, a project idea, or just want to say hi, feel free to drop a
          message!
        </p>

        {/* CONTACT BUTTON */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=meeedsahtoute@gmail.com"
          target="_blank"
          className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white rounded-full overflow-hidden group mb-12"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></span>

          <span className="relative flex items-center gap-3 px-8 py-4 bg-black rounded-full transition-transform duration-300 group-hover:scale-110">
            <FiSend />
            Contact Me
          </span>
        </a>

        {/* Location + Social */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-zinc-400">
            <FiMapPin className="text-cyan-400" />
            Nador, Morocco
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`w-12 h-12 rounded-full glass-panel flex items-center justify-center text-zinc-400 border border-white/10 transition-all duration-300 ${link.color}`}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-20 text-center text-zinc-600 font-mono text-sm">
        <p>
          &copy; {new Date().getFullYear()} Mohammed Assahtout. All rights
          reserved.
        </p>
      </div>
    </section>
  );
}