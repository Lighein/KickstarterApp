import express from 'express';
import path from 'path';
import { NextFunction, Request, Response } from 'express';
const port = process.env.PORT || 8080;


const app = express();

app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./api"));
app.use("/auth", require("./auth"))


app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'public/index.html')));

app.use(express.static(path.join(__dirname, '..',' public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..','public/index.html'))
});

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

export default app;


