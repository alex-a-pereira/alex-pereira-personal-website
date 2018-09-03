// Modules
import React from "react";
import { Grid, Container, Icon, Divider } from "semantic-ui-react";

const MainSlide = React.forwardRef((props, ref) => (
  <Grid.Row className={`main-slide ${props.className}`}>
    <div ref={ref} style={{ position: "absolute", top: -12 }} />
    <div className="main-slide-heading">
      <h2>
        <Icon name={props.iconName} />
        {props.heading}
      </h2>
      <Divider />
    </div>
    <Container>
      {props.children}
      <Divider />
    </Container>
  </Grid.Row>
));

export default MainSlide;
