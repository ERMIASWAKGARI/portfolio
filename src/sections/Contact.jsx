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
      className="bg-[var(--bg)] px-4 py-14 sm:px-6 sm:py-16 lg:px-16"
    >
      <motion.h2
        className="text-center text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>

      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base md:text-lg">
        Open to internships, junior software engineering roles, and freelance web projects.
      </p>

      <motion.div
        className="container mx-auto mt-8 max-w-6xl items-stretch gap-6 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
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
