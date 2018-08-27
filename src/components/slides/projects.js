// Modules
import React from "react";
import { Card, Icon, Image, Label, Button } from "semantic-ui-react";
// Misc
import { PROJECTS } from "../../assets/personal-info";

const FlagLabel = props => {
  let flagLabel;
  switch (props.flag) {
    case "personal":
      flagLabel = <Label>Personal Project</Label>;
      break;
    case "inProgress":
      flagLabel = <Label color="red">In Progress</Label>;
      break;
  }
  return <span style={{ float: "left", display: "block" }}>{flagLabel}</span>;
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
      <Image src={props.imageURL} />

      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
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
