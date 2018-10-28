import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'product.create',
  'product.update.own',
  'product.delete.own',
]);

Users.groups.admins.can([
  'product.update.all',
  'product.delete.all',
]);
