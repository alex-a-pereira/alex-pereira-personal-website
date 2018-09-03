// Modules
import React from "react";
import { Image, Menu, Button, Icon } from "semantic-ui-react";

// Misc
import { PERSONAL_INFO } from "../../assets/personal-info";

// Scrolling ID names
export const INTRO_REF = "intro";
export const EDU_REF = "edu";
export const EXP_REF = "exp";
export const ABOUT_REF = "about";
export const PROJECT_REF = "project";
export const CONTACT_REF = "contact";

class SidebarMenu extends React.Component {
  handleMenuItemClick = (event, { name }) => {
    this.props.onMenuItemClick(name);
  };

  render() {
    return (
      <span className="sidebar-wrapper">
        <Menu vertical>
          <Menu.Item>
            <Image centered src={PERSONAL_INFO.profileImageURL} />
          </Menu.Item>

          <Menu.Item name="intro" onClick={this.handleMenuItemClick}>
            <h3 className="content-heading">
              {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
            </h3>
            {PERSONAL_INFO.jobTitle}
          </Menu.Item>

          <Menu.Item name="edu" onClick={this.handleMenuItemClick}>
            Education
          </Menu.Item>

          <Menu.Item name="exp" onClick={this.handleMenuItemClick}>
            Experience
          </Menu.Item>

          <Menu.Item name="about" onClick={this.handleMenuItemClick}>
            My Life
          </Menu.Item>

          <Menu.Item name="project" onClick={this.handleMenuItemClick}>
            <Icon name="grid layout" />
            My projects
          </Menu.Item>

          <Menu.Item name="contact" onClick={this.handleMenuItemClick}>
            Let's get in touch
          </Menu.Item>
          <Menu.Item
            onClick={() => window.open(PERSONAL_INFO.githubURL, "_blank")}
          >
            <b>
              <Icon name="github" size="big" />
              See my code
            </b>
          </Menu.Item>
          <Menu.Item
            onClick={() => window.open(PERSONAL_INFO.linkedinURL, "_blank")}
          >
            <b>
              <Icon name="linkedin" color="blue" size="big" />
              I'm on LinkedIn
            </b>
          </Menu.Item>
        </Menu>
      </span>
    );
  }
}

const SidebarButton = props => {
  return (
    <Button
      color="grey"
      onClick={props.handleButtonPress}
      icon
      className="sidebar-button"
    >
      <Button.Content>
        <Icon name="bars" />
      </Button.Content>
    </Button>
  );
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(name) {
    if (this.props.sidebarOpen) {
      this.props.toggleSidebar();
    }
    this.props.onMenuItemClick(name);
  }

  render() {
    if (this.props.sidebarDocked) {
      return <SidebarMenu onMenuItemClick={this.handleMenuItemClick} />;
    } else {
      return [
        <SidebarButton handleButtonPress={this.props.toggleSidebar} />,

        <span style={{ display: this.props.sidebarOpen ? "" : "none" }}>
          <div className="sidebar-overlay" onClick={this.props.toggleSidebar} />
          <SidebarMenu onMenuItemClick={this.handleMenuItemClick} />
        </span>
      ];
    }
  }
}

export default Sidebar;
