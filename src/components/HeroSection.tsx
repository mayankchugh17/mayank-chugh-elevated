import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32">
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[128px] animate-pulse-glow" />
      
      <div 
        className="absolute bottom-1/4 right-1/4 w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-secondary/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[128px] animate-pulse-glow" 
        style={{ animationDelay: "1.5s" }} 
      />

      <div className="w-full max-w-5xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Subtitle */}
          <motion.p
            className="font-mono text-primary text-xs sm:text-sm md:text-base mb-4 sm:mb-6 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm{" "}
            <span className="glow-text">Mayank</span>
            <br />
            <span className="text-muted-foreground">Chugh</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building scalable AI web applications with the MERN stack.
            Turning complex ideas into elegant, performant solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href="#contact" 
              className="btn-primary-glow w-full sm:w-auto text-center px-6 py-3 flex items-center justify-center"
            >
              Hire Me
            </a>

            <a
              href="Mayank_Chugh_Full_Stack_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-glow w-full sm:w-auto text-center px-6 py-3 flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center gap-5 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://github.com/mayankchugh17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>

            <a
              href="https://linkedin.com/in/mayankchugh17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={18} className="text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;