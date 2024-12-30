import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-20 bg-gray-50 dark:bg-gray-900"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="container mx-auto max-w-6xl flex flex-wrap justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <ContactInfo />
        </motion.div>
      </motion.div>
    </section>
  );
}
