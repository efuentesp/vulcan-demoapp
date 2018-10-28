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
 
  // custom properties

  categoryId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'category',
      type: 'Category',
      resolver: (product, args, context) => {
        return context.Products.findOne({ _id: product.categoryId });
      },
      addOriginalField: true
    }
  },

  sku: {
    label: 'SKU',
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    searchable: true, // make field searchable
  },

  name: {
    label: 'Name',
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    searchable: true, // make field searchable
  },

  description: {
    label: 'Description',
    type: String,
    optional: true,
    input: 'textarea',
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },

  price: {
    label: 'Price',
    type: Number,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },

  photo: {
    label: 'Photo',
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },
};

export default schema;
