// src/components/Contact.jsx

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Contact Me
      </h2>
      <form className="max-w-md mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded focus:outline-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
