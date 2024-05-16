import DateModel from "../Models/DateModel";
const DatesController = {

    getList: async (req, res) => {
        try {
          const dates = await DateModel.find();//ללא סינון
          res.json(dates);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      getById: async (req, res) => {
        try {
          const date = await DateModel.findById(req.params.id);//שליפה לפי מזהה
          res.json(date);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      add: async (req, res) => {
        const { name } = req.body;
        try {
          const newdate = await DateModel.create({ name });//הוספת חדש
          res.json(newdate);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      update: async (req, res) => {
        const { id } = req.params;
        try {
          const updateddate = await DateModel.findByIdAndUpdate(id, req.body, {
            new: true,
          });//עדכון לפי מזהה
          res.json(updateddate);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      delete: async (req, res) => {
        const { id } = req.params;
        try {
          const deleted = await DateModel.findByIdAndDelete(id);//מחיקה לפי מזהה
          res.json(deleted);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
};
export default DatesController;