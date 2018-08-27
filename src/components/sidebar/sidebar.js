// Modules
import React from "react";
import { Image, Menu, Button, Icon } from "semantic-ui-react";

import { PERSONAL_INFO } from "../../assets/personal-info";

class SidebarMenu extends React.Component {
  handleMenuItemClick = (event, { scrollingId }) => {
    this.props.onMenuItemClick(scrollingId);
  };

  render() {
    return (
      <span className="sidebar-wrapper">
        <Menu vertical>
          <Menu.Item>
            <Image centered src={PERSONAL_INFO.profileImageURL} rounded />
          </Menu.Item>

          <Menu.Item scrollingId="intro" onClick={this.handleMenuItemClick}>
            <h3>
              {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
            </h3>
            {PERSONAL_INFO.jobTitle}
          </Menu.Item>

          <Menu.Item scrollingId="edu" onClick={this.handleMenuItemClick}>
            Education
          </Menu.Item>

          <Menu.Item scrollingId="exp" onClick={this.handleMenuItemClick}>
            Experience
          </Menu.Item>

          <Menu.Item scrollingId="about" onClick={this.handleMenuItemClick}>
            My Life
          </Menu.Item>

          <Menu.Item scrollingId="project" onClick={this.handleMenuItemClick}>
            <Icon name="grid layout" />
            My projects
          </Menu.Item>

          <Menu.Item scrollingId="contact" onClick={this.handleMenuItemClick}>
            Let's get in touch
          </Menu.Item>
          <Menu.Item
            onClick={() => window.open(PERSONAL_INFO.githubURL, "_blank")}
          >
            <b>
              <Icon name="github" size="big" verticalAlign="middle" />
              See my code
            </b>
          </Menu.Item>
          <Menu.Item
            onClick={() => window.open(PERSONAL_INFO.linkedinURL, "_blank")}
          >
            <b>
              <Icon
                name="linkedin"
                color="blue"
                size="big"
                verticalAlign="middle"
              />
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

  handleMenuItemClick(scrollingId) {
    if (this.props.sidebarOpen) {
      this.props.toggleSidebar();
    }
    this.props.onMenuItemClick(scrollingId);
  }

  render() {
    let sidebar;

    if (this.props.sidebarDocked) {
      sidebar = <SidebarMenu onMenuItemClick={this.handleMenuItemClick} />;
    } else {
      sidebar = [
        <SidebarButton handleButtonPress={this.props.toggleSidebar} />,

        <span style={{ display: this.props.sidebarOpen ? "" : "none" }}>
          <div className="sidebar-overlay" onClick={this.props.toggleSidebar} />
          <SidebarMenu onMenuItemClick={this.handleMenuItemClick} />
        </span>
      ];
    }
    return sidebar;
  }
}

export default Sidebar;
