import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "KG CRM Solutions – Official Website Development",
    tech: ["Next.js", "React.js", "JavaScript", "REST APIs", "SEO"],
    description:
      "Developed and optimized the company's official website using Next.js, improving online presence and supporting business lead generation through optimized user experiences.",
    details: [
      "Developed responsive website pages and reusable components using Next.js and React.js",
      "Implemented lead capture forms, meeting booking functionality, and strategic CTAs to convert visitors into potential clients",
      "Optimized website SEO, metadata, and page performance to improve organic visibility",
      "Integrated REST APIs and third-party services for dynamic website functionality",
      "Contributed to generating qualified business inquiries through the company's official website",
    ],
    demo: "https://kgcrmsolutions.com/",
    color: "from-primary/20 to-secondary/20",
  },

  {
    title: "True Shades – Blinds & Curtains Website",
    tech: ["Next.js", "React.js", "JavaScript", "REST APIs", "SEO"],
    description:
      "Developed a business website for an Australian window furnishings company, showcasing custom blinds and curtains with a focus on user experience, service presentation, and customer lead generation.",
    details: [
      "Developed responsive pages to showcase roller blinds, sheer curtains, and custom window furnishing solutions",
      "Implemented product sections, customer testimonials, FAQs, and service process layouts",
      "Designed consultation booking and inquiry forms to convert website visitors into potential customers",
      "Optimized website structure, navigation, and user experience across desktop and mobile devices",
      "Implemented clear calls to action to encourage customer inquiries and consultation requests",
    ],
    demo: "https://trueshadeblindsandcurtains.com.au/",
    color: "from-green-400/20 to-lime-300/20",
  },

  {
    title: "Epoxy Time – Flooring Business Website",
    tech: ["Next.js", "React.js", "JavaScript", "REST APIs", "SEO"],
    description:
      "Developed a responsive business website for an Australian epoxy flooring company, showcasing flooring solutions, project galleries, and service offerings with a focus on customer engagement and lead generation.",
    details: [
      "Built responsive pages showcasing residential and commercial flooring services",
      "Developed product sections, project galleries, testimonials, and interactive FAQ sections",
      "Implemented free quote inquiry forms and strategic CTAs to generate potential customer leads",
      "Created service area and business information sections to improve customer accessibility",
      "Optimized website navigation, mobile responsiveness, and SEO structure",
    ],
    demo: "https://epoxy.crescaler.com/",
    color: "from-primary/20 to-secondary/20",
  },

  {
    title: "CELPIP AI – AI-Powered Learning Platform",
    tech: ["Next.js", "React.js", "JavaScript", "AI Integration", "REST APIs"],
    description:
      "Developed a web platform for CELPIP test preparation, focusing on AI-powered learning experiences, user engagement, and accessible educational resources.",
    details: [
      "Developed responsive user interfaces for an online CELPIP preparation platform",
      "Integrated AI-powered functionality to support digital learning experiences",
      "Implemented reusable components and structured layouts for better maintainability",
      "Optimized website responsiveness and navigation across desktop and mobile devices",
      "Designed user-focused sections and calls to action to improve platform engagement",
    ],
    demo: "https://celpipapp.crescaler.com/",
    color: "from-green-400/20 to-lime-300/20",
  },

  {
    title: "WM – Web Application Development",
    tech: ["Next.js", "React.js", "JavaScript", "REST APIs"],
    description:
      "Developed a responsive web application with a focus on intuitive user interfaces, functional workflows, and seamless user experience.",
    details: [
      "Developed reusable UI components and responsive layouts",
      "Implemented dynamic functionality and API integrations",
      "Optimized application performance and cross-device compatibility",
      "Improved navigation and user interaction through structured UI development",
    ],
    demo: "https://wm.crescaler.com/",
    color: "from-primary/20 to-secondary/20",
  },

  {
    title: "Content Management System",
    tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    description:
      "Full-stack CMS with secure admin dashboard, improving content management efficiency by 60%.",
    details: [
      <>
        For accessing the admin panel:
        <div className="bg-muted/50 border border-border mt-2 p-3 rounded-lg font-mono text-sm">
          <p>
            <strong>Email:</strong> admin1@gmail.com
          </p>
          <p>
            <strong>Password:</strong> admin1234
          </p>
        </div>
      </>,
      "Real-time content updates using RESTful APIs and MongoDB",
      "Reduced manual update effort by 70%",
      "Responsive and user-friendly UI, enhancing engagement by 40%",
    ],
    github: "https://github.com/mayankchugh17/Backend-AdminPannel",
    demo: "https://backend-adminpannel-production.up.railway.app/dashboard",
    color: "from-green-400/20 to-lime-300/20",
  },
];

const filters = ["All", "React.js", "Next.js", "Node.js", "MongoDB"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filtered =
    activeFilter === "All"
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
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">
            Major Projects
          </p>
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
                <div
                  className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {project.title
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
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
              <h3 className="text-2xl font-bold mb-2 glow-text">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedProject.description}
              </p>
              <ul className="space-y-2 mb-6">
                {selectedProject.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▸</span> {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow text-sm !px-5 !py-2 flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-glow text-sm !px-5 !py-2 flex items-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
