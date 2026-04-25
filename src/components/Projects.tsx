import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Real-Time Fire Detection",
    category: "Computer Vision / ANN",
    description: "An AI-based system using Artificial Neural Networks to detect fire in real-time video streams with high precision and low latency.",
    image: "https://i.ibb.co/V0vTnPn5/Screenshot-2026-04-26-000300.png",
    tags: ["Python", "Scikit-learn", "OpenCV", "ANN"],
    links: { github: "#", live: "#" }
  }
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-bold tracking-[0.3em] uppercase text-xs mb-4"
            >
              Selected Works
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif">Featured Projects</h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm mb-2"
          >
            A collection of intelligent systems and secure platforms built to push technical boundaries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-900 ring-1 ring-white/10 group-hover:ring-brand-accent/30 transition-all duration-500 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* OVERLAY ACTION */}
                <div className="absolute inset-0 bg-brand-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a href={project.links.github} className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-background transition-all -translate-y-4 group-hover:translate-y-0 duration-300">
                     <Github size={24} />
                   </a>
                   <a href={project.links.live} className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:bg-brand-accent hover:text-brand-background transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                     <ExternalLink size={24} />
                   </a>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-white group-hover:bg-brand-accent group-hover:text-brand-background transition-all rotate-45 group-hover:rotate-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="mt-8 px-4">
                <div className="flex items-center gap-3 mb-3">
                   <span className="text-xs font-mono font-bold text-brand-accent px-3 py-1 glass rounded-full border-brand-accent/20 tracking-wider">
                     {project.category}
                   </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-3 transition-colors group-hover:text-brand-accent">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold text-slate-500 tracking-widest px-2 py-1 border border-white/5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <a href="https://github.com/shashikant237?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-accent font-bold transition-all group">
             EXPLORE ALL REPOSITORIES <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
}
