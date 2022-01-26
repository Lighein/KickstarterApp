import express from 'express';
import { NextFunction, Request, Response } from 'express';
//import requireUser from '../../middleware';
import db from '../../db/models';
const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await db.Products.findAll({
      include: db.User
    }));
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await db.Products.findOne({
      where: {
        id: req.params.id,
      },
      include: [
          {model: db.User}, 
          {model: db.Category}
        ]
    }));
  } catch (e) {
    next(e);
  }
});

module.exports =  router;
