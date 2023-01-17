import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: { type: String, required: true, min: 10 },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      message: "Please fill a valid email address",
    },
  },

  phone_number: { type: String, required: true, min: 10 },
  password: { type: String, required: true, min: 8, max: 15 },
  patient_photo: { type: String, required: true },
  hospital_id: { type: Number, required: true },
  psychiatrist_id: { type: Number, required: true },
});

const PatientModel = mongoose.model("patient_details", patientSchema);

export { PatientModel };

// Name*
// Address* (should be at least 10 characters)
// Email* (should be a valid email address)
// Phone number (should be at least 10 number + country code)
// Password* (must contain one upper character, one lower character and a number. Max length 15 and min length 8)
// Patient Photo*
