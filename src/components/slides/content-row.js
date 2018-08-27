// Modules
import React from "react";
import { Grid } from "semantic-ui-react";

const ContentRow = props => {
    return (
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={7}>
            {props.leftContent}
          </Grid.Column>
          <Grid.Column width={9}>
            <div className={`${props.borderClassName} content-description`}>
              {props.children}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
};

export default ContentRow;