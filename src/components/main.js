// Modules
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

// Components
import MainSlide from "./main-slide";
//    Slides
import IntroContent from "./slides/intro";
import {
  EducationContent,
  ExperienceContent
} from "./slides/education-experience";
import AboutMeContent from "./slides/about";
import ProjectContent from "./slides/projects";
import ContactContent from "./slides/contact";
//    SideBar
import Sidebar from "./sidebar/sidebar";

// width of sidebar wrapper is 222 - 210 (menu) + 12 (paddingRight)
const SIDEBAR_WIDTH = 222;

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    this.introRef = React.createRef();
    this.eduRef = React.createRef();
    this.expRef = React.createRef();
    this.aboutRef = React.createRef();
    this.projectRef = React.createRef();
    this.contactRef = React.createRef();

    this.handleScrollToContact = this.handleScrollToContact.bind(this);
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  handleScrollToElement(scrollingId) {
    let elementToScrollTo;

    switch (scrollingId) {
      case "intro":
        elementToScrollTo = this.introRef;
        break;
      case "edu":
        elementToScrollTo = this.eduRef;
        break;
      case "exp":
        elementToScrollTo = this.expRef;
        break;
      case "about":
        elementToScrollTo = this.aboutRef;
        break;
      case "project":
        elementToScrollTo = this.projectRef;
        break;
      case "contact":
        elementToScrollTo = this.contactRef;
        break;
      default:
        console.log("no scrollingId was passed");
    }

    elementToScrollTo.current.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth"
    });
  }

  handleScrollToContact() {
    this.handleScrollToElement("contact");
  }

  render() {
    const mainGridWidth = this.props.width - SIDEBAR_WIDTH;
    return (
      <div>
        <div
          className="main-grid"
          style={{ width: this.props.isDesktop ? mainGridWidth : "100%" }}
        >
          <Grid className="no-marg">
            <MainSlide ref={this.introRef} heading="Hey, thanks for visiting.">
              <IntroContent scrollFunction={this.handleScrollToContact} />
            </MainSlide>

            <MainSlide
              ref={this.eduRef}
              heading="My education"
              iconName="edit outline"
            >
              <EducationContent isDesktop={this.props.isDesktop} />
            </MainSlide>

            <MainSlide
              ref={this.expRef}
              heading="My experience"
              iconName="keyboard outline"
            >
              <ExperienceContent isDesktop={this.props.isDesktop} />
            </MainSlide>

            <MainSlide
              ref={this.aboutRef}
              heading="About me"
              iconName="user circle outline"
            >
              <AboutMeContent />
            </MainSlide>

            <MainSlide
              ref={this.projectRef}
              heading="My projects"
              iconName="file code outline"
            >
              <ProjectContent />
            </MainSlide>

            <MainSlide
              className="main-cell-last"
              ref={this.contactRef}
              heading="Contact me"
              iconName="phone"
            >
              <ContactContent />
            </MainSlide>
          </Grid>
        </div>

        <Sidebar
          sidebarOpen={this.props.openSidebar}
          sidebarDocked={this.props.isDesktop}
          toggleSidebar={this.props.handleToggleSidebar}
          onMenuItemClick={this.handleScrollToElement}
        />
      </div>
    );
  }
}
