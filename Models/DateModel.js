import mongoose from "mongoose";

const DateSchema = mongoose.Schema({
    date: {
    type: Date,
    required: true
  },
  appearance:String
});

export default mongoose.model("dates", DateSchema);
