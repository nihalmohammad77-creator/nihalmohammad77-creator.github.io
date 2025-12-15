import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, GraduationCap, Recycle } from "lucide-react";

const projects = [
  {
    title: "Master's Thesis: Sustainability & Profitability",
    subtitle: "Balancing Sustainability and Profitability in Plastic Recycling",
    icon: Recycle,
    period: "Jan 2025 - Jun 2025",
    description:
      "Conducted cross-sector research and business model analysis for circular product systems, exploring international management practices for growth in the plastic recycling industry.",
    tags: ["Research", "Sustainability", "Business Analysis"],
  },
  {
    title: "AI and Society Research",
    subtitle: "Societal Impacts of Unregulated AI Technologies",
    icon: Brain,
    period: "Dec 2024",
    description:
      "Researched risks and societal impacts of unregulated AI technologies using real-world case studies. Analyzed bias, privacy concerns, deepfakes, and regulatory gaps with reference to global AI frameworks.",
    tags: ["AI Ethics", "Policy Analysis", "Research"],
  },
  {
    title: "International Management Studies",
    subtitle: "MA in International Management",
    icon: GraduationCap,
    period: "Jan 2023 - Jun 2025",
    description:
      "Focus areas include marketing strategy, sustainability analysis, research methods, and international operations at IU International University of Applied Sciences, Berlin.",
    tags: ["Marketing", "Strategy", "International Business"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="glass-card rounded-xl p-6 md:p-8 hover-lift group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <project.icon className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">{project.period}</span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-3">{project.subtitle}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
