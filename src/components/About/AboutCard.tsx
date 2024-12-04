import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AboutCard = ({ icon: Icon, title, description }: AboutCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
    >
      <Icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </motion.div>
  );
};

export default AboutCard;