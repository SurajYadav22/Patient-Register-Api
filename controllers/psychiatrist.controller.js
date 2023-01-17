import { PsychiatristModel } from "../models/psychiatrist.model.js";

const addPsychaitrist = async (req, res) => {
  const psychaitrist_data = req.body;

  try {
    if (psychaitrist_data) {
      const psychaitrist = new PsychiatristModel(psychaitrist_data);
      await psychaitrist.save();
      res.send({ status: 200, message: "Psychaitrist added successfully" });
    } else {
      res.send({ status: 502, message: "Please fill all details" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export { addPsychaitrist };
