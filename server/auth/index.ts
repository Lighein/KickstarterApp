import express from 'express';
import db from '../db/models';
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ token: await db.User.authenticate(req.body)})
  } catch (err){
    next(err);
  }
});

router.post('/signup', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await db.User.create(req.body);
    res.send({token: await user.generateToken()})
  } catch (err: any){
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists')
      } else {
        next(err);
      }
  }
});

router.get('/me', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await db.User.findByToken(req.headers.authorization))
  } catch (err) {
    next(err)
  }
});

module.exports = router;