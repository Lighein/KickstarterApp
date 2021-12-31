import db from './db/models';
import * as config from './config';
import app from "."

db.sequelize.sync().then(async ()=> {
  app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}!`);
  })
})
//{force: true}