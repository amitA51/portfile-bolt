import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-20 bg-gray-800" id="resume">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-700 rounded-2xl p-8 text-center"
        >
          <FileText className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Download My Resume</h2>
          <p className="text-gray-300 mb-8">
            Get a detailed overview of my experience, skills, and achievements.
          </p>
          <motion.a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;