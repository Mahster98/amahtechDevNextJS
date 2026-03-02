
import { Container } from "react-bootstrap";
import ExperienceInfo from "../../../public/data/content/ExperienceContent";
import ExperienceItem from "./ExperienceItem";

const Experience = () =>
  ExperienceInfo.map((experience) => {
    return (
        <Container fluid>
          <ExperienceItem
            experienceTitle={experience.experienceTitle}
            experienceDescription={experience.experienceDescription}
            date={experience.date}
            image={experience.image}
          />
        </Container>
    );
  });

export default Experience;