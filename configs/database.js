import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const username = "suraj";
const password = "suraj_123";

const connection = mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.5tdpvyd.mongodb.net/?retryWrites=true&w=majority`
);

export { connection };
