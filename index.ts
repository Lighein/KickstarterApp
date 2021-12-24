import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models'
import {users} from './seeders/users';
import {products} from './seeders/products';
import {cart} from './seeders/cart';
import {session} from './seeders/session';
import {category} from './seeders/category'

db.sequelize.sync({force: true}).then(()=> {
  seed();
  app.listen(port, ()=>{
    console.log(`App is listnening on port ${port}`)
  })
})


const seed = () => {
    users.map(user => {
        db.User.create(user);
    });
    products.map(product => {
      db.Products.create(product);
    });
    cart.map(cart => {
      db.Cart.create(cart);
    });
    session.map(session => {
      db.Sessions.create(session);
    }); 
    category.map(category => {
      db.Category.create(category);
    });
}


