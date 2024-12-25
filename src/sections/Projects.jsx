import { GalleryWithTab } from "../components/DefaultGallery";
// import ProjectCard from "../components/ProjectCard";

// const projects = [
//   {
//     title: "Project One",
//     description: "Description for project one.",
//     tech: ["React", "Tailwind CSS"],
//     link: "https://github.com/username/project-one",
//     image: "Screenshot 2024-11-08 084944.png", // Example image path
//   },
//   {
//     title: "Project Two",
//     description: "Description for project two.",
//     tech: ["JavaScript", "Node.js"],
//     link: "https://github.com/username/project-two",
//     image: "Screenshot 2024-11-08 085026.png", // Example image path
//   },
//   {
//     title: "Project Two",
//     description: "Description for project two.",
//     tech: ["JavaScript", "Node.js"],
//     link: "https://github.com/username/project-two",
//     image: "Screenshot 2024-11-08 085133.png", // Example image path
//   },
//   // Add more projects here
// ];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-20 bg-tertiary dark:bg-tertiary-dark"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-10">
        Projects
      </h2>
      {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            image={project.image}
          />
        ))}
      </div> */}

      <GalleryWithTab />
    </section>
  );
}
