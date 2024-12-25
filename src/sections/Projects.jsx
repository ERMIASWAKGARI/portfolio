import { GalleryWithTab } from "../components/DefaultGallery";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-8 sm:px-10 lg:px-20 bg-gray-100 dark:bg-gray-900"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-5 lg:mb-8">
        Projects
      </h2>

      <GalleryWithTab />
    </section>
  );
}
