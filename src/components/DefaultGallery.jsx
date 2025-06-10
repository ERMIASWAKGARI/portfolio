import { AnimatePresence, motion } from 'framer-motion'
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
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left

  const projects = [
    {
      projectName: 'DonateLink',
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

  const navigateImage = (navDirection) => {
    setDirection(navDirection === 'right' ? 1 : -1)
    setCurrentImageIndex((prevIndex) => {
      const totalImages = currentImages.length
      return navDirection === 'left'
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
              className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 group cursor-pointer"
              onClick={() => openPopup(project.images, 0)}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.5,
                scale: { type: 'spring', damping: 10, stiffness: 300 },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.img
                  className="w-full object-cover"
                  src={project.images[0].imageLink}
                  alt={project.projectName}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Project name overlay */}
                <motion.div
                  className="absolute bottom-1 right-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-white truncate inline-block bg-gray-100 dark:bg-gray-500 bg-opacity-70 rounded px-2 py-1 max-w-[100%]">
                    {project.projectName}
                  </h3>
                </motion.div>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2 right-2 text-gray-800 dark:text-neutral-white bg-gray-100 dark:bg-gray-500 p-2 rounded-full transition-opacity duration-300"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isPopupOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative w-full bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg max-w-3xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
              }}
            >
              <div className="relative flex items-center justify-center">
                <AnimatePresence custom={direction} mode="popLayout">
                  <motion.img
                    key={currentImageIndex}
                    src={currentImages[currentImageIndex]?.imageLink}
                    alt="Current Project"
                    className="max-h-full max-w-full object-contain rounded"
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -100 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      duration: 0.3,
                    }}
                  />
                </AnimatePresence>
              </div>

              <div className="text-center mt-2 text-gray-800 dark:text-white">
                {currentImageIndex + 1} of {currentImages.length}
              </div>

              <motion.button
                className="absolute top-2 right-2 text-white bg-black bg-opacity-70 p-2 rounded-full"
                onClick={closePopup}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FaTimes />
              </motion.button>

              <motion.button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('left')
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FaChevronLeft />
              </motion.button>

              <motion.button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-70 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('right')
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <FaChevronRight />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
