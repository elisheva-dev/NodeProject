import express from "express";
import DatesController from "../Controllers/DatesController.js";

const DatesRouter = express.Router();

DatesRouter.get("/", DatesController.getList);
DatesRouter.get("/:id", DatesController.getById);
DatesRouter.post("/", DatesController.addDate);
DatesRouter.put("/:id", DatesController.editDate);
DatesRouter.delete("/:id", DatesController.deleteDate);

export default DatesRouter;