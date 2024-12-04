import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    title: "Understanding 3D Design",
    excerpt: "An in-depth look into the fundamentals of 3D design and its applications in modern web development.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "https://www.technologysolutions.net/wp-content/uploads/2023/08/5cs-scaled-2560x1280.jpeg",
    link: "#"
  },
  {
    title: "Optimizing Web Performance",
    excerpt: "Tips and techniques to enhance the performance of your websites for a better user experience.",
    date: "Mar 10, 2024",
    readTime: "4 min read",
    image: "https://b2474340.smushcdn.com/2474340/wp-content/uploads/2023/01/Unlocking.News_.png?lossy=2&strip=1&webp=1",
    link: "#"
  }
];

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Latest Articles
        </motion.h2>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;