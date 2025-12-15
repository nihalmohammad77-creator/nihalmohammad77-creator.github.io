import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nihalmohammad77@gmail.com",
    href: "mailto:nihalmohammad77@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 152 1890 1711",
    href: "tel:+4915218901711",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Nihal Mohammed",
    href: "https://linkedin.com/in/nihal-mohammed-004943259",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "12103 Berlin, Germany",
    href: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8 mx-auto" />
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative ideas, or ways to contribute to your projects.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-xl p-5 flex items-center gap-4 hover-lift group block"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={22} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="text-primary" size={22} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-foreground font-medium">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            href="mailto:nihalmohammad77@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all glow-effect hover-lift"
          >
            <Mail size={20} />
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
