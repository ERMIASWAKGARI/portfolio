import {
  faCloud,
  faCode,
  faDatabase,
  faDesktop,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Building modern web applications for seamless experiences.',
      icon: faDesktop,
    },
    {
      title: 'Frontend Development',
      description: 'Creating visually appealing, responsive interfaces.',
      icon: faCode,
    },
    {
      title: 'Backend Development',
      description: 'Building scalable server-side applications.',
      icon: faServer,
    },
    {
      title: 'Database Management',
      description: 'Designing efficient databases with MongoDB and MySQL. ',
      icon: faDatabase,
    },
    {
      title: 'API Development',
      description: 'Creating RESTful APIs and integrating services.',
      icon: faCloud,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#f0f9ff] dark:bg-[#003049] text-secondary dark:text-neutral-white py-12 px-6 sm:px-8 md:px-16 lg:px-24 "
    >
      <div className="container mx-auto text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-4 sm:mb-8">
            What I Offer
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-center text-secondary-dark dark:text-secondary-light mb-8 sm:mb-16">
            Delivering cutting-edge solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-white dark:bg-[#001d3d] shadow-md p-2 sm:p-2 md:p-4 lg:p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 w-[calc(100%-3rem)] sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] "
            >
              <div className="text-teal-400 mb-4">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-teal-400">
                {service.title}
              </h3>
              <p className="text-sm md:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
