import db from '../models'
import {users} from './users';
import {products} from './products';
import {carts} from './sessioncart';
import {sessions} from './session';
import {category} from './category'

const seed = () => {
  users.map(user => {
    db.User.create(user);
  });
  category.map(category => {
    db.Category.create(category);
  });
  sessions.map(session => {
    db.Sessions.create(session);
  }); 
  products.map(product => {
    db.Products.create(product);
  });
  carts.map(cart => {
    db.Cart.create(cart);
  });
}
seed();