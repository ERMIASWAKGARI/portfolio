import { GalleryWithTab } from "../components/DefaultGallery";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-8 sm:px-10 lg:px-20 bg-tertiary-light dark:bg-gray-900"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} // Trigger animation every time it comes into view
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-5 lg:mb-8">
          Projects
        </h2>

        <GalleryWithTab />
      </motion.div>
    </section>
  );
}
