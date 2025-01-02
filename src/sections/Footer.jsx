export default function Footer() {
  return (
    <section id="footer">
      <footer className="py-6 px-8 bg-[#f0f9ff] dark:bg-[#003049]  text-gray-800 dark:text-neutral-white text-center">
        <p className="mt-4">
          © {new Date().getFullYear()} Ermias Wakgari. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
