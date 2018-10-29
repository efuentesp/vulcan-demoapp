import React from "react";
import { Components, registerComponent } from "meteor/vulcan:core";

const CategoryItem = ({ category, currentUser, refetch }) => (
  <div
    style={{
      paddingBottom: "15px",
      marginBottom: "15px",
      borderBottom: "1px solid #ccc"
    }}
  >
    <h4>{category.name}</h4>
  </div>
);

registerComponent({ name: "CategoryItem", component: CategoryItem });
