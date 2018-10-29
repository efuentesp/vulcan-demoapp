import { registerFragment } from "meteor/vulcan:core";

registerFragment(`
   fragment ProductItemFragment on Product {
     _id
     createdAt,
     sku,
     name,
     description,
     price,
     photo
   }
`);
