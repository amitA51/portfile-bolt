import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Database } from 'lucide-react';
import AboutCard from './AboutCard';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const cards = [
    {
      icon: Shield,
      title: "Security Expert",
      description: "Specialized in identifying and mitigating security vulnerabilities in complex systems."
    },
    {
      icon: Lock,
      title: "Threat Analysis",
      description: "Expert in analyzing and responding to emerging cybersecurity threats."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Implementing robust data protection strategies and compliance measures."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white" id="about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AboutCard {...card} />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            With extensive experience in cybersecurity and a passion for protecting digital assets,
            I specialize in creating robust security solutions for organizations. My expertise includes
            network security, penetration testing, and incident response.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;