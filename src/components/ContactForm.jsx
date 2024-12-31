import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
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

    emailjs
      .send(
        "service_6s27fau", // Replace with your EmailJS service ID
        "template_0nwm2vs", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "nJ3KTKrPNeKD6bZmP" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log(response);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-6 p-6 bg-neutral-white dark:bg-[#001d3d] rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="text-sm sm:text-base md:text-lg w-full px-4 py-2  border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-[#001d3d] dark:text-white text-primary-dark"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="text-sm sm:text-base md:text-lg w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-[#001d3d] dark:text-white text-primary-dark"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="text-sm sm:text-base md:text-lg w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-[#001d3d] dark:text-white text-primary-dark"
        rows="4"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full px-6 py-2 text-sm sm:text-base md:text-lg bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors duration-200"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <div
          className={`mt-6 text-center text-sm sm:text-base md:text-lg font-semibold ${
            status.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </div>
      )}
    </form>
  );
}
