// Modules
import React from "react";
import { Card, Icon, Image, Label, Button } from "semantic-ui-react";
// Misc
import { PROJECTS } from "../../assets/personal-info";

const FlagLabel = props => {
  switch (props.flag) {
    case "personal":
      return (
        <span style={{ float: "left", display: "block" }}>
          <Label>Personal Project</Label>
        </span>
      );        
    case "inProgress":
      return (
        <span style={{ float: "left", display: "block" }}>
          <Label color='red'>In progress</Label>
        </span>
      );
    default:
      return null;
  }
};

const GithubSection = props => {
  return (
    <Card.Content extra>
      <Button
        fluid
        icon
        labelPosition="right"
        onClick={() => window.open(props.url, "_blank")}
      >
        <Icon fitted name="github" size="large" />
        See the repository
      </Button>
    </Card.Content>
  );
};

const ProjectCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <h3>{props.name}</h3>
        </Card.Header>
        <Image className='project-image' fluid src={props.imageURL} />

        <Card.Description>
          <p>{props.description}</p>
        </Card.Description>
      </Card.Content>

      {props.githubURL && <GithubSection url={props.githubURL} />}

      <Card.Content extra>
        {props.flag && <FlagLabel flag={props.flag} />}
        <span style={{ float: "right", display: "block" }}>
          <Label color={props.labelColor}>{props.labelLanguage}</Label>
        </span>
      </Card.Content>
    </Card>
  );
};

const ProjectContent = () => {
  return (
    <Card.Group centered>
      <ProjectCard {...PROJECTS.project1props} />
      <ProjectCard {...PROJECTS.project2props} />
      <ProjectCard {...PROJECTS.project3props} />
    </Card.Group>
  );
};

export default ProjectContent;
