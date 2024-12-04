import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import ParticlesBackground from './ParticlesBackground';
import SocialLinks from './SocialLinks';
import ScrollIndicator from './ScrollIndicator';

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 100, friction: 20 },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <ParticlesBackground />
      
      <div className="relative z-10 text-center px-4">
        <animated.div style={fadeIn}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Amit
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Cybersecurity Analyst
          </motion.p>

          <SocialLinks />

          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            View My Work
          </motion.button>
        </animated.div>
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default Hero;