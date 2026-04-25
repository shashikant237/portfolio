import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experienceData = [
  {
    role: "Intern – Educational Support",
    company: "Focus: Student Engagement",
    period: "July 2025",
    description: "Spearheaded student involvement initiatives, driving teamwork and communication within projects. Orchestrated engagement strategies that improved peer collaboration outcomes.",
    skills: ["Teamwork", "Communication", "Leadership"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
           <h2 className="text-4xl md:text-5xl font-serif mb-4">Professional Journey</h2>
           <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Growth & Experience</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-12 relative pl-8 md:pl-12"
            >
              {/* DOT */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
              
              <div className="glass p-8 rounded-3xl hover:border-brand-accent/20 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">{exp.role}</h3>
                    <div className="flex items-center text-slate-400 mt-1">
                       <Briefcase size={16} className="mr-2" />
                       <span className="text-sm font-medium">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center px-4 py-2 glass rounded-full text-brand-accent text-sm font-bold w-fit">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-semibold text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
