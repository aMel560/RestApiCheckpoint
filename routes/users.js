import express from "express";
//on doit importer les controllers
import {
  getuser,
  Createuser,
  updateuser,
  deleteuser,
} from "../controllers/users.js";
//on cree un router
const router = express.Router();
router.get("/", getuser);
router.post("/", Createuser);
router.delete("/", deleteuser);
router.put("/", updateuser);

export default router;
