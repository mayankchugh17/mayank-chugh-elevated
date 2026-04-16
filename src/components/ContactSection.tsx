import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="glow-text">connect</span>
          </h2>
        </motion.div>

        {/* Full Width Layout */}
        <div className="flex justify-center">
          
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 w-full max-w-3xl text-center"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open!
            </p>

            <div className="space-y-4">
              
              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span>mayankchugh1700@gmail.com</span>
              </div>

              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span>Mohali, Punjab</span>
              </div>

              <div className="flex items-center justify-center gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span>+91 9996602635</span>
              </div>

            </div>
          </motion.div>

          {/* ================= FORM COMMENTED ================= */}
          {/*
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button type="submit">Send Message</button>
          </motion.form>
          */}
          {/* ================================================== */}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;