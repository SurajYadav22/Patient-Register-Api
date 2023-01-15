import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
  hospital_id: { type: "string", required: true },
  hospital_name: {
    type: String,
    required: true,
  },
  total_psychiatrist: { type: Number, required: true },
  total_patients: {
    type: String,
  },
  psychiatrist_details: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      patients_count: { type: Number },
    },
  ],
});

const HospitalModel = mongoose.model("hospital_data", hospitalSchema);

export { HospitalModel };

//     Hospital name,
// Total Psychiatrist count
// Total patients count
// Psychiatrist Details [
// Id,
// Name,
// Patients count:
// ]
