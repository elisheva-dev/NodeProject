// import RoomModel from "../Models/RoomModel";
import RoomModel from "../Models/RoomModel.js"

const RoomsController = {
  getList: async (req, res) => {
    try {
      const rooms = await RoomModel.find();//ללא סינון
      res.json(rooms);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const room = await RoomModel.findById(req.params.id);//שליפה לפי מזהה
      res.json(room);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const { name } = req.body;
    try {
      const newRoom = await RoomModel.create({ name });//הוספת חדש
      res.json(newRoom);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const upRoomdRoom = await RoomModel.findByIdAndUpRoom(id, req.body, {
        new: true,
      });//עדכון לפי מזהה
      res.json(upRoomdRoom);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await RoomModel.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};
export default RoomsController;