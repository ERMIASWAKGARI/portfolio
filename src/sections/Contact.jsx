import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6s27fau", // Replace with your EmailJS service ID
        "template_7xkul94", // Replace with your EmailJS template ID
        formData,
        "nJ3KTKrPNeKD6bZmP" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log(response);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset the form
        },
        (error) => {
          console.log(error.message);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Contact Me
      </h2>
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
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
