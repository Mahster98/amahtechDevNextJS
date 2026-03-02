import { Container } from "react-bootstrap";
import ProjectInfo from "../../../public/data/content/ProjectContent";
import Project from "./Project";

const Projects = () =>
  ProjectInfo.map((project) => {
    return (
        <Container fluid>
          <Project
            projectTitle={project.projectTitle}
            date={project.date}
            tech={project.tech}
            projectDescription={project.projectDescription}
            image={project.image}
            link={project.link}
          />
        </Container>
    );
  });

export default Projects;