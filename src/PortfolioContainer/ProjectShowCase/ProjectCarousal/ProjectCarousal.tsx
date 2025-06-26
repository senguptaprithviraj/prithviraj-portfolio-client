import "./ProjectCarousal.css";

import { useRef } from "react";
import { motion } from "framer-motion";
import { showcaseProjects } from "./ProjectCarousalMetadata";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCarousal = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: number) => {
    let contentWidth = cardContentRef.current?.offsetWidth || 350;
    const container = containerRef.current;
    if (container) {
      container.scrollBy({
        left: direction * contentWidth,
        behavior: "smooth",
      });
    }
  };

  const calculateDragConstraints = () => {
    let contentWidth = cardContentRef.current?.offsetWidth || 350;
    return -(contentWidth * (showcaseProjects.length - 3));
  };

  return (
    <div className="project-carousel-container">
      <button onClick={() => scroll(-1)} className="arrow-button left"></button>

      <button onClick={() => scroll(1)} className="arrow-button right"></button>

      <div className="carousel-card-section" ref={containerRef}>
        <motion.div
          className="carousel-track"
          whileTap={{ cursor: "grabbing" }}
        >
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={`showcasedProject${index}`}
              className={`carousel-card`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card-content" ref={cardContentRef}>
                <img
                  className="project-thumbnail-image"
                  src={project.thumbnail}
                  alt={`project${index}ThumbnailImage`}
                />
                <div className="project-info">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">
                    {project.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCarousal;

//helper function
