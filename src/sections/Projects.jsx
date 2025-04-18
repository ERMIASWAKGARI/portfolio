import { motion } from 'framer-motion';
import { ProjectGallery } from '../components/DefaultGallery';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-[#001d3d]"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-5 lg:mb-8">
          Projects
        </h2>

        <ProjectGallery />
      </motion.div>
    </section>
  );
}
