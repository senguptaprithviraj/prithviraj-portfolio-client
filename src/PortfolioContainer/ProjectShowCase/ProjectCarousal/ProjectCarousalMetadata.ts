import portfolioThumbnail from "../../../assets/project-showcase/portfolio_project.webp";
import cartAppThumbnail from "../../../assets/project-showcase/cart_app.webp";
import dummyThumbnail from "../../../assets/project-showcase/coming_soon.png";
export type Project = {
  title: string;
  description: string;
  thumbnail: string;
  href?: string;
};

export const showcaseProjects: Project[] = [
  {
    title: "Portfolio Project",
    description:
      "A responsive, accessible portfolio app using React.js, Bootstrap, RxJS, and Node.js with WCAG and AODA compliance.",
    thumbnail: portfolioThumbnail,
  },
  {
    title: "Shopping Cart",
    description:
      "A lightweight Shopping Cart app built with React, Tailwind CSS, and Sanity for headless product management.",
    thumbnail: cartAppThumbnail,
    href: "https://poc-shopping-cart.vercel.app/",
  },
  {
    title: "Dummy Placeholder",
    description: "This is placed to show carousal functionality",
    thumbnail: dummyThumbnail,
  },
  {
    title: "Dummy Placeholder",
    description: "This is placed to show carousal functionality",
    thumbnail: dummyThumbnail,
  },
  {
    title: "Dummy Placeholder",
    description: "This is placed to show carousal functionality",
    thumbnail: dummyThumbnail,
  },
  {
    title: "Dummy Placeholder",
    description: "This is placed to show carousal functionality",
    thumbnail: dummyThumbnail,
  },
  {
    title: "Dummy Placeholder",
    description: "This is placed to show carousal functionality",
    thumbnail: dummyThumbnail,
  },
];
