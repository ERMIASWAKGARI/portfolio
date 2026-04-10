import SocialMediaIcons from "../components/SocialMediaIcons";

export default function ContactInfo() {
  return (
    <div className="mx-auto w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-sm shadow-[var(--shadow)] sm:p-6 sm:text-base">
      <h3 className="text-lg font-semibold sm:text-xl">Contact Information</h3>

      <div className="mb-3 mt-4">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <span className="font-semibold">Location</span>
        </div>
        <p className="ml-9 text-[var(--muted)]">Addis Ababa, Ethiopia</p>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <span className="font-semibold">Phone</span>
        </div>
        <p className="ml-9 text-[var(--muted)]">
          <a href="tel:+251964495837" className="hover:text-teal-500">
            +251 964 495 837
          </a>
        </p>
        <p className="ml-9 text-[var(--muted)]">
          <a href="tel:+251937920510" className="hover:text-teal-500">
            +251 937 920 510
          </a>
        </p>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <span className="font-semibold">Email</span>
        </div>
        <p className="ml-9 text-[var(--muted)]">
          <a href="mailto:ermiaswakgarisse5@gmail.com">
            ermiaswakgarisse5@gmail.com
          </a>
        </p>
      </div>

      <div className="mb-3">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V10.5m-7.5-4.5h7.5m0 0v7.5m0-7.5L10.5 16.5"
            />
          </svg>

          <span className="font-semibold">Website</span>
        </div>
        <p className="ml-9 text-[var(--muted)]">
          <a
            href="https://ermiaswakgari.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500"
          >
            ermiaswakgari.me
          </a>
        </p>
      </div>

      <div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-teal-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25C6.735 2.25 2.25 6.735 2.25 12c0 3.684 1.577 7.029 4.051 9.357-1.432-2.763-.354-6.446 2.316-7.334 1.06-.53 2.199-.628 3.319-.119 1.13.509 1.73 1.618 1.73 2.788V16.5c0 1.797 1.453 3.25 3.25 3.25h1.502c1.318 0 2.325-1.113 2.325-2.463v-1.156c0-.702-.38-1.365-.986-1.708-1.618-.884-3.056-1.14-4.526-.687-.245-.526-.485-1.07-.72-1.577-.369-.761-.745-1.41-1.19-1.88-.467-.493-.963-.929-1.506-1.285-2.542-1.732-4.85-.299-4.85 2.396 0 1.56 1.043 2.587 2.4 3.248l3.131.882c.518.148.848.622.848 1.188V18h.004c0 2.062 1.648 3.75 3.75 3.75h1.1a3.758 3.758 0 0 0 3.75-3.75V15.6c0-.84-.543-1.57-1.328-1.8-1.064-.276-2.176-.325-3.207-.126-.145-.495-.335-.985-.553-1.43-.288-.531-.605-1.047-.976-1.546-.598-.697-1.275-1.273-1.982-1.802C14.52 9.175 13.071 8.62 11.51 9.25 10.079 9.85 9.106 10.933 9.106 12c0 2.339 1.79 3.944 3.618 3.944h4.318c2.779 0 4.916-2.325 4.916-4.944 0-4.22-3.326-7.56-7.333-7.56z"
            />
          </svg>
          <span className="font-semibold">Social Links</span>
        </div>
        <div className="ml-9">
          <SocialMediaIcons justify="start" size={4} />
        </div>
      </div>
    </div>
  );
}
