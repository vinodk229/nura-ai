const navData = [
  {
    id: 1,
    title: "HOME",
    link: "/",
  },
  {
    id: 2,
    title: "ABOUT US",
    link: "/about",
  },
  {
    id: 3,
    title: "SERVICE",
    link: "/service",
    children: [
      {
        id: 31,
        title: "Web Design",
        link: "/web-design",
      },
      {
        id: 32,
        title: "Development",
        link: "/development",
      },
      {
        id: 33,
        title: "Branding",
        link: "/branding",
      },
    ],
  },
  {
    id: 4,
    title: "BLOG",
    link: "/blog",
  },
  {
    id: 5,
    title: "PAGES",
    link: "/pages",
    children: [
      {
        id: 51,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 52,
        title: "Team",
        link: "/team",
      },
    ],
  },
  {
    id: 6,
    title: "CONTACT",
    link: "/contact",
  },
];

export default navData;