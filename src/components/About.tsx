import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Database } from 'lucide-react';

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
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Shield className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">Security Expert</h3>
            <p className="text-gray-300 text-center">
              Specialized in identifying and mitigating security vulnerabilities in complex systems.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Lock className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">Threat Analysis</h3>
            <p className="text-gray-300 text-center">
              Expert in analyzing and responding to emerging cybersecurity threats.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <Database className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">Data Protection</h3>
            <p className="text-gray-300 text-center">
              Implementing robust data protection strategies and compliance measures.
            </p>
          </motion.div>
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