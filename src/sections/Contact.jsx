import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-20 bg-tertiary dark:bg-tertiary-dark"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-8 lg:mb-16">
        Contact Me
      </h2>
      <div className="container mx-auto max-w-6xl flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0">
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
