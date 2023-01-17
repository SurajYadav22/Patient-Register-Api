import express from "express";
import {
  addHospitl,
  fetchHospital,
} from "../controllers/hospital.controller.js";
import { register } from "../controllers/patient.controller.js";
import { addPsychaitrist } from "../controllers/psychiatrist.controller.js";

const route = express.Router();

route.post("/add/hospital", addHospitl);
route.post("/register", register);
route.post("/add/psychaitrist", addPsychaitrist);
route.get("/all", fetchHospital);

export { route };
