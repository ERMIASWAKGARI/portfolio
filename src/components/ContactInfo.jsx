import SocialMediaIcons from "../components/SocialMediaIcons";

export default function ContactInfo() {
  return (
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
        <p className="text-lg sm:text-sm md:text-md lg:text-lg mb-8 text-gray-700 dark:text-gray-300 flex gap-2 items-center justify-center">
          <strong>📞</strong> +251 937 920 510
        </p>
        <p className="text-lg sm:text-sm md:text-md lg:text-lg mb-8 text-gray-700 dark:text-gray-300 flex gap-2 items-center justify-center">
          <strong>📞</strong> +251 964 495 837
        </p>
      </div>
      <div className="text-center">
        <SocialMediaIcons justify="center" />
      </div>
    </div>
  );
}
