import { createCollection, getDefaultResolvers, getDefaultMutations } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import './permissions.js';

const Customers = createCollection({
  collectionName: 'Customers',
  typeName: 'Customer',
  schema,
  resolvers: getDefaultResolvers({ typeName: 'Customer'}),
  //mutations: getDefaultMutations({typeName: 'Customer'})
});

Customers.addDefaultView(terms => {
  return {
    options: { sort: { createdAt: -1 } }
  }
})

export default Customers;
