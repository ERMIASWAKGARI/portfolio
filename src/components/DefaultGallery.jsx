import { AnimatePresence, motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaTimes,
  FaExternalLinkAlt,
  FaRegImages,
} from "react-icons/fa";

export function ProjectGallery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      projectName: "DonateLink",
      description:
        "A donation platform connecting charities with supporters through modern web technologies.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Chappa",
        "Twillio",
        "Nodemailer",
      ],
      images: [
        { imageLink: "donate-link1.png" },
        { imageLink: "donate-link2.png" },
        { imageLink: "donate-link3.png" },
        { imageLink: "donate-link4.png" },
        { imageLink: "donate-link5.png" },
        { imageLink: "donate-link6.png" },
        { imageLink: "donate-link7.png" },
        { imageLink: "donate-link8.png" },
        { imageLink: "donate-link9.png" },
        { imageLink: "donate-link10.png" },
      ],
      githubLink: "https://github.com/ERMIASWAKGARI/donatelink",
      deployedLink: "https://donate-link.netlify.app/",
      category: "Full Stack",
    },
    {
      projectName: "Blog Website",
      description:
        "Modern blogging platform with rich text editing and social features.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "Typescript",
        "MongoDB",
      ],
      images: [
        { imageLink: "gazette0.png" },
        { imageLink: "gazette1.jpg" },
        { imageLink: "gazette2.png" },
        { imageLink: "gazettesignup.jpg" },
        { imageLink: "gazettelogin.jpg" },
        { imageLink: "gazette-full.jpg" },
      ],
      githubLink: "https://github.com/ERMIASWAKGARI/blog",
      deployedLink: "https://blog-peach-three-24.vercel.app/",
      category: "Full Stack",
    },
    {
      projectName: "SoftExit",
      description:
        "National exit exam preparation platform with practice tests and performance tracking.",
      technologies: ["React", "TailwindCSS"],
      images: [
        { imageLink: "softexit2.png" },
        { imageLink: "softexit3.png" },
        { imageLink: "softexit4.png" },
        { imageLink: "softexit5.png" },
        { imageLink: "softexit7.png" },
        { imageLink: "softexit8.png" },
        { imageLink: "softexit9.png" },
        { imageLink: "softexit10.png" },
        { imageLink: "softexit11.png" },
      ],
      githubLink: "https://github.com/ERMIASWAKGARI/softexit",
      deployedLink: "https://softexitweb.netlify.app/",
      category: "Frontend",
    },
    {
      projectName: "E-commerce Platform",
      description:
        "Complete e-commerce solution with cart, checkout, and inventory management.",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "Stripe",
        "Chappa",
      ],
      images: [
        { imageLink: "ecommerce1.png" },
        { imageLink: "ecommerce2.png" },
        { imageLink: "ecommerce3.png" },
        { imageLink: "ecommerce4.png" },
        { imageLink: "ecommerce5.png" },
      ],
      githubLink: "https://github.com/ERMIASWAKGARI/ShopNexus",
      category: "Full Stack",
    },
    {
      projectName: "Travel Tracker",
      description:
        "Interactive map application for tracking and sharing travel experiences.",
      technologies: ["React", "Mapbox", "Firebase", "Tailwind CSS"],
      images: [
        { imageLink: "worldwise1.png" },
        { imageLink: "worldwise2.png" },
        { imageLink: "worldwise3.png" },
        { imageLink: "worldwise4.png" },
        { imageLink: "worldwise5.png" },
      ],
      githubLink: "https://github.com/ERMIASWAKGARI",
      // deployedLink: "https://worldwise-travel.vercel.app",
      category: "Frontend",
    },
    {
      projectName: "Social Media WebApp",
      description:
        "Educational social platform for connecting students and educators.",
      technologies: ["React", "Socket.io", "MongoDB", "JWT"],
      images: [{ imageLink: "connectEducator1.png" }],
      githubLink:
        "https://github.com/ERMIASWAKGARI/connectEducator-social-media-using-PHP",
      deployedLink: null,
      category: "Full Stack",
    },
  ];

  const openPopup = useCallback((project, index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
    // Prevent body scroll when popup is open
    document.body.style.overflow = "hidden";
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
    // Re-enable body scroll when popup is closed
    document.body.style.overflow = "unset";
    setTimeout(() => {
      setCurrentProject(null);
      setCurrentImageIndex(0);
    }, 300);
  }, []);

  const navigateImage = useCallback(
    (navDirection) => {
      setDirection(navDirection === "right" ? 1 : -1);
      setCurrentImageIndex((prevIndex) => {
        const totalImages = currentProject.images.length;
        return navDirection === "left"
          ? (prevIndex - 1 + totalImages) % totalImages
          : (prevIndex + 1) % totalImages;
      });
    },
    [currentProject]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isPopupOpen) return;

      switch (e.key) {
        case "Escape":
          closePopup();
          break;
        case "ArrowLeft":
          navigateImage("left");
          break;
        case "ArrowRight":
          navigateImage("right");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPopupOpen, closePopup, navigateImage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <>
      <div className="py-8 sm:py-12 px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.projectName}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700"
              onClick={() => openPopup(project, 0)}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <motion.img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={project.images[0].imageLink}
                  alt={project.projectName}
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                {/* Image Count Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
                  <FaRegImages className="text-xs" />
                  <span>{project.images.length}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {project.projectName}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="text-lg" />
                    </motion.a>

                    {project.deployedLink && (
                      <motion.a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </motion.a>
                    )}
                  </div>

                  <motion.span
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    View Project →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Popup Gallery */}
      <AnimatePresence mode="wait">
        {isPopupOpen && currentProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full my-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {currentProject.projectName}
                  </h2>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {currentProject.category}
                  </span>
                </div>

                <motion.button
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  onClick={closePopup}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-xl" />
                </motion.button>
              </div>

              {/* Main Content - Scrollable
              
              customize the scrollbar

              */}
              <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)] overflow-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
                {/* Image Gallery */}
                <div className="flex-1 p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-800 relative min-h-[400px] lg:min-h-[500px]">
                  <AnimatePresence custom={direction} mode="popLayout">
                    <motion.img
                      key={currentImageIndex}
                      src={currentProject.images[currentImageIndex]?.imageLink}
                      alt={`${currentProject.projectName} - Image ${
                        currentImageIndex + 1
                      }`}
                      className="max-h-full max-w-full object-contain rounded-lg"
                      custom={direction}
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    />
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  {currentProject.images.length > 1 && (
                    <>
                      <motion.button
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full backdrop-blur-sm z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage("left");
                        }}
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaChevronLeft className="text-lg" />
                      </motion.button>

                      <motion.button
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full backdrop-blur-sm z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage("right");
                        }}
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaChevronRight className="text-lg" />
                      </motion.button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-20">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </div>
                </div>

                {/* Project Details - Scrollable */}
                <div className="lg:w-80 p-6 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Description
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {currentProject.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                      <motion.a
                        href={currentProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          View Source Code
                        </span>
                      </motion.a>

                      {currentProject.deployedLink && (
                        <motion.a
                          href={currentProject.deployedLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors group"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt />
                          <span className="font-medium">Live Demo</span>
                        </motion.a>
                      )}
                    </div>

                    {/* Thumbnails */}
                    {currentProject.images.length > 1 && (
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                          All Images ({currentProject.images.length})
                        </h3>
                        <div className="grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                          {currentProject.images.map((image, index) => (
                            <motion.button
                              key={index}
                              className={`relative rounded-lg overflow-hidden border-2 ${
                                index === currentImageIndex
                                  ? "border-blue-500"
                                  : "border-transparent"
                              }`}
                              onClick={() => {
                                setDirection(
                                  index > currentImageIndex ? 1 : -1
                                );
                                setCurrentImageIndex(index);
                              }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <img
                                src={image.imageLink}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-12 object-cover"
                              />
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
