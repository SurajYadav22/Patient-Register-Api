import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const connection = mongoose.connect("mongodb://127.0.0.1:27017/patient_db");

export { connection };