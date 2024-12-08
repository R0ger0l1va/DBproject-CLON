import { Request,Response } from "express";
import { db } from "../database/db";

 export const getUses = async (req: Request, res: Response) => {

try {
  const result = await db.query(
      "Select * from tbusuarios_read_all()"
  );
  res.json(result.rows);
} catch (error:any) {
  console.error("Error al obtener los usuarios:", error);
  res.status(500).send(error.message);
}

  
}
