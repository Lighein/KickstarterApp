import db from './server/db/models';
import * as config from './server/config';
import app from "./server"
import seed from "./server/db/seeders"

db.sequelize.sync().then(async ()=> {
  seed();
  app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}!`);
  })
})

//{force: true}