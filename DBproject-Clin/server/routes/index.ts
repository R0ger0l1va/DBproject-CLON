import {Router} from "express";
import { getUses } from "../controllers/index.controllers";
import { profile, userLogin, userRegister } from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/jwt.middleware";

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
router.post("/create",userRegister)
router.post("/login",userLogin)
router.get("/profile",verifyToken,profile)

export default router;


