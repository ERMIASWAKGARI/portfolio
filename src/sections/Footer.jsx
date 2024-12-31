export default function Footer() {
  return (
    <section id="footer">
      <footer className="py-6 px-8 bg-gray-900 text-gray-200 text-center">
        <p className="mt-4">
          © {new Date().getFullYear()} Ermias Wakgari. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
