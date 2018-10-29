import React from "react";
import { browserHistory } from "react-router";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Hidden,
  Button
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import {
  registerComponent,
  Loading,
  withMulti,
  withCurrentUser
} from "meteor/vulcan:core";

import Products from "../../../modules/product/collection";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  footer: {
    backgroundColor: theme.palette.background.paper
    //padding: theme.spacing.unit * 6
  }
});

const ProductSelectList = ({
  results = [],
  currentUser,
  loading,
  loadMore,
  count,
  totalCount,
  refetch,
  classes
}) => (
  <div>
    {loading ? (
      <Loading />
    ) : (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container spacing={40} className={classes.cardGrid}>
          {results.map(product => (
            <Grid item key={product.sku} xs={12} md={6}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.price}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                      onClick={() => {
                        browserHistory.push(
                          "/productdetailsscreen/" + product._id
                        );
                      }}
                    >
                      See Details
                    </Button>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.photo}
                    title={product.name}
                  />
                </Hidden>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* load more */}

        {/* Footer */}
        <footer className={classes.footer}>
          {totalCount > results.length ? (
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="left">
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={e => {
                      e.preventDefault();
                      loadMore();
                    }}
                  >
                    Load more... ({count}/{totalCount})
                  </Button>
                </Grid>
              </Grid>
            </div>
          ) : (
            <span />
          )}
        </footer>
        {/* End footer */}
      </div>
    )}
  </div>
);

const options = {
  collection: Products,
  fragmentName: "ProductItemFragment",
  limit: 12
};

registerComponent({
  name: "ProductSelectList",
  component: ProductSelectList,
  hocs: [withCurrentUser, [withMulti, options], [withStyles, styles]]
});
