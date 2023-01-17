import { PatientModel } from "../models/patients.model.js";

const register = async (req, res) => {
  const patient_data = req.body;

  try {
    if (patient_data) {
      const patient = new PatientModel(patient_data);
      await patient.save();
      res.send({ status: 200, message: "Register successfull" });
    } else {
      res.send({ status: 502, message: "Please fill all details" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

export { register };
