// import db from './db/models';

// const throwErr = (statusCode, message) => {
//   const err: any = new Error(message);
//   err.status = statusCode;
//   console.log(err.status);
//   return err;
// }

// const requireUser = async (req, res, next) => {
//     try {
//       const token = req.headers.authorization;
//       if (!token) {
//         const message = "Please sign in to view this page."
//         next(throwErr(403, message));
//       }
//       const user = await db.User.findByToken(token);
//       req.user = user;
//       next();
//     } catch(error) {
//       next(error);
//     }
//   };

// export default requireUser