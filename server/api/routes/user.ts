// import express from 'express';
// import { NextFunction, Request, Response } from 'express';
// const router = express.Router();

// import requireUser from '../../middleware';
// import db from '../../db/models';


// // GET /api/user/
// router.get('/', requireUser, async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     console.log(req);
//     res.send(
//       await db.User.findByPk(req.body.user.id)
//     );
//   } catch (e) {
//     next(e);
//   }
// });

// router.get('/', (req, res) => {
//   db.User.findAll({
//       include: {
//           model: db.Project
//       }
//   }).then((result: object) => res.json(result)).catch((err: object) => console.error(err));
// })

// // PUT /api/user
// router.put('/', requireUser, async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.user.id);
//     res.send(await user.update(req.body));
//   } catch (e) {
//     next(e);
//   }
// });

// router.use((req, res, next) => {
//   const err: any = new Error('API route not found!');
//   err.status = 404;
//   next(err);
// });
