const {db} =require( '../models');
import {users} from './users';
import {products} from './products';
import {carts} from './sessioncart';
import {sessions} from './session';
import {category} from './category'

const seed = () => {
  users.map(async user => {
    await db.User.create(user);
  });
  category.map(async category => {
    await db.Category.create(category);
  });
  sessions.map(async session => {
    await db.Sessions.create(session);
  }); 
  products.map(async product => {
    await db.Products.create(product);
  });
  carts.map(async cart => {
    await db.Cart.create(cart);
  });
}
seed();