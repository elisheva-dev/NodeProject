import mongoose from "mongoose";
import RoomModel from "./RoomModel.js";

const PersonSchema = mongoose.Schema({
    IDNumber: {
    type: Number,
    required: true
  },
  name: String,
  NumPhone:Number,
  date:Date,
  roomId:Number,
  // room:RoomModel
});

export default mongoose.model("persons", PersonSchema);

