import { Request,Response } from "express";
import { userModel,User } from "../models/user.model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


 export const userRegister = async (req: Request, res:Response) => {
  try{
    const   {email,contrasenna ,nombre_usuario,rol} = req.body as {
      email : string,
      contrasenna : string,
      nombre_usuario : string,
      rol : string
    };

    console.log('HOLAAAA');


    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(contrasenna,salt)
    console.log(req.body);

    const newUser:User = await userModel.create({email,contrasenna: hashedPassword,nombre_usuario,rol})


    const token = jwt.sign({
      email: newUser.email ,
    }, <string>process.env.JWT_SECRET,
  { expiresIn: "1h"})


    res.status(201).json({ok:true,msg:token,user:newUser.email,encriptedPassword:hashedPassword})
  }
  catch(e){console.log(e);
  }
}

export const userLogin = async (req: Request, res:Response) => {
try{
  const {email, contrasenna} = <{email:string,contrasenna:string}>req.body

  if (!email || !contrasenna) {
    res.status(400).json({error: "Missing required fields: email, password"})
  }

  const user:User = await userModel.findOneByEmail(email)
  if (!user) {
    res.status(404).json({error: "User not found"})
  }

  const isMatch = await bcryptjs.compare(contrasenna, user.contrasenna)
  if (!isMatch) {
    res.status(401).json({error: "Invalid Credentials"})

  }

  const token = jwt.sign({
    email: user.email ,
  }, <string>process.env.JWT_SECRET,
{ expiresIn: "1h"})

 res.status(201).json({ok: true, msg:token})

}
catch(e){console.log(e)}



}

export const profile  = async (req: Request, res:Response) => {
  try{
     const user = await userModel.findOneByEmail(<string>req.body.email)

    res.json({ok:true, msg:user})
  }
  catch(e){console.log(e);
  }
}
