import express from 'express';
import db from '../../db/models';
import { NextFunction, Request, Response } from 'express';
const router = express.Router();


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await db.Category.findAll());
  } catch (e) {
    next(e);
  }
});

module.exports = router;