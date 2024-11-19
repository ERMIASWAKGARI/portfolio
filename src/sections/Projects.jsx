// src/components/Projects.jsx

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded p-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4">
              <span className="text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                React
              </span>
            </div>
            <a href={project.link} className="text-teal-500 mt-4 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
