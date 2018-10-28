const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ newDocument, currentUser}) => {
      return new Date();
    }
  },
  // userId: {
  //   type: String,
  //   optional: true,
  //   canRead: ['guests'],
  //   resolveAs: {
  //     fieldName: 'user',
  //     type: 'User',
  //     resolver: (movie, args, context) => {
  //       return context.Users.findOne({ _id: movie.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) });
  //     },
  //     addOriginalField: true
  //   }
  // },
  
  name : {
    label: 'Name' ,
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    searchable: true, // make field searchable
  },
    
  photo : {
    label: 'Photo' ,
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
  
};

export default schema;
