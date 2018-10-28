import React, { Component } from 'react';
import { registerComponent } from 'meteor/vulcan:core';

class CategorySelectScreen extends Component {
  render () {
    return (
      <div>
        Find me at packages/bookstore/lib/components/Product.jsx
      </div>
    );
  }
}
registerComponent({name:'CategorySelectScreen', component:CategorySelectScreen});

export default CategorySelectScreen;
