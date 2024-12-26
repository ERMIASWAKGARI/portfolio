import SocialMediaIcons from "../components/SocialMediaIcons";

export default function ContactInfo() {
  return (
    <div className="max-w-lg mx-auto p-6 text-sm sm:text-base md:text-lg bg-neutral-white dark:bg-gray-800 rounded-2xl shadow-xl">
      {/* <h3 className="text-3xl font-semibold text-gray-800 dark:text-neutral-white mb-8 text-center">
        Get in Touch
      </h3> */}

      {/* Location Section */}
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2c2.3 0 4.2 1.5 5.25 3.5 1.05 2.1 1.05 4.5 0 6.5C16.2 13.5 14.2 16 12 16s-4.2-2.5-5.25-4.5c-1.05-2-1.05-4.4 0-6.5C7.8 3.5 9.7 2 12 2z"
            />
          </svg>
          <span className="font-semibold text-gray-800 dark:text-neutral-white">
            Location
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 ml-9">Jimma, Ethiopia</p>
      </div>

      {/* Phone Section */}
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
            />
          </svg>
          <span className="font-semibold text-gray-800 dark:text-neutral-white">
            Phone
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 ml-9">
          +251 937 920 510
        </p>
        <p className="text-gray-700 dark:text-gray-300 ml-9">
          +251 964 495 837
        </p>
      </div>

      {/* Email Section */}
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0-1.38-.56-2.63-1.5-3.5L13 12.13V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8.13l6.5 4.63C20.44 14.63 21 13.38 21 12z"
            />
          </svg>
          <span className="font-semibold text-gray-800 dark:text-neutral-white">
            Email
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 ml-9">
          <a href="mailto:ermiaswakgarisse5@gmail.com">
            ermiaswakgarisse5@gmail.com
          </a>
        </p>
      </div>

      {/* Social Media Section */}
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25C6.735 2.25 2.25 6.735 2.25 12c0 3.684 1.577 7.029 4.051 9.357-1.432-2.763-.354-6.446 2.316-7.334 1.06-.53 2.199-.628 3.319-.119 1.13.509 1.73 1.618 1.73 2.788V16.5c0 1.797 1.453 3.25 3.25 3.25h1.502c1.318 0 2.325-1.113 2.325-2.463v-1.156c0-.702-.38-1.365-.986-1.708-1.618-.884-3.056-1.14-4.526-.687-.245-.526-.485-1.07-.72-1.577-.369-.761-.745-1.41-1.19-1.88-.467-.493-.963-.929-1.506-1.285-2.542-1.732-4.85-.299-4.85 2.396 0 1.56 1.043 2.587 2.4 3.248l3.131.882c.518.148.848.622.848 1.188V18h.004c0 2.062 1.648 3.75 3.75 3.75h1.1a3.758 3.758 0 0 0 3.75-3.75V15.6c0-.84-.543-1.57-1.328-1.8-1.064-.276-2.176-.325-3.207-.126-.145-.495-.335-.985-.553-1.43-.288-.531-.605-1.047-.976-1.546-.598-.697-1.275-1.273-1.982-1.802C14.52 9.175 13.071 8.62 11.51 9.25 10.079 9.85 9.106 10.933 9.106 12c0 2.339 1.79 3.944 3.618 3.944h4.318c2.779 0 4.916-2.325 4.916-4.944 0-4.22-3.326-7.56-7.333-7.56z"
            />
          </svg>
          <span className="font-semibold text-gray-800 dark:text-neutral-white">
            Social Links
          </span>
        </div>
        <div className="flex gap-4 ml-9">
          <SocialMediaIcons justify="start" size={2} />
        </div>
      </div>
    </div>
  );
}
