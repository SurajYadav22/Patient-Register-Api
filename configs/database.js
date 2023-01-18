import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connection = mongoose.connect(
  `mongodb+srv://${process.env.username}:${process.env.password}@cluster0.5tdpvyd.mongodb.net/?retryWrites=true&w=majority`
);

export { connection };
