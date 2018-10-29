import React from "react";
import { browserHistory } from "react-router";
import { Paper, TextField, Typography, Button, Icon } from "@material-ui/core";
import { Cart, KeyboardReturn } from "mdi-material-ui";
import { registerComponent, Components, withSingle } from "meteor/vulcan:core";
import withStyles from "@material-ui/core/styles/withStyles";
import Products from "../../../modules/product/collection";
import { Link } from "react-router";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    //width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

function ProductDetails(props) {
  return (
    <div style={{ margin: "20px auto" }}>
      <Components.ProductDetailsInner documentId={props.params.id} />
    </div>
  );
}

registerComponent({ name: "ProductDetails", component: ProductDetails });

function ProductDetailsInner(props) {
  const { classes } = props;
  if (props.loading) {
    return <Components.Loading />;
  } else {
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <form className={classes.container} noValidate autoComplete="off">
            <img src={props.document.photo} />
            <TextField
              id="sku"
              label="SKU"
              defaultValue={props.document.sku}
              className={classes.textField}
              fullWidth
              margin="normal"
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              id="name"
              label="Name"
              defaultValue={props.document.name}
              className={classes.textField}
              fullWidth
              margin="normal"
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              id="price"
              label="Price"
              defaultValue={props.document.price}
              className={classes.textField}
              fullWidth
              margin="normal"
              InputProps={{
                readOnly: true
              }}
            />
            <TextField
              id="description"
              label="Description"
              defaultValue={props.document.description}
              fullWidth
              multiline
              className={classes.textField}
              margin="normal"
              InputProps={{
                readOnly: true
              }}
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              browserHistory.push("/");
            }}
          >
            <Cart />
            Add to Cart
          </Button>
          <Button
            color="primary"
            className={classes.button}
            onClick={() => {
              browserHistory.push("/");
            }}
          >
            <KeyboardReturn />
            Back
          </Button>
        </Paper>

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

const singleOptions = {
  collection: Products,
  fragmentName: "ProductItemFragment"
};

registerComponent({
  name: "ProductDetailsInner",
  component: ProductDetailsInner,
  hocs: [[withSingle, singleOptions], [withStyles, styles]]
});
