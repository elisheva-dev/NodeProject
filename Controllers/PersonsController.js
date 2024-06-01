import PersonModel from "../Models/PersonModel.js"

const PersonsController = {
    getList: async (req, res) => {
        try {
          const persons = await PersonModel.find();//ללא סינון
          res.json(persons);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      getById: async (req, res) => {
        try {
          const person = await PersonModel.findById(req.params.id);//שליפה לפי מזהה
          res.json(person);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      add: async (req, res) => {
        const { name } = req.body;
        try {
          const newPerson = await PersonModel.create({ name });//הוספת חדש
          res.json(newPerson);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      update: async (req, res) => {
        const { id } = req.params;
        try {
          const upPersondPerson = await PersonModel.findByIdAndUpdate(id, req.body, {
            new: true,
          });//עדכון לפי מזהה
          res.json(upPersondPerson);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
    
      delete: async (req, res) => {
        const { id } = req.params;
        try {
          const deleted = await PersonModel.findByIdAndDelete(id);//מחיקה לפי מזהה
          res.json(deleted);
        } catch (e) {
          res.status(400).json({ message: e.message });
        }
      },
};
export default PersonsController;