import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const BlogCard = ({ title, excerpt, date, readTime, image, link }: BlogCardProps) => {
  return (
    <motion.article
      className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
          <Clock className="w-4 h-4 ml-4 mr-2" />
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
        <a
          href={link}
          className="inline-block text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Read More →
        </a>
      </div>
    </motion.article>
  );
};

export default BlogCard;