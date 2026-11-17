import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, GraduationCap, BrainCircuit } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "MERN Stack Developer",
    desc: "Specializing in MongoDB, Express.js, React.js, and Node.js to build end-to-end web applications.",
  },
  {
    icon: BrainCircuit,
    title: "AI Enthusiast",
    desc: "Exploring Generative AI, prompt engineering, and AI-powered web apps to build smarter and more interactive user experiences.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    desc: "Passionate about solving real-world problems with clean code, scalable architecture, and modern tools.",
  },
  {
    icon: GraduationCap,
    title: "MCA Student",
    desc: "Completed MCA with a strong focus on building real-world projects, strengthening technical skills, and applying software development concepts to practical challenges.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Crafting digital <span className="glow-text">experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
              style={{ perspective: "1000px" }}
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
