import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "AI Support Assistant",
    tech: ["Next.js", "Gemini API", "REST APIs"],
    description: "AI-powered assistant using Gemini API and Next.js, automating 70%+ of user queries and improving response time by 50%.",
    details: [
      "Integrated REST APIs for seamless communication between frontend and AI services",
      "Designed a scalable solution adaptable to e-commerce and business platforms",
      "Increased support efficiency by 60%",
    ],
    github: "#",
    demo: "#",
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "Stock Monitoring Tool",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS"],
    description: "Full-stack real-time stock tracking dashboard built with MERN stack and deployed on AWS.",
    details: [
      "Real-time stock data tracking and visualization",
      "Interactive dashboard with live updates",
      "Deployed and scaled on AWS infrastructure",
    ],
    github: "#",
    demo: "#",
    color: "from-secondary/20 to-primary/20",
  },
  {
    title: "Content Management System",
    tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    description: "Full-stack CMS with secure admin dashboard, improving content management efficiency by 60%.",
    details: [
      "Real-time content updates using RESTful APIs and MongoDB",
      "Reduced manual update effort by 70%",
      "Responsive and user-friendly UI, enhancing engagement by 40%",
    ],
    github: "#",
    demo: "#",
    color: "from-primary/20 to-secondary/10",
  },
];

const filters = ["All", "React.js", "Next.js", "Node.js", "MongoDB"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tech.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="glow-text">work</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="glass rounded-2xl overflow-hidden group cursor-none hover:border-primary/30 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {project.title.split(" ").map(w => w[0]).join("")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-strong rounded-2xl max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mb-2 glow-text">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <ul className="space-y-2 mb-6">
                {selectedProject.details.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span> {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-primary-glow text-sm !px-5 !py-2 flex items-center gap-2">
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-outline-glow text-sm !px-5 !py-2 flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
