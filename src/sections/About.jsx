// src/components/About.jsx

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        About Me
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 text-lg">
        I&apos;m a web developer with a strong foundation in front-end
        development, specializing in creating responsive and interactive
        websites. I have experience in various technologies including React,
        JavaScript, and Tailwind CSS.
      </p>
      {/* Skills Section */}
      <div className="flex flex-wrap justify-center mt-8 space-x-4 space-y-4">
        <div className="flex flex-col items-center">
          <div className="bg-secondary text-white p-4 rounded-full">JS</div>
          <span className="mt-2">JavaScript</span>
        </div>
      </div>
    </section>
  );
}
