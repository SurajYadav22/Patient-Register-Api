import mongoose from "mongoose";

const psychiatristSchema = mongoose.Schema({
  hospital_id: { type: Number, required: true },
  hospital_name: {
    type: String,
    required: true,
  },

  psychiatrist_id: { type: Number, required: true },
  name: { type: String, required: true },
});

const PsychiatristModel = mongoose.model(
  "psychiatrist_detail",
  psychiatristSchema
);

export { PsychiatristModel };
