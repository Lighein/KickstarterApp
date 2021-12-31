import express from 'express';
import app from './server'
const port = process.env.PORT || 8080;
import db from './server/db/models';
import dotenv from "dotenv";

db.sequelize.sync().then(async ()=> {
  app.listen(port, ()=>{
    console.log(`App is listnening on port ${port}`)
  })
})

//{force: true}


