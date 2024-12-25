/* eslint-disable react/prop-types */
const SocialMediaIcons = ({ justify = "center" }) => {
  return (
    <div className={`mt-6 flex justify-center lg:justify-${justify} space-x-4`}>
      {[
        {
          href: "https://github.com",
          label: "GitHub Profile",
          icon: "fab fa-github",
        },
        {
          href: "https://linkedin.com",
          label: "LinkedIn Profile",
          icon: "fab fa-linkedin",
        },
        {
          href: "https://twitter.com",
          label: "Twitter Profile",
          icon: "fab fa-twitter",
        },
        {
          href: "https://dev.to",
          label: "Dev.to Profile",
          icon: "fab fa-dev",
        },
        {
          href: "https://stackoverflow.com",
          label: "StackOverflow Profile",
          icon: "fab fa-stack-overflow",
        },
        {
          href: "https://dribbble.com",
          label: "Dribbble Profile",
          icon: "fab fa-dribbble",
        },
      ].map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          className="text-secondary-dark dark:text-secondary-light dark:hover:text-primary hover:text-primary"
          aria-label={label}
        >
          {/* Responsive icon sizes */}
          <i
            className={`${icon} text-lg sm:text-xl md:text-2xl lg:text-3xl`}
          ></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
