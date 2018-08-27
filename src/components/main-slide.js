// Modules
import React from "react";
import { Grid, Container, Icon, Divider } from "semantic-ui-react";

const MainSlide = React.forwardRef((props, ref) => (
  <Grid.Row className={`main-cell ${props.className}`}>
    <div ref={ref} style={{position: 'absolute', top: -12}}>
    </div>
      <div className="main-cell-heading">
        <h2>
          <Icon name={props.iconName} />
          {props.heading}
        </h2>
        <Divider />
      </div>
      <Container>{props.children}</Container>
  </Grid.Row>
));

export default MainSlide;
