import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment CustomersFragment on Customer {
     _id
     createdAt
   }
`);
