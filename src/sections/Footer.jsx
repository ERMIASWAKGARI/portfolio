// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="py-6 px-8 bg-gray-900 text-gray-200 text-center">
      <p className="mt-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}
