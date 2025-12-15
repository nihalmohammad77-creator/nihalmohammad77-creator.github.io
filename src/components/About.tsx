import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Briefcase, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "170+", label: "Assignments Completed" },
  { icon: Award, value: "4.8/5", label: "Client Rating" },
  { icon: Users, value: "95%+", label: "Customer Satisfaction" },
  { icon: BookOpen, value: "2", label: "Degrees" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Detail-driven project coordination professional with experience supporting 
                marketing workflows, managing tasks, and streamlining operational processes. 
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Skilled in KPI tracking, research analysis, and cross-functional communication. 
                I bring strong structure, reliability, and problem-solving to teams working on 
                fast-moving projects or product rollouts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Master's in International Management at IU Berlin, 
                focusing on marketing, strategy, sustainability analysis, and international operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-xl p-5 hover-lift"
                >
                  <stat.icon className="text-primary mb-3" size={24} />
                  <div className="font-heading text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
