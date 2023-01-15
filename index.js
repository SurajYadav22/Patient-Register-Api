import express from "express";
import dotenv from "dotenv";
import { connection } from "./configs/database.js";
import { route } from "./routes/allRoutes.js";
dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "API is working properly",
  });
});

app.use(route);

const port = 5000 || process.env.PORT;

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error while connecting to database");
  }
  console.log(`Server is running successfully on PORT ${port}`);
});
