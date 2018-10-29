import { addRoute } from "meteor/vulcan:core";

addRoute({
  name: "home",
  path: "/",
  componentName: "CategorySelectScreen"
});

addRoute({
  name: "categoryselectscreen",
  path: "/categoryselectscreen",
  componentName: "CategorySelectScreen"
});

addRoute({
  name: "productselectscreen",
  path: "/productselectscreen",
  componentName: "ProductSelectScreen"
});

addRoute({
  name: "ProductDetails",
  path: "/productdetailsscreen/:id",
  componentName: "ProductDetails"
});
