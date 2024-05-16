import mongoose from "mongoose";

const RoomSchema = mongoose.Schema({
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  numOfBads: Number
});

export default mongoose.model("rooms", RoomSchema);
