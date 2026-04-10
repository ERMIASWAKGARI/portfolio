export default function Footer() {
  return (
    <section id="footer">
      <footer className="bg-[var(--surface)] px-4 py-8 sm:px-6 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-semibold sm:text-base">Ermias Wakgari Yadeta</p>
            <p className="mt-1 text-xs text-[var(--muted)] sm:text-sm">
              Software Engineer | Web Developer
            </p>
          </div>

          <div className="text-xs text-[var(--muted)] sm:text-sm">
            <a href="mailto:ermiaswakgarisse5@gmail.com" className="hover:text-teal-500">
              ermiaswakgarisse5@gmail.com
            </a>
          </div>

          <p className="text-xs text-[var(--muted)] sm:text-sm">
            © {new Date().getFullYear()} Ermias Wakgari. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
