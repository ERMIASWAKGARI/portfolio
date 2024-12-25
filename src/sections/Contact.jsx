import { useState } from "react";
import emailjs from "emailjs-com";
import SocialMediaIcons from "../components/SocialMediaIcons"; // Assuming you've created the SocialMediaIcons component

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // for success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(""); // Reset status message before sending

    // Send the data to EmailJS including from_name and from_email
    emailjs
      .send(
        "service_6s27fau", // Replace with your EmailJS service ID
        "template_0nwm2vs", // Replace with your EmailJS template ID
        {
          from_name: formData.name, // Sender's name
          from_email: formData.email, // Sender's email address
          message: formData.message, // Message content
        },
        "nJ3KTKrPNeKD6bZmP" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log(response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.log(error.message);
          setStatus("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-20 bg-tertiary dark:bg-tertiary-dark"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl  font-bold text-center text-gray-800 dark:text-neutral-white mb-8 lg:mb-16">
        Contact Me
      </h2>
      <div className="container mx-auto max-w-6xl flex flex-wrap justify-between items-center">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0">
          {/* <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            Have a question or want to collaborate? Feel free to reach out:)
          </p> */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {/* Status Message */}
          {status && (
            <div
              className={`mt-6 text-center text-lg font-semibold ${
                status.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </div>
          )}
        </div>

        {/* Contact Information (Social Media, Phone, Email) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-neutral-white mb-8">
              Get in Touch
            </h3>
            <div className="text-lg mb-4">
              <p className="text-lg sm:text-sm md:text-md lg:text-lg mb-8 text-gray-700 dark:text-gray-300 flex gap-2 items-center justify-center">
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                    />
                  </svg>
                </strong>{" "}
                <a href="mailto:ermiaswakgarisse5@gmail.com">
                  ermiaswakgarisse5@gmail.com
                </a>
              </p>
              <p className="text-lg sm:text-sm md:text-md lg:text-lg mb-8 text-gray-700 flex gap-2 justify-center  items-center dark:text-gray-300">
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </strong>{" "}
                +251 937 920 510
              </p>
              <p className="text-lg sm:text-sm md:text-md lg:text-lg mb-8 text-gray-700 flex gap-2 justify-center  items-center dark:text-gray-300">
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </strong>{" "}
                +251 964 495 837
              </p>
            </div>
            <div className="text-center">
              <SocialMediaIcons justify="center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
