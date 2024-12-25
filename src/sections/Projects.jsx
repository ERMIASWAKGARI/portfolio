import { GalleryWithTab } from "../components/DefaultGallery";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 px-5 sm:px-10 lg:px-20 bg-tertiary dark:bg-tertiary-dark"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-10">
        Projects
      </h2>

      <GalleryWithTab />
    </section>
  );
}
