import express from "express";
import { register } from "../controllers/patient.controller.js";

const route = express.Router();

route.post("/register", register);

export { route };
