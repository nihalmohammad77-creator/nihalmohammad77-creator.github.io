import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, FileText, Globe, Megaphone, Settings, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Marketing & Product",
    icon: Megaphone,
    skills: [
      "Market Research",
      "Campaign Coordination",
      "Competitive Analysis",
      "Product Documentation",
      "Customer Segmentation",
      "Content Creation",
    ],
  },
  {
    title: "Project Coordination",
    icon: Settings,
    skills: [
      "Task Prioritization",
      "Workflow Planning",
      "Stakeholder Communication",
      "KPI Tracking",
      "Data Interpretation",
      "Process Optimization",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: BarChart3,
    skills: [
      "Microsoft 365",
      "Google Analytics",
      "Trello",
      "Jira",
      "WordPress",
      "Salesforce",
    ],
  },
  {
    title: "Languages",
    icon: Globe,
    skills: [
      "English (Fluent)",
      "Hindi (Native)",
      "German (B2 - Enrolled)",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12 mx-auto" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-lift"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
