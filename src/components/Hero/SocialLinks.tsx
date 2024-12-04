import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const SocialLinks = () => {
  return (
    <motion.div
      className="flex justify-center space-x-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <a href="#" className="text-white hover:text-blue-400 transition-colors">
        <LinkedinIcon className="w-8 h-8" />
      </a>
      <a href="#" className="text-white hover:text-blue-400 transition-colors">
        <GithubIcon className="w-8 h-8" />
      </a>
      <a href="#" className="text-white hover:text-blue-400 transition-colors">
        <TwitterIcon className="w-8 h-8" />
      </a>
    </motion.div>
  );
};

export default SocialLinks;