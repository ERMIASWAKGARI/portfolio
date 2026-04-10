import {
  faCloud,
  faCode,
  faDatabase,
  faDesktop,
  faDiagramProject,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Full-Stack Development',
      description:
        'Designing and building production-ready web apps with React, Node.js, and scalable architectures.',
      icon: faDesktop,
    },
    {
      title: 'Frontend Development',
      description:
        'Creating responsive, accessible interfaces with a strong focus on UX performance and usability.',
      icon: faCode,
    },
    {
      title: 'Backend Development',
      description:
        'Building secure APIs, authentication flows, and maintainable server-side services.',
      icon: faServer,
    },
    {
      title: 'Database Management',
      description:
        'Designing reliable data layers using MongoDB, PostgreSQL, and MySQL.',
      icon: faDatabase,
    },
    {
      title: 'API Development',
      description:
        'Developing REST APIs and integrating external services into business workflows.',
      icon: faCloud,
    },
    {
      title: 'System Design Support',
      description:
        'Turning requirements into technical plans with practical architecture and delivery strategy.',
      icon: faDiagramProject,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[var(--bg)] px-4 py-14 text-[var(--text)] sm:px-6 sm:py-16 lg:px-16"
    >
      <div className="container mx-auto text-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl mb-4 sm:mb-8">
            Services
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm text-[var(--muted)] sm:mb-12 sm:text-base md:text-lg">
            End-to-end engineering services for fast-moving products and teams.
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
              className="w-[calc(100%-1rem)] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)] transition-transform duration-300 hover:scale-[1.02] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="mb-4 text-teal-500">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-teal-600 dark:text-teal-300 sm:text-xl">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--muted)] md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
