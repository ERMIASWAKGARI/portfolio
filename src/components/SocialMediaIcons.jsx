/* eslint-disable react/prop-types */
const SocialMediaIcons = ({ justify, size }) => {
  return (
    <div className={`mt-6 flex justify-center lg:justify-${justify} space-x-4`}>
      {[
        {
          href: "https://github.com/ERMIASWAKGARI",
          label: "GitHub Profile",
          icon: "fab fa-github",
        },
        {
          href: "https://www.linkedin.com/in/ermias-wakgari-05a62927a/",
          label: "LinkedIn Profile",
          icon: "fab fa-linkedin",
        },
        {
          href: "https://x.com/ermi414",
          label: "Twitter Profile",
          icon: "fab fa-twitter",
        },
        {
          href: "https://dev.to/ermiaswakgari",
          label: "Dev.to Profile",
          icon: "fab fa-dev",
        },
        {
          href: "https://stackoverflow.com/users/28997956/ermias-wakgari",
          label: "StackOverflow Profile",
          icon: "fab fa-stack-overflow",
        },
        {
          href: "https://dribbble.com/ermiaswakgari",
          label: "Dribbble Profile",
          icon: "fab fa-dribbble",
        },
      ].map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-dark dark:text-secondary-light dark:hover:text-teal-400 hover:text-teal-400"
          aria-label={label}
        >
          <i
            className={`${icon} text-lg sm:text-xl md:text-2xl lg:text-${size}xl`}
          ></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
