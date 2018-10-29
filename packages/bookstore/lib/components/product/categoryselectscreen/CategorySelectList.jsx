import React from "react";
import { browserHistory } from "react-router";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
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

import Categories from "../../../modules/category/collection";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
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
  cardGrid: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper
    //padding: theme.spacing.unit * 6
  }
});

const CategorySelectList = ({
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
        {/* {results.map(category => {
            return (
              <Components.CategoryItem
                key={category._id}
                category={category}
                currentUser={currentUser}
                refetch={refetch}
              />
            );
          })} */}
        <Grid container spacing={40}>
          {results.map(card => (
            <Grid item key={card} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.photo} // eslint-disable-line max-len
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      browserHistory.push("/productselectscreen");
                    }}
                  >
                    View
                  </Button>
                </CardActions>
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
  collection: Categories,
  fragmentName: "CategoryItemFragment",
  limit: 12
};

registerComponent({
  name: "CategorySelectList",
  component: CategorySelectList,
  hocs: [withCurrentUser, [withMulti, options], [withStyles, styles]]
});
