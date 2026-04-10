import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaXTwitter,
} from "react-icons/fa6";

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};

const sizeMap = {
  4: "text-base",
  5: "text-lg",
  6: "text-xl",
};

/* eslint-disable react/prop-types */
const SocialMediaIcons = ({ justify = "center", size = 5 }) => {
  const justifyClass = justifyMap[justify] || "justify-center";
  const iconSizeClass = sizeMap[size] || "text-lg";

  return (
    <div className={`mt-5 flex ${justifyClass} gap-4`}>
      {[
        {
          href: "https://github.com/ERMIASWAKGARI",
          label: "GitHub Profile",
          icon: <FaGithub />,
        },
        {
          href: "https://www.linkedin.com/in/ermias-wakgari-05a62927a/",
          label: "LinkedIn Profile",
          icon: <FaLinkedin />,
        },
        {
          href: "https://x.com/ermi414",
          label: "X Profile",
          icon: <FaXTwitter />,
        },
        {
          href: "https://dev.to/ermiaswakgari",
          label: "Dev.to Profile",
          icon: <FaDev />,
        },
        {
          href: "https://stackoverflow.com/users/28997956/ermias-wakgari",
          label: "StackOverflow Profile",
          icon: <FaStackOverflow />,
        },
      ].map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-lg border border-[var(--border)] p-2 ${iconSizeClass} text-[var(--muted)] transition hover:border-teal-400 hover:text-teal-500`}
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
