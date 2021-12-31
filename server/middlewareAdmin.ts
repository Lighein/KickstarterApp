import db from './db/models';
import { NextFunction, Request, Response } from 'express';

const throwErr = (statusCode, message) => {
  const err: any = new Error(message);
  err.status = statusCode;
  console.log(err.status);
  return err;
}

const requireAdmin = async (req, res, next ) => {
  try {
    const token = req.headers.authorization;
    const user = await db.User.findByToken(token);

    if (!user.isAdmin) {
      const message = "You do not have the correct permissions to access/modify this."
      next(throwErr(403, message));
    }
    req.user = user;
    next();
  } catch (error) {
    next(error)
  }
}

export default requireAdmin;