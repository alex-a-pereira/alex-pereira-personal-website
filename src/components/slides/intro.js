// Modules
import React from "react";
import { Image, Icon, List, Button } from "semantic-ui-react";
import ContentRow from "./content-row";
// Misc
import { PERSONAL_INFO, INTRO } from '../../assets/personal-info';

const IntroParagraph = () => {
  return (
    <div className="content-description dark-border-thin">
      <p>{INTRO.p1}</p>
      <p>{INTRO.p2}</p>
    </div>
  );
};

const IntroContent = props => {
  return (
    <div>
      <Image
        className="intro-image"
        fluid
        src={PERSONAL_INFO.bannerImageURL}
        centered
      />

      <ContentRow leftContent={<IntroParagraph />}>
        <List divided relaxed>
          <List.Item>
            <h4>Cut to the chase: why you're probably here.</h4>
          </List.Item>

          <List.Item>
            <List.Content floated="left">
              <List.Header>Download my resume</List.Header>
              <List.Description>
                Available in Word Doc and PDF formats
              </List.Description>
            </List.Content>
            <List.Content floated="right">
              <Button icon>
                <Icon name="file word outline" color="blue" size="large" />
              </Button>
              <Button icon>
                <Icon name="file pdf outline" color="red" size="large" />
              </Button>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated="left">
              <List.Header>Find me online</List.Header>
              <List.Description>I'm on GitHub and LinkedIn</List.Description>
            </List.Content>
            <List.Content floated="right">
              <Button
                icon
                onClick={() => window.open(PERSONAL_INFO.githubURL, "_blank")}
              >
                <Icon name="github" size="large" />
              </Button>
              <Button
                icon
                onClick={() => window.open(PERSONAL_INFO.linkedinURL, "_blank")}
              >
                <Icon name="linkedin" color="blue" size="large" />
              </Button>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated="left">
              <List.Header>Get in touch with me</List.Header>
              <List.Description>View my contact information</List.Description>
            </List.Content>
            <List.Content floated="right">
              <Button icon onClick={props.scrollFunction}>
                <Icon size="large" name="phone" />
                <Icon size="large" name="mail" />
                <Icon size="large" name="comment alternate" />
              </Button>
            </List.Content>
          </List.Item>
        </List>
      </ContentRow>
    </div>
  );
};

export default IntroContent;
