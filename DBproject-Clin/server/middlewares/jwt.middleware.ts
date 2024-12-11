import { Request ,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken =  (req:Request,res:Response,next:NextFunction) => {
  let token = <string>req.headers.authorization;

  if (!token) {
     res.status(401).json({error: 'Token no provided'})
  }


  token = token.split(" ")[1]

  console.log({token});


  try{
   const {email}  = <{email:string}>jwt.verify(token,<string>process.env.JWT_SECRET )


   req.body.email  = email

    next();}

  catch(error){console.log(error);
    res.status(400).json({error: "Invalid Token"})
  }
}
