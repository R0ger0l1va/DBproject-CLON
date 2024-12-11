import { text } from "stream/consumers";
import { db } from "../database/db";

export interface User {
  email: string;
  contrasenna: string;
  nombre_usuario: string;
  rol:string;
}

const create = async ({email, contrasenna,nombre_usuario,rol}:User) => {
  const query = {
  text:` insert into public."tbUsuarios" (email,contrasenna,nombre_usuario,rol)
  values($1,$2,$3,$4)
  returning email,nombre_usuario,id_usuario,rol`,

  values:[email,contrasenna,nombre_usuario,rol],
}
const {rows} = await db.query(query)
return rows[0]
}

const findOneByEmail = async (email:string) => {
  const query = {
    text:`select * from public."tbUsuarios"
    where email = $1`,
    values: [email]
  }
  const {rows} = await db.query(query)
  return rows[0]
}


export const userModel = {
  create,
  findOneByEmail
}
