import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    institution: "Manav Rachna University",
    degree: "B.Tech CSE (AI & ML)",
    year: "2024 – 2028",
    detail: "Focused on advanced algorithms and intelligent systems."
  },
  {
    institution: "J.L.N College",
    degree: "Senior Secondary",
    year: "2024",
    detail: "Core Mathematics and Science background."
  },
  {
    institution: "S.M.S High School",
    degree: "Secondary Education",
    year: "2022",
    detail: "Foundation in computer sciences and logic."
  }
];

const certifications = [
  { title: "AI Foundations", issuer: "IBM / Coursera", icon: "🧠" },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI", icon: "🌌" },
  { title: "GANs & Generative models", issuer: "NVIDIA", icon: "🎨" },
  { title: "CNNs for Computer Vision", issuer: "Google Cloud", icon: "👁️" }
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        {/* EDUCATION */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-brand-accent/10 rounded-2xl text-brand-accent">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-4xl font-serif">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative pl-8 border-l border-white/5"
              >
                <div className="absolute left-[-1px] top-0 w-[2px] h-full bg-gradient-to-b from-brand-accent to-transparent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-background border border-white/20 group-hover:bg-brand-accent transition-colors"></div>
                
                <p className="text-brand-accent text-sm font-mono font-bold mb-1">{edu.year}</p>
                <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                <p className="text-slate-300 font-medium mb-2">{edu.degree}</p>
                <p className="text-slate-500 text-sm">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-brand-accent/10 rounded-2xl text-brand-accent">
              <Award size={28} />
            </div>
            <h2 className="text-4xl font-serif">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border-white/5 hover:border-brand-accent/30 transition-all group flex items-start gap-4"
              >
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{cert.icon}</span>
                <div>
                  <h4 className="text-white font-bold leading-tight mb-1">{cert.title}</h4>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
