import { motion } from "framer-motion";
import { ProjectGallery } from "../components/DefaultGallery";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--surface)] px-4 py-14 sm:px-6 sm:py-16 lg:px-16"
    >
      <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Projects
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base md:text-lg">
          Browse all six projects with full image galleries and popup previews.
        </p>

        <ProjectGallery />
      </motion.div>
    </section>
  );
}
