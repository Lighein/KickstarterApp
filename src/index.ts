import db from '../server/db/models';
import * as config from '../server/config';
import app from "../server"

db.sequelize.sync().then(async ()=> {
  app.listen(config.SERVER_PORT, () => {
    console.log(`App listening on port ${config.SERVER_PORT}!`);
  })
})
//{force: true}