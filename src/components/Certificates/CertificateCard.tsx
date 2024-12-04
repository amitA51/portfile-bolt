import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const CertificateCard = ({ title, issuer, date, image, link }: CertificateCardProps) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{issuer}</p>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Certificate
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificateCard;