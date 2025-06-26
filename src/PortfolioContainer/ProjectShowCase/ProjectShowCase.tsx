import ScreenHeading from "../../component/ScreenHeading";
import { ScreenComponentType } from "../../utilities/commonUtils";
import ProjectCarousal from "./ProjectCarousal";
import "./ProjectShowCase.css";

const ProjectShowCase = ({ id }: ScreenComponentType) => {
  return (
    <div className="project-showcase-container" id={id}>
      <ScreenHeading
        title="Project "
        highlightedTitle="Showcase"
        subHeading="Sample projects created to demonstrate my expertise in frontend and backend technologies."
      />
      <ProjectCarousal />
    </div>
  );
};

export default ProjectShowCase;
