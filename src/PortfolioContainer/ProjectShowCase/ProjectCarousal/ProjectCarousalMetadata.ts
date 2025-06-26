import portfolioThumbnail from "../../../assets/project-showcase/portfolio_project.png";
import dummyThumbnail from "../../../assets/project-showcase/coming_soon.png";
type Project = {
  title: string;
  description: string;
  thumbnail: string;
};

export const showcaseProjects: Project[] = [
  {
    title: "Portfolio Project",
    description: "Side project",
    thumbnail: portfolioThumbnail,
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
  {
    title: "Dummy Placeholder",
    description: "This is placed to show carousal functionality",
    thumbnail: dummyThumbnail,
  },
];
