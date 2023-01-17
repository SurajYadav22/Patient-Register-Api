import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
  hospital_id: { type: Number, required: true },
  hospital_name: {
    type: String,
    required: true,
  },
});

const HospitalModel = mongoose.model("hospital_data", hospitalSchema);

export { HospitalModel };
