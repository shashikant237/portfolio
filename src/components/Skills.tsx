import { motion } from "motion/react";
import { Code2, BrainCircuit, Terminal, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    color: "from-blue-500/20"
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: ["Supervised Learning", "Regression", "Classification", "ANN", "Deep Learning"],
    color: "from-brand-accent/20"
  },
  {
    title: "Tools & OS",
    icon: Terminal,
    skills: ["GitHub", "VS Code", "Jupyter", "Linux", "Colab"],
    color: "from-purple-500/20"
  },
  {
    title: "Concepts",
    icon: Layout,
    skills: ["EDA", "Data Preprocessing", "Data Visualization", "SQL", "Git"],
    color: "from-green-500/20"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-brand-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 glass rounded-full text-brand-accent text-xs font-bold uppercase tracking-widest mb-4"
          >
            My Expertise
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif">Technical Skillset</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6 rounded-full opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden glass p-8 rounded-3xl border-transparent hover:border-brand-accent/20 transition-all group`}
            >
              {/* ACCENT GRADIENT */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-background flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <category.icon className="text-brand-accent" size={28} />
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-slate-400 text-sm group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/40 mr-3 group-hover/item:bg-brand-accent transition-colors"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
