import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaTimes,
} from 'react-icons/fa'

export function ProjectGallery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentImages, setCurrentImages] = useState([])

  const projects = [
    {
      projectName: 'Blog Website',
      images: [
        { imageLink: 'gazette0.png' },
        { imageLink: 'gazette1.jpg' },
        { imageLink: 'gazette2.png' },
        { imageLink: 'gazettesignup.jpg' },
        { imageLink: 'gazettelogin.jpg' },
        { imageLink: 'gazette-full.jpg' },
        { imageLink: 'gazettepost.jpg' },
        { imageLink: 'gazetteprofile.jpg' },
      ],
      githubLink: 'https://github.com/ERMIASWAKGARI',
    },
    {
      projectName: 'E-commerce Platform',
      images: [
        { imageLink: 'ecommerce1.png' },
        { imageLink: 'ecommerce2.png' },
        { imageLink: 'ecommerce3.png' },
        { imageLink: 'ecommerce4.png' },
        { imageLink: 'ecommerce5.png' },
      ],
      githubLink: 'https://github.com/ERMIASWAKGARI',
    },
    {
      projectName: 'Travel tracker',
      images: [
        { imageLink: 'worldwise1.png' },
        { imageLink: 'worldwise2.png' },
        { imageLink: 'worldwise3.png' },
        { imageLink: 'worldwise4.png' },
        { imageLink: 'worldwise5.png' },
        { imageLink: 'worldwise6.png' },
      ],
      githubLink: 'https://github.com/ERMIASWAKGARI',
    },
    {
      projectName: 'Social Media WebApp',
      images: [{ imageLink: 'connectEducator1.png' }],
      githubLink: 'https://github.com/ERMIASWAKGARI',
    },
    {
      projectName: 'SoftExit',
      images: [
        { imageLink: 'Screenshot 2025-06-07 220146.png' },
        { imageLink: 'Screenshot 2025-06-07 220320.png' },
        { imageLink: 'Screenshot 2025-06-07 220344.png' },
        { imageLink: 'Screenshot 2025-06-07 220419.png' },
        { imageLink: 'Screenshot 2025-06-07 220437.png' },
        { imageLink: 'Screenshot 2025-06-07 220454.png' },
      ],
      githubLink: 'https://github.com/ERMIASWAKGARI',
    },
  ]

  const openPopup = (images, index) => {
    setCurrentImages(images)
    setCurrentImageIndex(index)
    setIsPopupOpen(true)
  }

  const closePopup = () => setIsPopupOpen(false)

  const navigateImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      const totalImages = currentImages.length
      return direction === 'left'
        ? (prevIndex - 1 + totalImages) % totalImages
        : (prevIndex + 1) % totalImages
    })
  }

  return (
    <>
      <div className="py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 group"
              onClick={() => openPopup(project.images, 0)}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  className="w-full object-cover"
                  src={project.images[0].imageLink}
                  alt={project.projectName}
                />
                {/* Project name overlay - now with inline-block background */}
                <div className="absolute bottom-1 right-1">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-white truncate inline-block bg-gray-100 dark:bg-gray-500 bg-opacity-70 rounded px-2 py-1 max-w-[100%]">
                    {project.projectName}
                  </h3>
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 text-gray-800 dark:text-neutral-white bg-gray-100 dark:bg-gray-500  p-2 rounded-full transition-opacity duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="relative w-full bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[currentImageIndex].imageLink}
              alt="Current Project"
              className="max-h-[80vh] mx-auto rounded"
            />
            <div className="text-center mt-2 text-gray-800 dark:text-white">
              {currentImageIndex + 1} of {currentImages.length}
            </div>
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={closePopup}
            >
              <FaTimes />
            </button>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={() => navigateImage('left')}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 rounded-full"
              onClick={() => navigateImage('right')}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
