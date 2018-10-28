import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment CategoriesFragment on Category {
     _id
     createdAt
   }
`);
