import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CertificateCard from './CertificateCard';

const certificates = [
  {
    title: "IBM Cybersecurity Analyst",
    issuer: "IBM",
    date: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GEXHXDPPVMET/CERTIFICATE_LANDING_PAGE~GEXHXDPPVMET.jpeg",
    link: "https://coursera.org/share/4cc5c2125faf9b6028fcd0c6503567a8"
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google",
    date: "2024",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~P7UJN6T5RH9N/CERTIFICATE_LANDING_PAGE~P7UJN6T5RH9N.jpeg",
    link: "https://coursera.org/share/9dc2efce6a1a2df88ce23714ecb8e833"
  }
];

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" id="certificates">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Certifications
        </motion.h2>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CertificateCard {...cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
