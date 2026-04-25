import { motion } from "motion/react";
import { GraduationCap, Code, Briefcase, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects", value: "4+", icon: Code },
    { label: "Learning", value: "2nd Year", icon: GraduationCap },
    { label: "Certifications", value: "5+", icon: Briefcase },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* IMAGE/CARD */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-[2.5rem] blur-2xl group-hover:bg-brand-accent/30 transition-all duration-500"></div>
            <div className="relative glass rounded-[2.5rem] p-8 aspect-square flex items-center justify-center border-brand-accent/10 overflow-hidden">
              {/* Card Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Coding Background" 
                  className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-brand-background/60"></div>
              </div>

              <div className="text-center relative z-10">
                <h3 className="text-4xl font-serif font-black mb-2">B.Tech CSE</h3>
                <p className="text-brand-accent font-bold tracking-widest">( AI & ML )</p>
                <div className="mt-8 space-y-4">
                  <p className="text-slate-400 italic">"The best way to predict the future is to create it."</p>
                  <div className="flex justify-center gap-4">
                    <span className="px-3 py-1 glass rounded-full text-xs font-mono">Python</span>
                    <span className="px-3 py-1 glass rounded-full text-xs font-mono">Scikit-learn</span>
                    <span className="px-3 py-1 glass rounded-full text-xs font-mono">Pandas</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FLOATING TAGS */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute top-4 -right-8 px-4 py-2 glass rounded-full text-xs font-bold border-brand-accent/20"
            >
              🚀 Fast Learner
            </motion.div>
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
               className="absolute bottom-10 -left-6 px-4 py-2 glass rounded-full text-xs font-bold border-brand-accent/20"
            >
              🧠 Critical Thinker
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Crafting <span className="text-brand-accent">Intelligent</span> Models for <br />
              Complex Challenges.
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              I am Shashikant Jha, a student at Manav Rachna University, passionate about 
              bridging the gap between human intuition and machine intelligence. 
              My journey is defined by a relentless curiosity for how data can be 
              transformed into actionable insights and world-changing solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl hover:border-brand-accent/30 transition-all group"
                >
                  <stat.icon className="text-brand-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
                  <p className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
