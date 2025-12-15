import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Marketing Intern",
    company: "Acpoco GmbH",
    location: "Berlin, Germany",
    period: "Sep 2025 - Nov 2025",
    description: [
      "Supported social media and content planning for brand growth initiatives",
      "Conducted market and competitor scans to assist in positioning and strategic planning",
      "Contributed to campaign coordination, performance monitoring, and workflow organization",
    ],
  },
  {
    title: "Student Worker",
    company: "Studiwork",
    location: "Berlin, Germany",
    period: "Jan 2023 - Sep 2025",
    description: [
      "Completed over 170 assignments with 100% completion rate and 4.8/5 client rating",
      "Gained experience in customer interaction, logistics, events, and photography",
      "Demonstrated adaptability and reliability across diverse operational tasks",
    ],
  },
  {
    title: "Service and Operations Assistant",
    company: "The Circus Group",
    location: "Berlin, Germany",
    period: "Feb 2024 - Oct 2024",
    description: [
      "Supported daily operations and coordinated workflow in a high-volume environment",
      "Assisted international guests and maintained a welcoming customer experience",
      "Ensured operational standards through stocking, organization, and attention to detail",
    ],
  },
  {
    title: "Marketing and Sales Executive",
    company: "Sohaan Plastic Industries",
    location: "Hubli, India",
    period: "Apr 2019 - Sep 2022",
    description: [
      "Executed multi-channel marketing campaigns for plastic household and biodegradable product lines",
      "Conducted market and competitor analysis to identify customer needs and product opportunities",
      "Increased revenue through targeted cross-selling strategies and digital promotions",
      "Maintained customer satisfaction above 95% through consistent communication",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 mt-2" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 hover-lift">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
