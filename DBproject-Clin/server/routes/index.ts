import {Router} from "express";
import { getUses } from "../controllers/index.controllers";

const router = Router()

router.get("/tasks", (req,res) => {
  res.send("Getting Tasks");
})

router.post("/tasks", (req,res) => {
  res.send("Creating Tasks");
})

router.get("/tasks/:id", (req,res) => {
  res.send("Getting especify Tasks");
})

router.delete("/tasks/:id", (req,res) => {
  res.send("Deleting Tasks");
})

router.put("/tasks", (req,res) => {
  res.send("Updating Tasks");
})

router.get('/users',getUses)


export default router;


