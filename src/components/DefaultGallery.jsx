import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function GalleryWithTab() {
  const categories = [
    {
      label: "Javascript",
      value: "javascript",
      githubUrl: "https://github.com/yourusername/html-project",
      images: [
        {
          imageLink: "js1.png",
        },
        {
          imageLink: "php1.png",
        },
        {
          imageLink: "react1.png",
        },
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
      ],
    },
    {
      label: "React",
      value: "react",
      githubUrl: "https://github.com/yourusername/html-project",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
  ];

  // Add "All" tab dynamically
  const data = [
    {
      label: "All",
      value: "all",
      githubUrl: "https://github.com/ERMIASWAKGARI", // Category-wide GitHub URL
      images: categories.flatMap(({ images }) => images),
    },
    ...categories,
  ];
  return (
    <Tabs value="all" className="px-4 py-6 sm:px-8 sm:py-10 lg:px-20">
      {/* Tabs Header */}
      <TabsHeader
        className="bg-gray-100 dark:bg-gray-700 text-indigo-500 hover:text-indigo-700 dark:text-gray-100 rounded-lg"
        indicatorProps={{
          className: "bg-primary dark:bg-primary",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            className={({ selected }) =>
              `text-sm font-medium ${
                selected
                  ? "text-white dark:text-gray-900"
                  : "text-gray-800 dark:text-gray-100 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>

      {/* Tabs Body */}
      <TabsBody>
        {data.map(({ value, images, githubUrl }) => (
          <TabPanel
            key={value}
            value={value}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "
          >
            {images.map(({ imageLink }, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 group"
              >
                <img
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  src={imageLink}
                  alt={`Tab image ${index + 1}`}
                />

                {/* GitHub Button */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 left-2 px-4 py-2 bg-primary text-neutral-white text-sm sm:text-base rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-4 hover:scale-105"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
