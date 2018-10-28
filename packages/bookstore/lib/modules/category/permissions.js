import Users from 'meteor/vulcan:users';

Users.groups.members.can([
  'category.create',
  'category.update.own',
  'category.delete.own',
]);

Users.groups.admins.can([
  'category.update.all',
  'category.delete.all',
]);
