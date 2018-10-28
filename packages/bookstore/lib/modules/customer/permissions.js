import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'customer.create',
  'customer.update.own',
  'customer.delete.own',
]);

Users.groups.admins.can([
  'customer.update.all',
  'customer.delete.all',
]);
