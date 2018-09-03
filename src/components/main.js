// Modules
import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

// COMPONENTS
import MainSlide from "./main-slide";
//  Slides
import IntroContent from "./slides/intro";
import {
  EducationContent,
  ExperienceContent
} from "./slides/education-experience";
import AboutMeContent from "./slides/about/about";
import ProjectContent from "./slides/projects";
import ContactContent from "./slides/contact/contact";
// SideBar and Ref Constants
import Sidebar, {
  INTRO_REF,
  EDU_REF,
  EXP_REF,
  ABOUT_REF,
  PROJECT_REF,
  CONTACT_REF
} from "./sidebar/sidebar";

// width of sidebar wrapper is 222 - 210 (menu) + 12 (paddingRight)
const SIDEBAR_WIDTH = 222;

export default class MainGrid extends Component {
  constructor(props) {
    super(props);
    // refs for menu scrolling
    this.introRef = React.createRef();
    this.eduRef = React.createRef();
    this.expRef = React.createRef();
    this.aboutRef = React.createRef();
    this.projectRef = React.createRef();
    this.contactRef = React.createRef();

    this.handleScrollToContact = this.handleScrollToContact.bind(this);
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  handleScrollToElement(name) {
    let elementToScrollTo;

    switch (name) {
      case INTRO_REF:
        elementToScrollTo = this.introRef;
        break;
      case EDU_REF:
        elementToScrollTo = this.eduRef;
        break;
      case EXP_REF:
        elementToScrollTo = this.expRef;
        break;
      case ABOUT_REF:
        elementToScrollTo = this.aboutRef;
        break;
      case PROJECT_REF:
        elementToScrollTo = this.projectRef;
        break;
      case CONTACT_REF:
        elementToScrollTo = this.contactRef;
        break;
      default:
        console.log(
          "An item was clicked, but no Ref was passed to MainGrid's function"
        );
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
              className="main-slide-last"
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
