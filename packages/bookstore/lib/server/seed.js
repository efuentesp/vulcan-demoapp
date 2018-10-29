/*
*  Seed the database with some dummy content. 
*/

import { Promise } from "meteor/promise";
import Users from "meteor/vulcan:users";
import { createMutator } from "meteor/vulcan:core";
import Categories from "../modules/category/collection";
import Products from "../modules/product/collection";

const seedDataCategory = [
  {
    name: "Drama",
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    name: "Sci-Fi",
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    name: "Thriller",
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    name: "Adventure",
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    name: "Romance",
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    name: "Self help",
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  }
];

const seedDataProduct = [
  {
    sku: "vUMrOVXQTHbXxlQ",
    name: "Handcrafted Cotton Mouse",
    description: `Et beatae placeat aut similique distinctio non. Nesciunt placeat esse fugit sapiente aliquid velit. Perspiciatis accusantium harum aperiam voluptatem et sed cum. Accusamus iure a minus.
 
Pariatur sed ratione numquam non inventore cupiditate et iusto voluptate. Aliquam deserunt minus. Vel ut ad repellendus unde maiores. Eum qui impedit.
 
Qui corrupti incidunt assumenda ut animi numquam. Voluptatem sequi harum sequi. Amet quam omnis et. Nam quia quia aut dolores suscipit qui officiis.`,
    price: 774.0,
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    sku: "2Ny_sNqSJdlPhAE",
    name: "Awesome Granite Pants",
    description: `Corrupti aut dolores at. Possimus aperiam autem laboriosam illum tempore aut. Praesentium molestiae laudantium. Ut laboriosam non ut magni dolorem officiis beatae. Voluptatem aut harum eligendi autem mollitia accusamus eum rem modi. Et culpa illum ea recusandae consequatur reprehenderit soluta.
 
Quae nemo voluptates excepturi odio beatae impedit laborum. Qui odio inventore omnis doloribus autem qui dolore officia. Optio velit vel quasi quisquam quae. Earum et assumenda tempore. Quia aspernatur necessitatibus ea sunt vitae hic modi vel. Esse voluptatem eius possimus sequi vel.
 
Sint rem quia at. Quidem atque sunt ex corporis quam. Nisi rerum autem quo molestiae doloribus. Commodi dolorem voluptatem impedit qui qui architecto pariatur ducimus asperiores. Quaerat nulla et voluptates consequatur.`,
    price: 963.0,
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  },
  {
    sku: "21dHQur1im2qyzs",
    name: "Intelligent Concrete Soap",
    description: `Enim et rerum et dolor deleniti omnis. Maxime est quia quos vel rerum ducimus voluptatem est reiciendis. In laboriosam qui repudiandae voluptatem. Ut suscipit dignissimos reprehenderit culpa. Tempore eos deleniti. Qui nobis illo.
 
Et dolorum eum molestias perferendis placeat ut. Deserunt magni quia suscipit quia. Saepe velit et ut repellendus soluta amet aut. Temporibus voluptatem modi alias qui dicta beatae dolore ut ab. Quidem dolores perspiciatis recusandae eius earum et tempora.
 
Aut soluta fugit nemo sunt. Voluptas ducimus et numquam ut et eum voluptas suscipit. Perspiciatis dicta eveniet similique. Nobis esse iusto consequatur nihil totam nam molestiae.`,
    price: 165.0,
    photo: "https://fakeimg.pl/250x250/?text=Picture&font=lobster"
  }
];

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true
  };
  return createMutator({
    collection: Users,
    document: user,
    validate: false
  });
};

const createDummyUsers = async () => {
  // eslint-disable-next-line no-console
  console.log("// inserting dummy users…");
  return Promise.all([
    createUser("efuentes", "efuentes@softtek.com"),
    createUser("javier.perezb", "javier.perezb@softtek.com"),
    createUser("normaysel.carbajal", "normaysel.carbajal@softtek.com"),
    createUser("raul.moctezuma", "raul.moctezuma@softtek.com")
  ]);
};

// eslint-disable-next-line no-undef
Vulcan.removeGettingStartedContent = () => {
  Users.remove({ "profile.isDummy": true });
  // eslint-disable-next-line no-console
  console.log("// Getting started content removed");
};

Meteor.startup(() => {
  if (Users.find().fetch().length === 0) {
    Promise.await(createDummyUsers());
  }
  const currentUser = Users.findOne(); // just get the first user available

  if (Categories.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy categories");
    Promise.awaitAll(
      seedDataCategory.map(document =>
        createMutator({
          action: "category.create",
          collection: Categories,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }

  if (Products.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy products");
    Promise.awaitAll(
      seedDataProduct.map(document =>
        createMutator({
          action: "product.create",
          collection: Products,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }
});
