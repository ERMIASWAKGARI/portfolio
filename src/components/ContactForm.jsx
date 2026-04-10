import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC
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

  const handleCloseStatus = () => {
    setStatus("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full space-y-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow)] sm:p-6"
    >
      <h3 className="text-lg font-semibold sm:text-xl">Send a Message</h3>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:text-base"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:text-base"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300 sm:text-base"
        rows="4"
        required
      ></textarea>

      <button
        type="submit"
        className="w-full rounded-xl bg-teal-500 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 sm:text-base"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <div
          className={`relative mt-3 text-center text-sm font-semibold sm:text-base ${
            status.includes("success") ? "text-teal-400" : "text-red-500"
          }`}
        >
          {status}
          <button
            onClick={handleCloseStatus}
            className="absolute top-0 right-0 text-lg font-bold text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
      )}
    </form>
  );
}
