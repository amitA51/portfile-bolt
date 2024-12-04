import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';

const skills = [
  { name: 'Network Security', level: 90 },
  { name: 'Penetration Testing', level: 85 },
  { name: 'Incident Response', level: 88 },
  { name: 'Security Analysis', level: 92 },
  { name: 'Risk Assessment', level: 87 },
  { name: 'Compliance', level: 85 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Professional Skills
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={index * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;