import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export function GalleryWithTab() {
  // eslint-disable-next-line no-unused-vars
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    {
      label: "Fullstack",
      value: "fullstack",
      projects: [
        {
          projectName: "Fullstack Project 1",
          images: [
            { imageLink: "gazette0.png" },
            { imageLink: "gazettelogin.jpg" },
            { imageLink: "gazettesignup.jpg" },
            { imageLink: "gazette-full.jpg" },
            { imageLink: "gazettecreatepost.jpg" },
            { imageLink: "gazettepost.jpg" },
            { imageLink: "gazetteprofile.jpg" },
          ],
        },
        {
          projectName: "Fullstack Project 2",
          images: [
            { imageLink: "nodefarm1.png" },
            { imageLink: "nodefarm2.png" },
          ],
        },
        {
          projectName: "Fullstack Project 2",
          images: [{ imageLink: "php1.png" }],
        },
      ],
    },
    {
      label: "Frontend",
      value: "frontend",
      projects: [
        {
          projectName: "Frontend Project 1",
          images: [
            { imageLink: "bankist.png" },
            // { imageLink: "gazettesignup.jpg" },
          ],
        },
        {
          projectName: "Frontend Project 2",
          images: [
            { imageLink: "worldwise1.png" },
            { imageLink: "worldwise2.png" },
            { imageLink: "worldwise3.png" },
            { imageLink: "worldwise4.png" },
            { imageLink: "worldwise5.png" },
            { imageLink: "worldwise6.png" },
          ],
        },
        {
          projectName: "Frontend Project 3",
          images: [
            { imageLink: "usepopcorn0.png" },
            { imageLink: "usepopcorn1.png" },
          ],
        },
        {
          projectName: "Frontend Project 4",
          images: [
            { imageLink: "quiz.png" },
            // { imageLink: "usepopcorn1.png" },
          ],
        },
        {
          projectName: "Frontend Project 5",
          images: [
            { imageLink: "foodorder0.png" },
            { imageLink: "foodorder2.png" },
            { imageLink: "foodorder3.png" },
          ],
        },
        {
          projectName: "Frontend Project 6",
          images: [{ imageLink: "game1.png" }],
        },
      ],
    },
    {
      label: "Backend",
      value: "backend",
      projects: [
        {
          projectName: "Backend Project 1",
          images: [
            { imageLink: "forkify1.png" },
            { imageLink: "forkify2.png" },
            { imageLink: "forkify3.png" },
            { imageLink: "forkify4.png" },
          ],
        },
        {
          projectName: "Backend Project 2",
          images: [{ imageLink: "faraway.png" }],
        },
        {
          projectName: "Backend Project 3",
          images: [{ imageLink: "guessmynumber.png" }],
        },
      ],
    },
  ];

  const allProjects = categories.flatMap((category) => category.projects);

  const extendedCategories = [
    { label: "All", value: "all", projects: allProjects },
    ...categories,
  ];

  const openPopup = (images, index) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const navigateImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      const totalImages = currentImages.length;
      return direction === "left"
        ? (prevIndex - 1 + totalImages) % totalImages
        : (prevIndex + 1) % totalImages;
    });
  };

  return (
    <>
      <Tabs value="all" className="px-4 py-6 sm:px-8 sm:py-10 lg:px-20">
        <TabsHeader
          className="bg-gray-100 dark:bg-gray-900 text-secondary-dark dark:text-gray-100 rounded-lg"
          indicatorProps={{
            className: "bg-primary dark:bg-primary",
          }}
        >
          {extendedCategories.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              className={({ selected }) =>
                `text-sm font-medium ${
                  selected
                    ? "text-white dark:text-gray-900"
                    : "text-gray-800 dark:text-gray-100"
                }`
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {extendedCategories.map(({ value, projects }) => (
            <TabPanel
              key={value}
              value={value}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 group"
                  onClick={() => openPopup(project.images, 0)}
                >
                  <img
                    className="w-full h-auto object-cover"
                    src={project.images[0].imageLink}
                    alt={project.projectName}
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                    {project.projectName}
                  </div>
                </motion.div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative w-full bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[currentImageIndex].imageLink}
              alt="Current Project"
              className="max-h-[80vh] mx-auto rounded"
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={closePopup}
            >
              <FaTimes />
            </button>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={() => navigateImage("left")}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={() => navigateImage("right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
