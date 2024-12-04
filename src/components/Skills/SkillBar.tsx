import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}

const SkillBar = ({ name, level, delay, inView }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-700 p-6 rounded-lg"
    >
      <div className="flex justify-between mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-blue-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay }}
          className="bg-blue-500 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;