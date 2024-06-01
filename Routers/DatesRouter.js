import express from "express";
import DatesController from "../Controllers/DatesController.js";

const DatesRouter = express.Router();

DatesRouter.get("/", DatesController.getList);
DatesRouter.get("/:id", DatesController.getById);
DatesRouter.post("/", DatesController.add);
DatesRouter.put("/:id", DatesController.update);
DatesRouter.delete("/:id", DatesController.delete);

export default DatesRouter;