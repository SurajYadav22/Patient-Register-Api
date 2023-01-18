import { HospitalModel } from "../models/hospital.model.js";
import { PatientModel } from "../models/patients.model.js";
import { PsychiatristModel } from "../models/psychiatrist.model.js";

// fetching the hospital details from the database

const fetchHospital = async (req, res) => {
  const { id } = req.query;
  let hospital_id = id;
  try {
    if (hospital_id) {
      const hospital_details = await HospitalModel.findOne({ hospital_id });
      const psychiatrist = await PsychiatristModel.find({ hospital_id });
      const patients = await PatientModel.find({ hospital_id });

      const getPatientsCount = (psy_id) => {
        let patientsCount = patients.filter(
          (elem) => elem.psychiatrist_id === psy_id
        );

        return patientsCount.length;
      };

      const psychiatrist_data = psychiatrist.map((elem) => ({
        id: elem.psychiatrist_id,
        name: elem.name,
        patients_count: getPatientsCount(elem.psychiatrist_id),
      }));

      const hospital_Data = {
        hospitalName: hospital_details.hospital_name,
        total_psychiatrist_count: psychiatrist.length,
        total_patients_count: patients.length,
        psychiatrist_details: psychiatrist_data,
        patients_details: patients,
      };

      if (hospital_Data) {
        res.send({
          status: 200,
          data: hospital_Data,
        });
      } else {
        res.send({
          status: 404,
          data: "Hospital details is not available",
        });
      }
    } else {
      res.send({
        status: 404,
        message: "Hospital id is not available, pass the hospital id in query.",
      });
    }
  } catch (error) {
    res.send({ status: 500, message: "Internal servere error." });
  }
};

// <---------------------------------------------------function for adding a new hospital in database -------------------------------->

const addHospitl = async (req, res) => {
  const hospital_data = req.body;

  try {
    if (hospital_data) {
      const hospital = new HospitalModel(hospital_data);
      await hospital.save();
      res.send({ status: 201, message: "Hospital added successfully" });
    } else {
      res.send({ status: 400, message: "Please fill all details" });
    }
  } catch (error) {
    res.status(500).send({
      error: error,
      message: "Internal Server Error. Please try again later.",
    });
  }
};

export { fetchHospital, addHospitl };
