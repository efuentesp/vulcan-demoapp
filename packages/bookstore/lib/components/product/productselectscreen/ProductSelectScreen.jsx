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

class ProductSelectScreen extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Products
        </Typography>
        <Components.ProductSelectList />
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
  name: "ProductSelectScreen",
  component: ProductSelectScreen,
  hocs: [withCurrentUser, [withStyles, styles]]
});
