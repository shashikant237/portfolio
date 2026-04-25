import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Loader2 } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus("idle");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus("error");
        alert("EmailJS configuration missing. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to the Settings > Secrets menu.");
        return;
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* CONTACT INFO */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Let's Discuss <br /> Your Next <span className="text-brand-accent italic">AI Vision</span>.</h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
                Whether you have a specific project in mind or just want to chat about the future of ML, I'm always open to connecting.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-background transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium text-lg">shashikant_jha24@mru.ac.in</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-background transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-white font-medium text-lg">+91-7827263997</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-background transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium text-lg">Faridabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] border-white/5 relative"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-brand-background/50 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent/50 outline-none transition-all placeholder:text-slate-600 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-brand-background/50 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent/50 outline-none transition-all placeholder:text-slate-600 font-medium"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-brand-background/50 border border-white/10 rounded-xl px-6 py-4 focus:border-brand-accent/50 outline-none transition-all placeholder:text-slate-600 font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full group relative py-5 bg-brand-accent text-brand-background font-black rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-brand-accent/20 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>SENDING... <Loader2 size={20} className="animate-spin" /></>
                ) : (
                  <>SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center font-medium">Failed to send message. Please ensure your EmailJS keys are set in the Secrets menu.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif font-black text-white">
          SHASHIKANT<span className="text-brand-accent">.</span>
        </div>
        
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Designed with ❤️ for Innovation.
        </p>

        <div className="flex items-center gap-4">
           {[
             { icon: Github, url: "https://github.com/jhashashi237" },
             { icon: Linkedin, url: "https://linkedin.com/in/shashikant-jha-8b8a8b1b5" },
             { icon: MessageSquare, url: "#" },
           ].map((social, i) => (
             <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl text-slate-400 hover:text-brand-accent hover:border-brand-accent/30 transition-all">
               <social.icon size={20} />
             </a>
           ))}
        </div>
      </div>
    </footer>
  );
}
