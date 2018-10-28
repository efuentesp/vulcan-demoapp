import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment ProductsFragment on Product {
     _id
     createdAt
   }
`);
