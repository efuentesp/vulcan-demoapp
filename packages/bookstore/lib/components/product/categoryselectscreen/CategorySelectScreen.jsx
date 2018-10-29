import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  registerComponent,
  Components,
  withCurrentUser
} from "meteor/vulcan:core";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

class CategorySelectScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Product Categories
        </Typography>
        <Components.CategorySelectList />
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Powered by Softtek
          </Typography>
        </footer>
        {/* End footer */}
      </div>
    );
  }
}
registerComponent({
  name: "CategorySelectScreen",
  component: CategorySelectScreen,
  hocs: [withCurrentUser, [withStyles, styles]]
});
