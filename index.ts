import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models'
//import {users, cart, session } from './server/db/seeders';

db.sequelize.sync().then(()=> {
  app.listen(port, ()=>{
    console.log(`App is listnening on port ${port}`)
  })
})


// const createUsers = () => {
//     users.map(user => {
//         db.User.create(user);
//     })
// }
// createUsers();


