import express from 'express';
import { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.use("/category", require('./routes/category'));
router.use("/products", require('./routes/products'));
router.use("/user", require('./routes/user'));

router.use((req: Request, res: Response, next: NextFunction) => {
  const err: any = new Error('API route not found!')
  err.status = 404
  next(err)
});

module.exports = router;