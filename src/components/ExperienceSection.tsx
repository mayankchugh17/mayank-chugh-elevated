import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "MERN Stack Developer Intern",
    org: "Xportsoft Technologies",
    period: "Jan 2026 - Present",
    desc: "Building production-grade web apps with React, Next.js, Node.js, and MongoDB. Working on client projects and contributing to scalable architecture.",
  },
  {
    type: "edu",
    title: "Master of Computer Applications (MCA)",
    org: "Chandigarh University",
    period: "2024 - Present",
    desc: "Focused on software engineering, data structures, and real-world project development. Active in placement preparation.",
  },
  {
    type: "edu",
    title: "Bachelor's Degree",
    org: "Kurukshetra University",
    period: "2021 - 2024",
    desc: "Built a strong foundation in programming, databases, and web development fundamentals.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Experience & Education</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="glow-text">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary z-10 shadow-[0_0_12px_hsl(170_80%_50%_/_0.5)]" />

              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                  <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {item.type === "work" ? (
                      <Briefcase size={16} className="text-primary" />
                    ) : (
                      <GraduationCap size={16} className="text-secondary" />
                    )}
                    <span className="font-mono text-xs text-muted-foreground">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary text-sm mb-2">{item.org}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
