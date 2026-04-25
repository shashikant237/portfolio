import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["AI/ML Engineer", "Data Scientist", "Problem Solver"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* BACKGROUND TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] z-0">
        <h2 className="text-[25vw] font-serif font-black leading-none tracking-tighter">
          PORTFOLIO
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-2 text-brand-accent mb-4">
            <div className="w-12 h-[1px] bg-brand-accent"></div>
            <span className="text-sm font-bold uppercase tracking-widest font-mono">
              Welcome to my digital space
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-4">
            I'm <span className="text-white">Shashikant</span><br />
            <span className="relative">
              Jha
              <motion.div 
                className="absolute -bottom-2 left-0 h-2 bg-brand-accent/30 w-full -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h1>

          <div className="h-12 flex items-center mb-8">
            <p className="text-2xl md:text-3xl text-slate-400 font-medium">
              I am a <span className="text-brand-accent underline decoration-brand-accent/30">{typedText}</span>
              <span className="animate-pulse ml-1 inline-block w-[2px] h-8 bg-brand-accent align-middle"></span>
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
            Building AI-driven solutions and solving real-world problems using Machine Learning. 
            Currently pursuing B.Tech CSE in AI & ML.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-brand-accent text-brand-background font-bold rounded-xl overflow-hidden shadow-2xl shadow-brand-accent/20 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <div className="flex items-center space-x-4 ml-2">
              <a href="https://github.com/jhashashi237" target="_blank" rel="noopener noreferrer" 
                 className="p-3 glass rounded-xl text-slate-300 hover:text-brand-accent hover:border-brand-accent/30 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/shashikant-jha-8b8a8b1b5" target="_blank" rel="noopener noreferrer"
                 className="p-3 glass rounded-xl text-slate-300 hover:text-brand-accent hover:border-brand-accent/30 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE/ART */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl ring-1 ring-white/10">
            <img
              src="https://i.ibb.co/358GckLj/Whats-App-Image-2026-04-25-at-11-53-00-PM.jpg"
              alt="Shashikant Jha"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-background/80 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 glass rounded-3xl -z-0 flex items-center justify-center p-6 border-brand-accent/20"
          >
            <div className="w-full h-full rounded-full border-4 border-brand-accent border-dashed animate-spin-slow"></div>
          </motion.div>
          
          <motion.div 
            animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-10 px-6 py-4 glass rounded-2xl shadow-xl z-20"
          >
            <p className="text-brand-accent font-bold text-lg">AI & ML Enthusiast</p>
            <p className="text-slate-400 text-xs">Innovation in training...</p>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hidden lg:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent mx-auto mb-2"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
      </motion.div>
    </section>
  );
}
