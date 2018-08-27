// Modules
import React, { Component } from "react";
// Components
import MainGrid from "./components/main";

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      isDesktop: mql.matches,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.updateWindowSize = this.updateWindowSize.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    window.addEventListener("resize", this.updateWindowSize);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
    window.removeEventListener("resize", this.updateWindowSize);
  }

  mediaQueryChanged() {
    this.setState({ isDesktop: mql.matches });
  }

  updateWindowSize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    if (this.state.isDesktop && this.state.sidebarOpen) {
      this.setState({ sidebarOpen: false });
    }
    return (
      <div>
        <MainGrid
          width={this.state.windowWidth}
          isDesktop={this.state.isDesktop}
          openSidebar={this.state.sidebarOpen}
          handleToggleSidebar={this.toggleSidebar}
        />
      </div>
    );
  }
}

export default App;
